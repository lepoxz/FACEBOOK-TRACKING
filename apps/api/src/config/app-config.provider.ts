import { Provider } from "@nestjs/common";

export const APP_CONFIG = Symbol("APP_CONFIG");

export interface AppConfig {
  apiPort: number;
  appEnv: string;
  pagePollIntervalMinutes: number;
  appVersion: string;
}

function readPositiveInteger(value: string | undefined, fallback: number) {
  if (value === undefined || value.trim() === "") {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isInteger(parsed) || parsed <= 0) {
    throw new Error(`Gia tri khong hop le: ${value}`);
  }

  return parsed;
}

function readPackageVersion() {
  return process.env.npm_package_version ?? "0.1.0";
}

export function createAppConfig(): AppConfig {
  return {
    apiPort: readPositiveInteger(process.env.API_PORT, 3001),
    appEnv: process.env.APP_ENV?.trim() || "development",
    pagePollIntervalMinutes: readPositiveInteger(process.env.PAGE_POLL_INTERVAL_MINUTES, 15),
    appVersion: readPackageVersion()
  };
}

export const appConfigProvider: Provider = {
  provide: APP_CONFIG,
  useFactory: createAppConfig
};
