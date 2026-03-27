import { Body, Controller, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AdminAuthGuard } from "../auth/admin-auth.guard";
import type { EnqueueScanJobInput } from "@facebook-tracking/shared-types";
import { JobsService } from "./jobs.service";
import { ApiException } from "../common/api-exception";

function parseEnqueueScanJobInput(body: Record<string, unknown>): EnqueueScanJobInput {
  const sourceId = Number(body.sourceId);

  if (!Number.isInteger(sourceId) || sourceId <= 0) {
    throw new ApiException(HttpStatus.BAD_REQUEST, "INVALID_SOURCE_ID", "sourceId phai la so nguyen duong.");
  }

  const jobType = body.jobType;

  if (
    jobType !== undefined &&
    jobType !== "REALTIME_SCAN" &&
    jobType !== "SCAN_LAST10" &&
    jobType !== "DAILY_REPORT"
  ) {
    throw new ApiException(HttpStatus.BAD_REQUEST, "INVALID_JOB_TYPE", "jobType khong hop le.");
  }

  return {
    sourceId,
    jobType
  };
}

@UseGuards(AdminAuthGuard)
@Controller("v1/jobs")
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post("scan")
  enqueueScan(@Body() body: Record<string, unknown>) {
    return this.jobsService.enqueueScanJob(parseEnqueueScanJobInput(body), "manual");
  }
}
