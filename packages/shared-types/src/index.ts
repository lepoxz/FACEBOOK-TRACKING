export type JobType = "REALTIME_SCAN" | "SCAN_LAST10" | "DAILY_REPORT";

export type JobStatus = "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";

export interface SourceJob {
  id: number;
  type: JobType;
  status: JobStatus;
  startedAt: string | null;
  finishedAt: string | null;
  errorMessage: string | null;
}

export interface SourceSheetRegistry {
  id: number;
  date: string;
  fileName: string;
  googleSheetId: string;
  googleSheetUrl: string;
}

export interface SourceItem {
  id: number;
  pageSlug: string;
  pageName: string;
  enabled: boolean;
  realtimeScanEnabled: boolean;
  telegramTarget: string | null;
  createdAt: string;
  updatedAt: string;
  latestJob: SourceJob | null;
  latestSheet: SourceSheetRegistry | null;
}

export interface TrackedPagesResponse {
  items: SourceItem[];
  total: number;
}

export interface HealthResponse {
  status: "ok";
  service: string;
  environment: string;
  version: string;
  uptimeSeconds: number;
  trackedPagesConfigured: number;
  timestamp: string;
}
