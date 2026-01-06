/* document.addEventListener("DOMContentLoaded", function() {
    const cont = document.getElementById("productos");
    const productoModal = new bootstrap.Modal(document.getElementById("productoModal"));
    const btnGuardar = document.getElementById("btnGuardarProducto");
    const form = document.getElementById("formProducto");

    if (!cont || !productoModal || !btnGuardar || !form) {
        console.error("Elementos esenciales no encontrados en el DOM");
        return;
    }

    // ================= CARGAR PRODUCTOS =================
    function cargarProductos() {
        fetch("http://localhost:8080/Api_Productos/ProductoServlet")
            .then(res => res.json())
            .then(data => {
                cont.innerHTML = "";
                data.forEach(p => {
                    const tallas = p.talla ? p.talla.split(",") : [];
                    let tallaSelect = `<select class="form-select mb-2">`;
                    tallas.forEach(t => {
                        tallaSelect += `<option value="${t.trim()}">${t.trim()}</option>`;
                    });
                    tallaSelect += `</select>`;

                    cont.innerHTML += `
                        <div class="col-md-4 mb-4" id="producto-${p.id}">
                           <div class="card h-100 text-center shadow-sm">
                               <!-- Imagen responsive completa -->
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
                                   <select class="form-select mb-2">
                                       ${p.talla ? p.talla.split(",").map(t => `<option value="${t.trim()}">${t.trim()}</option>`).join("") : ""}
                                   </select>

                                   <div class="mt-auto d-flex justify-content-center gap-2">
                                       <button class="btn btn-sm btn-warning btnEditar" data-id="${p.id}">Editar</button>
                                       <button class="btn btn-sm btn-danger btnEliminar" data-id="${p.id}">Eliminar</button>
                                   </div>
                               </div>
                           </div>
                       </div>

                    `;
                });

                document.querySelectorAll(".btnEliminar").forEach(btn => {
                    btn.addEventListener("click", eliminarProducto);
                });

                document.querySelectorAll(".btnEditar").forEach(btn => {
                    btn.addEventListener("click", abrirModalEditar);
                });
            })
            .catch(err => console.error("Error cargando productos:", err));
    }

    // ================= ELIMINAR =================
    function eliminarProducto(e) {
        const id = e.target.dataset.id;
        if (!confirm("¿Deseas eliminar este producto?")) return;

        fetch(`http://localhost:8080/Api_Productos/ProductoServlet?id=${id}`, {
            method: "DELETE"
        })
        .then(res => {
            if(res.ok) cargarProductos();
            else throw new Error("Error al eliminar");
        })
        .catch(err => alert(err.message));
    }

    // ================= ABRIR MODAL PARA EDITAR =================
    function abrirModalEditar(e) {
        const id = e.target.dataset.id;
        const card = document.getElementById(`producto-${id}`);

        document.getElementById("txtId").value = id;
        document.getElementById("txtNombre").value = card.querySelector(".card-title").textContent;
        document.getElementById("txtDescripcion").value = card.querySelector(".card-description").textContent;
        document.getElementById("txtPrecio").value = parseFloat(card.querySelector(".card-text").textContent.replace("S/", ""));
        document.getElementById("txtColor").value = card.querySelector("p strong").nextSibling.textContent.trim();
        document.getElementById("txtTalla").value = Array.from(card.querySelectorAll("select option")).map(o=>o.value).join(",");
        const badge = card.querySelector(".badge");
        document.getElementById("txtAdicional").value = badge && badge.textContent !== "N/A" ? badge.textContent : "";

        document.getElementById("productoModalTitle").textContent = "Editar Producto";
        productoModal.show();
    }

    // ================= GUARDAR (AGREGAR / EDITAR) =================
    btnGuardar.addEventListener("click", () => {
        const idValue = document.getElementById("txtId").value;
        const id = idValue ? parseInt(idValue) : 0;
        const nombre = document.getElementById("txtNombre").value.trim();
        const descripcion = document.getElementById("txtDescripcion").value.trim();
        const precio = parseFloat(document.getElementById("txtPrecio").value);
        const color = document.getElementById("txtColor").value.trim();
        const talla = document.getElementById("txtTalla").value.trim();
        const adicional = document.getElementById("txtAdicional").value.trim();
        const imagenFile = document.getElementById("txtImagen").files[0]; // NUEVO

        if(!nombre || isNaN(precio)) return alert("Completa los campos obligatorios");

        // Usamos FormData para enviar imagen
        const formData = new FormData();
        formData.append("id", id);
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("precio", precio);
        formData.append("color", color);
        formData.append("talla", talla);
        formData.append("adicional", adicional);
        if(imagenFile) formData.append("imagen", imagenFile);

        fetch("http://localhost:8080/Api_Productos/ProductoServlet", {
            method: id ? "PUT" : "POST",
            body: formData
        })
        .then(res => {
            if(res.ok){
                productoModal.hide();
                cargarProductos();
            } else throw new Error("Error guardando producto");
        })
        .catch(err => alert(err.message));
    });

    // ================= AGREGAR NUEVO (BOTÓN) =================
    const btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", () => {
        form.reset();
        document.getElementById("txtId").value = "";
        document.getElementById("productoModalTitle").textContent = "Agregar Producto";
        productoModal.show();
    });

    // ================= INICIALIZAR =================
    cargarProductos();
}); */

//Proyecto static
