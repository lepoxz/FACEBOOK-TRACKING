import { defaultTrackedPage } from "@facebook-tracking/shared-types";
import { formatServiceLabel } from "@facebook-tracking/shared-utils";

const services = [
  {
    name: "Web dashboard",
    port: 3000,
    status: "ready"
  },
  {
    name: "API service",
    port: 3001,
    status: "ready"
  },
  {
    name: "Worker service",
    port: 3002,
    status: "ready"
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <p className="eyebrow">Facebook Tracking / Step 01</p>
        <h1>Monorepo da san sang cho web, api va worker.</h1>
        <p className="lead">
          Skeleton nay duoc tao de doi ngu co the chia task song song ma van
          dung chung contracts va utility.
        </p>
      </section>

      <section className="grid">
        <article className="panel">
          <h2>Dich vu local</h2>
          <ul className="service-list">
            {services.map((service) => (
              <li key={service.name}>
                <strong>{formatServiceLabel(service.name)}</strong>
                <span>{`localhost:${service.port}`}</span>
                <span className="badge">{service.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="panel">
          <h2>Mau entity tracking</h2>
          <dl className="details">
            <div>
              <dt>Page ID</dt>
              <dd>{defaultTrackedPage.pageId}</dd>
            </div>
            <div>
              <dt>Ten page</dt>
              <dd>{defaultTrackedPage.pageName}</dd>
            </div>
            <div>
              <dt>Che do</dt>
              <dd>{defaultTrackedPage.mode}</dd>
            </div>
          </dl>
        </article>
      </section>
    </main>
  );
}
