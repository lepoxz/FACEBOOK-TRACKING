# Tech Stack

## Chosen Stack

| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Language | TypeScript | 5.9.x | Dung chung cho web, api, worker |
| Web Framework | Next.js | 15.x | App Router phu hop dashboard noi bo va SSR khi can |
| API Framework | NestJS | 11.x | Cau truc module ro rang, de mo rong auth, scheduler, queue |
| Worker Runtime | Node.js + TSX | 22 LTS + 4.x | Chay worker nhe, khoi dong nhanh |
| Shared Packages | pnpm workspace packages | workspace | Tai su dung types va utility noi bo |
| Database | PostgreSQL | TBD | Du kien luu page, post, event, alert rule |
| Cache/Queue | Redis | TBD | Danh cho queue, lock, debounce jobs |
| Hosting | Vercel + container runtime | TBD | Web tach rieng, API/worker co the deploy container |
| CI/CD | GitHub Actions | TBD | Build, lint, smoke test theo monorepo |

## Rationale

- Chon TypeScript xuyen suot de giam chi phi giao tiep giua cac team.
- Next.js giai quyet nhanh dashboard, SSR va route handler neu can mock nhanh.
- NestJS hop voi bai toan API co nhieu module nhu ingestion, auth, scheduling, alerts.
- Worker tach rieng de tranh nhot tac vu polling/cron vao web hay api process.
- pnpm workspace giu dependency gon va de scale theo monorepo.

## Trade-offs

- Khong dung full microservice tu dau de tranh over-engineer o giai doan scaffold.
- Chua khoa hosting/database cu the vi can xac nhan luong tai, ngan sach va rang buoc compliance.
- Worker chua dua BullMQ ngay trong step nay; se them khi co queue use case ro rang.

## Key Dependencies

| Package | Purpose | License |
|---------|---------|---------|
| `next` | Web application framework | MIT |
| `react` | UI runtime | MIT |
| `@nestjs/core` | API application core | MIT |
| `@nestjs/platform-express` | HTTP transport for NestJS | MIT |
| `tsx` | Chay TypeScript truc tiep cho worker va local dev | MIT |
| `concurrently` | Chay nhieu process trong local dev | MIT |
