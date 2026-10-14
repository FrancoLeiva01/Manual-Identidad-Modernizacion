// import { CodeBlock } from "../../components/codeBlock";
import { CodeBlockColapsable } from "../../components/codeBlockColapsable";
import loginPageCode from "../../snippets/login-page.tsx.txt?raw";
import topNavCode from "../../snippets/top-nav.tsx.txt?raw";
import sidebarCode from "../../snippets/sidebar.tsx.txt?raw";
import dashboardCode from "../../snippets/home-dashboard.tsx.txt?raw";
import listadoAgentesCode from "../../snippets/listado-agentes.tsx.txt?raw";



function Subtitulo({ children }: { children: string }) {
  return (
    <p className="mt-2 text-3xl font-bold uppercase tracking-wide text-cyan-600 dark:text-cyan-400">
      {children}
    </p>
  );
}

function ImagenSeccion({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="border border-gray-200 dark:border-slate-700 object-content w-full h-auto"
    />
  );
}

export default function FrontRrhhAsistencia() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl">
        Aqui en esta seccion del Front donde vamos a mostrar imagenes del
        sistema, paleta de colores y componentes que sean de utilidad si es que
        necesitan reutilizar algo de este proyecto.
      </p>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-5">
        Este Proyecto casi en su totalidad los estilos y colores son
        responsabilidad de <strong className="text-orange-500">Esteban</strong>{" "}
        porque el hizo el Recursos Humanos Principal (este sistema de Asistencia
        es solo otra rama). Asi que si el sistema es feo como patada en los
        huevos...es culpa de el.
      </p>
      <img
        src="/imagenesRRHH/diseñoRRHH.png"
        alt="Sistema RRHH Principal (responsabilidad de Esteban)"
        className="border border-gray-200 dark:border-slate-700 object-cover w-full h-auto"
      />
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-5">
        Mayormente en estos proyectos de{" "}
        <strong className="text-cyan-500">Recursos Humanos</strong> Predominan
        los colores basicos como Blanco, Cyan y azul, ademas del amarillo verde
        y rojo para etiquetas o acciones (como acciones o etiquetas de CREATE,
        UPDATE, DELETE).
      </p>

      {/* ================= LOGIN ================= */}
      <Subtitulo>Login</Subtitulo>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-1">
        Pantalla de acceso simple: logo del sistema ("RH Portal"), usuario y
        contraseña (con botón de mostrar/ocultar), botón "Iniciar Sesión" y un
        pie con la leyenda de la Municipalidad de San Fernando del Valle de
        Catamarca y links a Términos de uso / Política de privacidad.
      </p>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-1">
        En el caso de querer verlo, accede al link:{" "}
        <a
          className="text-cyan-600 dark:text-cyan-400 underline"
          href="https://rrhh-asistencia.apps.cc.gob.ar/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://rrhh-asistencia.apps.cc.gob.ar/login
        </a>
      </p>
      <CodeBlockColapsable codigo={loginPageCode} lenguaje="tsx" />

      {/* ================= LAYOUT GENERAL (TOP-NAV Y SIDEBAR) ================= */}
      <Subtitulo>Layout general (sidebar + topbar)</Subtitulo>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-1">
        El sidebar se organiza en grupos colapsables bajo el label "PRINCIPAL":
        Dashboard suelto, y después Asistencias (Listado de agentes, Cargar
        Horarios, Reportes), Adicionales (AFE, Extras, Resp. Patrimonial,
        Despacho), Parámetros (Estados, Horarios, Feriados, Logs) y Ayuda
        (Manual de Uso). El ítem activo se resalta en celeste. Arriba, la topbar
        tiene breadcrumb (ej. "RRHH | Dashboard"), campana de notificaciones con
        contador, toggle de tema claro/oscuro y avatar de usuario.
      </p>
      <CodeBlockColapsable codigo={sidebarCode} lenguaje="sidebar.tsx" />
      <CodeBlockColapsable codigo={topNavCode} lenguaje="top-nav.tsx" />

      {/* ================= DASHBOARD ================= */}
      <Subtitulo>Dashboard</Subtitulo>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-1">
        Filtro obligatorio de Secretaría y Dependencia arriba de todo. Debajo, 3
        cards de KPI (Empleados activos, Con asistencia, Pendientes de
        Asistencia), una barra de "Progresión de carga", y a la derecha un panel
        de "Composición de legajos" que pide seleccionar secretaría/dependencia
        antes de mostrar datos (estado vacío con ícono de búsqueda). Arriba a la
        derecha, selector de mes y año.
      </p>
      {/* <ImagenSeccion
        src="/imagenesRRHH/Dash.png"
        alt="Dashboard de RRHH Asistencia"
      /> */}
      <CodeBlockColapsable codigo={dashboardCode} lenguaje="home-dashboard.tsx" />

      {/* ================= LISTADO DE AGENTES ================= */}
      <Subtitulo>Listado de agentes</Subtitulo>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-1">
        Filtros por Apellido, CUIL, Número de Legajo, Lugar de Trabajo (con
        selector de ubicación), Secretaría y Dependencia, con botones "Aplicar
        Filtros" y "Limpiar Todo". Debajo, tabla con columnas Legajo, Nombre
        completo, CUIL y Acciones (menú "...").
      </p>
      <ImagenSeccion
        src="/imagenesRRHH/ListadoAgentes.png"
        alt="Listado de agentes"
      />
      <CodeBlockColapsable
        codigo={listadoAgentesCode}
        lenguaje="asistencia-listado.tsx"
      />
      <CodeBlockColapsable
        codigo={"// Pegá acá el código de la tabla de agentes"}
        lenguaje="tsx"
      />

      {/* ================= ADICIONALES ================= */}
      <Subtitulo>
        Adicionales (AFE / Extras / Resp. Patrimonial / Despacho)
      </Subtitulo>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-1">
        Cada una de las 4 secciones comparte la misma estructura, con pestañas
        Crear / Historial / Reportes. En "Crear" se arma una tabla nueva
        (indicando a qué mes se va a guardar), con filtros por Legajo, Área y
        Tramo, y acciones "Limpiar tabla", "Agregar agente", "Subir Excel" y
        "Guardar Tabla". La tabla muestra Legajo, Apellido y Nombre, y
        Horas/Área/Tramo. "Historial" es de solo lectura por período, y
        "Reportes" está pendiente de desarrollo.
      </p>
      <ImagenSeccion
        src="/imagenesRRHH/adicionales.png"
        alt="Adicionales - AFE"
      />
      <CodeBlockColapsable
        codigo={
          "// Pegá acá el código de las pestañas Crear/Historial/Reportes"
        }
        lenguaje="tsx"
      />
      <CodeBlockColapsable
        codigo={"// Pegá acá el código de la tabla editable de Adicionales"}
        lenguaje="tsx"
      />
      <CodeBlockColapsable
        codigo={"// Pegá acá el código del uploader de Excel"}
        lenguaje="tsx"
      />

      {/* ================= NOTIFICACIONES ================= */}
      <Subtitulo>Notificaciones</Subtitulo>
      <p className="text-gray-900 dark:text-slate-100 leading-relaxed text-xl my-1">
        Listado de notificaciones agrupadas por categoría (Licencias, Medicina
        Laboral), con contador de "sin leer" arriba de todo. Las nuevas se
        destacan con una etiqueta "NUEVA" y fondo tenue, con botones "Marcar
        leída" y "Marcar procesada" por separado. Las ya atendidas muestran
        chips de estado "Leída" / "Procesado" en vez de los botones.
      </p>
      <ImagenSeccion
        src="/imagenesRRHH/Notificaciones.png"
        alt="Notificaciones"
      />
      <CodeBlockColapsable
        codigo={"// Pegá acá el código de la tarjeta de notificación"}
        lenguaje="tsx"
      />
    </div>
  );
}
