# Contexto del Proyecto: Cerebro Singapur

## Visión General
"Cerebro Singapur" es un tablero de gobernanza y datos abiertos (*city brain*) adaptado para la ciudad de Singapur.
Es una aplicación web *Single Page Application* (SPA) protegida por contraseña simple en el lado del cliente (`singapur2026`).

## Stack Tecnológico
- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Despliegue Objetivo**: Vercel

## Estado Actual
El proyecto cuenta con una estructura base de UI (`Dashboard.tsx`, secciones como `DatasetsSection`, `DistrictsSection`, `OverviewSection`, `GovernanceSection`).
Acabamos de implementar la **Fase 2**: creación de un Route Handler (`/api/datasets`) que sirve de proxy hacia los datos gubernamentales (por ahora en mock estructurado, listo para el fetch real).
La tabla interactiva (`DatasetsSection.tsx`) ya consume datos de manera asíncrona con estados de carga.

## Próximos Pasos (Hoja de Ruta Inmediata)
1. **Mejora de la Tabla Interactiva**: Potenciar `DatasetsSection.tsx` con filtros avanzados y vistas modales al hacer clic en una fila.
2. **Sección Distritos**: Conectar `DistrictsSection.tsx` con la API de SingStat.

## Cómo ejecutar el proyecto (Instrucciones)
1. Abre tu terminal y asegúrate de estar en el directorio `C:\Users\migue\Documents\Proyeto Singapur\Proyeto Singapur`.
2. Instala las dependencias (si no lo has hecho): `npm install`.
3. Inicia el servidor de desarrollo: `npm run dev`.
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
5. Usa la contraseña `singapur2026` para entrar.

## Estructura del Repositorio
- `/src/app`: Layout principal y rutas de Next.js (App Router).
- `/src/components`: Componentes reutilizables (KPI cards, Sparkline).
- `/src/components/sections`: Componentes de vista principal por cada sección del dashboard.
- `/src/data`: Información mock actual (a ser reemplazada por llamadas a API).

## Consideraciones Arquitectónicas
- Mantener la app ligera y lista para Vercel.
- Proteger las API keys usando `.env.local` y variables de entorno en producción.
- Usar almacenamiento en caché (Next.js Cache / revalidate) para no golpear los límites de las APIs de Singapur (Rate limits).
