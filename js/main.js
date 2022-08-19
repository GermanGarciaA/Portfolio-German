// DESAFIO COMPLENTARIO 1

let adivinanza = 'pera';

for (let i = 0; i < 3; i++) {

    let respuestaUsuario = prompt('Adivinanza: Blanca por dentro, verde por fuera. Si no sabes que es, espera');
    if (adivinanza === respuestaUsuario){
        alert('Respuesta correcta');
        break;
    } else{
        alert('Te quedan ' + (2-i) + ' intentos');
    } if (i == 2) {
        alert('Llegaste al maximo de respuestas incorrectas')   
    }
}