import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { PrismaService } from "../database/prisma.service";
import { APP_CONFIG, type AppConfig } from "../config/app-config.provider";

@Injectable()
export class ScanSchedulerService implements OnModuleInit, OnModuleDestroy {
  private timer: NodeJS.Timeout | null = null;
  private running = false;

  constructor(
    @Inject(APP_CONFIG) private readonly config: AppConfig,
    @Inject(PrismaService) private readonly prisma: PrismaService,
    @Inject(JobsService) private readonly jobsService: JobsService
  ) {}

  onModuleInit() {
    const intervalMs = this.config.pagePollIntervalMinutes * 60 * 1000;

    this.timer = setInterval(() => {
      void this.tick();
    }, intervalMs);

    void this.tick();
  }

  async onModuleDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private async tick() {
    if (this.running) {
      return;
    }

    this.running = true;

    try {
      const sources = await this.prisma.source.findMany({
        where: {
          enabled: true,
          realtimeScanEnabled: true
        },
        select: {
          id: true
        }
      });

      await Promise.all(
        sources.map((source) =>
          this.jobsService.enqueueScanJob(
            {
              sourceId: source.id,
              jobType: "REALTIME_SCAN"
            },
            "scheduler"
          )
        )
      );
    } finally {
      this.running = false;
    }
  }
}
