const productos = [
    {
        nombre: "Poleras Personalizadas",
        cantidad: 2,
        precio: 165 + " aprox",
        unidad: "piezas",
        imagen: "./IMG/Card_index/Card_01.png",
        idSeccion: "seccion-estampados"
    },
    {
        nombre: "Polos Personalizados",
        cantidad: 1,
        precio: 30 + " aprox",
        unidad: "pieza",
        imagen: "./IMG/Card_index/Card_02.png",
        idSeccion: "seccion-estampados"
    },
    {
        nombre: "Poleras Personalizadas Familia",
        cantidad: 3,
        precio: 215 + " aprox",
        unidad: "piezas",
        imagen: "./IMG/Card_Familia_estampado/Card_Pol_Familia_estamapado_01.webp",
        idSeccion: "Seccion-Familia"
    },
    {
        nombre: "Pijamas Personalizadas",
        cantidad: 4,
        precio: 125 + " aprox",
        unidad: "piezas",
        imagen: "./IMG/Card_index/Card_03.png",
        idSeccion: "seccion-estampados"
    },
    {
        nombre: "Conjuntos Personalizados",
        cantidad: 4,
        precio: 330 + " aprox",
        unidad: "piezas",
        imagen: "./IMG/Card_index/Card_04.png",
        idSeccion: "seccion-conjuntos"
    }
];


const contenedor = document.getElementById("listaProductos");

if (contenedor) {
    contenedor.innerHTML = "";

    productos.forEach(p => {
        contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card-hm h-100">
                <div class="img-wrapper">
                    <img src="${p.imagen}" alt="${p.nombre}">
                </div>
                <div class="card-body d-flex flex-column text-center">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">${p.descripcion || ""}</p>
                    <p class="price">${p.cantidad} ${p.unidad} ≈ S/ ${p.precio}</p>
                   <a href="../HTML/Productos.html#${p.idSeccion}" class="btn-hm mt-auto">Ver más</a>

                </div>
            </div>
        </div>
        `;
    });
} else {
    console.warn("No se encontró el contenedor #listaProductos, código ignorado");
}
