import { Provider } from "@nestjs/common";
import { loadEnv } from "./load-env";

export const APP_CONFIG = Symbol("APP_CONFIG");

export interface AppConfig {
  apiPort: number;
  appEnv: string;
  pagePollIntervalMinutes: number;
  appVersion: string;
  adminUsername: string;
  adminPasswordHash: string;
  jwtSecret: string;
  jwtExpiresIn: string;
  telegramBotToken: string;
  telegramDefaultChatId: string;
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

function readString(value: string | undefined, fallback = "") {
  return value?.trim() ?? fallback;
}

export function createAppConfig(): AppConfig {
  loadEnv();

  return {
    apiPort: readPositiveInteger(process.env.API_PORT, 3001),
    appEnv: process.env.APP_ENV?.trim() || "development",
    pagePollIntervalMinutes: readPositiveInteger(process.env.PAGE_POLL_INTERVAL_MINUTES, 15),
    appVersion: readPackageVersion(),
    adminUsername: readString(process.env.ADMIN_USERNAME),
    adminPasswordHash: readString(process.env.ADMIN_PASSWORD_HASH),
    jwtSecret: readString(process.env.JWT_SECRET),
    jwtExpiresIn: readString(process.env.JWT_EXPIRES_IN, "8h"),
    telegramBotToken: readString(process.env.TELEGRAM_BOT_TOKEN),
    telegramDefaultChatId: readString(process.env.TELEGRAM_DEFAULT_CHAT_ID)
  };
}

export const appConfigProvider: Provider = {
  provide: APP_CONFIG,
  useFactory: createAppConfig
};
