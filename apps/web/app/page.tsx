type PageStatus = "tracking" | "warning" | "critical" | "paused";
type AlertLevel = "critical" | "warning" | "info";

const primaryMetrics = [
  {
    label: "Số trang đang theo dõi",
    value: "24",
    delta: "+3 trang",
    note: "Cập nhật lúc 09:20"
  },
  {
    label: "Bài đăng mới 24 giờ",
    value: "87",
    delta: "+18%",
    note: "So với trung bình 7 ngày"
  },
  {
    label: "Livestream đang diễn ra",
    value: "5",
    delta: "+2 kênh",
    note: "Cần theo dõi trong 30 phút tới"
  },
  {
    label: "Cảnh báo cần xử lý",
    value: "9",
    delta: "2 critical",
    note: "Ưu tiên bảng cảnh báo bên phải"
  }
];

const summaryCards = [
  {
    label: "Độ phủ thu thập",
    value: "80%",
    note: "24 / 30 trang đã đồng bộ đủ dữ liệu"
  },
  {
    label: "Nguồn cần xử lý",
    value: "02",
    note: "1 nguồn crawl chậm, 1 token cần gia hạn"
  },
  {
    label: "Khung giờ nóng",
    value: "10:00",
    note: "Mỹ phẩm và nội thất đang tăng tốc"
  }
];

const hotPages = [
  {
    name: "Miu Beauty Official",
    category: "Mỹ phẩm",
    status: "tracking" as PageStatus,
    posts24h: 12,
    engagement: "154K",
    updatedAt: "3 phút trước",
    alert: "Tăng reach 68%"
  },
  {
    name: "Nha Xinh Decor",
    category: "Nội thất",
    status: "warning" as PageStatus,
    posts24h: 4,
    engagement: "38K",
    updatedAt: "8 phút trước",
    alert: "Livestream bất ngờ lúc 08:40"
  },
  {
    name: "Fit Mom Daily",
    category: "Đời sống",
    status: "tracking" as PageStatus,
    posts24h: 7,
    engagement: "91K",
    updatedAt: "12 phút trước",
    alert: "3 reel mới trong 6 giờ"
  },
  {
    name: "Pet House Viet",
    category: "Thú cưng",
    status: "critical" as PageStatus,
    posts24h: 2,
    engagement: "12K",
    updatedAt: "17 phút trước",
    alert: "Nguồn crawl chậm 17 phút"
  },
  {
    name: "Cafe Nha Pho",
    category: "Ẩm thực",
    status: "paused" as PageStatus,
    posts24h: 1,
    engagement: "7K",
    updatedAt: "41 phút trước",
    alert: "Đang đợi access token mới"
  }
];

const hotLeads = [
  {
    page: "Miu Beauty Official",
    reason: "2 video mới đang vượt benchmark 7 ngày",
    owner: "Ads team",
    priority: "Theo dõi sát"
  },
  {
    page: "Nha Xinh Decor",
    reason: "Livestream đột xuất trong giờ hành chính",
    owner: "Content ops",
    priority: "Cập nhật script sales"
  },
  {
    page: "Fit Mom Daily",
    reason: "Tần suất reel tăng trước khung 11:00",
    owner: "Research",
    priority: "Bổ sung keyword watch"
  }
];

const timelineItems = [
  {
    rail: "teal",
    page: "Miu Beauty Official",
    event: "Đăng 2 video review serum mới",
    time: "09:12",
    delta: "+42% comment"
  },
  {
    rail: "amber",
    page: "Nha Xinh Decor",
    event: "Bật livestream flash sale 45 phút",
    time: "08:40",
    delta: "+1.8x viewer"
  },
  {
    rail: "red",
    page: "Pet House Viet",
    event: "Khoảng trống dữ liệu vượt ngưỡng cảnh báo",
    time: "08:26",
    delta: "17 phút mất đồng bộ"
  },
  {
    rail: "teal",
    page: "Fit Mom Daily",
    event: "Thêm post album trước khung giờ bán hàng",
    time: "07:55",
    delta: "+6 bài/24 giờ"
  }
];

const alerts = [
  {
    level: "critical" as AlertLevel,
    title: "Pet House Viet cần kiểm tra pipeline crawl",
    reason: "Không có event mới dù trang đang có traffic cao.",
    action: "Mở runbook ingestion"
  },
  {
    level: "warning" as AlertLevel,
    title: "Nha Xinh Decor đang livestream bất thường",
    reason: "Bắt đầu sớm hơn lịch thông thường 90 phút.",
    action: "Gắn thẻ theo dõi sát"
  },
  {
    level: "info" as AlertLevel,
    title: "Đã thêm 3 trang mới vào watchlist trong cả sáng",
    reason: "Nguồn từ team research đã xác nhận public.",
    action: "Kiểm tra thiết lập"
  }
];

const statusTone = {
  tracking: "is-tracking",
  warning: "is-warning",
  critical: "is-critical",
  paused: "is-paused"
} as const;

const alertTone = {
  critical: "critical",
  warning: "warning",
  info: "info"
} as const;

const statusLabel: Record<PageStatus, string> = {
  tracking: "Đang theo dõi",
  warning: "Cần chú ý",
  critical: "Nghiêm trọng",
  paused: "Tạm dừng"
};

const alertLabel: Record<AlertLevel, string> = {
  critical: "Nghiêm trọng",
  warning: "Cảnh báo",
  info: "Thông tin"
};

