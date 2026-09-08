import { CodeBlock } from "../../components/codeBlock";

export default function BackRrhhAsistencia() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed">
        Acá va lo que más destaque del backend de RRHH Asistencia: endpoints,
        reglas de negocio, lo que sirva de referencia.
      </p>
      <CodeBlock
        codigo={`// Ejemplo: regla del período (21 al 20 del mes siguiente)
function calcularPeriodo(fecha: Date) {
  return fecha.getDate() >= 21
    ? { mes: fecha.getMonth() + 2, anio: fecha.getFullYear() }
    : { mes: fecha.getMonth() + 1, anio: fecha.getFullYear() };
}`}
        lenguaje="ts"
      />
    </div>
  );
}
