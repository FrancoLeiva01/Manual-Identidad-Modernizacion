import type { CSSProperties, ReactNode } from "react";

// Fondo fijo, igual en todas las páginas, con "personalidad tech"
// (inspirado en los sitios de Angular y Motion + garabatos de diseñador).
//  - Cada modo usa una paleta de src/content/paletas.ts:
//      oscuro → "Tech nocturno" (midnight navy + electric lime)
//      claro  → "SaaS elegante" (cream + burnt orange + ink)
//    Los colores salen de index.css (--fondo-*, --barritas-*, --brillo-*, --trazo).
//  - Base con una grilla muy tenue, como un lienzo de diseño.
//  - Dos campos de barritas "/" (arriba a la derecha y abajo a la izquierda)
//    que se desvanecen hacia el centro.
//  - Garabatos a mano alzada con temática UX/UI (solo en pantallas md+).
// Es todo CSS/SVG estático (sin imágenes, sin animación, sin blur), así que
// no le cuesta nada al scroll.

// Una barrita "/" de 18×18 px que se repite como patrón
const BARRITA =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18'%3E%3Cpath d='M6.5 13 L11.5 5' stroke='black' stroke-width='1.8' stroke-linecap='round'/%3E%3C/svg%3E\")";

// Recorta un degradé de color con la forma de las barritas, y lo desvanece
// con `zona` (un radial-gradient que dice dónde se ven).
function campoDeBarritas(color: string, zona: string): CSSProperties {
  const mascara = `${BARRITA}, ${zona}`;
  return {
    background: color,
    maskImage: mascara,
    WebkitMaskImage: mascara,
    maskComposite: "intersect",
    WebkitMaskComposite: "source-in",
    maskSize: "18px 18px, 100% 100%",
    WebkitMaskSize: "18px 18px, 100% 100%",
    maskRepeat: "repeat, no-repeat",
    WebkitMaskRepeat: "repeat, no-repeat",
  };
}

const capa = "pointer-events-none fixed inset-0 z-0";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

