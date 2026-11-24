import type { ComponentType } from "react";
import { Bug } from "lucide-react";

// ─── Teoría de testing ───────────────────────────────────────────────────
// Cada curso aparece en el sidebar (sección "Testing") y tiene su página en
// /testing/:id. Para sumar contenido, agregá temas al array `temas`.

export type Bloque =
  | { tipo: "texto"; texto: string }
  | { tipo: "lista"; titulo?: string; items: string[] }
  // Tarjetas sueltas (principios, cualidades, etapas...)
  | { tipo: "tarjetas"; items: { titulo: string; texto: string }[]; numeradas?: boolean }
  // Dos columnas enfrentadas (Validar vs Verificar, Tester vs QA)
  | {
      tipo: "comparacion";
      columnas: { titulo: string; texto: string; pregunta?: string; items?: string[] }[];
    }
  | { tipo: "mitos"; mitos: string[]; verdades: string[] }
  | { tipo: "pasos"; items: { titulo: string; texto?: string; items?: string[] }[] };

export interface Tema {
  id: string;
  titulo: string;
  bloques: Bloque[];
}

export interface CursoTesting {
  id: string;
  nombre: string;
  icono: ComponentType<{ size?: number; className?: string }>;
  color: string;
  resumen: string;
  temas: Tema[];
}

