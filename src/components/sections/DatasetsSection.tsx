"use client";

import { useEffect, useMemo, useState } from "react";
import { type Dataset } from "@/data/singapore";

const statusStyles: Record<Dataset["status"], string> = {
  Publicado: "bg-emerald-50 text-emerald-700",
  "En revisión": "bg-amber-50 text-amber-700",
  Restringido: "bg-red-50 text-brand",
};

export default function DatasetsSection() {
  const [query, setQuery] = useState("");
  const [datasets, setDatasets] = useState<Dataset[]>([]);
  const [loading, setLoading] = useState(true);

  // Cargar datos desde nuestro Route Handler (Backend)
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true);
      try {
        const searchQuery = query.trim() || "population"; // Por defecto buscar 'population'
        const res = await fetch(`/api/datasets?q=${encodeURIComponent(searchQuery)}`);
        if (res.ok) {
          const json = await res.json();
          setDatasets(json.data || []);
        }
      } catch (error) {
        console.error("Error fetching datasets:", error);
      } finally {
        setLoading(false);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  // Ya no filtramos en el cliente, el backend (SingStat) hace el trabajo
  const filtered = datasets;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-ink">
            Catálogo de datos abiertos
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {loading ? "Cargando..." : `${filtered.length} conjuntos de datos`}
          </p>
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre, agencia o categoría"
          className="w-72 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Conjunto de datos</th>
              <th className="px-4 py-3">Agencia</th>
              <th className="px-4 py-3">Categoría</th>
              <th className="px-4 py-3">Formato</th>
              <th className="px-4 py-3">Actualizado</th>
              <th className="px-4 py-3">Calidad</th>
              <th className="px-4 py-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              // Esqueleto de carga (Loading skeleton)
              [...Array(5)].map((_, i) => (
                <tr key={i} className="animate-pulse">
                  <td className="px-4 py-4"><div className="h-4 w-3/4 rounded bg-slate-200"></div></td>
                  <td className="px-4 py-4"><div className="h-4 w-1/2 rounded bg-slate-200"></div></td>
                  <td className="px-4 py-4"><div className="h-4 w-2/3 rounded bg-slate-200"></div></td>
                  <td className="px-4 py-4"><div className="h-4 w-1/3 rounded bg-slate-200"></div></td>
                  <td className="px-4 py-4"><div className="h-4 w-2/3 rounded bg-slate-200"></div></td>
                  <td className="px-4 py-4"><div className="h-4 w-1/2 rounded bg-slate-200"></div></td>
                  <td className="px-4 py-4"><div className="h-6 w-16 rounded-full bg-slate-200"></div></td>
                </tr>
              ))
            ) : filtered.length > 0 ? (
              filtered.map((d) => (
                <tr key={d.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-ink">{d.name}</td>
                  <td className="px-4 py-3 text-slate-600">{d.agency}</td>
                  <td className="px-4 py-3 text-slate-600">{d.category}</td>
                  <td className="px-4 py-3 text-slate-600">{d.format}</td>
                  <td className="px-4 py-3 text-slate-600">{d.updated}</td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-ink">{d.quality}</span>
                    <span className="text-slate-400">/100</span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles[d.status]}`}
                    >
                      {d.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-12 text-center text-slate-400">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl mb-2">🔍</span>
                    <p>Sin resultados para “{query}”.</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
