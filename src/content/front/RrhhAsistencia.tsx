import { CodeBlock } from "../../components/codeBlock";

export default function FrontRrhhAsistencia() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed">
        Aqui en esta seccion del Front vamos a mostrar imagenes del sistema,
        paleta de colores y componentes que sean de utilidad si es que necesitan
        reutilizar algo de este proyecto.
      </p>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed">
        Este Proyecto casi en su totalidad los estilos y colores son
        responsabilidad de <strong className="text-orange-500">Esteban</strong>{" "}
        porque el hizo el Recursos Humanos Principal (este sistema de Asistencia
        es solo otra rama). Asi que si el sistema es feo como patada en los
        huevos...es culpa de el.
      </p>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed">
        Mayormente en estos proyectos de{" "}
        <strong className="text-cyan-500">Recursos Humanos</strong> Predominan
        los colores basicos como Blanco, Cyan y azul, ademas del amarillo verde
        y rojo para etiquetas o acciones (como acciones o etiquetas de CREATE,
        UPDATE, DELETE).
      </p>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed"></p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <img
          src="/imagenesRRHH/estilos1.png"
          alt="Pantalla 1 - Sistema RRHH Asistencia"
          className="border border-gray-200 dark:border-slate-700 object-cover w-full h-auto"
        />
        <img
          src="/imagenesRRHH/estilos2.png"
          alt="Pantalla 2 - Sistema RRHH Asistencia"
          className="border border-gray-200 dark:border-slate-700 object-cover w-full h-auto"
        />
        <img
          src="/imagenesRRHH/estilos3.png"
          alt="Pantalla 3 - Sistema RRHH Asistencia"
          className="border border-gray-200 dark:border-slate-700 object-cover w-full h-auto"
        />
      </div>
      <CodeBlock
        codigo={`// Ejemplo: hook de carga de adicionales
const { data } = useQuery({
  queryKey: ["adicionales", periodo],
  queryFn: () => api.get(\`/adicionales?periodo=\${periodo}\`),
});`}
        lenguaje="tsx"
      />
    </div>
  );
}