// Un garabato posicionado en la pantalla. `pos` son estilos top/right/etc.
function Garabato({
  pos,
  w,
  h,
  children,
}: {
  pos: CSSProperties;
  w: number;
  h: number;
  children: ReactNode;
}) {
  return (
    <svg
      className="absolute"
      style={pos}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function Texto({ x, y, children, size = 13 }: { x: number; y: number; children: string; size?: number }) {
  return (
    <text x={x} y={y} fill="currentColor" stroke="none" fontFamily={MONO} fontSize={size} letterSpacing="1">
      {children}
    </text>
  );
}

function Garabatos() {
  return (
    <div
      aria-hidden="true"
      className={capa + " hidden md:block"}
      style={{ color: "var(--trazo)", opacity: "var(--trazo-opacidad)" }}
    >
      {/* Asterisco / chispa */}
      <Garabato pos={{ top: "11%", right: "34%" }} w={60} h={60}>
        <path d="M30 6 L30 54" />
        <path d="M8 30 L53 29" />
        <path d="M13 12 L47 47" />
        <path d="M47 13 L14 46" />
      </Garabato>

      {/* Círculo a mano + flecha + nota de tipografía */}
      <Garabato pos={{ top: "17%", right: "6%" }} w={300} h={200}>
        <path
          d="M40 70 C 38 28, 230 14, 262 58 C 290 98, 150 126, 70 112 C 20 102, 22 60, 120 40 C 170 30, 230 34, 250 44"
          stroke="var(--barritas-a1)"
          strokeWidth="2.6"
        />
        <Texto x={92} y={80} size={22}>
          Aa · 900
        </Texto>
        <path d="M60 128 C 50 160, 70 180, 110 186" />
        <path d="M98 176 L111 186 L97 195" />
        <Texto x={120} y={190}>
          títulos que griten
        </Texto>
      </Garabato>

      {/* Checklist de diseño */}
      <Garabato pos={{ top: "48%", right: "4%" }} w={190} h={110}>
        {["contraste", "jerarquía", "espaciado"].map((t, i) => (
          <g key={t} transform={`translate(4 ${8 + i * 32})`}>
            <rect x="0" y="0" width="18" height="18" rx="2" />
            <path d="M3 9 L8 15 L20 -2" stroke="var(--barritas-a1)" strokeWidth="2.4" />
            <Texto x={30} y={14}>
              {t}
            </Texto>
          </g>
        ))}
      </Garabato>

      {/* Frame de Figma con manijas y medida */}
      <Garabato pos={{ bottom: "9%", right: "9%" }} w={260} h={170}>
        <Texto x={10} y={14} size={12}>
          Frame 1 · 320×180
        </Texto>
        <rect x="10" y="26" width="220" height="124" strokeDasharray="6 6" strokeWidth="1.5" />
        {[
          [10, 26],
          [230, 26],
          [10, 150],
          [230, 150],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x - 4} y={y - 4} width="8" height="8" fill="var(--fondo-base)" strokeWidth="1.5" />
        ))}
        <path d="M244 26 L244 150" strokeWidth="1.5" />
        <path d="M239 26 L249 26 M239 150 L249 150" strokeWidth="1.5" />
      </Garabato>

      {/* Cota "24px" */}
      <Garabato pos={{ top: "7%", left: "46%" }} w={150} h={40}>
        <path d="M8 24 L140 24" strokeWidth="1.5" />
        <path d="M8 16 L8 32 M140 16 L140 32" strokeWidth="1.5" />
        <path d="M16 18 L8 24 L16 30 M132 18 L140 24 L132 30" strokeWidth="1.5" />
        <Texto x={58} y={16} size={12}>
          24px
        </Texto>
      </Garabato>

      {/* Flecha curva + nota, abajo a la izquierda */}
      <Garabato pos={{ bottom: "14%", left: "22%" }} w={220} h={120}>
        <Texto x={4} y={18}>
          menos es más
        </Texto>
        <path d="M30 30 C 20 70, 70 100, 150 92" />
        <path d="M138 82 L151 92 L137 102" />
      </Garabato>

      {/* Escala de espaciado */}
      <Garabato pos={{ top: "4%", left: "21%" }} w={200} h={70}>
        {[8, 16, 24, 32].map((n, i) => {
          const x = 6 + i * 46;
          return (
            <g key={n}>
              <rect x={x} y={40 - n} width={n} height={n} strokeWidth="1.5" />
              <Texto x={x} y={60} size={11}>
                {String(n)}
              </Texto>
            </g>
          );
        })}
      </Garabato>

      {/* Muestras de color */}
      <Garabato pos={{ top: "31%", right: "29%" }} w={190} h={80}>
        {["var(--barritas-a1)", "var(--barritas-b1)", "var(--trazo)", "var(--fondo-base)"].map((c, i) => (
          <circle key={i} cx={22 + i * 42} cy={28} r={16} fill={c} strokeWidth="1.5" />
        ))}
        <Texto x={6} y={70} size={11}>
          60 · 30 · 10
        </Texto>
      </Garabato>

      {/* Cursor haciendo clic */}
      <Garabato pos={{ top: "40%", right: "21%" }} w={90} h={90}>
        <path d="M30 22 L30 70 L42 58 L52 80 L60 76 L50 55 L67 55 Z" strokeWidth="1.8" />
        <path d="M22 12 L16 4 M34 10 L36 1 M14 22 L5 20" stroke="var(--barritas-a1)" strokeWidth="2.4" />
      </Garabato>

      {/* Pluma Bézier con manijas */}
      <Garabato pos={{ bottom: "30%", right: "31%" }} w={240} h={120}>
        <path d="M14 96 C 70 0, 170 0, 226 90" strokeWidth="2.2" />
        <path d="M14 96 L70 18 M226 90 L170 14" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="70" cy="18" r="4" fill="var(--fondo-base)" strokeWidth="1.5" />
        <circle cx="170" cy="14" r="4" fill="var(--fondo-base)" strokeWidth="1.5" />
        <rect x="9" y="91" width="10" height="10" fill="var(--barritas-a1)" stroke="none" />
        <rect x="221" y="85" width="10" height="10" fill="var(--barritas-a1)" stroke="none" />
      </Garabato>

      {/* Wireframe de card */}
      <Garabato pos={{ top: "64%", right: "20%" }} w={150} h={150}>
        <rect x="6" y="6" width="138" height="138" rx="10" strokeWidth="1.6" />
        <rect x="18" y="18" width="114" height="60" rx="4" strokeWidth="1.4" />
        <path d="M18 18 L132 78 M132 18 L18 78" strokeWidth="1" />
        <path d="M18 96 L110 96" strokeWidth="3" />
        <path d="M18 112 L130 112 M18 124 L90 124" strokeWidth="1.4" />
      </Garabato>

      {/* Botón bocetado */}
      <Garabato pos={{ bottom: "4%", left: "44%" }} w={210} h={70}>
        <rect x="8" y="10" width="130" height="42" rx="21" strokeWidth="1.8" />
        <Texto x={44} y={36}>
          Botón
        </Texto>
        <path d="M144 18 C 160 10, 170 14, 176 24" strokeWidth="1.4" />
        <Texto x={150} y={44} size={11}>
          r 21
        </Texto>
      </Garabato>

      {/* Nota de accesibilidad subrayada */}
      <Garabato pos={{ bottom: "33%", left: "24%" }} w={170} h={60}>
        <Texto x={4} y={24}>
          WCAG AA ✓
        </Texto>
        <path d="M4 36 C 30 30, 50 42, 80 34 C 105 28, 125 40, 150 32" stroke="var(--barritas-a1)" strokeWidth="2.6" />
      </Garabato>

      {/* Capas apiladas */}
      <Garabato pos={{ top: "72%", left: "56%" }} w={130} h={110}>
        <path d="M65 20 L120 42 L65 64 L10 42 Z" strokeWidth="1.6" />
        <path d="M10 58 L65 80 L120 58" strokeWidth="1.6" />
        <path d="M10 74 L65 96 L120 74" strokeWidth="1.6" />
        <Texto x={84} y={16} size={11}>
          z
        </Texto>
      </Garabato>

      {/* Chispas sueltas */}
      <Garabato pos={{ top: "58%", right: "13%" }} w={30} h={30}>
        <path d="M15 2 L15 28 M2 15 L28 15" stroke="var(--barritas-a1)" />
      </Garabato>
      <Garabato pos={{ top: "24%", left: "62%" }} w={26} h={26}>
        <path d="M13 2 L13 24 M2 13 L24 13 M5 5 L21 21 M21 5 L5 21" strokeWidth="1.6" />
      </Garabato>
    </div>
  );
}

