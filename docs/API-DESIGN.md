# API Design

## Resource Model

- `Source`: fanpage dang theo doi, gom `pageSlug`, `pageName`, trang thai bat/tat, co quet realtime hay khong va dich Telegram.
- `Auth`: admin dang nhap bang username + password hash tu env, nhan JWT Bearer token.
- `Telegram test`: endpoint gui tin nhan thu den dich Telegram de xac thuc kenh canh bao.
- `Scan job`: yeu cau API tao ban ghi `jobs` va day mot tac vu vao Redis/BullMQ de worker xu ly bat dong bo.

## Endpoint Inventory

| Method | Path | Mo ta | Auth |
|---|---|---|---|
| `POST` | `/v1/admin/auth/login` | Dang nhap admin va nhan JWT | Public |
| `GET` | `/v1/sources` | Liet ke source co phan trang `offset`/`limit` | Bearer JWT |
| `GET` | `/v1/sources/:id` | Lay chi tiet source | Bearer JWT |
| `POST` | `/v1/sources` | Tao source moi | Bearer JWT |
| `PATCH` | `/v1/sources/:id` | Cap nhat source | Bearer JWT |
| `DELETE` | `/v1/sources/:id` | Xoa source | Bearer JWT |
| `POST` | `/v1/jobs/scan` | Enqueue mot scan job cho source va tra ve queue metadata | Bearer JWT |
| `POST` | `/v1/integrations/telegram/test` | Gui test message qua Telegram Bot API | Bearer JWT |

## Authentication Strategy

- Dang nhap bang `ADMIN_USERNAME` + `ADMIN_PASSWORD_HASH`.
- Password chi so sanh bang hash `bcryptjs`, khong dung plain text.
- JWT ky bang `JWT_SECRET`, thoi han theo `JWT_EXPIRES_IN`.
- Tat ca route quan tri dung `Authorization: Bearer <token>`.

## Error Handling

- Loi deu tra ve cung mot shape:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Du lieu gui len khong hop le.",
    "details": [
      { "field": "pageSlug", "message": "Bat buoc." }
    ]
  }
}
```

- Ma HTTP chinh:
  - `401` cho auth/token sai.
  - `404` khi source khong ton tai.
  - `409` khi `pageSlug` bi trung.
  - `422` khi body/query sai.
  - `502` khi Telegram downstream loi.

## Pagination

- `GET /v1/sources` dung `offset` va `limit`.
- Mac dinh `offset=0`, `limit=20`, gioi han toi da `100`.

## Queue Contract

- `POST /v1/jobs/scan` nhan body `{ "sourceId": number, "jobType"?: "REALTIME_SCAN" | "SCAN_LAST10" | "DAILY_REPORT" }`.
- API tao ban ghi `jobs` voi `status=PENDING`, sau do enqueue qua `MONITOR_QUEUE_NAME` tren `REDIS_URL`.
- Worker cap nhat job sang `RUNNING`, sau cung danh dau `COMPLETED` hoac `FAILED` de dashboard co the doc lai lich su.
- Scheduler phia API tu dong quet cac source `enabled=true` va `realtimeScanEnabled=true` theo `PAGE_POLL_INTERVAL_MINUTES`.