export const cursosTesting: CursoTesting[] = [
  {
    id: "qa",
    nombre: "Testing QA",
    icono: Bug,
    color: "#22c55e",
    resumen:
      "Qué es probar software, los 7 principios, qué hace un tester y qué hace un QA, y cómo es el proceso de pruebas de punta a punta.",
    temas: [
          {
            id: "que-es",
            titulo: "¿Qué es el testing de software?",
            bloques: [
              {
                tipo: "texto",
                texto:
                  "El testing de software es una suma de metodologías, herramientas y procesos para probar y encontrar defectos en un sistema o aplicación. El tester es el profesional que los lleva adelante.\n\nEs un proceso destructivo: se parte de asumir que hay defectos y se los sale a buscar.",
              },
              {
                tipo: "lista",
                titulo: "Objetivos",
                items: [
                  "Aportar calidad al producto que se está verificando (el objetivo principal).",
                  "Verificar que se cumplen los requerimientos funcionales y no funcionales.",
                  "Validar que lo que se prueba funciona como debe y como esperan los usuarios y demás implicados.",
                  "Reducir la posibilidad de funcionamientos inadecuados del software.",
                  "Generar confianza en el nivel de calidad del programa.",
                  "Prevenir defectos.",
                  "Entregar información a todos los implicados.",
                ],
              },
            ],
          },
          {
            id: "mitos",
            titulo: "Rompiendo mitos",
            bloques: [
              {
                tipo: "mitos",
                mitos: [
                  "El testing es probar que el software funciona.",
                  "El testing es una etapa que empieza cuando termina el desarrollo.",
                  "El tester es el enemigo del desarrollador.",
                ],
                verdades: ["Testing = calidad de producto", "Testing = calidad de proceso"],
              },
            ],
          },
          {
            id: "principios",
            titulo: "Los 7 principios del testing",
            bloques: [
              {
                tipo: "texto",
                texto: "Valen siempre, sin importar el proyecto en el que estés.",
              },
              {
                tipo: "tarjetas",
                numeradas: true,
                items: [
                  {
                    titulo: "Las pruebas muestran la presencia de defectos, no su ausencia",
                    texto:
                      "Probar reduce la probabilidad de que queden defectos sin descubrir, pero aunque no aparezca ninguno, eso no demuestra que el software sea correcto.",
                  },
                  {
                    titulo: "Las pruebas exhaustivas son imposibles",
                    texto:
                      "Probar todo no es factible, salvo en casos triviales. Un campo que acepta letras, caracteres especiales y números del 0 al 1000 ya tiene demasiadas combinaciones.",
                  },
                  {
                    titulo: "Las pruebas tempranas ahorran tiempo y dinero",
                    texto:
                      "Las pruebas estáticas y dinámicas tienen que arrancar lo antes posible en el ciclo de vida. Encontrar el defecto temprano evita cambios caros después.",
                  },
                  {
                    titulo: "Los defectos se agrupan",
                    texto:
                      "Unos pocos módulos suelen concentrar la mayoría de los defectos. Esas agrupaciones alimentan el análisis de riesgos para enfocar el esfuerzo de prueba.",
                  },
                  {
                    titulo: "Cuidado con la paradoja del pesticida",
                    texto:
                      "Si repetís siempre las mismas pruebas, en algún momento dejan de encontrar defectos nuevos, como el pesticida que deja de hacer efecto en los insectos.",
                  },
                  {
                    titulo: "Las pruebas dependen del contexto",
                    texto:
                      "Se prueba distinto según el contexto: herramientas disponibles, ambiente, tipo de producto, metodología de la empresa, etc.",
                  },
                  {
                    titulo: "La ausencia de errores es una falacia",
                    texto:
                      "No se pueden hacer todas las pruebas ni encontrar todos los defectos. Y encontrar y corregir muchos defectos no asegura, por sí solo, el éxito de un sistema.",
                  },
                ],
              },
            ],
          },
          {
            id: "cuando",
            titulo: "¿Cuándo probamos?",
            bloques: [
              {
                tipo: "texto",
                texto:
                  "El testing recorre todas las etapas del desarrollo: desde la creación de la documentación hasta la implementación del producto. El tester siempre está probando y su alcance es el producto completo.",
              },
              {
                tipo: "tarjetas",
                items: [
                  {
                    titulo: "Comienzo del desarrollo",
                    texto:
                      "Leer documentación, participar de las reuniones donde se decide el funcionamiento para dar el punto de vista experto, y pedir las herramientas necesarias para probar.",
                  },
                  {
                    titulo: "Cierre del desarrollo",
                    texto:
                      "Cuando desarrollo entrega el producto arrancan las pruebas, que siguen hasta la salida: se prueba antes y después de implementar. Si algo falla en producción, el tester es quien informa.",
                  },
                ],
              },
            ],
          },
          {
            id: "calidad",
            titulo: "¿Qué es la calidad?",
            bloques: [
              {
                tipo: "texto",
                texto:
                  "La calidad se define como un grado de excelencia. Para un usuario puede ser que el sistema cubra ciertas funciones, que ande bien, que sea compatible y adaptable… Muchas veces esos criterios no están escritos en ningún lado, pero igual se esperan.\n\n**QA (Quality Assurance)** o Aseguramiento de Calidad es la forma de medir la calidad, no solo del producto sino también del proceso de desarrollo.",
              },
            ],
          },
          {
            id: "tester-qa",
            titulo: "Tester y QA",
            bloques: [
              {
                tipo: "comparacion",
                columnas: [
                  {
                    titulo: "Tester",
                    texto:
                      "Prueba el software buscando errores, defectos o cualquier problema que pueda encontrar el usuario final, e informa al equipo sobre problemas o mejoras.",
                    items: [
                      "Diseñar el plan de pruebas.",
                      "Definir casos de prueba a partir de requerimientos funcionales, no funcionales y técnicos.",
                      "Definir las pruebas de integración.",
                      "Generar datos o lotes de prueba.",
                      "Ejecutar los casos de prueba.",
                      "Documentar las pruebas (evidencia).",
                      "Registrar los incidentes y seguirlos hasta su corrección.",
                      "Pruebas no funcionales: carga, estrés, performance, seguridad, etc.",
                    ],
                  },
                  {
                    titulo: "QA",
                    texto:
                      "Asegura la calidad y previene fallos desde el primer momento, cuidando tanto el producto como el proceso. Hace todo lo del tester, y además:",
                    items: [
                      "Diseña y prepara la estrategia general de calidad.",
                      "Revisa historias de usuario con el Product Owner.",
                      "Revisa criterios de aceptación (de ahí salen los escenarios de prueba).",
                      "Identifica dependencias entre historias de usuario.",
                      "Sugiere mejoras funcionales y de usabilidad.",
                      "Identifica los escenarios y flujos más vitales del negocio.",
                      "Colabora con los stakeholders en las pruebas UAT.",
                      "Prepara los ambientes de prueba.",
                      "Hace seguimiento de releases.",
                      "Automatiza pruebas funcionales.",
                      "Crea y aplica métricas de calidad de software.",
                    ],
                  },
                ],
              },
              {
                tipo: "lista",
                titulo: "Responsabilidades del tester",
                items: [
                  "Reunirse con usuarios del sistema para entender el alcance del proyecto.",
                  "Trabajar con desarrollo y con los equipos de soporte.",
                  "Hacer pruebas funcionales y no funcionales.",
                  "Escribir y ejecutar pruebas, manuales y automatizadas.",
                  "Probar en distintos entornos, incluyendo web y móvil.",
                  "Escribir informes de defectos.",
                  "Revisar la documentación.",
                  "Cumplir los plazos del proyecto.",
                  "Dar información objetiva al equipo y detectar potenciales fallos.",
                ],
              },
            ],
          },
          {
            id: "cualidades",
            titulo: "Cualidades del tester",
            bloques: [
              {
                tipo: "tarjetas",
                items: [
                  {
                    titulo: "Curiosidad",
                    texto: "Más allá de saber probar, tiene que darle curiosidad el producto para imaginar mejores planes de prueba.",
                  },
                  {
                    titulo: "Observación",
                    texto: "Está en los detalles que el resto del equipo no ve.",
                  },
                  {
                    titulo: "Pensamiento lateral",
                    texto: "Creatividad para resolver problemas por vías alternativas, siendo imaginativo con los resultados.",
                  },
                  {
                    titulo: "Comunicación",
                    texto: "Es quien reporta los defectos: necesita comunicarse bien, de forma oral y escrita.",
                  },
                  {
                    titulo: "Empatía",
                    texto: "Detrás de cada desarrollo hay al menos una persona que laburó en eso. Cuidar la forma cuida la relación.",
                  },
                ],
              },
            ],
          },
          {
            id: "validar-verificar",
            titulo: "Validar vs Verificar",
            bloques: [
              {
                tipo: "comparacion",
                columnas: [
                  {
                    titulo: "Validar",
                    texto: "El software debería ajustarse a lo que el cliente realmente pidió.",
                    pregunta: "¿Estamos construyendo el sistema correcto?",
                  },
                  {
                    titulo: "Verificar",
                    texto: "El software debería ajustarse a su especificación.",
                    pregunta: "¿Estamos construyendo el sistema correctamente?",
                  },
                ],
              },
            ],
          },
          {
            id: "proceso",
            titulo: "Proceso de testing",
            bloques: [
              {
                tipo: "pasos",
                items: [
                  {
                    titulo: "Planificación y control",
                    texto:
                      "**Planificar** es verificar que se entienden las metas y objetivos del cliente, de los stakeholders y del proyecto, y los riesgos que las pruebas tienen que cubrir.\n\n**Controlar** es tomar las medidas necesarias para cumplir el plan de prueba (que puede ir actualizándose), revisar los resultados y decidir en base a ellos.",
                  },
                  {
                    titulo: "Identificación y especificación",
                    items: [
                      "Revisar la base de pruebas.",
                      "Verificar las especificaciones del software bajo prueba.",
                      "Evaluar la testeabilidad de los requerimientos y del sistema.",
                      "Identificar los datos necesarios.",
                      "Diseñar y priorizar los casos de prueba.",
                      "Diseñar el entorno de prueba.",
                    ],
                  },
                  {
                    titulo: "Ejecución",
                    items: [
                      "Desarrollar y priorizar los casos de prueba.",
                      "Crear los datos de prueba.",
                      "Automatizar lo que sea necesario.",
                      "Armar conjuntos de casos (suites) para ejecutar de forma eficiente.",
                      "Implementar y verificar el ambiente.",
                      "Ejecutar los casos de prueba.",
                      "Registrar el resultado junto con la identidad y versión del software probado.",
                      "Comparar los resultados reales con los esperados.",
                    ],
                  },
                  {
                    titulo: "Evaluación y reporte",
                    items: [
                      "Evaluar los criterios de aceptación.",
                      "Reportar los resultados a los stakeholders.",
                      "Recolectar y consolidar la información de las actividades de prueba.",
                      "Verificar los entregables y que los defectos hayan sido corregidos.",
                      "Evaluar cómo salieron las actividades de testing y sacar lecciones aprendidas.",
                    ],
                  },
                ],
              },
            ],
          },
    ],
  },
];
