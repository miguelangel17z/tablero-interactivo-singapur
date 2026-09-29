# Cerebro Singapur: Investigación de Fuentes y Plan de Desarrollo

Este documento detalla las fuentes de datos reales (APIs) disponibles en Singapur que pueden alimentar nuestra tabla interactiva y los indicadores del proyecto. Además, define el plan de desarrollo dividido en fases para transformar el prototipo estático actual en una plataforma dinámica.

## 1. Investigación de Fuentes de Datos (Singapur)

Para que la tabla interactiva y los dashboards reflejen datos reales, utilizaremos las siguientes APIs oficiales del gobierno de Singapur.

### A. Data.gov.sg (GovTech Singapore)
* **Descripción**: El portal principal de datos abiertos del gobierno. Contiene más de 1,200 conjuntos de datos sobre economía, educación, medio ambiente, finanzas, salud, e infraestructura.
* **APIs Clave**:
  * **API de Búsqueda (Datastore API)**: Permite consultar registros específicos dentro de los datasets tubulares usando SQL-like queries o búsquedas de texto.
  * **APIs en Tiempo Real (v2)**: Datos climáticos, calidad del aire y disponibilidad de taxis.
* **Formato**: JSON, CSV.
* **Autenticación**: Acceso público sin llave para pruebas; se recomienda llave (API Key) para límites altos en producción.
* **Utilidad en el Proyecto**: Proveerá la metadata real para llenar la "Tabla Interactiva / Catálogo de Datos" con la lista oficial de datasets, sus agencias, fechas de actualización y formatos.

### B. LTA DataMall (Land Transport Authority)
* **Descripción**: Portal especializado en datos de transporte público y tráfico.
* **APIs Clave**:
  * Llegada de buses en tiempo real (Bus Arrival).
  * Rutas, paraderos y servicios de buses.
  * Incidentes de tráfico y disponibilidad de parqueos.
* **Formato**: JSON REST.
* **Autenticación**: Requiere registrarse para obtener una `AccountKey` gratuita, la cual se envía en los headers.
* **Utilidad en el Proyecto**: Aportará telemetría dinámica para la tabla si agregamos una vista de "Transporte en vivo".

### C. SingStat Table Builder (Department of Statistics - DOS)
* **Descripción**: El repositorio estadístico nacional oficial.
* **APIs Clave**:
  * Consulta de estadísticas demográficas, poblacionales, ingresos, y PBI.
* **Formato**: JSON (OpenAPI).
* **Autenticación**: API pública sin necesidad de llave (Límite: 100 llamadas/minuto).
* **Utilidad en el Proyecto**: Alimentará la sección de **Distritos** con datos demográficos reales de las regiones de planificación (ej. Población real de Downtown Core, Tampines, Bedok, etc.) y la sección de **Panorama (KPIs)**.

### D. OneMap SG API (Singapore Land Authority - SLA)
* **Descripción**: El mapa nacional oficial y servicio geoespacial.
* **APIs Clave**: Búsqueda de direcciones, geocodificación, ruteo y polígonos de zonas de planificación (GeoJSON).
* **Autenticación**: Basada en tokens temporales (72h) mediante cuenta de desarrollador.
* **Utilidad en el Proyecto**: Útil si la tabla interactiva requiere visualizar información en mapas o filtrar datos espaciales.

### E. NEA (National Environment Agency)
* **APIs Clave**: PSI (Índice de calidad del aire PM2.5), clima, temperatura, pronósticos.
* **Utilidad en el Proyecto**: Permite mostrar indicadores de calidad ambiental y enriquecer la gobernanza de datos de sensores IoT en la ciudad.

---

## 2. Plan de Desarrollo por Fases

El objetivo es reemplazar la data estática (`src/data/singapore.ts`) con llamadas dinámicas, creando una tabla interactiva robusta y un tablero funcional.

### Fase 1: Investigación y Diseño (Estado Actual)
- [x] Análisis del código actual (Next.js 14, Tailwind, App Router).
- [x] Mapeo de APIs públicas disponibles en Singapur (Data.gov.sg, LTA, SingStat).
- [x] Definición del plan de desarrollo y establecimiento de documentos de contexto (`PROJECT_CONTEXT.md`, `humanContext.md`).

### Fase 2: Capa de Datos y Backend (API Routes)
- [ ] Configurar las variables de entorno (`.env.local`) para las API Keys necesarias (ej. LTA DataMall).
- [ ] Crear *Route Handlers* en Next.js (`src/app/api/...`) para actuar como proxy seguro hacia las APIs de Singapur, evitando problemas de CORS y ocultando las llaves.
- [ ] Implementar un mecanismo de caché (ej. *revalidate* de Next.js) para no agotar los límites de peticiones (*rate limits*).
- [ ] Adaptar los modelos TypeScript actuales (`Dataset`, `District`, `Kpi`) a las respuestas reales de las APIs, o crear adaptadores.

### Fase 3: Evolución de la Tabla Interactiva (Core)
- [ ] Refactorizar `DatasetsSection.tsx` para consumir los datos dinámicos desde nuestra API local.
- [ ] **Características de la Tabla**:
  - Filtros múltiples (por Agencia, Formato, Estado).
  - Búsqueda en tiempo real optimizada (debounced search).
  - Ordenamiento por columnas (Sorting) ascendente/descendente.
  - Paginación para manejar el catálogo masivo (Data.gov.sg tiene +1,200 datasets).
- [ ] Agregar un componente Modal/Drawer que, al hacer clic en una fila, muestre los detalles del dataset (metadata, descripción, link de descarga).

### Fase 4: Integración de Vistas Adicionales y KPIs
- [ ] **Sección Distritos**: Conectar `DistrictsSection.tsx` con la API de SingStat para reflejar la demografía real por región.
- [ ] **Sección Panorama**: Hacer dinámicos los KPIs principales (Total de Datasets, Población, etc.) extrayendo totales de las APIs.
- [ ] **Sección Gobernanza**: Conectar o mapear políticas reales de Singapur (como el marco de protección de datos PDPA).

### Fase 5: Optimización UX/UI y Pulido
- [ ] Agregar estados de carga (*Loading Skeletons*) durante las peticiones asíncronas de la tabla.
- [ ] Manejo de errores amigable (*Error Boundaries* o *Toast notifications*) en caso de caída de una API externa.
- [ ] Diseño *Responsive*: asegurar que la tabla sea navegable en dispositivos móviles (scroll horizontal o diseño en tarjetas).

### Fase 6: Pruebas y Despliegue Final
- [ ] Verificar la compilación de producción (`npm run build`).
- [ ] Despliegue continuo en Vercel comprobando el funcionamiento de las variables de entorno en producción.
- [ ] Documentación final técnica y de usuario.
