function acionarRelogio() {
    desenharCirculo()
    desenharNumeros()
}

function desenharCirculo() {
    contexto.beginPath();
    contexto.arc(0, 0, circulo, 0, 2 * Math.PI);
    contexto.fillStyle = 'white';
    contexto.fill();

    var grad;
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

function desenharNumeros() {
    var ang;
    var num;
    contexto.font = circulo * 0.15 + "px arial";
    contexto.textBaseline = "middle";
    contexto.textAlign = "center";
    for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        contexto.rotate(ang);
        contexto.translate(0, -circulo * 0.85);
        contexto.rotate(-ang);
        contexto.fillText(num.toString(), 0, 0);
        contexto.rotate(ang);
        contexto.translate(0, circulo * 0.85);
        contexto.rotate(-ang);
    }
}