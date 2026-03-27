import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";
import { HealthService } from "./health.service";
import { TrackedPagesController } from "./tracked-pages.controller";
import { TrackedPagesService } from "./tracked-pages.service";
import { appConfigProvider } from "./config/app-config.provider";
import { PrismaService } from "./database/prisma.service";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { AdminAuthGuard } from "./auth/admin-auth.guard";
import { SourcesController } from "./sources/sources.controller";
import { SourcesService } from "./sources/sources.service";
import { TelegramController } from "./integrations/telegram.controller";
import { TelegramService } from "./integrations/telegram.service";
import { redisProvider } from "./queue/redis.provider";
import { JobsController } from "./jobs/jobs.controller";
import { JobsService } from "./jobs/jobs.service";
import { ScanSchedulerService } from "./jobs/scan-scheduler.service";

@Module({
  controllers: [
    HealthController,
    TrackedPagesController,
    AuthController,
    SourcesController,
    TelegramController,
    JobsController
  ],
  providers: [
    appConfigProvider,
    redisProvider,
    PrismaService,
    HealthService,
    TrackedPagesService,
    AuthService,
    AdminAuthGuard,
    SourcesService,
    TelegramService,
    JobsService,
    ScanSchedulerService
  ]
})
export class AppModule {}