export function FondoFoto() {
  return (
    <>
      {/* Base: color de fondo + resplandores muy suaves + grilla de lienzo */}
      <div
        aria-hidden="true"
        className={capa}
        style={{
          backgroundColor: "var(--fondo-base)",
          backgroundImage: [
            "radial-gradient(ellipse 50% 40% at 95% 0%, var(--brillo-a), transparent 70%)",
            "radial-gradient(ellipse 50% 45% at 25% 100%, var(--brillo-b), transparent 70%)",
            "linear-gradient(var(--fondo-grilla) 1px, transparent 1px)",
            "linear-gradient(90deg, var(--fondo-grilla) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "100% 100%, 100% 100%, 72px 72px, 72px 72px",
        }}
      />

      {/* Barritas de arriba a la derecha */}
      <div
        aria-hidden="true"
        className={capa}
        style={campoDeBarritas(
          "linear-gradient(200deg, var(--barritas-a1) 10%, var(--barritas-a2) 60%)",
          "radial-gradient(ellipse 65% 70% at 100% 0%, black 0%, rgb(0 0 0 / 0.6) 48%, transparent 82%)",
        )}
      />

      {/* Barritas de abajo a la izquierda */}
      <div
        aria-hidden="true"
        className={capa}
        style={campoDeBarritas(
          "linear-gradient(20deg, var(--barritas-b1) 10%, var(--barritas-b2) 60%)",
          "radial-gradient(ellipse 70% 65% at 25% 100%, black 0%, rgb(0 0 0 / 0.55) 48%, transparent 82%)",
        )}
      />

      <Garabatos />
    </>
  );
}
