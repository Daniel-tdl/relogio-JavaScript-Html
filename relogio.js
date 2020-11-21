function acionarRelogio() {
    desenharCirculo();
    desenharNumeros();
    desenharPonteiros();
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

function desenharPonteiros() {
    var dataAtual = new Date();
    var horas = dataAtual.getHours();
    var minutos = dataAtual.getMinutes();
    var segundos = dataAtual.getSeconds();

    desenharPonteiroHora(horas, minutos, segundos);
    desenharPonteiroMinutos(minutos, segundos);
    desenharPonteiroSegundos(segundos);
}

function desenharPonteiroHora(horas, minutos, segundos) {
    horas = horas % 12;
    horas = (horas * Math.PI / 6) + (minutos * Math.PI / (6 * 60)) + (segundos * Math.PI / (360 * 60));
    definindoPosicaoPonteiro(contexto, horas, circulo * 0.5, circulo * 0.07);
}

function desenharPonteiroMinutos(minutos, segundos) {
    minutos = (minutos * Math.PI / 30) + (segundos * Math.PI / (30 * 60));
    definindoPosicaoPonteiro(contexto, minutos, circulo * 0.8, circulo * 0.07);
}

function desenharPonteiroSegundos(segundos) {
    segundos = (segundos * Math.PI / 30);
    definindoPosicaoPonteiro(contexto, segundos, circulo * 0.9, circulo * 0.02);
}

function definindoPosicaoPonteiro(contexto, pos, length, width) {
    contexto.beginPath();
    contexto.lineWidth = width;
    contexto.lineCap = "round";
    contexto.moveTo(0, 0);
    contexto.rotate(pos);
    contexto.lineTo(0, -length);
    contexto.stroke();
    contexto.rotate(-pos);
}