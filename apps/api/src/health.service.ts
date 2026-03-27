import { Inject, Injectable } from "@nestjs/common";
import type { HealthResponse } from "@facebook-tracking/shared-types";
import { formatServiceLabel } from "@facebook-tracking/shared-utils";
import { APP_CONFIG, type AppConfig } from "./config/app-config.provider";
import { TrackedPagesService } from "./tracked-pages.service";

@Injectable()
export class HealthService {
  constructor(
    @Inject(APP_CONFIG) private readonly config: AppConfig,
    @Inject(TrackedPagesService)
    private readonly trackedPagesService: TrackedPagesService
  ) {}

  getHealth(): HealthResponse {
    return {
      status: "ok",
      service: formatServiceLabel("facebook tracking api"),
      environment: this.config.appEnv,
      version: this.config.appVersion,
      uptimeSeconds: Math.round(process.uptime()),
      trackedPagesConfigured: this.trackedPagesService.count(),
      timestamp: new Date().toISOString()
    };
  }
}
