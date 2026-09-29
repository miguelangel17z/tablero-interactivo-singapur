import KpiCard from "@/components/KpiCard";
import Sparkline from "@/components/Sparkline";
import { CITY, kpis, indicators } from "@/data/singapore";

export default function OverviewSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-ink">Panorama general</h2>
        <p className="mt-1 text-sm text-slate-500">
          Estado de la gobernanza de datos de {CITY.name} · actualizado el{" "}
          {CITY.updated}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {indicators.map((ind) => (
          <Sparkline key={ind.id} indicator={ind} />
        ))}
      </div>
    </div>
  );
}
