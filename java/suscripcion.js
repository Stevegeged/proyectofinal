document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.fond');
    const modal = document.getElementById('modal-suscripcion');
    const cerrar = document.getElementById('cerrar-modal-suscripcion');

    form.addEventListener('submit', function(e) {
        const nombre = form.querySelector('input[name="nombre"]').value.trim();
        const correo = form.querySelector('input[name="correo"]').value.trim();

        if (!nombre || !correo) {
            alert('Por favor, complete todos los campos.');
            e.preventDefault();
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert('Ingrese un correo electrónico válido.');
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