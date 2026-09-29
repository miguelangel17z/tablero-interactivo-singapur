import type { Indicator } from "@/data/singapore";

export default function Sparkline({ indicator }: { indicator: Indicator }) {
  const values = indicator.series.map((s) => s.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const w = 320;
  const h = 80;
  const step = w / (values.length - 1);

  const points = values
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / range) * (h - 10) - 5;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const last = indicator.series[indicator.series.length - 1];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-slate-600">{indicator.label}</p>
        <p className="text-lg font-semibold text-ink">
          {last.value}
          <span className="ml-1 text-xs font-normal text-slate-400">
            {indicator.unit}
          </span>
        </p>
      </div>
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="mt-3 w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label={`Tendencia de ${indicator.label}`}
      >
        <polyline
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
      <div className="mt-2 flex justify-between text-xs text-slate-400">
        {indicator.series.map((s) => (
          <span key={s.period}>{s.period}</span>
        ))}
      </div>
    </div>
  );
}
