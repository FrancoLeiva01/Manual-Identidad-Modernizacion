// PALETAS DE REFERENCIA PARA LA SECCION CAJA DE HERRAMIENTAS

export interface Color {
  nombre: string;
  hex: string;
}

export interface Paleta {
  nombre: string;
  sensacion: string;
  idealPara: string;
  fondo: Color;
  texto: Color;
  acento: Color;
  acento2?: Color;
  titulo: [string, string];
  imagen: string;
  estilo: string[];
}

export const paletas: Paleta[] = [
  {
    nombre: "SaaS elegante",
    imagen: "/paletas/saas-elegante.jpg",
    sensacion: "Cara, tranquila, editorial",
    idealPara: "Landings de servicios, portfolios",
    fondo: { nombre: "Cream", hex: "#F3EEE3" },
    texto: { nombre: "Ink Black", hex: "#111111" },
    acento: { nombre: "Burnt Orange", hex: "#D9541E" },
    titulo: ["El equipo que", "nunca duerme."],
    estilo: [
      "Títulos en sans-serif pesada con la última palabra en serif itálica (Instrument Serif o Fraunces)",
      "Mucho espacio en blanco, layout aireado tipo revista",
      "Botones redondeados (pill) en el color de acento",
      "Cards sólidas con bordes finos, sin sombras fuertes ni vidrio",
    ],
  },
  {
    nombre: "Arquitectura",
    imagen: "/paletas/arquitectura.jpg",
    sensacion: "Sobria, técnica, con un golpe de color",
    idealPara: "Patrimonio Urbano, obras, planos",
    fondo: { nombre: "Teal", hex: "#0F766E" },
    texto: { nombre: "Warm Ivory", hex: "#FFFBEB" },
    acento: { nombre: "Orange", hex: "#F97316" },
    titulo: ["Menos es", "más."],
    estilo: [
      "Tipografía condensada y gigante en mayúsculas (Anton, Bebas Neue u Oswald) con interlineado muy cerrado",
      "Líneas finas y grillas tipo plano técnico como decoración",
      "Fotos de edificios recortadas en bloques geométricos",
      "El naranja solo en una palabra, un botón o una barrita",
    ],
  },
  {
    nombre: "Editorial costero",
    imagen: "/paletas/editorial-costero.jpg",
    sensacion: "Fresca, con aire de revista",
    idealPara: "Turismo, cultura, eventos",
    fondo: { nombre: "Ice Blue", hex: "#ECFEFF" },
    texto: { nombre: "Ocean Teal", hex: "#0E7490" },
    acento: { nombre: "Coral Pink", hex: "#FB7185" },
    titulo: ["Cansado de no", "hacer nada"],
    estilo: [
      "Look de revista: títulos grandes con serif itálica mezclada",
      "Fotos de paisaje con esquinas muy redondeadas",
      "El texto va en el teal, nunca en negro puro",
      "Detalles en coral: subrayados, etiquetas, un botón",
    ],
  },
  {
    nombre: "Fintech",
    imagen: "/paletas/fintech.jpg",
    sensacion: "Moderna, confiable, juvenil",
    idealPara: "Apps de trámites y pagos",
    fondo: { nombre: "Navy", hex: "#0F1B3D" },
    texto: { nombre: "White", hex: "#FFFFFF" },
    acento: { nombre: "Hot Pink", hex: "#FF3D8B" },
    titulo: ["Dividí la cuenta", "antes de que llegue."],
    estilo: [
      "Mockups de celular flotando con la app",
      "Sans geométrica bold (Inter, Satoshi) con una palabra en serif itálica",
      "Cards oscuras un poco más claras que el fondo, radio grande",
      "El rosa en botones principales, números destacados y chips",
    ],
  },
  {
    nombre: "Datos y energía",
    imagen: "/paletas/datos-energia.jpg",
    sensacion: "Seria, premium, fotos en blanco y negro",
    idealPara: "Dashboards, datos abiertos",
    fondo: { nombre: "Charcoal", hex: "#1E1E1C" },
    texto: { nombre: "Sand", hex: "#D8CBB3" },
    acento: { nombre: "Electric Blue", hex: "#2F6BFF" },
    titulo: ["La red, rehecha para", "la era de la IA."],
    estilo: [
      "Fotos en blanco y negro (filtro grayscale), el azul es el único color de la página",
      "Títulos grandes en sans con tracking apretado",
      "Números y métricas grandes en tipografía mono o tabular",
      "Separadores con líneas finas color arena",
    ],
  },
  {
    nombre: "Tech nocturno",
    imagen: "/paletas/tech-nocturno.jpg",
    sensacion: "Potente, futurista, con textura",
    idealPara: "Eventos tech, innovación, juventud",
    fondo: { nombre: "Midnight Navy", hex: "#111827" },
    texto: { nombre: "Cool White", hex: "#F3F4F6" },
    acento: { nombre: "Electric Lime", hex: "#A3E635" },
    titulo: ["Mentes", "claras."],
    estilo: [
      "Tipografía condensada gigante en mayúsculas tipo póster",
      "Textura de ruido/grano sutil sobre el fondo",
      "El lima en una palabra del título, botones y pequeños glows",
      "Imágenes con alto contraste, casi monocromas",
    ],
  },
  {
    nombre: "Póster cálido",
    imagen: "/paletas/poster-calido.jpg",
    sensacion: "Enérgica, artesanal, con garabatos",
    idealPara: "Campañas, talleres, convocatorias",
    fondo: { nombre: "Crimson Red", hex: "#BE123C" },
    texto: { nombre: "Warm Cream", hex: "#FFF7ED" },
    acento: { nombre: "Peach Orange", hex: "#FDBA74" },
    titulo: ["Parecé un", "profesional."],
    estilo: [
      "Estética de póster impreso: títulos enormes en mayúsculas condensadas",
      "Garabatos, flechas y subrayados dibujados a mano en el color de acento",
      "Recortes de fotos tipo collage",
      "Poco texto, frases cortas y directas",
    ],
  },
  {
    nombre: "Interiorismo",
    imagen: "/paletas/interiorismo.jpg",
    sensacion: "Natural, cálida, hogareña",
    idealPara: "Vivienda, espacios verdes, ambiente",
    fondo: { nombre: "Verde bosque", hex: "#2E4A3A" },
    texto: { nombre: "Lino", hex: "#E9E1D6" },
    acento: { nombre: "Terracota", hex: "#E0904A" },
    titulo: ["La casa de", "tus sueños."],
    estilo: [
      "Fotos de interiores cálidas con esquinas muy redondeadas",
      "Grillas de puntitos chiquitos como decoración",
      "Títulos en serif elegante, cuerpo en sans liviana",
      "Botones terracota redondeados",
    ],
  },
  {
    nombre: "Amigable",
    imagen: "/paletas/amigable.jpg",
    sensacion: "Alegre, cercana, para chicos y mascotas",
    idealPara: "Zoonosis, adopciones, escuelas",
    fondo: { nombre: "Amarillo sol", hex: "#FFC81E" },
    texto: { nombre: "Grafito", hex: "#1F1F1F" },
    acento: { nombre: "Blanco", hex: "#FFFFFF" },
    titulo: ["Cuidamos a los que", "más querés."],
    estilo: [
      "Fotos de mascotas o chicos recortadas (sin fondo) que se salen del marco",
      "Sans redondeada y bold (Nunito, Poppins)",
      "Cards blancas con radio muy grande sobre el amarillo",
      "Formas orgánicas y blobs como decoración",
    ],
  },
  {
    nombre: "Deportivo",
    imagen: "/paletas/deportivo.jpg",
    sensacion: "Activa, limpia, con energía de marca deportiva",
    idealPara: "Deportes, torneos, polideportivos",
    fondo: { nombre: "Celeste suave", hex: "#B3DEE9" },
    texto: { nombre: "Azul marino", hex: "#002740" },
    acento: { nombre: "Naranja coral", hex: "#FD6B6B" },
    titulo: ["Ganá el", "próximo punto."],
    estilo: [
      "Títulos en sans bold itálica (inclinada), en mayúsculas, con sensación de velocidad",
      "Fotos de deportistas en movimiento, con desenfoque de movimiento y duotono azul",
      "Bloques de color sólido alternando celeste y azul marino, tipo grilla de branding",
      "El coral como una pincelada: una palabra, una franja diagonal, la pelota",
    ],
  },
  {
    nombre: "Tech contraste",
    imagen: "/paletas/tech-contraste.jpg",
    sensacion: "Futurista, de alto contraste, tipo keynote",
    idealPara: "Innovación, startups, presentaciones",
    fondo: { nombre: "Negro", hex: "#070201" },
    texto: { nombre: "Celeste", hex: "#B5DFF5" },
    acento: { nombre: "Rojo amapola", hex: "#E1081F" },
    titulo: ["Aprendé con", "experiencia."],
    estilo: [
      "Degradés de rojo a negro como fondo de las piezas destacadas",
      "Tipografía Helvetica / neo-grotesca, títulos en mayúsculas bold",
      "Siluetas de personas a contraluz y fotos casi en blanco y negro",
      "Paneles celeste claro que cortan el negro, con esquinas redondeadas",
    ],
  },
  {
    nombre: "Producto nocturno",
    imagen: "/paletas/producto-nocturno.jpg",
    sensacion: "Premium, de producto, tipo Apple",
    idealPara: "Lanzamientos, apps, un producto estrella",
    fondo: { nombre: "Ink Heather", hex: "#262A33" },
    texto: { nombre: "Putty Grey", hex: "#CDC8BC" },
    acento: { nombre: "Canary Flash", hex: "#FFE014" },
    titulo: ["Gran sonido.", "Pequeña píldora."],
    estilo: [
      "Producto en 3D grande y centrado, con etiquetas que lo señalan con líneas finas",
      "Título enorme en sans bold color masilla, con una palabra gigante de fondo muy tenue",
      "Botones pill amarillos con texto oscuro; chips tipo 'New' en amarillo",
      "Círculos concéntricos finos y grilla de puntitos detrás del producto",
    ],
  },
  {
    nombre: "Librería nocturna",
    imagen: "/paletas/libreria-nocturna.jpg",
    sensacion: "Íntima, literaria, elegante de noche",
    idealPara: "Bibliotecas, cultura, ferias del libro",
    fondo: { nombre: "Azul noche", hex: "#1B1A2E" },
    texto: { nombre: "Blanco marfil", hex: "#F4EDE1" },
    acento: { nombre: "Dorado", hex: "#E3B65B" },
    acento2: { nombre: "Rojo lacre", hex: "#C8372D" },
    titulo: ["Leé de", "noche."],
    estilo: [
      "Títulos en serif clásica grande (Playfair Display, Cormorant) con una palabra en itálica dorada",
      "El dorado solo en palabras destacadas del título; el rojo lacre en botones y etiquetas",
      "Navbar en forma de píldora centrada, con un punto rojo junto al logo",
      "Cards translúcidas oscuras con info chica (horarios, cupos, precios)",
    ],
  },
  {
    nombre: "Militar arena",
    imagen: "/paletas/militar-arena.jpg",
    sensacion: "Robusta, técnica, de equipamiento",
    idealPara: "Defensa civil, emergencias, maquinaria",
    fondo: { nombre: "Arena desierto", hex: "#CFB994" },
    texto: { nombre: "Verde oliva", hex: "#3F432A" },
    acento: { nombre: "Amarillo señal", hex: "#FFD21F" },
    titulo: ["Volá", "fuerte."],
    estilo: [
      "Título en sans geométrica extra bold, la última palabra en amarillo",
      "Producto grande centrado sobre fondo liso con viñeta suave",
      "Detalles en amarillo como anillos o contornos que resaltan partes del producto",
      "Etiquetas chicas en mayúsculas con mucho tracking (ej: 'AIR · EN MOVIMIENTO')",
    ],
  },
  {
    nombre: "Cafetería",
    imagen: "/paletas/cafeteria.jpg",
    sensacion: "Cálida, artesanal, apetitosa",
    idealPara: "Gastronomía, ferias, mercados",
    fondo: { nombre: "Latte cream", hex: "#EFE2CF" },
    texto: { nombre: "Coffee brown", hex: "#4A2C1D" },
    acento: { nombre: "Mustard", hex: "#E0A526" },
    titulo: ["Café &", "medialunas."],
    estilo: [
      "Título gigante en sans condensada bold, repetido abajo en eco cada vez más transparente",
      "Foto de producto recortada y centrada, con una servilleta o detalle en mostaza",
      "Botones pill mostaza; logo centrado arriba con subtítulo chiquito en mayúsculas",
      "Listado de direcciones con un ícono de ubicación y una línea vertical mostaza",
    ],
  },
];

