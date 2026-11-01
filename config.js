// CONFIGURACIÓN DEL LOCAL — Tío Charl'y
// Editá este archivo con los datos reales del comercio antes de publicar.

const BUSINESS = {
  // Nombre comercial que aparece en la página
  name: "Tío Charl'y",
  // Subnombre / eslogan (opcional)
  tagline: "PIZZERÍA",
  // Ciudad y provincia
  location: "Junín, Buenos Aires",
  // Dirección física
  address: "Av. Intendente de la Sota 500, esquina Colombia",
  // Número de WhatsApp en formato internacional SIN +, espacios ni guiones.
  // Ejemplo: 5491112345678
  whatsapp: "5490000000000",
  // Moneda: "ARS", "USD", etc.
  currency: "ARS",
  // Horario de atención (opcional, se muestra en el header)
  hours: "Lunes a Domingo 18:00 a 00:30",
  // Costo de delivery (opcional, 0 para consultar)
  deliveryFee: 0,
};

// PRODUCTOS — products
// Cada producto tiene:
//   id: identificador único
//   name: nombre visible
//   category: "pizzas" | "empanadas" | "bebidas" | "extras"
//   price: precio en la moneda definida arriba
//   description: texto corto que describe el producto
//   img: URL de la imagen (local, CDN o hosting)
const PRODUCTS = [
  {
    id: 1,
    name: "Muzzarella",
    category: "pizzas",
    price: 8500,
    description: "La clásica: salsa, muzzarella y aceitunas.",
    img: "assets/pizza-muzzarella.jpg"
  },
  {
    id: 2,
    name: "Napolitana",
    category: "pizzas",
    price: 9800,
    description: "Muzzarella, tomate y un toque de ajo.",
    img: "assets/pizza-napolitana.jpg"
  },
  {
    id: 3,
    name: "Jamón",
    category: "pizzas",
    price: 10500,
    description: "Muzzarella y jamón.",
    img: "assets/pizza-jamon.jpg"
  },
  {
    id: 4,
    name: "Empanadas",
    category: "empanadas",
    price: 1200,
    description: "Precio ilustrativo por unidad.",
    img: "assets/empanadas.jpg"
  },
  {
    id: 5,
    name: "Gaseosa",
    category: "bebidas",
    price: 2500,
    description: "Presentación y sabor a confirmar.",
    img: "assets/gaseosa.jpg"
  },
  {
    id: 6,
    name: "Agua",
    category: "bebidas",
    price: 1800,
    description: "Botella. Precio ilustrativo.",
    img: "assets/agua.jpg"
  }
];

// IMÁGENES DECORATIVAS
const IMAGES = {
  // Imagen del hero (pizza principal)
  hero: "assets/hero-pizza.jpg",
  // Imagen de la sección de ubicación (mapa/calle)
  map: "assets/mapa-junin.jpg"
};

// TEXTO DEL MENSAJE DE WHATSAPP (plantilla)
// Los campos {items}, {total}, {name}, {type}, {address}, {note} se reemplazan automáticamente.
const WHATSAPP_TEMPLATE =
  "¡Hola {name}! Gracias por contactar a Tío Charl'y. " +
  "Tu pedido:\n\n{items}\n\nTotal estimado: {total}\n" +
  "Modalidad: {type}\n{address}Aclaraciones: {note}\n\n" +
  "¿Me confirman disponibilidad y tiempo de demora?";

// OPINIONES (testimonios reales que se muestran en la sección de reseñas)
const REVIEWS = [
  {
    name: "María G.",
    text: "La mejor pizza de la zona. La masa está increíble, crocante por fuera y esponjosa por dentro. La muzzarella está para chuparse los dedos.",
    stars: 5,
    date: "Hace 2 semanas"
  },
  {
    name: "Carlos P.",
    text: "Pedimos los sábados a la noche, siempre llega caliente y en tiempo record. Las empanadas son una cosa rara, las recomiendo.",
    stars: 5,
    date: "Hace 1 mes"
  },
  {
    name: "Lucía T.",
    text: "Llevamos años yigando de pizzería y Tío Charl'y está al nivel. El trato es bárbaro y el sabor no tiene comparación.",
    stars: 5,
    date: "Hace 3 semanas"
  }
];