import { Inject, Injectable } from "@nestjs/common";
import {
  defaultTrackedPage,
  type TrackedPage,
  type TrackedPagesResponse
} from "@facebook-tracking/shared-types";
import { APP_CONFIG, type AppConfig } from "./config/app-config.provider";

@Injectable()
export class TrackedPagesService {
  constructor(@Inject(APP_CONFIG) private readonly config: AppConfig) {}

  list(): TrackedPagesResponse {
    const items: TrackedPage[] = [
      defaultTrackedPage,
      {
        id: "tracked-page-demo-002",
        pageId: "page-demo-002",
        pageName: "Thuong Hieu Can Theo Doi",
        pageUrl: "https://www.facebook.com/thuonghieucantheodoi",
        mode: "public_activity",
        status: "draft",
        checkIntervalMinutes: this.config.pagePollIntervalMinutes,
        lastCheckedAt: null,
        createdAt: "2026-03-27T00:10:00.000Z",
        tags: ["watchlist"]
      }
    ];

    return {
      items,
      total: items.length
    };
  }

  count() {
    return this.list().total;
  }
}
