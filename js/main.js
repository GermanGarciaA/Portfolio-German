// SIMULADOR DE INDICE DE MASA CORPORAL

alert('Si usted quiere saber su IMC a ingresado al lugar perfecto \nEn esta pagina calcularemos el IMC segun la formula Quetelet');

function ingresoDeUsuario() {
    let nombre = prompt('Ingrese su nombre');
    while ((!isNaN(nombre))) {
        alert('Error: ingrese un nombre valido');
        nombre = prompt('Ingrese su nombre');
    }
    
    let apellido = prompt('Ingrese su apellido');
    while ((!isNaN(apellido))) {
        alert('Error: ingrese un apellido valido');
        apellido = prompt('Ingrese su apellido');
    }

    alert('Bienvenido/a ' + nombre + ' ' + apellido);
}

ingresoDeUsuario()

let pesoDelUsuario = 0;

function peso() {
    pesoDelUsuario = parseFloat(prompt('Ingrese su peso en kg'));
    while ((isNaN(pesoDelUsuario))) {
        alert('El valor debe ser un número')
        pesoDelUsuario = parseFloat(prompt('Ingrese su peso'));
    }
}

peso();

let alturaDelUsuario = 0;

function altura() {
    alturaDelUsuario = parseFloat(prompt('Ingrese su altura en metros'));
    while ((isNaN(alturaDelUsuario))) {
        alert('El valor debe ser un número')
        alturaDelUsuario = parseFloat(prompt('Ingrese su altura'));
    }
}

altura();

alert('Su peso es de ' + pesoDelUsuario + ' kg' + ' y su altura es de ' + alturaDelUsuario + ' metros');

let imc = 0;

function imcDelUsuario() {
    imc = pesoDelUsuario / (alturaDelUsuario*alturaDelUsuario);
}

imcDelUsuario();

alert('Su Indice de masa corporal es de: ' + imc)