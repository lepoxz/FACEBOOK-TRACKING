import { defaultTrackedPage } from "@facebook-tracking/shared-types";
import { formatServiceLabel } from "@facebook-tracking/shared-utils";

const startedAt = new Date().toISOString();

console.log(
  `[${formatServiceLabel("worker service")}] started at ${startedAt} for ${defaultTrackedPage.pageName}`
);
