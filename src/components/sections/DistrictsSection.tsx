import { districts } from "@/data/singapore";

const regionColors: Record<string, string> = {
  Central: "bg-red-50 text-brand",
  East: "bg-amber-50 text-amber-700",
  North: "bg-sky-50 text-sky-700",
  "North-East": "bg-indigo-50 text-indigo-700",
  West: "bg-emerald-50 text-emerald-700",
};

export default function DistrictsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-ink">Distritos y regiones</h2>
        <p className="mt-1 text-sm text-slate-500">
          Cobertura de datos por área de planificación de Singapur
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {districts.map((d) => (
          <div
            key={d.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-ink">{d.name}</h3>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  regionColors[d.region] ?? "bg-slate-100 text-slate-600"
                }`}
              >
                {d.region}
              </span>
            </div>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-xs text-slate-400">Población</dt>
                <dd className="font-medium text-slate-700">
                  {d.populationK}K
                </dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Área</dt>
                <dd className="font-medium text-slate-700">{d.areaKm2} km²</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Datasets</dt>
                <dd className="font-medium text-slate-700">{d.datasets}</dd>
              </div>
              <div>
                <dt className="text-xs text-slate-400">Calidad</dt>
                <dd className="font-medium text-slate-700">
                  {d.qualityScore}/100
                </dd>
              </div>
            </dl>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-brand"
                style={{ width: `${d.qualityScore}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
