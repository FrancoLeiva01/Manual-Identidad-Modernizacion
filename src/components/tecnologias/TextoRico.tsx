// Texto de los tutoriales: párrafos separados por línea en blanco,
// líneas que empiezan con "•" como lista, y `backticks` como código.

function Inline({ texto }: { texto: string }) {
  return (
    <>
      {texto.split(/(`[^`]+`)/g).map((p, i) =>
        p.startsWith("`") && p.endsWith("`") ? (
          <code
            key={i}
            className="rounded bg-superficie-suave px-1.5 py-0.5 text-[0.9em] font-semibold text-acento"
          >
            {p.slice(1, -1)}
          </code>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
}

export function TextoRico({ texto, className = "" }: { texto: string; className?: string }) {
  const bloques = texto.split(/\n\n+/);

  return (
    <div className={"space-y-3 leading-relaxed " + className}>
      {bloques.map((b, i) => {
        const lineas = b.split("\n");
        if (lineas.every((l) => l.trim().startsWith("•"))) {
          return (
            <ul key={i} className="m-0 list-none space-y-1.5 p-0">
              {lineas.map((l, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-marca" />
                  <span>
                    <Inline texto={l.replace(/^\s*•\s*/, "")} />
                  </span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="m-0">
            <Inline texto={b} />
          </p>
        );
      })}
    </div>
  );
}
