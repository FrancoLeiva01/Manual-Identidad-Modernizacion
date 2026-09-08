import { CodeBlock } from "../../components/codeBlock";

// Contenido de la pestaña FRONT para Hemeroteca.
// Escribí acá lo que quieras: texto, varios CodeBlock, lo que sea.
export default function FrontHemeroteca() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed">
        Acá va el detalle de diseño y componentes del front de Hemeroteca.
      </p>
      <CodeBlock
        codigo={`// Ejemplo: componente de ficha de libro
export function FichaLibro({ libro }: { libro: Libro }) {
  return <article>{libro.titulo}</article>;
}`}
        lenguaje="tsx"
      />
    </div>
  );
}