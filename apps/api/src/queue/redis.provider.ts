import { Provider } from "@nestjs/common";
import IORedis from "ioredis";
import { APP_CONFIG, type AppConfig } from "../config/app-config.provider";

export const REDIS_CONNECTION = Symbol("REDIS_CONNECTION");

export const redisProvider: Provider = {
  provide: REDIS_CONNECTION,
  inject: [APP_CONFIG],
  useFactory: (config: AppConfig) => {
    return new IORedis(config.redisUrl, {
      maxRetriesPerRequest: null,
      enableReadyCheck: false
    });
  }
};
