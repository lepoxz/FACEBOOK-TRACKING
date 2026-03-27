# Phase 2 Delegation Plan

## Muc tieu

Hoan thanh Phase 2 cho `FACEBOOK-TRACKING` theo 3 nhanh co the giao song song:

- Queue va scheduler de API/worker khong dan chong len nhau.
- Pipeline xu ly realtime co dedupe va xuat ket qua ra Google Sheets.
- Tieu chi nghiem thu va dependency checklist de board co the kiem nhanh tung nhanh.

## Phan chia nhan su

### CTO

1. Queue foundation
   - Cai Redis + BullMQ vao monorepo.
   - Tao queue/module chung cho API va worker.
   - Co scheduler scan co the trigger job moi.
   - Done khi `api` tao duoc job va `worker` nhan duoc job mau.

2. Realtime pipeline + Google Sheets
   - Tao `DedupeService` dua tren Redis key TTL.
   - Tao `GoogleSheetsService` co tao file/tab theo ngay va `batch append`.
   - Hoan thien `MonitorWorker` xu ly scan -> dedupe -> persist -> append sheet.
   - Done khi co demo end-to-end tu tao job den ghi du lieu len sheet.

### Product Owner

1. Acceptance va handoff checklist
   - Viet ro env can co: Redis, Google service account, sheet permissions, sample source.
   - Chot acceptance criteria cho queue, dedupe, scheduler, Google Sheets.
   - Tao checklist test end-to-end de board co the verify nhanh.
   - Done khi moi nhanh cua CTO co tieu chi nghiem thu ro rang, khong mo ho.

## Thu tu thuc hien

1. CTO lam xong nen tang queue/scheduler.
2. CTO tiep tuc pipeline realtime + Google Sheets tren nen tang do.
3. Product Owner chay song song acceptance checklist va cap nhat khi CTO bao thay doi scope.

## Ranh gioi scope

- Khong mo rong sang dashboard moi trong heartbeat nay.
- Khong dua CMO/UI vao Phase 2 vi khong co deliverable marketing/design truc tiep.
- Uu tien lam duong data pipeline on dinh truoc, UI se an theo o phase tiep theo.

## Rui ro can theo doi

- Thieu Redis runtime hoac thong tin truy cap Google service account se chan test that.
- Dedupe key dat sai TTL co the gay mat event hoac ghi trung.
- Google Sheets quota/pagination neu append tung ban ghi thay vi batch.

## Dau ra mong doi cho board

- 2 issue implementation cho CTO, 1 issue acceptance cho Product Owner.
- Moi issue co acceptance criteria cu the va lien ket ve issue cha `ANG-79`.
