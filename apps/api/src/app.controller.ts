import { Controller, Get } from "@nestjs/common";
import { defaultTrackedPage } from "@facebook-tracking/shared-types";
import { formatServiceLabel } from "@facebook-tracking/shared-utils";

@Controller()
export class AppController {
  @Get("health")
  getHealth() {
    return {
      status: "ok",
      service: formatServiceLabel("api service"),
      timestamp: new Date().toISOString()
    };
  }

  @Get("v1/pages")
  getTrackedPages() {
    return {
      items: [defaultTrackedPage]
    };
  }
}
