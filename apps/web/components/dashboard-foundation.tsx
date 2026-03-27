type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type PageStatus = "tracking" | "warning" | "critical" | "paused";
type AlertLevel = "critical" | "warning" | "info";
type TimelineRail = "teal" | "amber" | "red";

const buttonClassName: Record<ButtonVariant, string> = {
  primary: "primary-button",
  secondary: "secondary-button",
  ghost: "ghost-button",
  danger: "danger-button"
};

const statusTone: Record<PageStatus, string> = {
  tracking: "is-tracking",
  warning: "is-warning",
  critical: "is-critical",
  paused: "is-paused"
};

const statusLabel: Record<PageStatus, string> = {
  tracking: "Đang theo dõi",
  warning: "Cần chú ý",
  critical: "Nghiêm trọng",
  paused: "Tạm dừng"
};

const alertTone: Record<AlertLevel, string> = {
  critical: "critical",
  warning: "warning",
  info: "info"
};

const alertLabel: Record<AlertLevel, string> = {
  critical: "Nghiêm trọng",
  warning: "Cảnh báo",
  info: "Thông tin"
};

type DashboardButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
};

export function DashboardButton({
  children,
  type = "button",
  variant = "primary"
}: DashboardButtonProps) {
  return (
    <button className={buttonClassName[variant]} type={type}>
      {children}
    </button>
  );
}

type SearchInputProps = {
  id: string;
  name: string;
  placeholder: string;
  defaultValue?: string;
};

export function SearchInput({
  id,
  name,
  placeholder,
  defaultValue = ""
}: SearchInputProps) {
  return (
    <label className="search-box" htmlFor={id}>
      <span className="search-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="none" role="presentation">
          <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 13l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <input
        defaultValue={defaultValue}
        id={id}
        name={name}
        placeholder={placeholder}
        type="search"
      />
    </label>
  );
}

type FilterChipProps = {
  active?: boolean;
  label: string;
};

export function FilterChip({ active = false, label }: FilterChipProps) {
  return <span className={active ? "chip chip-active" : "chip"}>{label}</span>;
}

type StatCardProps = {
  label: string;
  value: string;
  note: string;
  delta?: string;
  compact?: boolean;
};

export function StatCard({
  label,
  value,
  note,
  delta,
  compact = false
}: StatCardProps) {
  return (
    <article className={compact ? "status-card" : "stat-card"}>
      <span className="stat-label">{label}</span>
      <strong className={compact ? undefined : "stat-value"}>{value}</strong>
      {delta ? <span className="stat-delta">{delta}</span> : null}
      <p className={compact ? undefined : "stat-note"}>{note}</p>
    </article>
  );
}

type AlertCardProps = {
  action: string;
  level: AlertLevel;
  reason: string;
  title: string;
};

export function AlertCard({ action, level, reason, title }: AlertCardProps) {
  return (
    <article className={`alert-card ${alertTone[level]}`}>
      <span className="mono-label">{alertLabel[level]}</span>
      <strong>{title}</strong>
      <p>{reason}</p>
      <DashboardButton variant="ghost">{action}</DashboardButton>
    </article>
  );
}

type PageTableRowProps = {
  alert: string;
  category: string;
  engagement: string;
  name: string;
  posts24h: number;
  status: PageStatus;
  updatedAt: string;
};

export function PageTableRow({
  alert,
  category,
  engagement,
  name,
  posts24h,
  status,
  updatedAt
}: PageTableRowProps) {
  return (
    <tr>
      <td>
        <div className="page-cell">
          <strong>{name}</strong>
          <span>{category}</span>
        </div>
      </td>
      <td>
        <span className={`status-pill ${statusTone[status]}`}>{statusLabel[status]}</span>
      </td>
      <td>{posts24h}</td>
      <td>{engagement}</td>
      <td className="mono-copy">{updatedAt}</td>
      <td>{alert}</td>
    </tr>
  );
}

type TimelineItemProps = {
  delta: string;
  event: string;
  page: string;
  rail: TimelineRail;
  time: string;
};

export function TimelineItem({ delta, event, page, rail, time }: TimelineItemProps) {
  return (
    <article className="timeline-item">
      <span className={`timeline-rail ${rail}`} aria-hidden="true" />
      <div className="timeline-copy">
        <div className="timeline-head">
          <strong>{page}</strong>
          <span className="mono-label">{time}</span>
        </div>
        <p>{event}</p>
      </div>
      <span className="timeline-delta">{delta}</span>
    </article>
  );
}
