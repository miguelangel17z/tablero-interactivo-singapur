import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cerebro Singapur · Gobernanza de Datos",
  description:
    "Tablero de gobernanza y datos abiertos de la ciudad de Singapur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
