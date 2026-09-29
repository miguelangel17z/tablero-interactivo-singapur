import type { Kpi } from "@/data/singapore";

const trendStyles: Record<Kpi["trend"], string> = {
  up: "text-emerald-600 bg-emerald-50",
  down: "text-brand bg-red-50",
  flat: "text-slate-500 bg-slate-100",
};

const trendArrow: Record<Kpi["trend"], string> = {
  up: "▲",
  down: "▼",
  flat: "■",
};

export default function KpiCard({ kpi }: { kpi: Kpi }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-semibold ${trendStyles[kpi.trend]}`}
        >
          {trendArrow[kpi.trend]} {kpi.delta}
        </span>
      </div>
      <p className="mt-2 text-3xl font-semibold text-ink">{kpi.value}</p>
      <p className="mt-1 text-xs text-slate-400">{kpi.hint}</p>
    </div>
  );
}
