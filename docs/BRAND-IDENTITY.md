# Brand Identity

## Pham Vi Va Gia Dinh

Tai thoi diem chot brand identity cho `FACEBOOK TRACKING`, repo chua co tai lieu market analysis hoan chinh. Bo spec nay duoc xay tren cac gia dinh tam thoi sau:

- San pham la dashboard/operator tool B2B cho team agency theo doi fanpage, bai dang, livestream va alert.
- Nguoi dung chinh lam viec tren desktop trong ca van hanh; mobile chu yeu de check nhanh tinh hinh va alert.
- Gia tri can truyen tai khong phai "sang tao marketing" ma la "kiem soat du lieu, xu ly nhanh, quyet dinh ro".

Khi tai lieu market analysis xuat hien, can doi chieu lai 3 diem: muc do "cao cap" cua thuong hieu, ky vong giao dien cua operator agency, va do dam nhan canh bao trong bieu do/alert.

## Brand Vision

`FACEBOOK TRACKING` duoc dinh vi nhu mot "trung tam tac chien du lieu" cho team van hanh Facebook. Thuong hieu can goi ra cam giac:

- Tin cay: so lieu phai trong, nghiem tuc va khong tao cam giac phan mem "demo".
- Nhanh de hanh dong: bat thuong duoc dua len dau, khong bat nguoi dung dao qua nhieu lop giao dien.
- Co ki luat: moi thanh phan nhin vao deu thuoc cung mot he thong, khong cam tinh, khong "moi trang mot kieu".
- Tinh gon nhung sac: giao dien co luc, khong trang tri thua, khong generic.

Muc tieu cam xuc: nguoi dung mo dashboard len la thay "moi thu dang nam trong tam kiem soat".

## Doi Tuong Su Dung

- Operator agency theo doi nhieu page va doi thu cung luc.
- Nhan su ads/care can phat hien post moi, livestream, tuong tac bat thuong va alert tracking.
- Nguoi quan ly can overview nhanh de quyet dinh page nao can uu tien.

## Thuoc Tinh Thuong Hieu

| Thuoc tinh | Mo ta | Nen the hien bang |
|-----------|-------|-------------------|
| Tactical | Cam giac cong cu phuc vu ca truc | Sidebar ro, KPI ngan, alert co cap do |
| Analytical | Du lieu la trung tam | Contrast ro, typography sach, icon tiet che |
| Responsive | Nhan thay bien dong nhanh | Accent canh bao manh, timeline scan nhanh |
| Disciplined | Van hanh co he thong | Token hoa mau sac, spacing, radius, shadow |

## Huong Thi Giac Da Can Nhac

### Huong A: Tactical Control Room

Mo ta:

- Nen sang trung tinh ket hop cac khoi toi mau o khu dieu huong.
- Teal lam mau tin hieu chinh, amber/red lam lop canh bao.
- Typographic contrast ro, card va table co cam giac van hanh nghiep vu.

Diem manh:

- Rat hop dashboard theo doi, alert va workflow operator.
- De nhan biet va tranh cam giac SaaS generic mau xanh duong.
- Tien cho design system hoa thanh tokens va component.

Rui ro:

- Neu dung qua nhieu mau toi se tao cam giac nang ne.
- Can tiet che icon/mau nhan de tranh "phong chien thuat gia".

### Huong B: Precision Data Lab

Mo ta:

- Tong the sang, toi gian, nhieu khoang trang, xanh duong lam mau chinh.
- Cam giac san pham phan tich hien dai, sach va "enterprise".
- Nhieu emphasis bang typography va line chart hon la badge/alert.

Diem manh:

- De doc, de mo rong, quen thuoc voi dashboard B2B.
- Rui ro implementation thap vi pattern pho bien.

Rui ro:

- Qua gan voi nhieu dashboard generic tren thi truong.
- Khong nhan du "alert-first" cho bai toan theo doi page/livestream.
- Kho tao ban sac rieng neu khong co visual signatures bo sung.

## Huong Duoc Chon

Chon `Huong A: Tactical Control Room`.

Ly do chon:

- Hop nhat voi bai toan tracking/operations: nguoi dung can thay tin hieu va bat thuong truoc, phan tich sau.
- Tao ban sac rieng de dev co mot truc thi giac nhat quan tu sidebar, KPI, alert den timeline.
- Van giu duoc tinh B2B nghiem tuc neu tiet che dung teal, amber va nen toi dung cho dieu huong.

Khong chon Huong B vi no an toan nhung qua de roi vao nhom dashboard "dep nhung vo danh", trai voi yeu cau tranh generic.

