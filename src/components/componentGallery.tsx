import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const datosDemo = [
  { dia: "Lun", valor: 12 },
  { dia: "Mar", valor: 19 },
  { dia: "Mié", valor: 14 },
  { dia: "Jue", valor: 27 },
  { dia: "Vie", valor: 9 }, // viernes nadie carga nada, es ley
];

interface ComponentGalleryProps {
  componentesDisponibles: string[];
}

export function ComponentGallery({ componentesDisponibles }: ComponentGalleryProps) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl p-5">
      <p className="mb-3 font-semibold text-sm text-gray-900 dark:text-slate-100">
        Piezas reciclables de este expediente
      </p>
      <ul className="mb-4 pl-5 text-[13px] text-gray-500 dark:text-slate-400 list-disc">
        {componentesDisponibles.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-3.5">
        <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-[10px] p-3">
          <p className="mb-2 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">card</p>
          <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg p-2.5">
            <p className="font-semibold text-[13px] m-0 text-gray-900 dark:text-slate-100">
              Legajo N° 1138
            </p>
            <p className="mt-1 text-xs text-gray-500 dark:text-slate-400 m-0">
              Estado: en trámite (como todo acá)
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-[10px] p-3">
          <p className="mb-2 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">tabla</p>
          <table className="w-full border-collapse text-xs bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100">
            <thead>
              <tr>
                <th className="border border-gray-200 dark:border-slate-700 px-2 py-1 text-left">
                  Legajo
                </th>
                <th className="border border-gray-200 dark:border-slate-700 px-2 py-1 text-left">
                  Horas
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 dark:border-slate-700 px-2 py-1">0231</td>
                <td className="border border-gray-200 dark:border-slate-700 px-2 py-1">12</td>
              </tr>
              <tr>
                <td className="border border-gray-200 dark:border-slate-700 px-2 py-1">0455</td>
                <td className="border border-gray-200 dark:border-slate-700 px-2 py-1">7</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-[10px] p-3">
          <p className="mb-2 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
            formulario
          </p>
          <form className="flex flex-col gap-2 text-xs" onSubmit={(e) => e.preventDefault()}>
            <label className="text-gray-700 dark:text-slate-300">
              Motivo
              <input
                type="text"
                placeholder="justificación creativa..."
                className="block w-full mt-1 px-1.5 py-1 border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 rounded-md text-xs"
              />
            </label>
            <button
              type="submit"
              className="bg-blue-600 text-white border-none rounded-md px-2.5 py-1.5 cursor-pointer text-xs"
            >
              Enviar a mesa de entradas
            </button>
          </form>
        </div>

        <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-[10px] p-3">
          <p className="mb-2 text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
            gráfico (recharts)
          </p>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={datosDemo}>
              <XAxis dataKey="dia" fontSize={11} />
              <YAxis fontSize={11} width={24} />
              <Tooltip />
              <Line type="monotone" dataKey="valor" stroke="#2563eb" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}