# PHASE 2 ACCEPTANCE

Tai lieu nay khoa scope nghiem thu cho Phase 2 cua `FACEBOOK-TRACKING`, de board va CTO cung dung chung mot checklist khi xac nhan queue, scheduler, dedupe va Google Sheets.

## 1. Muc tieu nghiem thu

- Xac nhan nen tang queue/scheduler hoat dong on dinh giua `apps/api` va `apps/worker`.
- Xac nhan pipeline scan -> dedupe -> persist -> Google Sheets chay duoc voi du lieu mau.
- Tach ro dependency nao board phai cung cap, dependency nao team co the tu verify local.

## 2. Dau vao bat buoc

### Board phai cung cap

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: service account dung de tao file hoac ghi vao Google Sheets.
- `GOOGLE_PRIVATE_KEY`: private key tu service account.
- `GOOGLE_DRIVE_FOLDER_ID`: folder dich de he thong tao hoac luu file bao cao.
- Quyen share Google Drive/Google Sheets cho `GOOGLE_SERVICE_ACCOUNT_EMAIL` o muc Editor.
- It nhat 1 source mau hop le de CTO demo pipeline scan that.

### Team tu verify local

- `DATABASE_URL` hop le va da chay `pnpm db:deploy`.
- `REDIS_URL` tro toi Redis local hoac remote co the ket noi.
- `APP_ENV`, `API_PORT`, `PAGE_POLL_INTERVAL_MINUTES` duoc set de API/worker cung doc cung mot config.
- Neu chay local theo repo hien tai: `docker compose -f infra/docker/docker-compose.yml up -d postgres redis`.

## 3. Checklist env va runtime

| Hang muc | Gia tri/Dieu kien | Nguoi cung cap | Cach verify nhanh |
| --- | --- | --- | --- |
| PostgreSQL | `DATABASE_URL` truy cap duoc DB da migrate | Team | `pnpm db:deploy` thanh cong, API `/health` tra ve 200 |
| Redis | `REDIS_URL` tro toi Redis song | Team | worker/API ket noi duoc, khong co loi connection |
| Auth admin co ban | `ADMIN_USERNAME`, `ADMIN_PASSWORD_HASH`, `JWT_SECRET` | Team | login admin thanh cong neu can verify endpoint noi bo |
| Google service account | `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY` | Board | log khong bao loi auth khi goi Google API |
| Google Drive folder | `GOOGLE_DRIVE_FOLDER_ID` + share Editor cho service account | Board | tao hoac ghi sheet thanh cong trong folder dich |
| Source mau | page/source hop le de scan | Board hoac Team | worker tao duoc event mau de test dedupe va append |

## 4. Acceptance theo nhanh

## 4.1 Queue va scheduler foundation (`ANG-80`)

Done khi co du tat ca bang chung sau:

- API tao duoc scan job mau vao queue chung.
- Worker consume duoc job mau tu queue do ma khong can thao tac tay vao code.
- Scheduler co cach trigger ro rang: theo lich, lenh tay, hoac endpoint noi bo duoc ghi tai lieu.
- Redis la dependency duoc tai lieu hoa ro trong `README.md` hoac tai lieu lien quan.
- CTO cung cap duoc mot smoke path cho board:
  - lenh khoi dong
  - cach tao 1 job
  - bang chung worker nhan job
  - dau ra/log xac nhan job da xong hoac fail co cau truc

Khong dat neu xay ra mot trong cac tinh huong:

- Job chi tao duoc trong code test ma khong co cach reproduce cho board.
- Worker va API dung 2 queue config khac nhau.
- Redis mat ket noi nhung khong co log/debug message de nhin ra ngay.

## 4.2 Realtime pipeline, dedupe va Google Sheets (`ANG-81`)

Done khi co du tat ca bang chung sau:

- Co `DedupeService` hoac co che tuong duong dung Redis key/TTL de chan ghi trung.
- Co `GoogleSheetsService` hoac integration tuong duong cho phep tao file/tab hoac batch append.
- Pipeline xu ly duoc luong scan -> dedupe -> persist -> append sheet tren du lieu mau.
- Loi Google API duoc log ro nguyen nhan va khong lam worker "im lang" that bai.
- CTO cung cap duoc demo end-to-end co the lap lai:
  - seed/tao source mau
  - trigger scan
  - quan sat event trung bi bo qua
  - kiem tra du lieu da xuat hien tren Google Sheets

Khong dat neu xay ra mot trong cac tinh huong:

- Dedupe khong co TTL ro rang hoac khong chi ra cach reset khi test.
- Ghi Google Sheets theo tung dong gay quota risk ma khong co ly do/ghi chu.
- Phai sua tay du lieu trong DB/Redis de demo moi chay.

## 5. Checklist nghiem thu end-to-end cho board

1. Xac nhan file `.env` da co day du:
   - `DATABASE_URL`
   - `REDIS_URL`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_DRIVE_FOLDER_ID`
2. Khoi dong dependency local:
   - `docker compose -f infra/docker/docker-compose.yml up -d postgres redis`
   - `pnpm db:deploy`
3. Khoi dong he thong:
   - `pnpm dev:api`
   - `pnpm dev:worker`
4. Chay smoke check:
   - `GET /health` tra ve 200
   - co bang chung worker ket noi Redis/queue thanh cong
5. Chay demo queue/scheduler:
   - trigger 1 job scan theo huong dan CTO
   - xac nhan worker nhan job va ghi log co cau truc
6. Chay demo dedupe + Google Sheets:
   - trigger lai cung event mau hoac source mau
   - xac nhan event trung khong bi append lap lai
   - mo Google Sheets de thay dong du lieu moi
7. Neu co blocker, ghi ro blocker thuoc nhom nao:
   - secret/quyen truy cap do board chua cung cap
   - runtime local do team chua cau hinh xong
   - implementation do CTO chua dong scope

## 6. Bang phan tach trach nhiem

| Hang muc | Board | CTO | Product Owner |
| --- | --- | --- | --- |
| Cung cap Google secret/quyen | X |  |  |
| Cau hinh Redis/Postgres local |  | X |  |
| Tai lieu hoa cach chay smoke test |  | X | X |
| Khoa acceptance criteria |  |  | X |
| Xac nhan demo end-to-end | X | X | X |

## 7. Dau ra can CTO ban giao de board review nhanh

- 1 comment issue cho moi nhanh ky thuat voi:
  - lenh chay
  - bang chung log/chup man hinh
  - env moi neu co them scope
  - blocker con ton
- 1 comment tong hop tren issue cha `ANG-79` sau khi `ANG-80` va `ANG-81` deu co ket qua.

Neu CTO thay doi scope ky thuat cua Phase 2, tai lieu nay phai duoc cap nhat truoc khi board review lai.