export default function HomePage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-main">
          <div>
            <p className="sidebar-kicker">THEO DÕI FACEBOOK</p>
            <h1 className="sidebar-title">Trung tâm tình báo vận hành fanpage đối thủ</h1>
            <p className="sidebar-copy">
              Quan sát cảnh báo, bảng ưu tiên và luồng đồng bộ trong một màn hình tác
              chiến.
            </p>
          </div>

          <nav className="sidebar-nav" aria-label="Điều hướng chính">
            <a className="nav-item nav-item-active" href="/">
              <span>Tổng quan</span>
              <strong>09 cảnh báo mở</strong>
            </a>
            <a className="nav-item" href="/">
              <span>Trang đang theo dõi</span>
              <strong>24 trang</strong>
            </a>
            <a className="nav-item" href="/">
              <span>Dòng sự kiện</span>
              <strong>17 sự kiện mới</strong>
            </a>
            <a className="nav-item" href="/">
              <span>Trung tâm cảnh báo</span>
              <strong>2 critical</strong>
            </a>
          </nav>
        </div>

        <div className="sidebar-stack">
          <article className="sidebar-card">
            <span className="mono-label">Độ phủ</span>
            <strong>24 / 30 trang đang ổn định</strong>
            <p>Cần ưu tiên khôi phục 2 nguồn nghiêm trọng trước 11:00.</p>
          </article>

          <article className="sidebar-card sidebar-card-ghost">
            <span className="mono-label">Khung tập trung</span>
            <strong>10:00 - 12:00</strong>
            <p>Cảnh báo livestream và biến động reach sẽ được đẩy lên đầu feed.</p>
          </article>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="topbar-copy">
            <div>
              <p className="eyebrow">Bảng điều khiển tổng quan</p>
              <h2>Bảng điều khiển theo dõi ca sáng</h2>
            </div>
            <p className="topbar-summary">
              Hệ thống đang ưu tiên 2 cảnh báo nghiêm trọng và 1 trang tạm dừng do token
              cần gia hạn.
            </p>
          </div>

          <div className="topbar-actions">
            <label className="search-box" htmlFor="page-search">
              <span className="search-icon" aria-hidden="true">
                ?
              </span>
              <input
                defaultValue=""
                id="page-search"
                name="page-search"
                placeholder="Tìm trang, nguồn, cảnh báo..."
                type="search"
              />
            </label>
            <button className="secondary-button" type="button">
              24 giờ qua
            </button>
            <button className="primary-button" type="button">
              Thêm trang theo dõi
            </button>
          </div>
        </header>

        <section className="status-band" aria-label="Trạng thái vận hành">
          {summaryCards.map((item) => (
            <article className="status-card" key={item.label}>
              <span className="stat-label">{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </section>

        <section className="stats-grid" aria-label="Thống kê tổng quan">
          {primaryMetrics.map((metric) => (
            <article className="stat-card" key={metric.label}>
              <span className="stat-label">{metric.label}</span>
              <strong className="stat-value">{metric.value}</strong>
              <span className="stat-delta">{metric.delta}</span>
              <p className="stat-note">{metric.note}</p>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel panel-wide panel-table">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Các trang theo dõi</p>
                <h3>Trang nóng cần xem ngay</h3>
              </div>
              <div className="chip-row">
                <span className="chip chip-active">Tất cả</span>
                <span className="chip">Có cảnh báo</span>
                <span className="chip">Đang livestream</span>
                <span className="chip">Ít hoạt động</span>
              </div>
            </div>

            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Page</th>
                    <th>Trang thai</th>
                    <th>Bai moi 24h</th>
                    <th>Tuong tac uoc tinh</th>
                    <th>Lan cap nhat cuoi</th>
                    <th>Alert gan nhat</th>
                  </tr>
                </thead>
                <tbody>
                  {hotPages.map((page) => (
                    <tr key={page.name}>
                      <td>
                        <div className="page-cell">
                          <strong>{page.name}</strong>
                          <span>{page.category}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`status-pill ${statusTone[page.status]}`}>
                          {statusLabel[page.status]}
                        </span>
                      </td>
                      <td>{page.posts24h}</td>
                      <td>{page.engagement}</td>
                      <td className="mono-copy">{page.updatedAt}</td>
                      <td>{page.alert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="panel panel-aside">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Bảng ưu tiên</p>
                <h3>Trang cần theo sát</h3>
              </div>
            </div>

            <div className="lead-list">
              {hotLeads.map((lead) => (
                <article className="lead-card" key={lead.page}>
                  <div>
                    <strong>{lead.page}</strong>
                    <p>{lead.reason}</p>
                  </div>
                  <div className="lead-meta">
                    <span className="mono-label">{lead.owner}</span>
                    <span className="chip chip-active">{lead.priority}</span>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <article className="panel panel-wide">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Dòng sự kiện</p>
                <h3>Biến động gần đây</h3>
              </div>
              <button className="ghost-button" type="button">
                Xem log chi tiết
              </button>
            </div>

            <div className="timeline-list">
              {timelineItems.map((item) => (
                <article className="timeline-item" key={`${item.page}-${item.time}`}>
                  <span className={`timeline-rail ${item.rail}`} aria-hidden="true" />
                  <div className="timeline-copy">
                    <div className="timeline-head">
                      <strong>{item.page}</strong>
                      <span className="mono-label">{item.time}</span>
                    </div>
                    <p>{item.event}</p>
                  </div>
                  <span className="timeline-delta">{item.delta}</span>
                </article>
              ))}
            </div>
          </article>

          <article className="panel panel-aside">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Luồng cảnh báo</p>
                <h3>Bảng cảnh báo ưu tiên</h3>
              </div>
            </div>

            <div className="alert-list">
              {alerts.map((alert) => (
                <article className={`alert-card ${alertTone[alert.level]}`} key={alert.title}>
                  <span className="mono-label">{alertLabel[alert.level]}</span>
                  <strong>{alert.title}</strong>
                  <p>{alert.reason}</p>
                  <button className="ghost-button" type="button">
                    {alert.action}
                  </button>
                </article>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
