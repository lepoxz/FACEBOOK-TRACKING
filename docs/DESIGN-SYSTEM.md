# Design System

## Muc Tieu He Thong

He thong giao dien cho FACEBOOK TRACKING phai phuc vu dashboard theo doi fanpage doi thu, khong phai mot website marketing. Uu tien cao nhat:

- Quet nhanh tinh hinh trong 5-10 giay.
- Nhin thay bat thuong va alert truoc khi doc chi tiet.
- Doc du lieu lau ma khong met.
- De engineer map truc tiep sang token CSS va component React.

## Nguyen Tac Thiet Ke

1. Alert truoc, phan tich sau.
2. Tong quan truoc, drill-down sau.
3. Mot thanh phan, mot muc dich.
4. Mau la he thong semantic, khong phai trang tri.
5. Desktop-first cho van hanh, mobile-first cho kiem tra nhanh.

## Mau Sac

### Brand Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `brand-primary-500` | `#0F766E` | CTA chinh, active state, chart emphasis |
| `brand-primary-600` | `#0B5E58` | Hover CTA, active nav secondary |
| `brand-secondary-950` | `#0F172A` | Sidebar, top nav dark section |
| `brand-accent-500` | `#F59E0B` | Warning badge, highlighted delta |

### Neutral Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `neutral-0` | `#FFFFFF` | Surface chinh |
| `neutral-50` | `#F8FAFC` | Nen app |
| `neutral-100` | `#F1F5F9` | Sub-surface, bang zebra nhe |
| `neutral-200` | `#E2E8F0` | Border mac dinh |
| `neutral-400` | `#94A3B8` | Icon/timestamp phu |
| `neutral-600` | `#475569` | Body phu |
| `neutral-800` | `#1E293B` | Body chinh |
| `neutral-950` | `#020617` | Text dac biet tren nen sang |

### Semantic Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `success-500` | `#16A34A` | Thanh cong, tracking on dinh |
| `warning-500` | `#F59E0B` | Bien dong can chu y |
| `danger-500` | `#DC2626` | Alert nghiem trong, loi |
| `info-500` | `#0284C7` | Link, guidance, info state |

### Quy Tac Surface

| Token | Value | Usage |
|-------|-------|-------|
| `surface-app` | `#F8FAFC` | Nen tong dashboard |
| `surface-card` | `#FFFFFF` | Card, modal, bang |
| `surface-subtle` | `#F1F5F9` | Bo loc, row hover nhe |
| `surface-inverse` | `#0F172A` | Sidebar, zone co tan suat tuong tac cao |

## Typography

| Token | Font | Size/Line | Weight | Usage |
|-------|------|-----------|--------|-------|
| `display-sm` | Sora | `32/40` | 700 | Tieu de trang |
| `heading-lg` | Sora | `24/32` | 600 | Tieu de module |
| `heading-md` | Sora | `20/28` | 600 | Tieu de card lon |
| `body-md` | IBM Plex Sans | `16/24` | 400 | Doan mo ta ngan |
| `body-sm` | IBM Plex Sans | `14/20` | 400 | Table, input, label |
| `label-sm` | IBM Plex Sans | `12/16` | 600 | Badge, overline, caption |
| `mono-sm` | IBM Plex Mono | `12/18` | 500 | Timestamp, ID, metric delta |

### Quy Tac kieu chu

- Khong dung qua 3 cap tieu de tren mot man hinh.
- Table, filter, sidebar menu dung `body-sm`.
- KPI so lon co the dung `heading-lg`, nhung delta di kem phai dung `mono-sm`.

## Spacing Scale

Base unit: `4px`

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | `4px` | Khoang cach icon-text |
| `space-2` | `8px` | Chip, grid nho, badge |
| `space-3` | `12px` | Stack trong card nho |
| `space-4` | `16px` | Padding form/control |
| `space-5` | `20px` | Card compact |
| `space-6` | `24px` | Card mac dinh |
| `space-8` | `32px` | Section spacing |
| `space-10` | `40px` | Dashboard block lon |
| `space-12` | `48px` | Hero/KPI row |

## Radius, Border, Shadow

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | `8px` | Input, badge, button nho |
| `radius-md` | `12px` | Card, table wrapper |
| `radius-lg` | `16px` | Modal, drawer |
| `border-default` | `1px solid #E2E8F0` | Border mac dinh |
| `shadow-sm` | `0 1px 2px rgba(15, 23, 42, 0.06)` | Input focus nhe, badge surface |
| `shadow-md` | `0 12px 32px rgba(15, 23, 42, 0.08)` | Card chinh |
| `shadow-lg` | `0 24px 48px rgba(15, 23, 42, 0.12)` | Modal/drawer |

## Motion

- Transition mac dinh: `160ms ease-out`.
- Hover card: chi nhac `translateY(-1px)` va doi border/surface, khong dung animation phan tam.
- Alert moi: co the su dung pulse border/left rail toi da `2` chu ky, sau do dung.
- Khong dung parallax, spring manh hay shimmer lien tuc tren dashboard van hanh.

## Responsive Breakpoints

| Name | Min width | Notes |
|------|-----------|-------|
| `mobile` | `0px` | Chi giu overview, alert, danh sach cot toi gian |
| `tablet` | `768px` | Bat dau hien filter day du va card 2 cot |
| `desktop` | `1280px` | Layout chuan: sidebar + top bar + 12-column grid |
| `wide` | `1440px` | Cho phep panel timeline va alert feed song song |

## Layout Foundation

### Khung man hinh chuan

