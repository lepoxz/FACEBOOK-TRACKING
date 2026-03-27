import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaClient } from "@prisma/client";
import { Worker } from "bullmq";
import { config as loadDotenv } from "dotenv";
import IORedis from "ioredis";
import {
  MONITOR_QUEUE_NAME,
  type MonitorJobPayload
} from "@facebook-tracking/shared-types";
import { formatServiceLabel } from "@facebook-tracking/shared-utils";

const ENV_CANDIDATES = [
  resolve(process.cwd(), ".env"),
  resolve(process.cwd(), "../../.env"),
  resolve(process.cwd(), "../../../.env")
];

for (const envPath of ENV_CANDIDATES) {
  if (existsSync(envPath)) {
    loadDotenv({ path: envPath });
    break;
  }
}

const redisUrl = process.env.REDIS_URL?.trim() || "redis://127.0.0.1:6379";
const queueName = process.env.MONITOR_QUEUE_NAME?.trim() || MONITOR_QUEUE_NAME;
const prisma = new PrismaClient();
const connection = new IORedis(redisUrl, {
  maxRetriesPerRequest: null,
  enableReadyCheck: false
});

const worker = new Worker<MonitorJobPayload>(
  queueName,
  async (job) => {
    const now = new Date();

    await prisma.job.update({
      where: {
        id: job.data.jobId
      },
      data: {
        status: "RUNNING",
        startedAt: now,
        errorMessage: null
      }
    });

    const source = await prisma.source.findUniqueOrThrow({
      where: {
        id: job.data.sourceId
      },
      select: {
        id: true,
        pageSlug: true,
        pageName: true
      }
    });

    console.log(
      `[${formatServiceLabel("worker service")}] xu ly ${job.data.jobType} cho ${source.pageSlug} (${job.data.triggeredBy})`
    );

    await prisma.job.update({
      where: {
        id: job.data.jobId
      },
      data: {
        status: "COMPLETED",
        finishedAt: new Date(),
        errorMessage: null
      }
    });

    return {
      sourceId: source.id,
      sourceName: source.pageName
    };
  },
  {
    connection,
    concurrency: 5
  }
);

worker.on("ready", () => {
  console.log(`[${formatServiceLabel("worker service")}] listening queue ${queueName}`);
});

worker.on("failed", async (job, error) => {
  if (job) {
    await prisma.job.update({
      where: {
        id: job.data.jobId
      },
      data: {
        status: "FAILED",
        finishedAt: new Date(),
        errorMessage: error.message
      }
    });
  }

  console.error(`[${formatServiceLabel("worker service")}] xu ly job that bai`, error);
});

const shutdown = async () => {
  await worker.close();
  await connection.quit();
  await prisma.$disconnect();
};

process.on("SIGINT", () => {
  void shutdown();
});

process.on("SIGTERM", () => {
  void shutdown();
});
