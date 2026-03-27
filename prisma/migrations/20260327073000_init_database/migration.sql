-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateEnum
CREATE TYPE "JobType" AS ENUM ('REALTIME_SCAN', 'SCAN_LAST10', 'DAILY_REPORT');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'RUNNING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "sources" (
    "id" SERIAL NOT NULL,
    "page_slug" TEXT NOT NULL,
    "page_name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "realtime_scan_enabled" BOOLEAN NOT NULL DEFAULT false,
    "telegram_target" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "source_id" INTEGER NOT NULL,
    "type" "JobType" NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "started_at" TIMESTAMP(3),
    "finished_at" TIMESTAMP(3),
    "error_message" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sheet_registry" (
    "id" SERIAL NOT NULL,
    "source_id" INTEGER NOT NULL,
    "date" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "google_sheet_id" TEXT NOT NULL,
    "google_sheet_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sheet_registry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sources_page_slug_key" ON "sources"("page_slug");

-- CreateIndex
CREATE INDEX "jobs_source_id_status_idx" ON "jobs"("source_id", "status");

-- CreateIndex
CREATE UNIQUE INDEX "sheet_registry_source_id_date_key" ON "sheet_registry"("source_id", "date");

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "sources"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sheet_registry" ADD CONSTRAINT "sheet_registry_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "sources"("id") ON DELETE CASCADE ON UPDATE CASCADE;
