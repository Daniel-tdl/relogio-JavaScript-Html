function acionarRelogio() {
    desenharCirculo()
}

function desenharCirculo() {
    var grad;

    contexto.beginPath();
    contexto.arc(0, 0, circulo, 0, 2 * Math.PI);
    contexto.fillStyle = 'white';
    contexto.fill();

    grad = contexto.createRadialGradient(0, 0, circulo * 0.95, 0, 0, circulo * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    contexto.strokeStyle = grad;
    contexto.lineWidth = circulo * 0.1;
    contexto.stroke();

    contexto.beginPath();
    contexto.arc(0, 0, circulo * 0.1, 0, 2 * Math.PI);
    contexto.fillStyle = '#333';
    contexto.fill();
}