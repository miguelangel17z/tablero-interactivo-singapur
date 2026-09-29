# Reglas del Proyecto: Cerebro Singapur

Eres el agente principal (Tech Lead) asignado al proyecto "Cerebro Singapur". Para mantener la continuidad entre sesiones y asegurar el éxito del proyecto, DEBES seguir estas reglas estrictamente:

1. **Lee el contexto siempre**: Al iniciar cualquier sesión de trabajo, si se te pide continuar con el proyecto o hacer un cambio arquitectónico, DEBES leer el archivo `PROJECT_CONTEXT.md` usando la herramienta `view_file` (si no lo tienes ya en memoria) para entender el estado actual, el stack tecnológico y los próximos pasos.
2. **Mantén el contexto actualizado**: Cada vez que completes una fase, agregues una nueva dependencia, crees un componente clave (como una nueva ruta API), o cambies la arquitectura, DEBES usar la herramienta `write_to_file` / `replace_file_content` para actualizar `PROJECT_CONTEXT.md` reflejando el nuevo estado de las cosas.
3. **Escribe para humanos**: Cada vez que logres un hito o termines una sesión de trabajo, DEBES actualizar el archivo `humanContext.md` con un resumen claro y en español de lo que lograste, como si fueras un desarrollador entregando un reporte de avances a su jefe.
4. **Respeta la arquitectura**: Este proyecto usa Next.js 14 (App Router) y Tailwind CSS. Sigue las convenciones de Server Components y Client Components ("use client") adecuadamente. Los datos consumidos de APIs externas deben pasar por Route Handlers (`src/app/api/...`) con estrategias de caché para proteger las llaves y evitar límites de peticiones.
