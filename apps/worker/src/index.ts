import { formatServiceLabel } from "@facebook-tracking/shared-utils";

const startedAt = new Date().toISOString();
const monitoredTable = "sources";

console.log(
  `[${formatServiceLabel("worker service")}] started at ${startedAt} and is ready to process ${monitoredTable}`
);
