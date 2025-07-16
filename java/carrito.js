document.addEventListener('DOMContentLoaded', function() {
    const carritoFlotante = document.getElementById('carrito-flotante');
    const modalCarrito = document.getElementById('modal-carrito');
    const cerrarModalCarrito = document.getElementById('cerrar-modal-carrito');
    const contadorCarrito = document.getElementById('contador-carrito');
    const contenidoCarrito = document.getElementById('contenido-carrito');

    function obtenerCarrito() {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    }

    function guardarCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function actualizarCarrito() {
        let carrito = obtenerCarrito();
        // Suma total de cantidades
        contadorCarrito.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        if (carrito.length === 0) {
            contenidoCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        } else {
            contenidoCarrito.innerHTML = carrito.map((item, i) =>
                `<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                    <img src="${item.imagen}" alt="${item.nombre}" style="width:50px;height:50px;object-fit:cover;border-radius:8px;">
                    <span style="flex:1;">${item.nombre}</span>
                    <input type="number" min="1" value="${item.cantidad}" style="width:50px;" onchange="cambiarCantidad(${i}, this.value)">
                    <button onclick="eliminarDelCarrito(${i})" style="background:#e74c3c;color:#fff;border:none;border-radius:5px;padding:2px 8px;cursor:pointer;">X</button>
                </div>`
            ).join('');
        }
    }

    carritoFlotante.onclick = function() {
        modalCarrito.style.display = 'flex';
        actualizarCarrito();
    };
    cerrarModalCarrito.onclick = function() {
        modalCarrito.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == modalCarrito) {
            modalCarrito.style.display = 'none';
        }
    };

    window.eliminarDelCarrito = function(index) {
        let carrito = obtenerCarrito();
        carrito.splice(index, 1);
        guardarCarrito(carrito);
        actualizarCarrito();
    };

    window.cambiarCantidad = function(index, nuevaCantidad) {
        let carrito = obtenerCarrito();
        carrito[index].cantidad = Math.max(1, parseInt(nuevaCantidad) || 1);
        guardarCarrito(carrito);
        actualizarCarrito();
    };

    window.agregarAlCarrito = function(nombreProducto, imagenProducto) {
        let carrito = obtenerCarrito();
        let index = carrito.findIndex(item => item.nombre === nombreProducto);
        if (index !== -1) {
            carrito[index].cantidad += 1;
        } else {
            carrito.push({nombre: nombreProducto, imagen: imagenProducto, cantidad: 1});
        }
        guardarCarrito(carrito);
        actualizarCarrito();
    };

    
});