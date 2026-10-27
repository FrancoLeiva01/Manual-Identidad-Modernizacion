import { lazy, type LazyExoticComponent, type ReactElement } from "react";

type ComponenteContenido = LazyExoticComponent<() => ReactElement>;

export const contenidoFront: Record<string, ComponenteContenido> = {
  Hemeroteca: lazy(() => import("../content/front/Hemeroteca")),
  "rrhh-asistencia": lazy(() => import("../content/front/RrhhAsistencia")),
};