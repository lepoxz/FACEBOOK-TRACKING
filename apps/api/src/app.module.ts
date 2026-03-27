import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";
import { HealthService } from "./health.service";
import { TrackedPagesController } from "./tracked-pages.controller";
import { TrackedPagesService } from "./tracked-pages.service";
import { appConfigProvider } from "./config/app-config.provider";

@Module({
  controllers: [HealthController, TrackedPagesController],
  providers: [appConfigProvider, HealthService, TrackedPagesService]
})
export class AppModule {}
