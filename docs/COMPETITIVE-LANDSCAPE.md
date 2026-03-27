# Competitive Landscape

## Muc tieu tai lieu

Tai lieu nay bo sung cho `docs/MARKET-ANALYSIS.md` bang cach mo ta ro cac nhom doi thu/giai phap thay the ma `FACEBOOK-TRACKING` se gap trong quyet dinh mua hoac adoption. Vi chua duoc phep thuc hien nghien cuu ben ngoai trong heartbeat nay, phan tich duoi day uu tien nhom doi thu va hanh vi mua thay vi gan claim chi tiet cho mot nha cung cap cu the.

## Ban do doi thu

### 1. Theo doi thu cong bang cong cu pho thong

- Tong quan:
  Agency/operator dung tab trinh duyet, bookmark, screenshot, Google Sheets, Notion va nhom chat de theo doi page doi thu.
- Doi tuong:
  Team nho, nhay cam voi chi phi, chua co quy trinh du lieu chat.
- Dinh vi:
  "Du dung de lam viec" nhung khong xem day la mot san pham rieng.
- Diem manh:
  Khong ton phi license, vao viec ngay, rat linh hoat theo ngu canh team.
- Diem yeu:
  Khong co alert nhat quan, kho scale theo so page, mat lich su, phu thuoc ky luat ca nhan.
- Co hoi cho `FACEBOOK-TRACKING`:
  Ban thoi gian phan hoi nhanh hon va mot quy trinh it bo sot hon, thay vi co gang ban "phan tich cao cap".

### 2. Social listening suite tong quat

- Tong quan:
  Giai phap bao phu nhieu kenh, thuong manh ve dashboard, report, social listening va governance.
- Doi tuong:
  Team marketing lon, thuong hieu da kenh, can bao cao cho nhieu stakeholder.
- Dinh vi:
  "Nen tang quan tri va lang nghe truyen thong xa hoi."
- Diem manh:
  Day tinh nang, quy trinh hoan chinh, report va phan quyen tot hon.
- Diem yeu:
  Qua rong so voi nhu cau "theo doi fanpage doi thu" cua team Facebook; chi phi va do phuc tap adoption cao.
- Co hoi cho `FACEBOOK-TRACKING`:
  Chon mot use case hep nhung lap lai nhieu lan moi ngay: competitor watch, signal moi, alert va xuat lich su.

### 3. Cong cu social media management co monitoring phu tro

- Tong quan:
  Nen tang len lich dang bai, inbox, team collaboration, doi khi co kem listening/monitoring muc co ban.
- Doi tuong:
  Team social can workflow post va community management trong mot noi.
- Dinh vi:
  "Cong cu van hanh social all-in-one."
- Diem manh:
  Nam san trong stack cua doi social, de mua them neu da co tai khoan.
- Diem yeu:
  Monitoring doi thu khong phai job-to-be-done trung tam; signal thuong nong, it sau va kho uu tien theo page/job.
- Co hoi cho `FACEBOOK-TRACKING`:
  Gianh uu the bang dashboard chuyen sau cho competitor tracking, khong bi loang boi publishing va inbox.

### 4. He thong noi bo tu phat trien

- Tong quan:
  Team co ky su tu viet script crawl, worker, spreadsheet exporter va dashboard noi bo.
- Doi tuong:
  Agency co nang luc ky thuat hoac startup muon kiem soat toan bo stack.
- Dinh vi:
  "Tu xay de fit 100% quy trinh cua minh."
- Diem manh:
  Tuy bien cao, giu du lieu noi bo, mo rong theo workflow rieng.
- Diem yeu:
  Toc do ra gia tri cham, kho bao tri, phu thuoc nhan su hiem, de vo khi scope doi.
- Co hoi cho `FACEBOOK-TRACKING`:
  Dua ra mot base system co san cho tracked pages, jobs, alert va dashboard de giam nhu cau tu xay tu dau.

## Ma tran so sanh

| Tieu chi | Theo doi thu cong | Suite tong quat | Social management co monitoring | He thong noi bo | FACEBOOK-TRACKING |
|---|---|---|---|---|---|
| Toc do vao viec | Cao | Trung binh-thap | Trung binh | Thap | Cao |
| Do sau cho competitor watch | Thap | Trung binh-cao | Thap-trung binh | Cao neu dau tu du | Cao trong pham vi Facebook |
| Chi phi adoption ban dau | Thap | Cao | Trung binh-cao | Cao theo nhan luc | Trung binh-thap |
| Phu hop agency nho/vua | Trung binh | Thap | Trung binh | Thap | Cao |
| Kha nang scale so page | Thap | Cao | Trung binh | Trung binh-cao | Cao hon thu cong neu queue/alert on dinh |
| Muc do dung "ngay de hanh dong" | Thap | Trung binh | Trung binh | Phu thuoc cach xay | Cao neu UI va alert dung muc |

## Khoang trong de chien thang

1. Don gian hon suite lon, nhung khong tho so nhu workflow thu cong.
2. Dinh nghia ro "signal can hanh dong" theo page/job thay vi chi dump du lieu.
3. Bien Google Sheets va Telegram thanh mot phan cua luong van hanh, khong xem do la output phu.
4. Xay uy tin bang do ro rang va nhat quan cua lich su tracking, khong bang tu khoa hoa my.

## Moi de doa can phong thu

1. Neu roadmap tro nen qua rong, san pham se mat uu the thin-slice va bi so sanh truc dien voi suite tong quat.
2. Neu UI khong the hien ro page nao dang "nong", nguoi dung se nghi dashboard khong hon duoc spreadsheet.
3. Neu worker/queue/alert khong on dinh, he thong noi bo tu xay se tro nen hap dan hon doi voi team co ky thuat.

## Ham y cho go-to-market va san pham

- Thong diep ban dau nen xoay quanh "phat hien bien dong doi thu nhanh hon trong ngay", khong xoay quanh "phan tich marketing toan dien".
- Mau demo/landing/product tour nen mo ta ro mot ngay lam viec cua operator: them source, quet, thay signal, nhan alert, xuat danh sach hanh dong.
- Pha tiep theo nen kiem chung xem nguoi dung can them chieu du lieu nao nhat: post cadence, live cadence, loai noi dung, hay top pages leaderboard.
