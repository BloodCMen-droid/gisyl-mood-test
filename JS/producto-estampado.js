console.log("JS ESTAMPADOS CARGADO");






const productosEstampado = [
  {
  id: "Ppe1",
  titulo: "Poleras básicas",
  descripcion: "Polera básica personalizada con estampado minimalista, ideal para uso diario o como prenda en pareja, confeccionada a pedido con estilo sencillo.",
  adicional: "Color de polera a elegir",
  precioPareja: "S/. 165 (2 piezas)",
  precioUnidad: "Unidad: S/. 85",
  tallas: "XS, S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_01.webp"
  ]
},
{
  id: "Ppe2",
  titulo: "Estampado en espalda",
  descripcion: "Polera personalizada con estampado en la espalda, pensada para parejas o uso casual, elaborada a pedido con diseño moderno.",
  adicional: "Color de polera a elegir",
  precioPareja: "S/. 165 (2 piezas)",
  precioUnidad: "Unidad: S/. 85",
  tallas: "XS, S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_02.webp"
  ]
},
{
  id: "Ppe3",
  titulo: "Estampado pecho, mangas y bolsillo",
  descripcion: "Polera personalizada con estampado en pecho, mangas y bolsillo, ideal para quienes buscan un diseño completo y llamativo, confeccionada a pedido.",
  adicional: "Color opcional",
  precioPareja: "S/. 170 (2 piezas)",
  precioUnidad: "Unidad: S/. 90",
  tallas: "XS, S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_03.webp"
  ]
},
{
  id: "Ppe4",
  titulo: "Estampado Pecho + Nombre + Frase",
  descripcion: "Polera personalizada con estampado en el pecho que incluye nombre y frase especial, ideal para regalos o parejas, hecha a pedido.",
  adicional: "Color opcional",
  precioPareja: "S/. 175 (2 piezas)",
  precioUnidad: "Unidad: S/. 90",
  tallas: "XS, S, M, L | XL +5 soles",
  imagen: [
    "/IMG/Card_Estampado/Card_Pol_estampado_04.webp"
  ]
},
{
  id: "Ppe5",
  titulo: "Poleras Spiderman Match + iniciales",
  descripcion: "Poleras personalizadas con estampado inspirado en Spiderman y iniciales, ideales para parejas fans de superhéroes, confeccionadas a pedido.",
  adicional: "Color opcional",
  precioPareja: "S/. 165 (2 piezas)",
  precioUnidad: "Unidad: S/. 85",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_06.webp"
  ]
},
{
  id: "Ppe6",
  titulo: "You Me + Fecha en Romanos",
  descripcion: "Polera personalizada con estampado romántico You Me y fecha en números romanos, perfecta para parejas y aniversarios, hecha a pedido.",
  adicional: "Nombre opcional",
  precioPareja: "S/. 165 (2 piezas)",
  precioUnidad: "Unidad: S/. 85",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_07.webp"
  ]
},
{
  id: "Ppe7",
  titulo: "Duo Spiderman",
  descripcion: "Poleras personalizadas con estampado dúo de Spiderman, ideales para parejas fans del personaje, confeccionadas a pedido.",
  adicional: "Color opcional",
  precioPareja: "S/. 200 (2 piezas)",
  precioUnidad: "Unidad: S/. 105",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_08.webp"
  ]
},
{
  id: "Ppe8",
  titulo: "Poleras Frase + Iniciales",
  descripcion: "Polera personalizada con estampado de frase acompañada de iniciales, ideal para parejas o regalos con mensaje especial.",
  adicional: "Color opcional",
  precioPareja: "S/. 170 (2 piezas)",
  precioUnidad: "Unidad: S/. 90",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_estampado/Card_Pol_estampado_09.webp"
  ]
},
{
  id: "Ppe9",
  titulo: "Manos enlazadas",
  descripcion: "Polera personalizada con estampado de manos enlazadas, pensada para parejas y regalos románticos, confeccionada a pedido.",
  adicional: "Color opcional",
  precioPareja: "S/. 165 (2 piezas)",
  precioUnidad: "Unidad: S/. 85",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_010.webp"
  ]
},
{
  id: "Ppe10",
  titulo: "Nombres + Love en manga",
  descripcion: "Polera personalizada con estampado de nombres y detalle Love en la manga, ideal para parejas, elaborada a pedido.",
  adicional: "Color a elegir",
  precioPareja: "S/. 170 (2 piezas)",
  precioUnidad: "Unidad: S/. 90",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_011.webp"
  ]
},
{
  id: "Ppe11",
  titulo: "Corazón con iniciales + fecha",
  descripcion: "Polera personalizada con estampado de corazón, iniciales y fecha especial, perfecta para parejas y aniversarios.",
  adicional: "Color opcional",
  precioPareja: "S/. 160 (2 piezas)",
  precioUnidad: "Unidad: S/. 85",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_012.webp"
  ]
},
{
  id: "Ppe12",
  titulo: "Poleras Eva y Wall-E + Fecha e iniciales",
  descripcion: "Poleras personalizadas con estampado de Eva y Wall-E, acompañadas de fecha e iniciales, ideales para parejas fans de Pixar.",
  adicional: "Color opcional",
  precioPareja: "S/. 175 (2 piezas)",
  precioUnidad: "Unidad: S/. 90",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_013.webp"
  ]
},
{
  id: "Ppe13",
  titulo: "Diseño pecho + manga + espalda",
  descripcion: "Polera personalizada con estampado completo en pecho, manga y espalda, ideal para quienes buscan un diseño impactante, hecha a pedido.",
  adicional: "Color opcional",
  precioPareja: "S/. 200 (2 piezas)",
  precioUnidad: "Unidad: S/. 105",
  tallas: "S, M, L | XL +5 soles",
  imagen: [ 
    "/IMG/Card_Estampado/Card_Pol_estampado_014.webp"
  ]
},

];

