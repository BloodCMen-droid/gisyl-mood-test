/* document.addEventListener("DOMContentLoaded", function() {
    const btnAcceder = document.getElementById("btnAcceder");
    const loginModalEl = document.getElementById("loginModal");

    if (!btnAcceder || !loginModalEl) {
        console.error("Botón de acceso o modal de login no encontrado");
        return;
    }

    const loginModal = new bootstrap.Modal(loginModalEl);

    // Mostrar modal
    btnAcceder.addEventListener("click", () => {
        loginModal.show();
    });

    // Login
    const btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", () => {
        const usuario = document.getElementById("txtUsuario").value.trim();
        const contrasena = document.getElementById("txtPassword").value.trim();

        if (!usuario || !contrasena) {
            alert("Ingrese usuario y contraseña");
            return;
        }

        fetch("http://localhost:8080/Api_Productos/LoginServlet", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `usuario=${encodeURIComponent(usuario)}&contrasena=${encodeURIComponent(contrasena)}`
        })
        .then(res => {
            if(res.ok) return res.json();
            else throw new Error("Usuario o contraseña incorrectos");
        })
        .then(data => {
            alert("Bienvenido " + data.usuario);
            loginModal.hide();
            window.location.href = "../HTML/mantenimiento.html";
        })
        .catch(err => alert(err.message));
    });
}); */

//Proyect static
