/** Checkout configurável — troque pela URL de checkout definitiva quando disponível. */
export const CHECKOUT_URL = "https://pay.hotmart.com/U108633648K?checkoutMode=10";

export const STEPS = [
  { n: "1", title: "Abre", text: "Entrás al MiniApp organizado por categoría, nivel o condición del paciente. Encontrás lo que buscás en segundos." },
  { n: "2", title: "Elige", text: "Usás el generador express o seleccionás tus ejercicios favoritos guardándolos en colecciones personalizadas." },
  { n: "3", title: "Aplica", text: "Imprimís la ficha profesional o la mostrás en pantalla. Cada sesión lista en minutos, no en horas." },
];

export const NUMBERS = [
  { n: "3", t: "Tomos completos + Herramientas", d: "Físico, estiramientos, actividades grupales y herramientas inteligentes" },
  { n: "Filtros", t: "Buscador Inteligente", d: "Encontrá ejercicios por condición (silla de ruedas, post-caída, marcha)." },
  { n: "Sesión Express", t: "Generador de Sesiones", d: "Seleccioná el tiempo y foco; el MiniApp arma tu rutina automáticamente." },
  { n: "Colecciones", t: "Sistema de Colecciones", d: "Guardá y agrupá tus rutinas favoritas estilo carpetas para cada paciente o grupo." },
  { n: "+170", t: "Adaptados", d: "Movilidad reducida y recuperación post-caída." },
];

export const MINIAPP_SCREENS = [
  {
    id: "dashboard",
    badge: "Página Principal",
    title: "Dashboard & Filtros Rápidos",
    description:
      "Explorá por categorías o filtrá al instante según la condición de tu paciente. Todo al alcance de un toque.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904169/image_1.png",
  },
  {
    id: "buscador",
    badge: "Búsqueda Inteligente",
    title: "Buscador en Tiempo Real",
    description:
      "Encontrá ejercicios específicos por nombre, objetivo o equipamiento en milisegundos con skeletons de carga.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904330/image_2.png",
  },
  {
    id: "express",
    badge: "Inteligencia Aplicada",
    title: "Generador de Sesión Exprés",
    description:
      "Desplegá la bandeja flotante, seleccioná el tiempo disponible y la condición del paciente. Rutina lista en 2 segundos.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904419/image_3.png",
  },
  {
    id: "detalle",
    badge: "Ficha Físico-Clínica",
    title: "Vista de Detalle Completa",
    description:
      "Paso a paso ilustrado, objetivos, materiales necesarios, precauciones de seguridad y botón listo para exportar a PDF.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904505/image_4.png",
  },
  {
    id: "colecciones",
    badge: "Organización",
    title: "Gestión de Colecciones",
    description:
      "Agrupá tus rutinas en carpetas estilo Instagram para cada paciente o taller. Renombrá o editá cuando quieras.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904601/image_5.png", //[cite: 10]
  },
  {
    id: "carpeta",
    badge: "Listas Personalizadas",
    title: "Manejo Interno de Rutinas",
    description:
      "Accedé a tus sesiones guardadas y gestioná cada ejercicio de forma individual con doble confirmación de seguridad.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793904705/image_6.png",
  },
  {
    id: "pdf",
    badge: "Material Físico o Digital",
    title: "Exportar & Imprimir en PDF",
    description:
      "Generá fichas profesionales listas para imprimir en formato A4 con un solo clic. Entregá un material impecable a tus pacientes o talleres.",
    image: "https://res.cloudinary.com/xiupvhfs/image/upload/v1793905435/2026-11-05_16-00.png",
  },
];