## Color Palette

| Role | Name | Hex | RGB | Usage |
|------|------|-----|-----|-------|
| Primary | Signal Teal | `#0F766E` | `15, 118, 110` | CTA chinh, active state, metric dang theo doi, chart emphasis |
| Primary Dark | Deep Teal | `#0B5E58` | `11, 94, 88` | Hover CTA, trang thai nhan manh, border active |
| Secondary | Midnight Slate | `#0F172A` | `15, 23, 42` | Sidebar, top nav, header zone, cac vung dieu huong tan suat cao |
| Accent | Alert Amber | `#F59E0B` | `245, 158, 11` | Warning, delta tang bat thuong, timeline highlight |
| Neutral Light | Cloud Mist | `#F8FAFC` | `248, 250, 252` | Nen tong, surface app, khu mo rong |
| Neutral Base | Slate Border | `#E2E8F0` | `226, 232, 240` | Border, divider, table structure |
| Neutral Text | Steel Gray | `#475569` | `71, 85, 105` | Noi dung phu, label, help text |
| Error | Critical Red | `#DC2626` | `220, 38, 38` | Alert muc cao, metric giam manh, loi tracking |
| Success | Verified Green | `#16A34A` | `22, 163, 74` | Xac nhan thanh cong, tracking on dinh |
| Info | Operator Blue | `#0284C7` | `2, 132, 199` | Focus ring, info state, text link thao tac |

### Ly Do Chon Mau

- `Midnight Slate` la neo thuong hieu. Mau nay tao nen nghiem tuc, tach san pham khoi nhom dashboard pastel va giu duoc cam giac "control room".
- `Signal Teal` duoc chon thay vi xanh duong mac dinh vi no lien tuong den tin hieu, tracking, monitoring, dong thoi it generic hon.
- `Alert Amber` duoc giu la accent hiem, chi dung khi can chu y, de canh bao thuc su co trong luong thi giac.
- `Critical Red` va `Verified Green` phuc vu he semantic, khong duoc dung cho trang tri.

### Nguyen Tac Su Dung Mau

- Nen doc du lieu uu tien surface sang de bang, log, timeline va table khong gay moi mat khi dung lau.
- Mau dam chi nen xuat hien o dieu huong, khoi canh bao, hoac diem nhan cap 1.
- Khong dung qua 1 mau nhan chinh trong cung mot module. Moi module chi co toi da 1 CTA cap 1.
- Moi semantic state phai di cung label hoac icon, khong truyen tai y nghia bang mau don le.

## Typography

| Role | Typeface | Weight | Size | Usage |
|------|----------|--------|------|-------|
| Heading | Sora | 600, 700 | `32/40`, `24/32`, `20/28` | Page title, section heading, KPI emphasis |
| Body | IBM Plex Sans | 400, 500, 600 | `14/20`, `16/24` | Table, form, navigation, body copy |
| Mono | IBM Plex Mono | 500 | `12/18`, `13/20` | Timestamp, page ID, metric delta, log labels |

### Ly Do Chon Font

- `Sora` tao du chat hien dai va sac canh cho tieu de, giup man hinh dashboard co "signature" thi giac ro hon cac stack mac dinh.
- `IBM Plex Sans` hop van ban van hanh mat do cao, dau chu de phan biet, de doc tren desktop trong phien lam viec dai.
- `IBM Plex Mono` danh rieng cho du lieu co cau truc. Viec tach mono khoi body giup timestamp, ID, delta metric duoc scan nhanh hon.

### Nguyen Tac Kieu Chu

- Chi `Sora` cho tieu de va metric lon; khong dung cho doan van dai.
- `IBM Plex Sans` la font chinh cua giao dien, bao gom filter, table, form, sidebar, help text.
- `IBM Plex Mono` chi xuat hien o du lieu co cau truc; neu lam dung mat tran nay, dashboard se trong ky luat va de scan hon.
- Khong dung qua 3 cap tieu de tren cung mot man hinh.

## Logo Usage

Tam thoi su dung wordmark `FACEBOOK TRACKING` trong giai doan MVP. Chua can thiet ke bieu tuong rieng truoc khi san pham co PMF ro hon.

- Bien the chinh: wordmark trang tren nen `Midnight Slate`.
- Bien the phu: wordmark `Midnight Slate` tren nen sang.
- Clear space toi thieu: bang chieu cao chu `F`.
- Kich thuoc toi thieu: `24px` chieu cao trong app, `96px` chieu rong trong tai lieu.

Khong duoc:

