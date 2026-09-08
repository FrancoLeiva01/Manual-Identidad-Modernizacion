import { lazy, type LazyExoticComponent, type ReactElement } from "react";

type ComponenteContenido = LazyExoticComponent<() => ReactElement>;

// 👉 Acá se registra qué archivo de contenido corresponde a cada proyecto,
// para Front y para Back. Si un id no está en el registro, la pestaña
// muestra un placeholder de "contenido pendiente" en vez de romper.
//
// Para sumar contenido a un proyecto nuevo:
// 1. Creá el archivo en content/front/<id>.tsx o content/back/<id>.tsx
//    (mirá hemeroteca.tsx o rrhh-asistencia.tsx como ejemplo).
// 2. Agregalo acá abajo con una línea más.

export const contenidoFront: Record<string, ComponenteContenido> = {
  Hemeroteca: lazy(() => import("../content/front/Hemeroteca")),
  "rrhh-asistencia": lazy(() => import("../content/front/RrhhAsistencia")),
};

export const contenidoBack: Record<string, ComponenteContenido> = {
  "rrhh-asistencia": lazy(() => import("../content/back/RrhhAsistenciaBack")),
};