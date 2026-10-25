import { CodeBlock } from "../../components/codeBlock";

export default function BackRrhhAsistencia() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-texto leading-relaxed">
        Acá sinceramente nose que poner porque no entiendo NADA de lo que hace
        Lucio, pero el es crack, asi que vamos a limitarnos a hacer una especie
        de Stack Tecnologico de lo que usa Lucio (si el quiere un dia pasar un
        ejemplo de alguna funcion o lo que sea piola para gregar y q todos los
        backs tenga a mano que sirva, bienvenido sea)
      </p>

      <img
        src="/imagenesRRHH/LohagoTodo.png"
        alt="Descripción de la imagen"
        className="rounded-lg border border-borde max-w-xl mx-auto"
      />

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
