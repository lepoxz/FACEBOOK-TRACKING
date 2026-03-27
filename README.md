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
pnpm db:start
pnpm db:deploy
pnpm db:seed
pnpm dev
```

Hoac chay rieng tung dich vu:

```bash
pnpm dev:web
pnpm dev:api
pnpm dev:worker
```

Neu can chay Web tren cong khac cho preview/local adapter, co the truyen bien `PORT`:

```bash
PORT=3101 pnpm dev:web
```

## Local URLs

- Web: `http://localhost:3000`
- API health: `http://localhost:3001/health`
- API tracked pages: `http://localhost:3001/v1/pages`

## API scope hien tai

- `GET /health`: smoke endpoint tra ve runtime status, env, version va so tracked page seed.
- `GET /v1/pages`: danh sach `sources` doc truc tiep tu PostgreSQL, kem job va Google Sheet moi nhat.
- `POST /v1/admin/auth/login`: dang nhap admin bang env hash va nhan JWT.
- `GET/POST/PATCH/DELETE /v1/sources`: CRUD source cho pha setup tracking.
- `POST /v1/integrations/telegram/test`: gui tin nhan test qua Telegram Bot API.
- Env co su phan tach `APP_ENV`, `API_PORT`, `PAGE_POLL_INTERVAL_MINUTES`, `DATABASE_URL` de chuan hoa local config som.
- Database local mac dinh dung PostgreSQL trong `infra/docker/docker-compose.yml`.
- Neu dung database remote da co migration folder, uu tien `pnpm db:deploy`; chi dung `pnpm db:push` khi can dong bo schema nhanh cho moi truong throwaway.

## Cau hinh auth admin

API Phase 1 can them:

```bash
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=<bcrypt-hash>
JWT_SECRET=<secret-dai-va-kho-doan>
JWT_EXPIRES_IN=8h
```

Tao hash nhanh:

```bash
node -e "import('bcryptjs').then(async ({hash}) => console.log(await hash('doi-mat-khau-manh', 10)))"
```

## Tai lieu

- `docs/TECH-STACK.md`
- `docs/ARCHITECTURE.md`
- `docs/API-DESIGN.md`

## Trang thai

Step 01 da tao xong skeleton monorepo va cac service entrypoint co the chay local.
