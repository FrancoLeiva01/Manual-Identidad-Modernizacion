// PALETAS DE REFERENCIA
// Sacadas de ejemplos que vimos en redes (reels de diseño y landings).
// Todas siguen la misma receta: un fondo, un color de texto y UN acento que grita.
// Se muestran en /tecnologias/recursos-diseno y también están en la skill
// .claude/skills/estilos-manual-identidad/referencias/paletas.md

export interface Color {
  nombre: string;
  hex: string;
}

export interface Paleta {
  nombre: string;
  sensacion: string;
  idealPara: string;
  // Orden fijo: fondo (60%), texto (30%), acento (10%)
  fondo: Color;
  texto: Color;
  acento: Color;
  // Palabra del título que va en serif itálica en la vista previa
  titulo: [string, string];
  // Captura de referencia (recortada de la imagen original), en public/paletas
  imagen: string;
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
  },
];