// Texto listo para pegarle a una IA y que arme una página con este estilo.
export function conceptoPaleta(p: Paleta): string {
  const colores = [
    `- Fondo (60%): ${p.fondo.nombre} ${p.fondo.hex} → el color dominante, fondos de secciones.`,
    `- Texto (30%): ${p.texto.nombre} ${p.texto.hex} → títulos, párrafos e íconos.`,
    `- Acento (10%): ${p.acento.nombre} ${p.acento.hex} → solo botones principales, una palabra del título y detalles decorativos.`,
  ];
  if (p.acento2) {
    colores.push(
      `- Acento secundario (muy poco): ${p.acento2.nombre} ${p.acento2.hex} → botones o etiquetas puntuales.`,
    );
  }

  return [
    `Quiero que diseñes la página con este estilo visual. Respetá los colores exactos y la vibra.`,
    ``,
    `Concepto: ${p.nombre}`,
    `Vibra: ${p.sensacion}.`,
    `Ideal para: ${p.idealPara}.`,
    ``,
    `Paleta de colores (regla 60 · 30 · 10):`,
    ...colores,
    ``,
    `Estilo visual:`,
    ...p.estilo.map((e) => `- ${e}.`),
    ``,
    `Ejemplo de título: "${p.titulo[0]} ${p.titulo[1]}" (la parte "${p.titulo[1]}" destacada en serif itálica o en el color de acento).`,
    ``,
    `Reglas:`,
    `- No agregues otros colores fuera de la paleta (salvo blanco/negro para sombras sutiles).`,
    `- El acento es escaso: si aparece en todos lados deja de ser acento.`,
    `- Cuidá el contraste del texto para que se lea bien (WCAG AA).`,
  ].join("\n");
}
