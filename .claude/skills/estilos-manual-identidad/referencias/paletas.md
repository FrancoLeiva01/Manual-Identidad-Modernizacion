# Paletas y estilos de referencia

Inspiración juntada de reels de diseño y landings que nos gustaron. Usar cuando haya que darle **estilo propio** a un sitio público o personal (no a los sistemas internos: esos usan la paleta del manual).

Las capturas originales están en [inspiracion/](inspiracion/). La misma lista vive en el código en `src/content/paletas.ts` y se muestra en `/tecnologias/recursos-diseno` ("Paletas que funcionan").

## La receta: 60 · 30 · 10

Todas las paletas son de **tres colores**:

- **60% fondo**: tranquilo (crema, marfil, navy, charcoal, o un color de marca apagado).
- **30% texto**: el contraste del fondo (tinta, blanco cálido, arena).
- **10% acento**: UN color que grita. Solo en botones, una palabra del título, un círculo decorativo o un borde. Si aparece en todos lados, deja de ser acento.

## Las paletas

| Nombre | Fondo (60) | Texto (30) | Acento (10) | Sensación | Ideal para | Captura |
| --- | --- | --- | --- | --- | --- | --- |
| SaaS elegante | Cream `#F3EEE3` | Ink Black `#111111` | Burnt Orange `#D9541E` | Cara, tranquila, editorial | Landings de servicios, portfolios | [ver](inspiracion/paleta-saas-elegante.png) |
| Arquitectura | Teal `#0F766E` | Warm Ivory `#FFFBEB` | Orange `#F97316` | Sobria, técnica | Patrimonio Urbano, obras | [ver](inspiracion/paleta-arquitectura.png) |
| Editorial costero | Ice Blue `#ECFEFF` | Ocean Teal `#0E7490` | Coral Pink `#FB7185` | Fresca, de revista | Turismo, cultura, eventos | [ver](inspiracion/paleta-editorial-costero.png) |
| Fintech | Navy `#0F1B3D` | White `#FFFFFF` | Hot Pink `#FF3D8B` | Moderna, confiable | Apps de trámites y pagos | [ver](inspiracion/paleta-fintech.png) |
| Datos y energía | Charcoal `#1E1E1C` | Sand `#D8CBB3` | Electric Blue `#2F6BFF` | Seria, premium | Dashboards, datos abiertos | [ver](inspiracion/paleta-datos-energia.png) |
| Tech nocturno | Midnight Navy `#111827` | Cool White `#F3F4F6` | Electric Lime `#A3E635` | Potente, futurista | Eventos tech, juventud | [ver](inspiracion/paleta-tech-nocturno.png) |
| Póster cálido | Crimson Red `#BE123C` | Warm Cream `#FFF7ED` | Peach Orange `#FDBA74` | Enérgica, artesanal | Campañas, talleres | [ver](inspiracion/paleta-poster-calido.png) |
| Interiorismo | Verde bosque `#2E4A3A` | Lino `#E9E1D6` | Terracota `#E0904A` | Natural, cálida | Vivienda, ambiente | [ver](inspiracion/landing-interiorismo-verde.png) |
| Amigable | Amarillo sol `#FFC81E` | Grafito `#1F1F1F` | Blanco `#FFFFFF` | Alegre, cercana | Zoonosis, adopciones, escuelas | [ver](inspiracion/landing-veterinaria-amarillo.png) |
| Deportivo | Celeste suave `#B3DEE9` | Azul marino `#002740` | Naranja coral `#FD6B6B` | Activa, limpia | Deportes, torneos, polideportivos | [ver](inspiracion/paleta-deportivo.jpg) |
| Tech contraste | Negro `#070201` | Celeste `#B5DFF5` | Rojo amapola `#E1081F` | Futurista, alto contraste | Innovación, startups | [ver](inspiracion/paleta-tech-contraste.jpg) |
| Producto nocturno | Ink Heather `#262A33` | Putty Grey `#CDC8BC` | Canary Flash `#FFE014` | Premium, de producto | Lanzamientos, apps | [ver](inspiracion/paleta-producto-nocturno.jpg) |
| Librería nocturna | Azul noche `#1B1A2E` | Blanco marfil `#F4EDE1` | Dorado `#E3B65B` (+ Rojo lacre `#C8372D` en botones) | Íntima, literaria | Bibliotecas, cultura | [ver](inspiracion/paleta-libreria-nocturna.jpg) |
| Militar arena | Arena desierto `#CFB994` | Verde oliva `#3F432A` | Amarillo señal `#FFD21F` | Robusta, técnica | Defensa civil, emergencias | [ver](inspiracion/paleta-militar-arena.jpg) |
| Cafetería | Latte cream `#EFE2CF` | Coffee brown `#4A2C1D` | Mustard `#E0A526` | Cálida, artesanal | Gastronomía, ferias | [ver](inspiracion/paleta-cafeteria.jpg) |

Los hex de Interiorismo y Amigable son aproximados (sacados a ojo de la captura), igual que el fondo y el texto de Producto nocturno y Militar arena (muestreados de la landing); el resto vienen escritos en el video.

Cada paleta de `src/content/paletas.ts` tiene además una lista `estilo` y la card tiene un botón **Copiar concepto** que arma un prompt (colores + vibra + estilo + reglas) para pegarle a una IA.

Ojo: **Arquitectura** usa el naranja `#F97316` del manual y **Editorial costero** un teal casi igual al cyan del manual: son las más fáciles de combinar con la identidad de la Muni.

## Trucos de estilo que se repiten en las referencias

1. **Una palabra en serif itálica** dentro de un título en sans pesada: "The ops teammate *never sleeps.*", "Split the bill before the *check lands.*". Es lo que más hace que una landing se vea "cara". En Tailwind: `<span className="font-serif italic font-medium">`, o mejor, cargar una serif de display (Fraunces, Playfair Display, Instrument Serif) como `--font-titulo`.
2. **Fotos en blanco y negro o desaturadas** + el acento como único color (Volta, Mesa). Con CSS: `grayscale` en la imagen.
3. **Bloques de color sólido**, no vidrio: cards y paneles opacos con radio grande (`rounded-2xl`/`rounded-3xl`) y sombra suave. Las imágenes también van recortadas con radios grandes.
4. **Formas decorativas del acento**: un círculo que se asoma por una esquina, una barrita, un borde lateral grueso detrás de una foto (ver la caja naranja detrás de la imagen en Mesa).
5. **Grillas de puntitos** como decoración (landing de interiorismo): `bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[12px_12px]` en un div chico con opacidad baja.
6. **Tipografía condensada y gigante** para posters (CLEAR MINDS, LOOK LIKE A PRO, LESS IS MORE): Anton, Bebas Neue o Oswald en `uppercase` con `leading-[0.85]`.
7. **Header blanco + hero de color pleno** (interiorismo, veterinaria): la navegación limpia arriba y toda la fuerza del color en el primer bloque.

## Modo claro sobre la foto de fondo

Decisión del manual (nov 2026): en modo claro, **las cajas encima de la foto son sólidas** (salvo en el Home, que usa `bg-panel-vidrio` y mantiene el vidrio) (`--panel-foto: #ffffff`, `--vidrio` al 94%). El vidrio blanco translúcido sobre una foto oscura queda grisáceo, sucio y se lee mal. En modo oscuro sí se mantiene el vidrio (`rgb(2 6 23 / 0.6)` + `backdrop-blur-md`), porque vidrio oscuro sobre foto oscura sí queda bien.
