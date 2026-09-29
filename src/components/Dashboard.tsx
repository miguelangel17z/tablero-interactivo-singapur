"use client";

import { useState } from "react";
import { CITY } from "@/data/singapore";
import OverviewSection from "@/components/sections/OverviewSection";
import DatasetsSection from "@/components/sections/DatasetsSection";
import GovernanceSection from "@/components/sections/GovernanceSection";
import DistrictsSection from "@/components/sections/DistrictsSection";

type SectionId = "overview" | "datasets" | "governance" | "districts";

const nav: { id: SectionId; label: string; icon: string }[] = [
  { id: "overview", label: "Panorama", icon: "◍" },
  { id: "datasets", label: "Catálogo de datos", icon: "▤" },
  { id: "governance", label: "Gobernanza", icon: "⚖" },
  { id: "districts", label: "Distritos", icon: "▦" },
];

export default function Dashboard() {
  const [active, setActive] = useState<SectionId>("overview");

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-slate-200 bg-white md:flex">
        <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white">
            CS
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Cerebro Singapur</p>
            <p className="text-xs text-slate-400">Gobernanza de Datos</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                active === item.id
                  ? "bg-brand text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-slate-200 p-4 text-xs text-slate-400">
          <p>{CITY.regions} regiones · {CITY.agencies} agencias</p>
          <p className="mt-1">Población {CITY.populationM} M</p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold text-ink">{CITY.name}</h1>
            <p className="text-xs text-slate-400">{CITY.tagline}</p>
          </div>
          {/* Mobile nav */}
          <nav className="flex gap-1 md:hidden">
            {nav.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                aria-label={item.label}
                className={`rounded-lg px-3 py-2 text-sm ${
                  active === item.id
                    ? "bg-brand text-white"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                {item.icon}
              </button>
            ))}
          </nav>
        </header>

        <main className="flex-1 p-6">
          {active === "overview" && <OverviewSection />}
          {active === "datasets" && <DatasetsSection />}
          {active === "governance" && <GovernanceSection />}
          {active === "districts" && <DistrictsSection />}
        </main>
      </div>
    </div>
  );
}
