import type { CSSProperties } from "react";

// Variable CSS con el color de cada tecnología. Se usa con clases tipo
// bg-(color:--tec)/15 o text-(color:--tec), así cada card toma su color.
export const varColor = (color: string) => ({ "--tec": color }) as CSSProperties;
