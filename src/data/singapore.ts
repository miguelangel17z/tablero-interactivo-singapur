// Datos de referencia para "Cerebro Singapur".
// Cifras aproximadas con fines de demostración del tablero de gobernanza de datos.

export type Kpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down" | "flat";
  hint: string;
};

export type District = {
  id: string;
  name: string;
  region: "Central" | "East" | "North" | "North-East" | "West";
  populationK: number;
  areaKm2: number;
  datasets: number;
  qualityScore: number; // 0-100
};

export type Dataset = {
  id: string;
  name: string;
  agency: string;
  category: string;
  format: string;
  updated: string; // ISO date
  quality: number; // 0-100
  status: "Publicado" | "En revisión" | "Restringido";
};

export type Policy = {
  id: string;
  title: string;
  owner: string;
  scope: string;
  maturity: "Inicial" | "En desarrollo" | "Definido" | "Gestionado" | "Optimizado";
  summary: string;
};

export type Indicator = {
  id: string;
  label: string;
  unit: string;
  series: { period: string; value: number }[];
};

export const CITY = {
  name: "Singapur",
  tagline: "Cerebro Singapur · Gobernanza de Datos",
  populationM: 5.92,
  regions: 5,
  agencies: 16,
  updated: "2026-09-15",
};

export const kpis: Kpi[] = [
  {
    id: "population",
    label: "Población",
    value: "5.92 M",
    delta: "+0.8%",
    trend: "up",
    hint: "Residentes totales estimados",
  },
  {
    id: "datasets",
    label: "Conjuntos de datos abiertos",
    value: "1,284",
    delta: "+42",
    trend: "up",
    hint: "Publicados en el catálogo",
  },
  {
    id: "quality",
    label: "Índice de calidad de datos",
    value: "91.4",
    delta: "+1.6",
    trend: "up",
    hint: "Promedio ponderado sobre 100",
  },
  {
    id: "coverage",
    label: "Cobertura de linaje",
    value: "78%",
    delta: "-2%",
    trend: "down",
    hint: "Activos con trazabilidad documentada",
  },
];

export const districts: District[] = [
  { id: "downtown", name: "Downtown Core", region: "Central", populationK: 3, areaKm2: 4.4, datasets: 96, qualityScore: 94 },
  { id: "orchard", name: "Orchard", region: "Central", populationK: 1, areaKm2: 1.6, datasets: 54, qualityScore: 90 },
  { id: "bedok", name: "Bedok", region: "East", populationK: 279, areaKm2: 21.7, datasets: 132, qualityScore: 89 },
  { id: "tampines", name: "Tampines", region: "East", populationK: 265, areaKm2: 20.9, datasets: 141, qualityScore: 92 },
  { id: "woodlands", name: "Woodlands", region: "North", populationK: 254, areaKm2: 13.6, datasets: 118, qualityScore: 87 },
  { id: "yishun", name: "Yishun", region: "North", populationK: 227, areaKm2: 21.7, datasets: 103, qualityScore: 86 },
  { id: "sengkang", name: "Sengkang", region: "North-East", populationK: 265, areaKm2: 10.6, datasets: 121, qualityScore: 91 },
  { id: "hougang", name: "Hougang", region: "North-East", populationK: 227, areaKm2: 13.9, datasets: 98, qualityScore: 88 },
  { id: "jurongwest", name: "Jurong West", region: "West", populationK: 266, areaKm2: 14.7, datasets: 129, qualityScore: 90 },
  { id: "clementi", name: "Clementi", region: "West", populationK: 93, areaKm2: 9.5, datasets: 71, qualityScore: 89 },
];

export const datasets: Dataset[] = [
  { id: "ds-transit", name: "Ridership de transporte público", agency: "LTA", category: "Movilidad", format: "CSV / API", updated: "2026-09-10", quality: 95, status: "Publicado" },
  { id: "ds-hdb", name: "Precios de reventa HDB", agency: "HDB", category: "Vivienda", format: "CSV", updated: "2026-09-08", quality: 93, status: "Publicado" },
  { id: "ds-air", name: "Índice de calidad del aire (PSI)", agency: "NEA", category: "Ambiente", format: "API", updated: "2026-09-15", quality: 97, status: "Publicado" },
  { id: "ds-health", name: "Capacidad hospitalaria", agency: "MOH", category: "Salud", format: "API", updated: "2026-09-14", quality: 88, status: "En revisión" },
  { id: "ds-weather", name: "Estaciones meteorológicas", agency: "Met Service", category: "Ambiente", format: "API", updated: "2026-09-15", quality: 96, status: "Publicado" },
  { id: "ds-business", name: "Registro de empresas", agency: "ACRA", category: "Economía", format: "CSV / API", updated: "2026-08-30", quality: 90, status: "Publicado" },
  { id: "ds-crime", name: "Estadísticas de seguridad", agency: "SPF", category: "Seguridad", format: "CSV", updated: "2026-07-21", quality: 84, status: "Restringido" },
  { id: "ds-edu", name: "Directorio de escuelas", agency: "MOE", category: "Educación", format: "CSV / API", updated: "2026-09-01", quality: 92, status: "Publicado" },
];

export const policies: Policy[] = [
  {
    id: "p-classification",
    title: "Clasificación y sensibilidad de datos",
    owner: "Oficina de Datos (CDO)",
    scope: "Todas las agencias",
    maturity: "Gestionado",
    summary: "Esquema de niveles (Público, Interno, Confidencial, Restringido) alineado con normas nacionales.",
  },
  {
    id: "p-quality",
    title: "Marco de calidad de datos",
    owner: "Oficina de Datos (CDO)",
    scope: "Catálogo de datos abiertos",
    maturity: "Definido",
    summary: "Dimensiones de exactitud, completitud, oportunidad y consistencia con umbrales por dominio.",
  },
  {
    id: "p-privacy",
    title: "Protección de datos personales (PDPA)",
    owner: "Comisión de Protección de Datos",
    scope: "Datos personales",
    maturity: "Optimizado",
    summary: "Cumplimiento con la Personal Data Protection Act y controles de anonimización.",
  },
  {
    id: "p-stewardship",
    title: "Custodia y responsabilidad (data stewardship)",
    owner: "Cada agencia",
    scope: "Activos de datos",
    maturity: "En desarrollo",
    summary: "Roles de custodios asignados por dominio con acuerdos de nivel de servicio.",
  },
  {
    id: "p-sharing",
    title: "Intercambio de datos entre agencias",
    owner: "GovTech",
    scope: "Plataforma interoperable",
    maturity: "Definido",
    summary: "Contratos de datos y APIs gobernadas para compartir de forma segura entre entidades.",
  },
];

export const indicators: Indicator[] = [
  {
    id: "quality-trend",
    label: "Índice de calidad de datos",
    unit: "/100",
    series: [
      { period: "Abr", value: 87.2 },
      { period: "May", value: 88.1 },
      { period: "Jun", value: 88.9 },
      { period: "Jul", value: 89.5 },
      { period: "Ago", value: 90.2 },
      { period: "Sep", value: 91.4 },
    ],
  },
  {
    id: "datasets-trend",
    label: "Conjuntos publicados",
    unit: "datasets",
    series: [
      { period: "Abr", value: 1102 },
      { period: "May", value: 1150 },
      { period: "Jun", value: 1188 },
      { period: "Jul", value: 1221 },
      { period: "Ago", value: 1242 },
      { period: "Sep", value: 1284 },
    ],
  },
];
