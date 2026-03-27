# Backlog Step 02

Backlog nay chuyen scaffold Step 01 thanh cac hang muc thi cong co thu tu uu tien cho web app theo doi fanpage Facebook doi thu trong pham vi du lieu cong khai/duoc phep.

## Nguyen tac scope

- Chi theo doi fanpage va public activity cua doi thu.
- Khong mo rong sang private data hoac tinh nang ngoai MVP.
- Uu tien duong di tu setup tracking -> ingest du lieu -> hien thi dashboard -> alert -> test va deployment baseline.

## Thu tu uu tien

1. `ANG-62` - Xay dung luong setup tracked pages va source registry
2. `ANG-65` - Dung pipeline ingestion public activity va luu lich su su kien
3. `ANG-64` - Hoan thien dashboard MVP cho tracked pages va activity timeline
4. `ANG-63` - Trien khai alert rules co ban va kenh thong bao cho operator
5. `ANG-66` - Chot baseline test, env va deployment cho Step 02

## Phu thuoc chinh

- `ANG-60` dat nen tang API va schema ban dau cho backend tracking.
- `ANG-62` la diem vao cho tracking setup va can san truoc khi ingestion mo rong.
- `ANG-65` cung cap event data cho `ANG-64` va `ANG-63`.
- `ANG-66` chot kha nang test va giao hang an toan sau khi cac hang muc chinh duoc lap dat.

## Ket qua mong doi cua Step 02

- Operator co the khai bao fanpage can theo doi.
- He thong ingest duoc public activity co ban va luu lich su co dedupe/checkpoint.
- Dashboard co overview, tracked pages list va activity timeline de xem du lieu.
- Alert co the sinh tu event quan trong va day den it nhat 1 kenh.
- Team co baseline test, env va deployment de tiep tuc phat trien Step 03.
