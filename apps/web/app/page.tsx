type PageStatus = "tracking" | "warning" | "critical";

const metrics = [
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

const hotPages = [
  {
    name: "Miu Beauty Official",
    category: "My pham",
    status: "tracking" as PageStatus,
    posts24h: 12,
    engagement: "154K",
    alert: "Tang reach 68%"
  },
  {
    name: "Nha Xinh Decor",
    category: "Noi that",
    status: "warning" as PageStatus,
    posts24h: 4,
    engagement: "38K",
    alert: "Livestream bat ngo luc 08:40"
  },
  {
    name: "Fit Mom Daily",
    category: "Lifestyle",
    status: "tracking" as PageStatus,
    posts24h: 7,
    engagement: "91K",
    alert: "3 reel moi trong 6 gio"
  },
  {
    name: "Pet House Viet",
    category: "Thu cung",
    status: "critical" as PageStatus,
    posts24h: 2,
    engagement: "12K",
    alert: "Nguon crawl cham 17 phut"
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
    level: "critical",
    title: "Pet House Viet can kiem tra pipeline crawl",
    reason: "Khong co event moi du page dang co traffic cao.",
    action: "Mo runbook ingestion"
  },
  {
    level: "warning",
    title: "Nha Xinh Decor dang livestream bat thuong",
    reason: "Bat dau som hon lich thong thuong 90 phut.",
    action: "Gan the theo doi sat"
  },
  {
    level: "info",
    title: "Da them 3 page moi vao watchlist trong ca sang",
    reason: "Nguon tu team research da xac nhan public.",
    action: "Kiem tra thiet lap"
  }
];

const statusTone = {
  tracking: "is-tracking",
  warning: "is-warning",
  critical: "is-critical"
} as const;

export default function HomePage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div>
          <p className="sidebar-kicker">FACEBOOK TRACKING</p>
          <h1 className="sidebar-title">Tinh bao van hanh fanpage doi thu</h1>
        </div>

        <nav className="sidebar-nav" aria-label="Dieu huong chinh">
          <a className="nav-item nav-item-active" href="/">
            Tong quan
          </a>
          <a className="nav-item" href="/">
            Tracked pages
          </a>
          <a className="nav-item" href="/">
            Activity timeline
          </a>
          <a className="nav-item" href="/">
            Alert center
          </a>
        </nav>

        <div className="sidebar-card">
          <span className="mono-label">Coverage</span>
          <strong>24 / 30 page dang on dinh</strong>
          <p>Can uu tien khoi phuc 2 critical source truoc 11:00.</p>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Overview Dashboard</p>
            <h2>Ban dieu khien tracking ca sang</h2>
          </div>

          <div className="topbar-actions">
            <div className="search-box">Tim page, nguon, alert...</div>
            <button className="secondary-button" type="button">
              24h qua
            </button>
            <button className="primary-button" type="button">
              Them page theo doi
            </button>
          </div>
        </header>

        <section className="stats-grid" aria-label="Thong ke tong quan">
          {metrics.map((metric) => (
            <article className="stat-card" key={metric.label}>
              <span className="stat-label">{metric.label}</span>
              <strong className="stat-value">{metric.value}</strong>
              <span className="stat-delta">{metric.delta}</span>
              <p className="stat-note">{metric.note}</p>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <article className="panel panel-wide">
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
                      <td>{page.alert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="panel panel-stack">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Alert Feed</p>
                <h3>Feed canh bao uu tien</h3>
              </div>
            </div>

            <div className="alert-list">
              {alerts.map((alert) => (
                <article className={`alert-card ${alert.level}`} key={alert.title}>
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

          <article className="panel panel-wide">
            <div className="panel-heading">
              <div>
                <p className="panel-kicker">Activity Timeline</p>
                <h3>Bien dong gan day</h3>
              </div>
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
        </section>
      </section>
    </main>
  );
}
