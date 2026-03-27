# Market Analysis

## Pham vi va cach doc tai lieu

Tai lieu nay danh gia thi truong cho `FACEBOOK-TRACKING` trong pham vi MVP hien tai: theo doi fanpage doi thu va public activity de phuc vu team van hanh Facebook, ads va operator noi bo. Phan tich duoi day dua tren:

- Scope san pham hien co trong `README.md`, `docs/ARCHITECTURE.md` va `docs/API-DESIGN.md`.
- Nhu cau van hanh thuong gap cua agency Facebook khi can giam thoi gian theo doi thu cong.
- Gia dinh co kiem soat vi chua co du lieu phong van nguoi dung, chua co benchmark adoption thuc te va chua co doi chieu pricing tu thi truong.

## Target Market

### Nguoi dung chinh

- Nhan su van hanh agency Facebook theo doi 5-50 fanpage doi thu theo niche.
- Ads lead hoac performance marketer can bat nhanh creative moi, lich livestream, tan suat posting va bien dong tuong tac.
- Chu doanh nghiep nho hoac team growth in-house chua du ngan sach mua social listening suite day du, nhung can mot bo dieu khien tac nghiep gon nhe.

### Bai toan dang ton tai

- Theo doi doi thu hien phan lon van lam thu cong bang bookmark, spreadsheet, nhom chat va screenshot roi rac.
- Toc do phat hien thay doi cham, dan den viec creative da "nong" thi doi ngu moi nhan ra.
- Du lieu khong co lich su co cau truc; kho doi soat page nao tang toc, page nao dang livestream nhieu, page nao dang day offer moi.
- Team ads va operator phai chuyen doi qua lai giua Facebook, Google Sheets, chat app va dashboard rieng, gay mat ngu canh va tang chi phi thao tac.

### Jobs-to-be-done

1. "Khi toi quan ly nhieu fanpage doi thu, toi can mot noi tap trung de biet page nao vua co bien dong dang chu y ma khong phai mo tung tab."
2. "Khi doi thu thay creative, tan suat post hoac livestream, toi muon nhan ra som de dieu chinh content/offer/campaign trong ngay."
3. "Khi can bao cao cho team hoac khach hang, toi muon lich su tracking duoc luu lai co cau truc thay vi tong hop tay."
4. "Khi co page can theo doi sat, toi muon bat scan va alert co ban ma khong can xay ca he thong social listening phuc tap."

### Muc hap dan cua co hoi

- Thi truong nay khong can bat dau bang bai toan "all-in-one social intelligence"; co hoi MVP nam o mot workflow hep nhung lap lai hang ngay.
- Gia tri den tu tiet kiem thoi gian van hanh, phat hien co hoi nhanh hon doi thu va tao ky luat ghi nhan du lieu, khong phai tu vanity dashboard.
- Phu hop nhat voi don vi van hanh duoc nhieu page/nhieu khach hang, noi ma chi phi theo doi thu cong tang theo so luong page.

## Phan khuc uu tien

### Phan khuc nen danh truoc

- Agency nho va vua chay Facebook Ads cho 3-20 khach hang.
- Team in-house growth cua SME ban le, giao duc, tham my, bat dong san va livestream commerce.
- Nhom co quy trinh tac nghiep tren desktop, san sang dung dashboard + Telegram + Google Sheets.

### Phan khuc chua nen mo rong som

- Enterprise can governance, rights management, sentiment analysis da kenh.
- Team can attribution ads, ket noi CRM, doanh thu, pixel/CAPI tu ngay dau.
- Don vi can crawl khoi luong lon ngoai pham vi public-page monitoring.

## Competitive Landscape

