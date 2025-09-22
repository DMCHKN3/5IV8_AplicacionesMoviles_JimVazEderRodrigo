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
    
    if (numDNI.length <0 || numDNI.length > 99999999) {
        return "El número de DNI esta fuera del rango.";
    }

    if(letraDNI.trim().toUpperCase() === letras[numDNI % 23]) {
        return 'El DNI es correcto.';
    } else {
        return 'El DNI es incorrecto.';
    }
    
}