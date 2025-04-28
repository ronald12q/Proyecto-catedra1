// Espera a que la página cargue
document.addEventListener('DOMContentLoaded', function() {

    // 1. Contenedor de todas las ventanas emergentes
    const modalContainer = document.getElementById('modal-container');

    // 2. Botones que abren ventanas
    const botones = {
        depositar: document.getElementById('btn-depositar'),
        retirar: document.getElementById('btn-retirar'),
        consultar: document.getElementById('btn-consultar'),
        servicios: document.getElementById('btn-pagar-servicios')
    };

    // 3. Ventanas emergentes (modales)
    const ventanas = {
        deposito: document.getElementById('Modal-deposito'),
        retiro: document.getElementById('Modal-Retiro'),
        balance: document.getElementById('Modal-Balance'),
        servicios: document.getElementById('Modal-Servicios')
    };

    // 4. Función para ABRIR una ventana
    function abrirVentana(ventana) {
        if (!ventana) return; // Si no existe, no hacemos nada
        modalContainer.classList.add('visible'); // Mostrar fondo oscuro
        ventana.classList.add('modal-visible'); // Mostrar ventana
    }

    // 5. Función para CERRAR todas las ventanas
    function cerrarVentanas() {
        modalContainer.classList.remove('visible'); // Ocultar fondo oscuro
        // Ocultar todas las ventanas visibles
        document.querySelectorAll('.modal-contenido.modal-visible').forEach(function(ventana) {
            ventana.classList.remove('modal-visible');
        });
    }

    // 6. Asignar eventos a los botones para ABRIR ventanas
    if (botones.depositar) botones.depositar.addEventListener('click', function() { abrirVentana(ventanas.deposito); });
    if (botones.retirar) botones.retirar.addEventListener('click', function() { abrirVentana(ventanas.retiro); });
    if (botones.consultar) botones.consultar.addEventListener('click', function() { abrirVentana(ventanas.balance); });
    if (botones.servicios) botones.servicios.addEventListener('click', function() { abrirVentana(ventanas.servicios); });

    // 7. Cerrar al hacer clic en el botón "cerrar" o "Cancelar"
    document.querySelectorAll('.btn-cerrar, .btn-cancelar').forEach(function(boton) {
        boton.addEventListener('click', cerrarVentanas);
    });

    // 8. Cerrar al hacer clic FUERA de la ventana (en el fondo oscuro)
    if (modalContainer) {
        modalContainer.addEventListener('click', function(event) {
            if (event.target === modalContainer) {
                cerrarVentanas();
            }
        });
    }
});