| Doi thu/giai phap thay the | Ho phuc vu ai | Diem manh | Diem yeu | Khoang trong de khai thac |
|---|---|---|---|---|
| Theo doi thu cong bang bookmark + spreadsheet + chat | Agency nho, team chua co cong cu | Re, quen tay, khong can setup ky thuat | Cham, de bo sot, du lieu manh mun, kho lich su hoa | San pham co the thay "chaotic workflow" bang mot bo dieu khien tac nghiep co alert va log |
| Social listening suite tong quat | Team marketing lon, nhieu kenh | Bao phu rong, dashboard va report day du | Qua nang va qua dat voi nhu cau chi theo doi fanpage doi thu; thua tinh nang | Dinh vi "thin-slice cho Facebook operator" thay vi social intelligence tong quat |
| Cong cu scheduling/engagement co tinh nang monitoring phu | Team social media da dung workflow post | De duoc chon neu da nam trong stack | Monitoring thuong la side feature, khong toi uu cho competitor watch va alert nghiep vu | Thang bang chuyen sau vao competitor tracking, jobs va signal uu tien |
| He thong noi bo tu viet script + BI | Team ky thuat co san | Tuy bien cao, du lieu thuoc noi bo | Mat cong van hanh, kho standardize, phu thuoc ky su, chi phi an | Ban MVP co the nhanh hon, de giao cho operator hon va it phu thuoc dev |

## Positioning

### Dinh vi de xuat

`FACEBOOK-TRACKING` nen duoc dinh vi la "bang dieu khien tinh bao tac nghiep cho team Facebook", giup phat hien som bien dong tren fanpage doi thu va bien public activity thanh tin hieu hanh dong duoc.

### Value proposition

- Giam thoi gian theo doi thu cong fanpage doi thu.
- Rut ngan thoi gian tu "doi thu vua thay doi" den "team da biet va co the hanh dong".
- Gom setup tracking, lich su scan, alert va xuat du lieu vao mot luong van hanh thong nhat.

### 3 differentiators can khoa cho cac team tiep theo

1. Chuyen sau cho workflow Facebook operator
   `FACEBOOK-TRACKING` khong co gang tro thanh bo social suite da kenh; no toi uu cho viec theo doi fanpage, public activity, alert va danh sach page uu tien.
2. Uu tien signal hanh dong hon report dep
   Gia tri cot loi la page nao dang nong, job nao vua quet, su kien nao can xem ngay, khong phai dashboard mang tinh trinh dien.
3. Co the van hanh "nua thu cong, nua tu dong" ngay tu MVP
   Setup tracked pages, quet, dedupe, alert Telegram va append Google Sheets tao thanh mot luong de doi ngu ap dung som ma khong can stack enterprise.

## Rui ro va gia dinh con treo

### Gia dinh

- Nguoi dung san sang bat dau voi du lieu public activity, chua doi hoi analytics sau click hoac attribution.
- Telegram va Google Sheets la downstream du manh cho giai doan van hanh som.
- Gia tri cua san pham du de thuyet phuc nhom agency nho truoc khi can mo rong sang phan tich da kenh.

### Rui ro

- Neu signal public activity qua it hoac khong du nhay, nguoi dung se quay lai cach check tay.
- Neu setup source va lich su scan khong ro rang, san pham se bi xem nhu mot dashboard "co cung duoc, khong cung duoc".
- Doi thu lon co the co cong cu noi bo hoac da mua suite khac, lam giam do hap dan cua thong diep "monitoring".
- Chua co du lieu phong van thuc te de xac nhan muc san sang tra tien, tan suat su dung va nguong so page can theo doi.

## Recommendations

1. Uu tien narrative "competitor watchtower cho team Facebook" trong roadmap va UI.
2. Product Owner nen chot KPI nghiep vu cho MVP: thoi gian setup 1 source, so signal/actionable alert moi ngay, ty le source co du lich su scan doc duoc.
3. UI Designer nen the hien ro 3 khoi gia tri: tracked pages, bien dong moi nhat, alert/uu tien hanh dong.
4. CTO/PO nen bo sung vong xac thuc voi 5-10 nguoi dung muc tieu de kiem tra 3 diem: tan suat canh bao, muc du "du dung" cua signal public, va workflow export/share.
5. Chua mo rong messaging sang "marketing intelligence" hay "omni-channel analytics" cho den khi co du lieu chung minh.
