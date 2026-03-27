type PageStatus = "tracking" | "warning" | "critical" | "paused";
type AlertLevel = "critical" | "warning" | "info";

const primaryMetrics = [
  {
    label: "So page dang theo doi",
    value: "24",
    delta: "+3 page",
    note: "Cap nhat luc 09:20"
  },
  {
    label: "Bai dang moi 24h",
    value: "87",
    delta: "+18%",
    note: "So voi trung binh 7 ngay"
  },
  {
    label: "Livestream dang dien ra",
    value: "5",
    delta: "+2 kenh",
    note: "Can theo doi trong 30 phut toi"
  },
  {
    label: "Alert can xu ly",
    value: "9",
    delta: "2 critical",
    note: "Uu tien feed ben phai"
  }
];

const summaryCards = [
  {
    label: "Do phu thu thap",
    value: "80%",
    note: "24 / 30 page da dong bo du du lieu"
  },
  {
    label: "Nguon can xu ly",
    value: "02",
    note: "1 crawl cham, 1 token can gia han"
  },
  {
    label: "Khung gio nong",
    value: "10:00",
    note: "My pham va noi that dang tang toc"
  }
];

const hotPages = [
  {
    name: "Miu Beauty Official",
    category: "My pham",
    status: "tracking" as PageStatus,
    posts24h: 12,
    engagement: "154K",
    updatedAt: "3 phut truoc",
    alert: "Tang reach 68%"
  },
  {
    name: "Nha Xinh Decor",
    category: "Noi that",
    status: "warning" as PageStatus,
    posts24h: 4,
    engagement: "38K",
    updatedAt: "8 phut truoc",
    alert: "Livestream bat ngo luc 08:40"
  },
  {
    name: "Fit Mom Daily",
    category: "Lifestyle",
    status: "tracking" as PageStatus,
    posts24h: 7,
    engagement: "91K",
    updatedAt: "12 phut truoc",
    alert: "3 reel moi trong 6 gio"
  },
  {
    name: "Pet House Viet",
    category: "Thu cung",
    status: "critical" as PageStatus,
    posts24h: 2,
    engagement: "12K",
    updatedAt: "17 phut truoc",
    alert: "Nguon crawl cham 17 phut"
  },
  {
    name: "Cafe Nha Pho",
    category: "F&B",
    status: "paused" as PageStatus,
    posts24h: 1,
    engagement: "7K",
    updatedAt: "41 phut truoc",
    alert: "Dang doi access token moi"
  }
];

const hotLeads = [
  {
    page: "Miu Beauty Official",
    reason: "2 video moi dang vuot benchmark 7 ngay",
    owner: "Ads team",
    priority: "Theo doi sat"
  },
  {
    page: "Nha Xinh Decor",
    reason: "Livestream dot xuat trong gio hanh chinh",
    owner: "Content ops",
    priority: "Cap nhat script sales"
  },
  {
    page: "Fit Mom Daily",
    reason: "Tan suat reel tang truoc khung 11:00",
    owner: "Research",
    priority: "Bo sung keyword watch"
  }
];

const timelineItems = [
  {
    rail: "teal",
    page: "Miu Beauty Official",
    event: "Dang 2 video review serum moi",
    time: "09:12",
    delta: "+42% comment"
  },
  {
    rail: "amber",
    page: "Nha Xinh Decor",
    event: "Bat livestream flash sale 45 phut",
    time: "08:40",
    delta: "+1.8x viewer"
  },
  {
    rail: "red",
    page: "Pet House Viet",
    event: "Khoang trong du lieu vuot nguong canh bao",
    time: "08:26",
    delta: "17 phut mat dong bo"
  },
  {
    rail: "teal",
    page: "Fit Mom Daily",
    event: "Them post album truoc khung gio ban hang",
    time: "07:55",
    delta: "+6 bai/24h"
  }
];

