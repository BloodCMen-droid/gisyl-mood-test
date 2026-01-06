document.addEventListener("DOMContentLoaded", () => {

  // 🔹 Relación contenedor ↔ productos
  const secciones = [
    { contenedorId: "productos-estampado", productos: productosEstampado },
    { contenedorId: "productos-bordado", productos: productosBordado },
    { contenedorId: "productos-personaje", productos: productosPersonaje },
    { contenedorId: "productos-Familia-estampado", productos: productosFamiliaEstampado },
    { contenedorId: "productos-Familia-bordado", productos: productosFamiliaBordado },
    { contenedorId: "productos-Conjunto-estampado", productos: productosConjuntoEstampado },
    { contenedorId: "productos-Conjunto-bordado", productos: productosConjuntoBordado },
    { contenedorId: "productos-Polo-estampado", productos: productosPoloEstampado },
    { contenedorId: "productos-Polo-bordado", productos: productosPoloBordado },
    { contenedorId: "productos-Pijamas", productos: productosPijamas }
  ];

  // 🔹 Render de UNA sección
  function renderSeccion(contenedorId, productos) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;

    let html = "";

    productos.forEach(p => {
      const mensaje = encodeURIComponent(
        `¡Hola! Me interesa el modelo ${p.titulo}\n\nEnlace: ${URL_BASE_MODELO}${p.id}`
      );

      html += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3" id="${p.id}">
          <div class="card card-hm h-100 border-0">
            <div class="img-wrapper">
              <img src="${p.imagen[0]}"
                   class="card-img-top"
                   loading="lazy"
                   decoding="async"
                   style="cursor:pointer"
                   alt="${p.descripcion}"
                   onclick='abrirModalProducto(${JSON.stringify(p)})'>
            </div>
            <div class="card-body d-flex flex-column px-0">
              <h6 class="card-title mb-1">${p.titulo}</h6>
              ${p.adicional ? `<p class="card-text small text-muted mb-2">${p.adicional}</p>` : ""}
              <p class="price mb-0">${p.precioPareja}</p>
              <p class="small text-muted mb-2">${p.precioUnidad}</p>
              <p class="small mb-3">Tallas: ${p.tallas}</p>
              <a href="${WHATSAPP_BASE}${mensaje}" target="_blank"
                 class="btn btn-hm mt-auto w-100">Pedir</a>
            </div>
          </div>
        </div>
      `;
    });

    contenedor.innerHTML = html;
  }

  // 🔹 IntersectionObserver (lazy load por contenedor)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const seccion = secciones.find(
        s => s.contenedorId === entry.target.id
      );

      if (seccion) {
        renderSeccion(seccion.contenedorId, seccion.productos);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "200px" });

  // 🔹 Observamos SOLO los contenedores
  secciones.forEach(s => {
    const contenedor = document.getElementById(s.contenedorId);
    if (contenedor) observer.observe(contenedor);
  });

  // 🔹 Scroll suave si viene con #
  const hash = window.location.hash;
  if (hash) {
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }
});

// 🔹 Modal
function abrirModalProducto(p) {
  document.getElementById("modalTitulo").textContent = p.titulo;
  document.getElementById("modalPrecio").textContent = p.precioPareja;
  document.getElementById("modalDescripcion").textContent = p.descripcion || "";

  document.getElementById("img1").src = p.imagen[0] || "";
  document.getElementById("img2").src = p.imagen[1] || p.imagen[0];
  document.getElementById("img3").src = p.imagen[2] || p.imagen[0];

  const mensaje = encodeURIComponent(
    `¡Hola! Me interesa el modelo ${p.titulo}\n\nEnlace: ${URL_BASE_MODELO}${p.id}`
  );

  document.getElementById("modalWhatsapp").href =
    WHATSAPP_BASE + mensaje;

  new bootstrap.Modal(
    document.getElementById("modalProducto")
  ).show();
}
