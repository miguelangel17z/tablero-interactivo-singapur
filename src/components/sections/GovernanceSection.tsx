import { policies, type Policy } from "@/data/singapore";

const maturityStyles: Record<Policy["maturity"], string> = {
  Inicial: "bg-slate-100 text-slate-600",
  "En desarrollo": "bg-amber-50 text-amber-700",
  Definido: "bg-sky-50 text-sky-700",
  Gestionado: "bg-indigo-50 text-indigo-700",
  Optimizado: "bg-emerald-50 text-emerald-700",
};

export default function GovernanceSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-ink">
          Gobernanza y políticas
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Marco de políticas, custodia y madurez por dominio
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {policies.map((p) => (
          <div
            key={p.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-ink">{p.title}</h3>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${maturityStyles[p.maturity]}`}
              >
                {p.maturity}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
            <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div>
                <dt className="text-slate-400">Responsable</dt>
                <dd className="font-medium text-slate-700">{p.owner}</dd>
              </div>
              <div>
                <dt className="text-slate-400">Alcance</dt>
                <dd className="font-medium text-slate-700">{p.scope}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