const alerts = [
  {
    level: "critical" as AlertLevel,
    title: "Pet House Viet can kiem tra pipeline crawl",
    reason: "Khong co event moi du page dang co traffic cao.",
    action: "Mo runbook ingestion"
  },
  {
    level: "warning" as AlertLevel,
    title: "Nha Xinh Decor dang livestream bat thuong",
    reason: "Bat dau som hon lich thong thuong 90 phut.",
    action: "Gan the theo doi sat"
  },
  {
    level: "info" as AlertLevel,
    title: "Da them 3 page moi vao watchlist trong ca sang",
    reason: "Nguon tu team research da xac nhan public.",
    action: "Kiem tra thiet lap"
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

export default function HomePage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="sidebar-main">
          <div>
            <p className="sidebar-kicker">FACEBOOK TRACKING</p>
            <h1 className="sidebar-title">Tinh bao van hanh fanpage doi thu</h1>
            <p className="sidebar-copy">
              Quan sat alert, leaderboard va dong bo feed trong mot khung tac nghiep.
            </p>
          </div>

          <nav className="sidebar-nav" aria-label="Dieu huong chinh">
            <a className="nav-item nav-item-active" href="/">
              <span>Tong quan</span>
              <strong>09 alert mo</strong>
            </a>
            <a className="nav-item" href="/">
              <span>Tracked pages</span>
              <strong>24 page</strong>
            </a>
            <a className="nav-item" href="/">
              <span>Activity timeline</span>
              <strong>17 su kien moi</strong>
            </a>
            <a className="nav-item" href="/">
              <span>Alert center</span>
              <strong>2 critical</strong>
            </a>
          </nav>
        </div>

        <div className="sidebar-stack">
          <article className="sidebar-card">
            <span className="mono-label">Coverage</span>
            <strong>24 / 30 page dang on dinh</strong>
            <p>Can uu tien khoi phuc 2 critical source truoc 11:00.</p>
          </article>

          <article className="sidebar-card sidebar-card-ghost">
            <span className="mono-label">Focus block</span>
            <strong>Khung gio 10:00 - 12:00</strong>
            <p>Canh bao livestream va bien dong reach se duoc day len dau feed.</p>
          </article>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="topbar-copy">
            <div>
              <p className="eyebrow">Overview Dashboard</p>
              <h2>Ban dieu khien tracking ca sang</h2>
            </div>
            <p className="topbar-summary">
              He thong dang uu tien 2 canh bao critical va 1 page tam dung do token can gia han.
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
                placeholder="Tim page, nguon, alert..."
                type="search"
              />
            </label>
            <button className="secondary-button" type="button">
              24h qua
            </button>
            <button className="primary-button" type="button">
              Them page theo doi
            </button>
          </div>
        </header>

        <section className="status-band" aria-label="Trang thai van hanh">
          {summaryCards.map((item) => (
            <article className="status-card" key={item.label}>
              <span className="stat-label">{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </section>

        <section className="stats-grid" aria-label="Thong ke tong quan">
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
                <p className="panel-kicker">Tracked Pages</p>
                <h3>Hot pages can xem ngay</h3>
              </div>
              <div className="chip-row">
                <span className="chip chip-active">Tat ca</span>
                <span className="chip">Co alert</span>
                <span className="chip">Dang livestream</span>
                <span className="chip">It hoat dong</span>
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
                          {page.status}
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
                <p className="panel-kicker">Leadboard</p>
                <h3>Trang can follow-up</h3>
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
                <p className="panel-kicker">Activity Timeline</p>
                <h3>Bien dong gan day</h3>
              </div>
              <button className="ghost-button" type="button">
                Xem log chi tiet
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
                <p className="panel-kicker">Alert Feed</p>
                <h3>Feed canh bao uu tien</h3>
              </div>
            </div>

            <div className="alert-list">
              {alerts.map((alert) => (
                <article className={`alert-card ${alertTone[alert.level]}`} key={alert.title}>
                  <span className="mono-label">{alert.level}</span>
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
