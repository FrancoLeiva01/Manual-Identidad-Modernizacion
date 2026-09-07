// import { Bell } from "lucide-react";

// interface TopbarProps {
//   miga: string[]; // ["Manual", "Adicionales"]
// }

// export function Topbar({ miga }: TopbarProps) {
//   return (
//     <header className="h-[60px] bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-7 sticky top-0 z-10">
//       <p className="text-sm text-gray-500 dark:text-slate-400 m-0">
//         {miga.map((paso, i) => (
//           <span key={paso}>
//             {i > 0 && <span className="mx-1.5">›</span>}
//             <span
//               className={
//                 i === miga.length - 1 ? "text-gray-900 dark:text-slate-100 font-semibold" : ""
//               }
//             >
//               {paso}
//             </span>
//           </span>
//         ))}
//       </p>

//       <button
//         className="relative bg-transparent border-none text-gray-500 dark:text-slate-400 cursor-pointer p-1.5 rounded-lg flex hover:bg-gray-100 dark:hover:bg-slate-700"
//         title="3 PRs sin mergear"
//       >
//         <Bell size={18} />
//         <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] w-[15px] h-[15px] rounded-full flex items-center justify-center">
//           3
//         </span>
//       </button>
//     </header>
//   );
// }