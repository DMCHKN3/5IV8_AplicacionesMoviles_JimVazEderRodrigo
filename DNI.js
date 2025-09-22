const verificar = document.getElementById('verificar');

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
             'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

verificar.addEventListener('click', () => {
    alert(validacionDNI());
});

function validacionDNI() {
    const numDNI = document.getElementById('numDNI').value;
    const letraDNI = document.getElementById('letraDNI').value.toUpperCase();

    if (numDNI.trim() === '' || letraDNI.trim() === '' || !Number.isInteger(Number(numDNI))) {
        return 'Por favor, ingrese un número de DNI válido.';
    }
    
}