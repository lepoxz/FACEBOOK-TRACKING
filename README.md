# FACEBOOK-TRACKING

Monorepo khoi tao cho web app theo doi hoat dong cong khai cua fanpage Facebook doi thu. Repo tach ro `web`, `api`, `worker` de de scale va giao viec theo team.

## Cau truc

```text
.
|- apps/
|  |- web/
|  |- api/
|  `- worker/
|- packages/
|  |- shared-types/
|  `- shared-utils/
|- docs/
|- infra/
|  |- docker/
|  `- scripts/
`- prisma/
```

## Stack khoi tao

- `apps/web`: Next.js App Router cho dashboard va giao dien operator.
- `apps/api`: NestJS cho REST API noi bo/ngoai.
- `apps/worker`: Node worker chay theo lich hoac queue.
- `packages/*`: dung chung type va utility.

## Khoi dong local

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Hoac chay rieng tung dich vu:

```bash
pnpm dev:web
pnpm dev:api
pnpm dev:worker
```

## Local URLs

- Web: `http://localhost:3000`
- API health: `http://localhost:3001/health`
- API tracked pages: `http://localhost:3001/v1/pages`

## API scope hien tai

- `GET /health`: smoke endpoint tra ve runtime status, env, version va so tracked page seed.
- `GET /v1/pages`: danh sach page dang duoc theo doi o dang seed/in-memory de unblock dashboard va worker.
- Env co su phan tach `APP_ENV`, `API_PORT`, `PAGE_POLL_INTERVAL_MINUTES` de chuan hoa local config som.

## Tai lieu

- `docs/TECH-STACK.md`
- `docs/ARCHITECTURE.md`

## Trang thai

Step 01 da tao xong skeleton monorepo va cac service entrypoint co the chay local.
