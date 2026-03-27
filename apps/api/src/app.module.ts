import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";
import { HealthService } from "./health.service";
import { TrackedPagesController } from "./tracked-pages.controller";
import { TrackedPagesService } from "./tracked-pages.service";
import { appConfigProvider } from "./config/app-config.provider";
import { PrismaService } from "./database/prisma.service";

@Module({
  controllers: [HealthController, TrackedPagesController],
  providers: [appConfigProvider, PrismaService, HealthService, TrackedPagesService]
})
export class AppModule {}
