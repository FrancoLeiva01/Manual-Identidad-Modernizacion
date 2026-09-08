import { CodeBlock } from "../../components/codeBlock";

export default function FrontRrhhAsistencia() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed">
        Acá va el detalle de diseño y componentes del front de RRHH Asistencia.
      </p>
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
