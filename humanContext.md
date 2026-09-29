# Registro de Avances y Contexto Humano

Este archivo sirve como bitácora de progreso, explicando de manera humana y clara qué se ha estado trabajando en el proyecto "Cerebro Singapur".

---

## Sesión: 2026-09-29

### ¿Qué hemos hecho hoy?
1. **Inspección Inicial**: Revisamos el estado actual del proyecto, que actualmente utiliza Next.js 14 y Tailwind, alimentado por datos estáticos en `src/data/singapore.ts`.
2. **Investigación de Fuentes de Datos**: Realizamos una investigación profunda sobre qué fuentes reales del gobierno de Singapur pueden alimentar nuestro tablero. Identificamos:
   - **Data.gov.sg**: Para el catálogo general de datos abiertos.
   - **LTA DataMall**: Para transporte e incidentes en tiempo real.
   - **SingStat Table Builder**: Para datos demográficos de los distritos.
   - **OneMap SG API**: Para componentes geoespaciales y límites de distritos.
3. **Plan de Desarrollo**: Diseñamos una hoja de ruta de 6 fases detallada para evolucionar la plataforma estática actual a una dinámica (creación de la capa de API Routes en Next.js, mejora de la tabla interactiva, y conexión final de los datos).
4. **Documentación del Proyecto**:
   - Creamos `FUENTES_Y_PLAN_DESARROLLO.md` con todos los hallazgos técnicos.
   - Creamos `PROJECT_CONTEXT.md` para que la IA y tú tengan el contexto técnico al instante en el futuro.
   - Creamos esta misma bitácora (`humanContext.md`).

### ¿Cómo va el proyecto?
El proyecto está sólidamente estructurado en el frontend, y **ahora nos encontramos listos para iniciar la Fase 2**, que consiste en preparar el terreno backend (Route Handlers en Next.js) para empezar a inyectar vida a nuestra tabla interactiva.

### Próximo paso sugerido
Comenzar con la **Fase 2**: Implementar una API route de prueba en Next.js (`src/app/api/...`) para conectarnos a un endpoint público de Singapur (por ejemplo, el índice de calidad del aire PSI o SingStat) y confirmar que podemos extraer información sin problemas de CORS ni revelar secretos.

### Avance de Fase 2 (API Routes)
- Creamos la primera ruta interna (`src/app/api/datasets/route.ts`). Ésta será la encargada de comunicarse con las APIs del gobierno de Singapur, devolviendo los datos cacheados con políticas `stale-while-revalidate` (ISR) de 24 horas para no consumir los límites de la API.
- Refactorizamos la tabla interactiva (`DatasetsSection.tsx`) que antes consumía datos estáticos de forma instantánea. Ahora los carga mediante una petición asíncrona (usando `fetch` y `useEffect`), mostrando una bonita animación de "Skeletons" mientras llegan los datos, simulando un entorno de producción real.
- **Siguiente Paso**: Reemplazar la data de prueba en el backend con la petición (`fetch`) real a un endpoint gubernamental (como el índice de calidad de aire PSI de NEA o SingStat).
