# Cerebro Singapur · Gobernanza de Datos

Tablero ("city brain") de gobernanza y datos abiertos para la ciudad de **Singapur**, adaptado a partir del proyecto _Cerebro Lima · Miraflores_.

Aplicación web de una sola página, protegida por contraseña, construida con **Next.js 14 (App Router) + TypeScript + Tailwind CSS** y lista para desplegar en **Vercel**.

## Secciones

- **Panorama** — KPIs de gobernanza (población, datasets abiertos, índice de calidad, cobertura de linaje) y tendencias.
- **Catálogo de datos** — Tabla filtrable de conjuntos de datos por agencia, categoría, formato, calidad y estado.
- **Gobernanza** — Políticas, custodia (stewardship) y madurez por dominio.
- **Distritos** — Cobertura de datos por área de planificación (Central, East, North, North-East, West).

## Acceso

La app está protegida por una contraseña simple en el cliente.

- Contraseña por defecto: `singapur2026`
- Se define en `src/components/PasswordGate.tsx` (constante `ACCESS_PASSWORD`).

> Nota: esta protección es solo de demostración en el navegador. Para un entorno real, mueve la autenticación al servidor (variables de entorno + middleware).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub/GitLab.
2. Importa el proyecto en Vercel (detecta Next.js automáticamente).
3. Deploy. No requiere variables de entorno para la demo.

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx        # Layout raíz + metadata
│  ├─ page.tsx          # Compone PasswordGate + Dashboard
│  └─ globals.css       # Estilos base (Tailwind)
├─ components/
│  ├─ PasswordGate.tsx  # Puerta de acceso por contraseña
│  ├─ Dashboard.tsx     # Shell con navegación lateral
│  ├─ KpiCard.tsx       # Tarjeta de indicador
│  ├─ Sparkline.tsx     # Mini-gráfico SVG (sin dependencias)
│  └─ sections/         # Vistas de cada sección
└─ data/
   └─ singapore.ts      # Datos de referencia de Singapur
```

## Datos

Los datos en `src/data/singapore.ts` son cifras aproximadas con fines de demostración. Sustitúyelos por fuentes reales (por ejemplo, APIs de datos abiertos) cuando corresponda.