export const GALLERY = [
  { src: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795873279/mk_-_60_Mecanismos_de_defensa_Freud.png`, alt: "caratula_60_Mecanismos_de_defensa_Freud" },
  { src: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795557537/Imagem_do_ChatGPT_24_de_nov._de_2026_18_45_40.png`, alt: "Ejercicio de movilidad reducida" },
  { src: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795557538/Imagem_do_ChatGPT_24_de_nov._de_2026_18_45_36.png`, alt: "Ficha de ejercicio sin equipamiento" },
  { src: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795557538/Imagem_do_ChatGPT_24_de_nov._de_2026_18_45_32.png`, alt: "Dinámica grupal con tarjetas" },
  { src: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795873280/mk_-_Mapa_das_5_Feridas_Emocionais.png`, alt: "Mapa_de_las_5_heridas_Emocionales" },
  { src: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795557572/Cartaz_Cl%C3%ADnico__Ferida_da_Humilha%C3%A7%C3%A3o.png`, alt: "Dinámica grupal musical" },
  { src: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795557573/Guia_Cl%C3%ADnica_da_Ferida_do_Abandono.png`, alt: "Dinámica grupal musical" },
  { src: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795557573/Herida_de_Injusticia__M%C3%A1scara_R%C3%ADgida.png`, alt: "Dinámica grupal musical" },
];

export const INCLUDES = [
  "+1.300 páginas organizadas por tomo, nivel y objetivo",
  "Ejercicios físicos, cognitivos, estiramientos y dinámicas grupales",
  "91 láminas imprimibles: sopas de letras, laberintos y secuencias",
  "Con y sin equipamiento · un ejercicio por página, ilustrado",
  "Listos para imprimir en A4 o mostrar en pantalla",
  "Para sesión individual, en grupo, rehabilitación o estimulación",
];

export const AUDIENCE = [
  { icon: "🩺", label: "Fisioterapeutas" },
  { icon: "🏃", label: "Educadores físicos" },
  { icon: "🧑‍⚕️", label: "Terapeutas ocupacionales" },
  { icon: "🤝", label: "Cuidadores y geriátricos" },
];

export const OBJECTIONS = [
  {
    q: "¿Voy a tener que ser experto para usarlo?",
    a: "No. Está todo categorizado con instrucciones claras y visuales. Si sabés buscar, sabés aplicarlo.",
  },
  {
    q: "¿Necesito instalar algo?",
    a: "No. Es 100% web, entrás con tu usuario y contraseña desde cualquier dispositivo al instante.",
  },
  {
    q: "Mis pacientes tienen movilidad reducida.",
    a: "Incluye un bono con +100 actividades adaptadas para silla de ruedas y movilidad reducida.",
  },
  {
    q: "Ya tengo material parecido.",
    a: "Acá son +1.300 páginas organizadas por categoría, listas para usar, más láminas imprimibles. Nunca más improvisás una sesión.",
  },
  {
    q: "Es caro para lo que trae.",
    a: "Por menos de lo que cobrás una sola sesión, te llevás los 3 tomos + 2 bonos. Para siempre.",
  },
];

export const BONUSES = [
  {
    img: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795558537/mk_-_Guia_Ilustrada_das_Emo%C3%A7%C3%B5es_em_Estudo_Cl%C3%A1ssico.png`,
    alt: "Bono - Guía paso a paso para la consulta y liberación de emociones atrapadas",
    title: "Guía paso a paso para la consulta y liberación de emociones atrapadas",
    text: "Una guía para aprender a conducir consultas con estructura, sensibilidad y flexibilidad, integrando la historia personal, las experiencias emocionales, los patrones de comportamiento y los mecanismos psicológicos de protección.",
    value: "Vale $32",
  },
  {
    img: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795557854/mk_-_Atlas_de_Explora%C3%A7%C3%A3o_Cl%C3%ADnica_em_Azul_e_Dourado.png`,
    alt: "Bono 1: 250 preguntas clínicas que nadie puede ignorar",
    title: "250 preguntas clínicas que nadie puede ignorar",
    text: "Su propósito es abrir espacios de conciencia, identificar conflictos internos y facilitar la comprensión de aquello que muchas veces permanece fuera del reconocimiento consciente.",
    value: "Vale $22",
  },
  {
    img: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795559262/mk_-_Gu%C3%ADa_Dourada_dos_Conflitos_Internos.png`,
    alt: "Bono 3: Mapa de los conflictos bloqueadores y del inconsciente",
    title: "Mapa de los conflictos bloqueadores y del inconsciente",
    text: "En el Camino al Inconsciente (Bioneuroemoción®) la premisa es clara: hay una emoción oculta detrás de la experiencia. El proceso es “inverso” al camino de la experiencia cotidiana: en vez de empezar por lo que pasó, se va deshaciendo el recorrido para llegar a la primera impresión emocional.",
    value: "Vale $28",
  },
  {
    img: `https://res.cloudinary.com/xiupvhfs/image/upload/v1795559397/mk_-_Livro_Mapa_dos_Mandatos_Familiares_em_Estudo_Luxuoso.png`,
    alt: "Bono 4: Mapa de los mandatos familiares y árbol genealógico",
    title: "Mapa de los mandatos familiares y árbol genealógico",
    text: "Cada persona construye su identidad a partir de una historia que comenzó mucho antes de su nacimiento. La familia constituye uno de los primeros espacios de aprendizaje emocional, donde se transmiten valores, creencias, normas, formas de relacionarse y maneras de interpretar el mundo.",
    value: "Vale $42",
  },
];

