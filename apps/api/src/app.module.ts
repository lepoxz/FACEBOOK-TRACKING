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

@Module({
  controllers: [
    HealthController,
    TrackedPagesController,
    AuthController,
    SourcesController,
    TelegramController
  ],
  providers: [
    appConfigProvider,
    PrismaService,
    HealthService,
    TrackedPagesService,
    AuthService,
    AdminAuthGuard,
    SourcesService,
    TelegramService
  ]
})
export class AppModule {}
