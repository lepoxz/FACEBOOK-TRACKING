import { config } from "dotenv";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { PrismaClient, JobStatus, JobType } from "@prisma/client";

const envCandidates = [
  resolve(process.cwd(), ".env"),
  resolve(process.cwd(), "../.env")
];

for (const envPath of envCandidates) {
  if (existsSync(envPath)) {
    config({ path: envPath });
    break;
  }
}

const prisma = new PrismaClient();

async function main() {
  await prisma.sheetRegistry.deleteMany();
  await prisma.job.deleteMany();
  await prisma.source.deleteMany();

  const miuBeauty = await prisma.source.create({
    data: {
      pageSlug: "miu-beauty-official",
      pageName: "Miu Beauty Official",
      enabled: true,
      realtimeScanEnabled: true,
      telegramTarget: "@miu_beauty_alerts"
    }
  });

  const nhaXinh = await prisma.source.create({
    data: {
      pageSlug: "nha-xinh-decor",
      pageName: "Nha Xinh Decor",
      enabled: true,
      realtimeScanEnabled: false,
      telegramTarget: "@nha_xinh_ops"
    }
  });

  await prisma.job.createMany({
    data: [
      {
        sourceId: miuBeauty.id,
        type: JobType.REALTIME_SCAN,
        status: JobStatus.RUNNING,
        startedAt: new Date("2026-03-27T09:10:00.000Z")
      },
      {
        sourceId: nhaXinh.id,
        type: JobType.DAILY_REPORT,
        status: JobStatus.PENDING
      }
    ]
  });

  await prisma.sheetRegistry.createMany({
    data: [
      {
        sourceId: miuBeauty.id,
        date: "2026-03-27",
        fileName: "miu-beauty-daily-report-2026-03-27",
        googleSheetId: "sheet-demo-miu-beauty",
        googleSheetUrl: "https://docs.google.com/spreadsheets/d/sheet-demo-miu-beauty"
      },
      {
        sourceId: nhaXinh.id,
        date: "2026-03-27",
        fileName: "nha-xinh-daily-report-2026-03-27",
        googleSheetId: "sheet-demo-nha-xinh",
        googleSheetUrl: "https://docs.google.com/spreadsheets/d/sheet-demo-nha-xinh"
      }
    ]
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
