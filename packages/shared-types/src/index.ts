export type TrackingMode = "public_activity";

export type TrackedPageStatus = "active" | "paused" | "draft";

export interface TrackedPage {
  id: string;
  pageId: string;
  pageName: string;
  pageUrl: string;
  mode: TrackingMode;
  status: TrackedPageStatus;
  checkIntervalMinutes: number;
  lastCheckedAt: string | null;
  createdAt: string;
  tags: string[];
}

export interface TrackedPagesResponse {
  items: TrackedPage[];
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

export const defaultTrackedPage: TrackedPage = {
  id: "tracked-page-demo-001",
  pageId: "page-demo-001",
  pageName: "Doi Thu Mau",
  pageUrl: "https://www.facebook.com/doithumau",
  mode: "public_activity",
  status: "active",
  checkIntervalMinutes: 15,
  lastCheckedAt: null,
  createdAt: "2026-03-27T00:00:00.000Z",
  tags: ["competitor", "seed"]
};
