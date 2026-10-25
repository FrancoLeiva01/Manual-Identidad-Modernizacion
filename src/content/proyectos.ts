import type { ComponentType } from "react";
import {
  BookOpen,
  Clock3,
  Folder,
  LayoutDashboard,
  Truck,
  Wallet,
} from "lucide-react";

export interface Miembro {
  nombre: string;
  rol: string;
  color: string;
  imagen?: string;
}

export type EstadoTipo = "OK" | "PELIGRO" | "CAOS";

export interface Proyecto {
  id: string;
  imagenes?: string[];
  expediente: string;
  nombre: string;
  color: string;
  patron?: "cuadriculado";
  descripcionGeneral: string;
  stack: string[];
  componentes: string[];
  equipo: Miembro[];
  lenguaje: string | string[];
  icono: ComponentType<{ size?: number; className?: string }>;
  estado: string;
}

// ACA CREAMOS CADA EQUIPO DE CADA PROYECTO

const equipoRRHH_Asistencia: Miembro[] = [
  {
    nombre: "Franco",
    rol: "Front (Ponele)",
    imagen: "/caricaturas/franco.png",
    color: "#DBEAFE",
  },
  {
    nombre: "Gabi",
    rol: "Front",
    imagen: "/caricaturas/gabi.png",
    color: "#DCFCE7",
  },
  {
    nombre: "Lucio",
    rol: "El Back-end Definitivo",
    imagen: "/caricaturas/lucio.png",
    color: "#FEF3C7",
  },
];

const equipoHemeroteca: Miembro[] = [
  {
    nombre: "Franco",
    rol: "Front (Ponele)",
    imagen: "/caricaturas/franco.png",
    color: "#DBEAFE",
  },
  {
    nombre: "Nahuel",
    rol: "Front",
    imagen: "/caricaturas/nahuel.png",
    color: "#DCFCE7",
  },
];

const equipoRecursosHumanos: Miembro[] = [
  {
    nombre: "Esteban",
    rol: "Front",
    imagen: "/caricaturas/esteban.png",
    color: "#DBEAFE",
  },
  {
    nombre: "Diego",
    rol: "Back",
    imagen: "/caricaturas/diego.png",
    color: "#DCFCE7",
  },
];

const equipoFoodTruck: Miembro[] = [
  {
    nombre: "Lautaro",
    rol: "Back",
    imagen: "/caricaturas/lautaro.png",
    color: "#DBEAFE",
  },
  {
    nombre: "Maxi",
    rol: "Front",
    imagen: "/caricaturas/maxi.png",
    color: "#DCFCE7",
  },
  {
    nombre: "Gonza",
    rol: "Product Owner",
    imagen: "/caricaturas/gonza.png",
    color: "#DCFCE7",
  },
];

// Equipos pendientes de cargar: sin `imagen` se muestra un marco vacío
const equipoSiprom: Miembro[] = [
  { nombre: "Integrante 1", rol: "Rol por definir", color: "#DBEAFE" },
  { nombre: "Integrante 2", rol: "Rol por definir", color: "#DCFCE7" },
  { nombre: "Integrante 3", rol: "Rol por definir", color: "#FEF3C7" },
];

const equipoDashes: Miembro[] = [
  { nombre: "Integrante 1", rol: "Rol por definir", color: "#DBEAFE" },
  { nombre: "Integrante 2", rol: "Rol por definir", color: "#DCFCE7" },
  { nombre: "Integrante 3", rol: "Rol por definir", color: "#FEF3C7" },
];

