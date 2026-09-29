"use client";

import { useEffect, useState } from "react";

const ACCESS_PASSWORD = "singapur2026";
const STORAGE_KEY = "cerebro-singapur-auth";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authorized, setAuthorized] = useState(false);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAuthorized(window.localStorage.getItem(STORAGE_KEY) === "ok");
    }
    setReady(true);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim() === ACCESS_PASSWORD) {
      window.localStorage.setItem(STORAGE_KEY, "ok");
      setAuthorized(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (!ready) return null;

  if (authorized) return <>{children}</>;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl"
      >
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-lg font-bold text-white">
            CS
          </div>
          <h1 className="text-xl font-semibold text-ink">Cerebro Singapur</h1>
          <p className="mt-1 text-sm text-slate-500">
            Gobernanza de Datos · Acceso restringido
          </p>
        </div>

        <label className="mb-2 block text-sm font-medium text-slate-700">
          Contraseña
        </label>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Ingresa la contraseña"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
          autoFocus
        />
        {error && (
          <p className="mt-2 text-sm text-brand">Contraseña incorrecta.</p>
        )}
        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-brand py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
