document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los botones con atributo link
    const buttons = document.querySelectorAll('[link]');
    
    // Añadir evento click a cada botón
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtener el enlace del atributo data-link
            const link = this.getAttribute('link');
            
            // Redirigir a la página correspondiente
            if(link) {
                window.location.href = link;
            }
        });
    });
});