# Tech Stack

## Chosen Stack

| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Language | TypeScript | 5.9.x | Dung chung cho web, api, worker |
| Web Framework | Next.js | 15.x | App Router phu hop dashboard noi bo va SSR khi can |
| API Framework | NestJS | 11.x | Cau truc module ro rang, de mo rong auth, scheduler, queue |
| Worker Runtime | Node.js + TSX | 22 LTS + 4.x | Chay worker nhe, khoi dong nhanh |
| Shared Packages | pnpm workspace packages | workspace | Tai su dung types va utility noi bo |
| Database | PostgreSQL | 16 | Luu `sources`, `jobs`, `sheet_registry` qua Prisma |
| ORM | Prisma | 6.x | Sinh client, schema va seed local |
| Cache/Queue | Redis | 7 | Danh cho queue, lock, debounce jobs |
| Queue Framework | BullMQ | 5.x | Dieu phoi scheduler, retry, va background jobs giua `api`/`worker` |
| Reporting Sink | Google Sheets API | v4 | Xuat du lieu theo ngay/page cho operator doi soat nhanh |
| Hosting | Vercel + container runtime | TBD | Web tach rieng, API/worker co the deploy container |
| CI/CD | GitHub Actions | TBD | Build, lint, smoke test theo monorepo |

## Rationale

- Chon TypeScript xuyen suot de giam chi phi giao tiep giua cac team.
- Next.js giai quyet nhanh dashboard, SSR va route handler neu can mock nhanh.
- NestJS hop voi bai toan API co nhieu module nhu ingestion, auth, scheduling, alerts.
- Worker tach rieng de tranh nhot tac vu polling/cron vao web hay api process.
- pnpm workspace giu dependency gon va de scale theo monorepo.
- Prisma giup schema database ro rang, seed local nhanh va giam chi phi viet SQL thu cong giai doan dau.
- Redis + BullMQ la cap doi phu hop cho queue background va dedupe state o Phase 2.
- Google Sheets duoc giu nhu kenh output van hanh nhanh truoc khi dau tu dashboard bao cao day du.

## Trade-offs

- Khong dung full microservice tu dau de tranh over-engineer o giai doan scaffold.
- Chua khoa hosting/database cu the vi can xac nhan luong tai, ngan sach va rang buoc compliance.
- Google Sheets API can secret/service account, nen can checklist env ro rang truoc khi chay test that.

## Key Dependencies

| Package | Purpose | License |
|---------|---------|---------|
| `next` | Web application framework | MIT |
| `react` | UI runtime | MIT |
| `@nestjs/core` | API application core | MIT |
| `@nestjs/platform-express` | HTTP transport for NestJS | MIT |
| `bullmq` | Queue, retry va scheduler | MIT |
| `ioredis` | Redis client cho queue va dedupe | MIT |
| `tsx` | Chay TypeScript truc tiep cho worker va local dev | MIT |
| `concurrently` | Chay nhieu process trong local dev | MIT |
