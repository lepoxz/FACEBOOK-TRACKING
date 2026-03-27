import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaClient, JobStatus, JobType } from "@prisma/client";

const envCandidates = [
  resolve(process.cwd(), ".env"),
  resolve(process.cwd(), "../.env")
];

for (const envPath of envCandidates) {
  if (existsSync(envPath)) {
    const content = readFileSync(envPath, "utf8");

    for (const line of content.split("\n")) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }

      const [key, ...rest] = trimmed.split("=");

      if (!key || rest.length === 0 || process.env[key] !== undefined) {
        continue;
      }

      const value = rest.join("=").replace(/^"|"$/g, "");
      process.env[key] = value;
    }

    break;
  }
}

const prisma = new PrismaClient();

async function main() {
  const miuBeauty = await prisma.source.upsert({
    where: {
      pageSlug: "miu-beauty-official"
    },
    update: {
      pageSlug: "miu-beauty-official",
      pageName: "Miu Beauty Official",
      enabled: true,
      realtimeScanEnabled: true,
      telegramTarget: "@miu_beauty_alerts"
    },
    create: {
      pageSlug: "miu-beauty-official",
      pageName: "Miu Beauty Official",
      enabled: true,
      realtimeScanEnabled: true,
      telegramTarget: "@miu_beauty_alerts"
    }
  });

  const nhaXinh = await prisma.source.upsert({
    where: {
      pageSlug: "nha-xinh-decor"
    },
    update: {
      pageSlug: "nha-xinh-decor",
      pageName: "Nha Xinh Decor",
      enabled: true,
      realtimeScanEnabled: false,
      telegramTarget: "@nha_xinh_ops"
    },
    create: {
      pageSlug: "nha-xinh-decor",
      pageName: "Nha Xinh Decor",
      enabled: true,
      realtimeScanEnabled: false,
      telegramTarget: "@nha_xinh_ops"
    }
  });

  const existingRealtimeJob = await prisma.job.findFirst({
    where: {
      sourceId: miuBeauty.id,
      type: JobType.REALTIME_SCAN,
      status: JobStatus.RUNNING
    }
  });

  if (!existingRealtimeJob) {
    await prisma.job.create({
      data: {
        sourceId: miuBeauty.id,
        type: JobType.REALTIME_SCAN,
        status: JobStatus.RUNNING,
        startedAt: new Date("2026-03-27T09:10:00.000Z")
      }
    });
  }

  const existingDailyReportJob = await prisma.job.findFirst({
    where: {
      sourceId: nhaXinh.id,
      type: JobType.DAILY_REPORT,
      status: JobStatus.PENDING
    }
  });

  if (!existingDailyReportJob) {
    await prisma.job.create({
      data: {
        sourceId: nhaXinh.id,
        type: JobType.DAILY_REPORT,
        status: JobStatus.PENDING
      }
    });
  }

  await prisma.sheetRegistry.upsert({
    where: {
      sourceId_date: {
        sourceId: miuBeauty.id,
        date: "2026-03-27"
      }
    },
    update: {
      fileName: "miu-beauty-daily-report-2026-03-27",
      googleSheetId: "sheet-demo-miu-beauty",
      googleSheetUrl: "https://docs.google.com/spreadsheets/d/sheet-demo-miu-beauty"
    },
    create: {
      sourceId: miuBeauty.id,
      date: "2026-03-27",
      fileName: "miu-beauty-daily-report-2026-03-27",
      googleSheetId: "sheet-demo-miu-beauty",
      googleSheetUrl: "https://docs.google.com/spreadsheets/d/sheet-demo-miu-beauty"
    }
  });

  await prisma.sheetRegistry.upsert({
    where: {
      sourceId_date: {
        sourceId: nhaXinh.id,
        date: "2026-03-27"
      }
    },
    update: {
      fileName: "nha-xinh-daily-report-2026-03-27",
      googleSheetId: "sheet-demo-nha-xinh",
      googleSheetUrl: "https://docs.google.com/spreadsheets/d/sheet-demo-nha-xinh"
    },
    create: {
      sourceId: nhaXinh.id,
      date: "2026-03-27",
      fileName: "nha-xinh-daily-report-2026-03-27",
      googleSheetId: "sheet-demo-nha-xinh",
      googleSheetUrl: "https://docs.google.com/spreadsheets/d/sheet-demo-nha-xinh"
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
