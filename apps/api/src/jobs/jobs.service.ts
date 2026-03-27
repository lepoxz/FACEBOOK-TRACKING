import { HttpStatus, Inject, Injectable, OnModuleDestroy } from "@nestjs/common";
import { Queue } from "bullmq";
import {
  MONITOR_QUEUE_NAME,
  type EnqueueScanJobInput,
  type EnqueueScanJobResponse,
  type MonitorJobPayload
} from "@facebook-tracking/shared-types";
import { PrismaService } from "../database/prisma.service";
import { REDIS_CONNECTION } from "../queue/redis.provider";
import type IORedis from "ioredis";
import { APP_CONFIG, type AppConfig } from "../config/app-config.provider";
import { ApiException } from "../common/api-exception";

@Injectable()
export class JobsService implements OnModuleDestroy {
  private readonly queue: Queue<MonitorJobPayload>;

  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
    @Inject(APP_CONFIG) private readonly config: AppConfig,
    @Inject(REDIS_CONNECTION) connection: IORedis
  ) {
    this.queue = new Queue<MonitorJobPayload>(config.monitorQueueName || MONITOR_QUEUE_NAME, {
      connection,
      defaultJobOptions: {
        removeOnComplete: 200,
        removeOnFail: 200,
        attempts: 3,
        backoff: {
          type: "exponential",
          delay: 1000
        }
      }
    });
  }

  async enqueueScanJob(
    input: EnqueueScanJobInput,
    triggeredBy: "manual" | "scheduler"
  ): Promise<EnqueueScanJobResponse> {
    const source = await this.prisma.source.findUnique({
      where: {
        id: input.sourceId
      }
    });

    if (!source) {
      throw new ApiException(
        HttpStatus.NOT_FOUND,
        "SOURCE_NOT_FOUND",
        `Khong tim thay source ${input.sourceId}.`
      );
    }

    const record = await this.prisma.job.create({
      data: {
        sourceId: source.id,
        type: input.jobType ?? "REALTIME_SCAN",
        status: "PENDING"
      }
    });

    const queueJob = await this.queue.add(
      `${triggeredBy}:${source.pageSlug}:${record.id}`,
      {
        sourceId: source.id,
        jobId: record.id,
        jobType: record.type,
        triggeredBy
      },
      {
        jobId: `${triggeredBy}-${record.id}`
      }
    );

    return {
      queueName: this.queue.name,
      queueJobId: String(queueJob.id),
      recordId: record.id,
      sourceId: source.id,
      type: record.type,
      triggeredBy,
      status: record.status
    };
  }

  async onModuleDestroy() {
    await this.queue.close();
  }
}
