import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { APP_CONFIG, type AppConfig } from "./config/app-config.provider";
import { loadEnv } from "./config/load-env";
import { ApiExceptionFilter } from "./common/api-exception.filter";

async function bootstrap() {
  loadEnv();
  const app = await NestFactory.create(AppModule);
  const config = app.get<AppConfig>(APP_CONFIG);
  app.useGlobalFilters(new ApiExceptionFilter());
  app.enableCors();
  await app.listen(config.apiPort, "0.0.0.0");
}

void bootstrap();
