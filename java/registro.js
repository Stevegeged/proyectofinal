document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const modal = document.getElementById('modal-exito');
    const cerrar = document.getElementById('cerrar-modal');

    form.addEventListener('submit', function(e) {
        const nombre = form.nombre.value.trim();
        const apellidos = form.apellidos.value.trim();
        const dni = form.DNI.value.trim();
        const correo = form.correo.value.trim();
        const numero = form.numero.value.trim();
        const fecha = form.fechreserv.value;

        if (!nombre || !apellidos || !dni || !correo || !numero || !fecha) {
            alert('Por favor, complete todos los campos.');
            e.preventDefault();
            return;
        }
        if (!/^\d{8}$/.test(dni)) {
            alert('El DNI debe tener 8 dígitos.');
            e.preventDefault();
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert('Ingrese un correo electrónico válido.');
            e.preventDefault();
            return;
        }
        if (!/^\d{9,}$/.test(numero)) {
            alert('El número de teléfono debe tener al menos 9 dígitos.');
            e.preventDefault();
            return;
        }
        // Mostrar modal y evitar envío real
        e.preventDefault();
        modal.style.display = 'flex';
    });

    cerrar.onclick = function() {
        modal.style.display = 'none';
        form.reset();
    };
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            form.reset();
        }
    };
});