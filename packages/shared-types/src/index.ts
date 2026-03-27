export type TrackingMode = "public_activity";

export interface TrackedPage {
  pageId: string;
  pageName: string;
  mode: TrackingMode;
}

export const defaultTrackedPage: TrackedPage = {
  pageId: "page-demo-001",
  pageName: "Doi Thu Mau",
  mode: "public_activity"
};