- Sidebar trai co dinh: `240px`.
- Top bar: `64px`.
- Khung noi dung: max `1440px`, padding ngang `24px` tren desktop.
- Grid noi dung: `12 columns`, gutter `24px`.

### Thu tu uu tien thi giac

1. Trang thai tracking va alert summary.
2. KPI tong quan theo page/nhom page.
3. Danh sach tracked pages co filter.
4. Timeline/public activity.
5. Log chi tiet va metadata.

## Trang va Module Can Ho Tro

### 1. Overview Dashboard

Module bat buoc:

- Header voi title, bo loc thoi gian, search page, CTA "Them page theo doi".
- Hang KPI gom: `So page dang theo doi`, `Bai dang moi 24h`, `Livestream dang dien ra`, `Alert can xu ly`.
- Block "Hot pages" dang leaderboard.
- Block "Bien dong gan day" dang timeline compact.
- Block "Alert feed" tach muc do `critical`, `warning`, `info`.

### 2. Tracked Pages List

Yeu cau:

- Table hoac list hybrid, uu tien scan nhanh.
- Cot khuyen nghi: `Page`, `Trang thai`, `Bai moi 24h`, `Tuong tac uoc tinh`, `Lan cap nhat cuoi`, `Alert gan nhat`.
- Row hover doi `surface-subtle`, khong doi bong do manh.
- Filter chip: `Tat ca`, `Co alert`, `Dang livestream`, `It hoat dong`.

### 3. Activity Timeline

Yeu cau:

- Timeline theo thu tu moi nhat truoc.
- Moi item gom: avatar/page name, loai su kien, timestamp, delta metric, CTA xem chi tiet.
- Màu left rail theo semantic event:
  - `teal` cho post moi
  - `amber` cho tang truong bat thuong
  - `red` cho alert nghiem trong
- Timeline item phai doc duoc khi khong co thumbnail.

### 4. Alert States

Muc do:

- `Critical`: co nguy co bo lo co hoi hoac loi tracking can xem ngay.
- `Warning`: co bien dong dang chu y, can review trong ca lam viec.
- `Info`: nhac nho, thay doi nho, khong can phan hoi gap.

Quy tac hien thi:

- Critical luon o tren cung feed.
- Moi alert can co `ly do`, `thoi diem`, `page lien quan`, `hanh dong de xuat`.
- Cho phep dismiss/tam an o muc `info`, khong cho dismiss critical neu chua acknowledge.

## Component Patterns

### Buttons

| Variant | Style | Usage |
|--------|-------|-------|
| Primary | Nen `brand-primary-500`, chu trang, radius `8px` | CTA chinh, tao page tracking, acknowledge alert |
| Secondary | Nen trang, border `neutral-200` | Hanh dong phu |
| Ghost | Khong nen, text `neutral-600` | Toolbar, table actions |
| Danger | Nen `danger-500`, chu trang | Hanh dong huy/chan/ngung theo doi |

States bat buoc: `default`, `hover`, `focus-visible`, `disabled`, `loading`.

### Inputs

- Cao mac dinh: `40px`.
- Border mac dinh `neutral-200`, focus ring `info-500` alpha 24%.
- Placeholder chi la goi y, label van bat buoc cho filter/form.
- Search box trong dashboard co icon ben trai va nut clear khi co gia tri.

### Select, Filter Chip, Segmented Control

- Chip filter dung cho chuyen doi trang thai nhanh.
- Segmented control chi dung khi toi da 3-4 lua chon ngang cap.
- Dropdown dung cho bo loc chi tiet, khong dung de an cac lua chon chinh.

### Cards

- Card KPI: so lon o tren, delta o giua, note nguon du lieu o duoi.
- Card module: title + action ben phai + body co max 2 tang thong tin.
- Card alert: co left accent bar semantic, action ro rang ben cuoi.

### Table

- Chieu cao row: `56px`.
- Header sticky khi scroll trong bang dai.
- Can co empty state ro rang, khong de bang trang.
- Hanh dong tren row uu tien menu kebab hoac inline action toi da 2 nut.

### Badge va Status Pill

| Status | Token | Usage |
|--------|-------|-------|
| `tracking` | nen teal nhe, text teal dam | Page dang theo doi on dinh |
| `warning` | nen amber nhe, text amber dam | Can xem lai |
| `critical` | nen red nhe, text red dam | Can xu ly ngay |
| `paused` | nen neutral-100, text neutral-600 | Tam dung |

### Empty, Loading, Error State

- Empty state phai noi ly do va hanh dong tiep theo.
- Loading state uu tien skeleton 1-2 giay dau, sau do moi fallback spinner.
- Error state phai co thong diep thao tac duoc: "Thu tai lai", "Kiem tra ket noi", "Lien he ky thuat".

## Accessibility

- Contrast text/body toi thieu dat WCAG AA.
- Khong truyen dat trang thai chi bang mau; phai kem icon hoac label.
- Focus ring luon hien tren keyboard navigation.
- Alert critical phai co aria-live hoac cach announce tuong duong khi engineer implement.

## Handoff Cho Engineer

Engineer nen implement theo thu tu:

1. Nap font `Sora`, `IBM Plex Sans`, `IBM Plex Mono`.
2. Tao token CSS global theo file `docs/DESIGN-TOKENS.css`.
3. Dung lai layout shell: sidebar, top bar, content grid.
4. Scaffold component foundation: button, input, chip, card, table, alert item, stat card.
5. Moi man hinh dau tien nen la `Overview Dashboard` vi no xac lap huong thi giac cho toan bo san pham.
