window.document.addEventListener('DOMContentLoaded', function() {
    window.document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMaximo = window.document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        window.document.getElementById('resultado-valor').innerText = numeroAleatorio;
        window.document.querySelector('.resultado').style.display = 'block';
    })
})