- Them gradient vao wordmark.
- Keo gian ngang hoac doc.
- Dat tren nen qua nhieu hoa tiet ma khong co surface dem.
- Tu y doi sang mau ngoai he token.

## Iconography

- Phong cach: outline, bo goc nhe, hinh hoc ro, khong minh hoa.
- Stroke mac dinh: `1.75px`.
- Grid: `20px` cho navigation/table, `24px` cho metric va panel lon.
- Cac nhom icon uu tien: tracking, alert, timeline, page, livestream, queue.

### Ly Do Chon Icon Style

- Outline icon phu hop giao dien dashboard vi nhin nhe, sach va khong can tranh spotlight voi du lieu.
- Stroke `1.75px` du de sac tren man hinh desktop, nhung khong day den muc nang mat.
- Icon khong duoc dung de trang tri. Moi icon phai ho tro scan trang thai, phan loai du lieu, hoac goi y hanh dong.

### Anh Xa Semantic

- Theo doi/on dinh: teal.
- Can chu y: amber.
- Nghiem trong: red.
- Thong tin huong dan: blue.

## Tone of Voice

Thuong hieu giao tiep bang Tieng Viet ngan, ro, thao tac duoc va co thoi diem.

### Tinh Cach Ngon Ngu

- Truc dien, khong khoa truong.
- Uu tien dong tu hanh dong.
- Neu co bien dong, phai noi ro doi tuong, muc do va thoi diem.
- Viet nhu mot he thong ho tro van hanh, khong viet nhu ban sao marketing.

### Mau Dung

- "Phat hien 3 bai dang moi trong 2 gio qua."
- "Tuong tac tang 42% so voi trung binh 7 ngay."
- "Can kiem tra page nay, tan suat livestream dang bat thuong."

### Mau Khong Dung

- "Bung no tuong tac cuc manh."
- "Day la co hoi vang khong the bo lo."
- "He thong dang rat tuyet voi."

## Nguyen Tac Tranh Generic

De san pham khong giong dashboard SaaS thong thuong, team dev can giu 5 nguyen tac nay:

1. Sidebar va vung dieu huong phai co ban sac toi mau, khong bien toan bo app thanh mot mat phang trang an toan.
2. KPI, alert, timeline phai co cap bac ro rang, khong dung cac card dong deu vo huong.
3. Accent mau chi duoc xuat hien khi co y nghia nghiep vu; khong dung teal/amber nhu son trang tri.
4. Typography phai co nhac do: heading sac, body thuc dung, mono cho du lieu co cau truc.
5. Moi man hinh phai tra loi cau hoi "nguoi truc can hanh dong gi trong 10 giay dau?" Neu khong tra loi duoc, giao dien dang qua generic.

## Nguyen Tac Desktop Va Mobile

### Desktop

- Desktop la man hinh chuan de van hanh. Uu tien sidebar co dinh, top bar gon, grid 12 cot, table/timeline co mat do thong tin cao.
- Cho phep hien song song `KPI + Alert Feed + Timeline` tren man hinh rong thay vi ep tat ca vao card xep doc.
- Hover chi la lop ho tro, khong duoc la cach duy nhat de xem thong tin quan trong.

### Mobile

- Mobile khong co muc tieu thay desktop. No phuc vu check nhanh alert, xem overview va mo chi tiet toi thieu.
- Thu tu uu tien: alert summary, KPI tong quan, danh sach page can chu y, timeline moi nhat.
- Giam so cot, giam thao tac phu, giu CTA ro va to; khong dua table day du len mobile neu scan se kem.

## Anh Xa Vao San Pham

- Sidebar va top navigation phai dung `Midnight Slate` lam truc thuong hieu.
- KPI card, alert card, timeline item, table state, badge va filter chip phai ke thua he semantic nay, khong phat sinh mau rieng.
- Mot visual signature bat buoc cua san pham la "alert-first hierarchy": canh bao, bien dong va delta metric luon de scan duoc truoc noi dung chi tiet.
- Issue design system co the ke thua truc tiep bo quy tac nay de dat ten token, component pattern va state.

## Handoff Cho Issue Design System

Issue tiep theo khong can doan lai brand direction. Co the ke thua truc tiep cac quyet dinh sau:

- Visual direction da chot: `Tactical Control Room`.
- Brand anchors: `Midnight Slate`, `Signal Teal`, `Alert Amber`.
- Font stack da chot: `Sora`, `IBM Plex Sans`, `IBM Plex Mono`.
- Icon style da chot: outline, `1.75px`, grid `20/24`.
- Nguyen tac san pham: alert-first, desktop-first cho van hanh, mobile-first cho check nhanh.