export const PURCHASES = [
  {
    name: "Valentina",
    city: "Madrid, España",
    time: "Hace 2 minutos",
  },
  {
    name: "Camila",
    city: "Ciudad de México, México",
    time: "Hace 5 minutos",
  },
  {
    name: "Lucía",
    city: "Bogotá, Colombia",
    time: "Hace 8 minutos",
  },
  {
    name: "Mateo",
    city: "Buenos Aires, Argentina",
    time: "Hace 12 minutos",
  },
  {
    name: "Sofía",
    city: "Santiago, Chile",
    time: "Hace 15 minutos",
  },
  {
    name: "Diego",
    city: "Lima, Perú",
    time: "Hace 21 minutos",
  },
  {
    name: "Martina",
    city: "Montevideo, Uruguay",
    time: "Hace 28 minutos",
  },
  {
    name: "Andrés",
    city: "Medellín, Colombia",
    time: "Hace 35 minutos",
  },
];

export const FAQ = [
  {
    q: "¿Cómo recibo el acceso al MiniApp?",
    a: "Al instante. Apenas completás tu pago, recibís tus credenciales por correo electrónico para ingresar de inmediato desde cualquier celular, tablet o computadora.",
  },
  {
    q: "¿Necesito ser especialista para aplicarlo?",
    a: "No. Cada ejercicio y actividad cuenta con instrucciones simples, objetivos claros e ilustraciones detalladas. Si sabés buscar en la plataforma, sabés aplicarlo al instante.",
  },
  {
    q: "¿Sirve para atención individual y en grupo?",
    a: "Sí. Encontrás material tanto para sesiones individuales como para dinámicas grupales, talleres o centros de día, pudiendo armar todo con el generador express.",
  },
  {
    q: "¿Cómo funciona el generador de sesión express y las colecciones?",
    a: "Elegís el tiempo, la condición o el foco del paciente, y el MiniApp arma tu rutina automáticamente. Además, podés guardar y agrupar tus ejercicios favoritos en carpetas personalizadas estilo colecciones.",
  },
  {
    q: "¿En qué dispositivos puedo usarlo y se puede imprimir?",
    a: "Podés usarlo en cualquier dispositivo con navegador web. Cada ficha cuenta con un botón dedicado para exportar en PDF e imprimir en formato A4 de forma limpia y profesional.",
  },
  {
    q: "¿Y si el MiniApp no cumple mis expectativas?",
    a: "Tenés 7 días de garantía incondicional. Si no te sirve o no se adapta a tu trabajo, te devolvemos el 100% de tu dinero sin preguntas.",
  },
];

export const ROWS = [
  {
    left: { text: "Contenido fijo, sin cambios", ok: false },
    right: { text: "Actualizaciones automáticas constantes", ok: true },
  },
  {
    left: { text: "Descargas manuales de cada versión", ok: false },
    right: { text: "Sin descargas: siempre la última versión", ok: true },
  },
  {
    left: { text: "Pesado y difícil de abrir en el celular", ok: false },
    right: { text: "Funciona perfecto en celular, tablet o PC", ok: true },
  },
  {
    left: { text: "Ocupa memoria de tu dispositivo", ok: false },
    right: { text: "No ocupa memoria", ok: true },
  },
  {
    left: { text: "Solo páginas estáticas", ok: false },
    right: { text: "Herramientas interactivas", ok: true },
  },
  {
    left: { text: "Ejercicios ilustrados", ok: true },
    right: { text: "+1.300 fichas ilustradas, paso a paso", ok: true },
  },
];