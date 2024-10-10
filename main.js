function comprarLaptop(modelo) {
    const modal = document.getElementById('modal');
    const mensajeCompra = document.getElementById('mensajeCompra');

    mensajeCompra.textContent = `¡Has comprado la ${modelo} exitosamente!`;
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