export const proyectos: Proyecto[] = [
  {
    id: "Hemeroteca",
    imagenes: [
      "/imagenesHemeroteca/hemeroteca.png",
      "/capturas/hemeroteca-2.png",
    ],
    expediente: "EXP-0001/26",
    nombre: "Hemeroteca Municipal",
    color: "#93C5FD",
    patron: "cuadriculado",
    descripcionGeneral:
      "Este sistema de RRHH permite gestionar la asistencia de los empleados de manera eficiente y precisa, brindando herramientas para el registro, seguimiento y análisis de la asistencia laboral.",
    stack: ["React", "TypeScript"],
    componentes: ["Componente 1", "Componente 2"],
    equipo: equipoHemeroteca,
    lenguaje: ["tsx"],
    icono: BookOpen,
    estado: "Terminado",
  },
  {
    id: "rrhh-asistencia",
    imagenes: [
      "/imagenesRRHH/LOGINrrhh.png",
      "/imagenesRRHH/adicionales.png",
      "/imagenesRRHH/calendario.png",
    ],
    expediente: "EXP-0002/26",
    nombre: "RRHH | Asistencia",
    color: "#475569",
    descripcionGeneral: `Sistema de gestión de asistencia, adicionales y notificaciones para RRHH.

ADICIONALES (AFE, Extras, Resp. Patrimonial, Despacho)
- Crear: arma la tabla buscando agentes por CUIL/legajo, o subiendo un Excel con las 4 hojas (se lee en el navegador, no se guarda solo — se revisa/edita antes de confirmar).
- Detecta mes/año automático desde el Excel, con opción de cambiarlo a mano para corregir a una persona puntual.
- El período a guardar se calcula solo según el día del mes (regla del 21 al 20 del mes siguiente).
- Filtros propios: legajo, y Área/Tramo (AFE) o Secretaría/Dependencia (el resto).
- Botón "Limpiar tabla" con confirmación de doble click, y descarga automática de un Excel de resultado al guardar.
- Bloqueo automático de Crear del día 26 en adelante de cada mes (Historial y Reportes siguen libres).
- Historial: consulta de solo lectura por mes/año.
- Reportes: pendiente de desarrollo.

FERIADOS / DÍAS NO LABORABLES
- Listado con filtros por Tipo (Nacional, Provincial, Municipal, Puente) y por Mes/Año.
- Crear/Editar/Eliminar bloqueados para el rol USUARIO_ASISTENCIA (solo lectura para ese rol).

LOGS DE AUDITORÍA
- Usuario, Entidad, Acción y Fecha, con comparador visual de Antes/Después resaltando los campos modificados.

NOTIFICACIONES
- Campanita en el navbar con contador de no leídas.
- Marcar "Leída" y "Procesada" por separado, con actualización automática cada 5 minutos y al volver a la pestaña.

ROLES Y PERMISOS
- Login contra RRHH externo, con el rol real de Asistencia pedido aparte a /roles/mi-rol.
- ADMIN ve todo; USUARIO_ASISTENCIA tiene el sidebar recortado (sin Horarios ni Logs).
- Usuario sin rol cargado en Asistencia: se desloguea automático con mensaje claro, sin dejarlo entrar a ninguna pantalla.`,
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL"],
    componentes: ["Componente 1", "Componente 2"],
    equipo: equipoRRHH_Asistencia,
    lenguaje: ["tsx"],
    icono: Clock3,
    estado: "en proceso",
  },
  {
    id: "RecursosHumanos",
    expediente: "EXP-0003/26",
    nombre: "Recursos Humanos",
    color: "#475569",
    descripcionGeneral: "Descripción pendiente de completar.",
    stack: ["React", "TypeScript"],
    componentes: ["Componente 1", "Componente 2"],
    equipo: equipoRecursosHumanos,
    lenguaje: "tsx",
    icono: Folder,
    estado: "En proceso",
  },
  {
    id: "FoodTruck",
    expediente: "EXP-0004/26",
    nombre: "Food Truck",
    color: "#475569",
    descripcionGeneral: "Descripción pendiente de completar.",
    stack: ["React", "TypeScript"],
    componentes: ["Componente 1", "Componente 2"],
    equipo: equipoFoodTruck,
    lenguaje: "tsx",
    icono: Truck,
    estado: "en proceso",
  },
  {
    id: "Siprom",
    expediente: "EXP-0005/26",
    nombre: "Siprom",
    color: "#475569",
    descripcionGeneral: "Descripción pendiente de completar.",
    stack: ["React", "TypeScript"],
    componentes: ["Componente 1", "Componente 2"],
    equipo: equipoSiprom,
    lenguaje: "tsx",
    icono: Wallet,
    estado: "en proceso",
  },
  {
    id: "Dashes",
    expediente: "EXP-0006/26",
    nombre: "Dashes",
    color: "#475569",
    descripcionGeneral: "Descripción pendiente de completar.",
    stack: ["React", "TypeScript"],
    componentes: ["Componente 1", "Componente 2"],
    equipo: equipoDashes,
    lenguaje: "tsx",
    icono: LayoutDashboard,
    estado: "en proceso",
  },
];
