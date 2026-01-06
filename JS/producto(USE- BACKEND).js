/* document.addEventListener("DOMContentLoaded", function() {
    const cont = document.getElementById("productos");
    if (!cont) return console.error("Contenedor #productos no encontrado");

    // ---------------- Cargar productos ----------------
    fetch("http://localhost:8080/Api_Productos/ProductoServlet")
        .then(res => res.json())
        .then(data => {
            cont.innerHTML = "";

            // ---------------- Agrupar productos por nombre completo ----------------
            const grupos = {};
            data.forEach(p => {
                const nombreBase = p.nombre; // nombre completo
                if (!grupos[nombreBase]) grupos[nombreBase] = [];
                grupos[nombreBase].push(p);
            });

            // ---------------- Generar grupos y cards ----------------
            Object.keys(grupos).forEach(grupo => {
                const grupoId = `grupo-${grupo.replace(/\s+/g,"_")}`;
                cont.innerHTML += `<h3 class="mt-4" id="${grupoId}">${grupo}</h3><div class="row" id="row-${grupoId}"></div>`;
                const row = document.getElementById(`row-${grupoId}`);

                grupos[grupo].forEach(p => {
                    const tallas = p.talla ? p.talla.split(",") : [];
                    const tallaSelect = `<select class="form-select mb-2">${tallas.map(t => `<option>${t.trim()}</option>`).join("")}</select>`;

                    row.innerHTML += `
                        <div class="col-md-4 mb-4" id="producto-${p.id}">
                            <div class="card h-100 text-center shadow-sm">
                                <img src="http://localhost:8080/Api_Productos/IMG/Card/${p.imagen}" 
                                     class="card-img-top img-fluid" 
                                     alt="${p.nombre}" 
                                     style="height:250px; object-fit:cover;">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${p.nombre}</h5>
                                    <h6 class="card-description text-muted">${p.descripcion || ""}</h6>
                                    <p class="card-text fw-bold">S/${p.precio.toFixed(2)}</p>
                                    <div class="mb-2">
                                        ${p.adicional ? `<span class="badge bg-success">${p.adicional}</span>` : `<span class="badge bg-secondary">N/A</span>`}
                                    </div>
                                    <p class="mb-1"><strong>Color:</strong> ${p.color || "N/A"}</p>
                                    <p class="mb-1"><strong>Tallas:</strong></p>
                                    ${tallaSelect}
                                </div>
                            </div>
                        </div>
                    `;
                });
            });

            // ---------------- Scroll suave por dropdown ----------------
            const categoriaItems = document.querySelectorAll('.dropdown-item.categoria-item');
            categoriaItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    const grupoId = this.dataset.target; // dataset.target debe tener id exacto
                    const target = document.getElementById(grupoId);
                    if(target){
                        const navbarHeight = document.querySelector('nav').offsetHeight || 70;
                        const topPos = target.offsetTop - navbarHeight;
                        window.scrollTo({ top: topPos, behavior: 'smooth' });
                    }
                });
            });
        })
        .catch(err => console.error("Error cargando productos:", err));
}); */

//Proyecto Static
