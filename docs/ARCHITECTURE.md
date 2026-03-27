# System Architecture

## Overview

He thong duoc scaffold theo monorepo 3 lop: `web` cho dashboard/operator UI, `api` cho nghiep vu va REST contracts, `worker` cho cac tac vu nen nhu polling, dedupe, alerting. `packages/*` giu shared contracts de tranh lech schema giua cac runtime.

## Components

| Component | Responsibility | Technology |
|-----------|---------------|------------|
| `apps/web` | Dashboard quan tri, setup page tracking, xem summary | Next.js |
| `apps/api` | REST API, validation, auth, orchestration voi DB va queue | NestJS |
| `apps/worker` | Polling page, xu ly event, dedupe, push alert | Node.js + TSX |
| `BullMQ + Redis` | Queue scan/retry, scheduler, dedupe cache va worker coordination | BullMQ + Redis |
| `Google Sheets` | Kho xuat bao cao theo ngay/page cho operator va doi kinh doanh | Google Sheets API |
| `packages/shared-types` | DTO, enum, type dung chung | TypeScript |
| `packages/shared-utils` | Utility format/logging/pure helpers | TypeScript |
| `prisma/` | Schema, seed va migration database | Prisma |

## Data Flow

1. Operator thao tac tren `web`.
2. `web` goi `api` qua REST.
3. `api` validate, ghi database va day job scan/sync vao BullMQ.
4. `worker` lay job tu queue, quet source, dedupe bang Redis cache, va dong goi ket qua.
5. Ket qua duoc luu lai vao PostgreSQL va append sang Google Sheets theo ngay/page khi can.
6. `web` doc dashboard va lich su tu `api`.

## Database Model

- `sources`: cau hinh fanpage can theo doi, gom slug, ten page, co bat realtime hay khong va dich Telegram dich.
- `jobs`: lich su job quet/realtime/report theo tung source.
- `sheet_registry`: danh ba Google Sheet da xuat theo ngay cho tung source.

## API Boundaries

### External APIs

- REST API cho dashboard noi bo.
- Meta/Facebook public sources theo pham vi duoc phep.
- Telegram/Google Sheets la dich vu downstream du kien.

### Internal APIs

- `web -> api`: HTTP JSON.
- `api -> worker`: BullMQ queue va scheduler trigger.
- `worker -> Redis`: lock, dedupe key, queue state.
- `worker -> Google Sheets`: tao spreadsheet/tab va batch append du lieu.
- `api/worker -> shared packages`: import workspace package.

## Deployment Model

- **Build**: `pnpm -r build`
- **Test**: smoke test service-level va lint theo package
- **Deploy**: web deploy doc lap; api va worker deploy theo container/service rieng

## Key Decisions

| Decision | Context | Rationale |
|----------|---------|-----------|
| Tach `web/api/worker` ngay tu step 01 | Scope can de scale va giao viec song song | Giam xung dot va cho phep doi ngu tich hop dan |
| Dung shared workspace packages | Se co nhieu contracts theo doi/alert | Mot nguon su that cho type va helper |
| Giu architecture don gian o scaffold | Chua co metric tai thuc te | Tien hoa dan khi backlog ky thuat ro hon |
| Dua BullMQ + Redis vao Phase 2 | Da xuat hien yeu cau realtime scan, retry va phan tach scheduler | Cho phep tach API/worker ro rang va co duong mo rong on dinh |
| Xuat ket qua sang Google Sheets thay vi dashboard-only | Team van hanh can file de doi soat nhanh theo ngay/page | Giam ma sat thu cong va de chia se voi operator |
