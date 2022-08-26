// SIMULADOR DE INDICE DE MASA CORPORAL

alert('Si usted quiere saber su IMC ha ingresado al lugar perfecto \nEn esta pagina calcularemos el IMC segun la formula Quetelet');

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
    pesoDelUsuario = parseFloat(prompt('Ingrese su peso: \nEn kilogramos, sin unidades, seperado de decimales \nEJ: si pesa 81.5, pondrá 81.5'));
    while ((isNaN(pesoDelUsuario))) {
        alert('El valor debe ser un número')
        pesoDelUsuario = parseFloat(prompt('Ingrese su peso: \nEn kilogramos, sin unidades, seperado de decimales \nEJ: si pesa 81.5, pondrá 81.5'));
    }
}

peso();

let alturaDelUsuario = 0;

function altura() {
    alturaDelUsuario = parseFloat(prompt('Ingrese su altura: \nAltura en metros, sin unidades, separado de decimales \nEJ: si mide 1.82 metros, pondrá 1.82'));
    while ((isNaN(alturaDelUsuario))) {
        alert('El valor debe ser un número')
        alturaDelUsuario = parseFloat(prompt('Ingrese su altura: \nAltura en metros, sin unidades, separado de decimales \nEJ: si mide 1.82 metros, pondrá 1.82'));
    }
}

altura();

alert('Su peso es de ' + pesoDelUsuario + ' kg' + '\nSu altura es de ' + alturaDelUsuario + ' metros');

let imc = 0;

function imcDelUsuario() {
    imc = pesoDelUsuario / (alturaDelUsuario*alturaDelUsuario);

    alert('Su Indice de masa corporal es de: ' + imc);

    if (imc < 16) {
        alert('Bajo las indicaciones del IMC usted tiene: \nDELGADEZ SEVERA');
    }
    else if(imc = 16 && imc < 16.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nDELGADEZ MODERADA');
    }
    else if(imc = 17 && imc < 18.49){
        alert('Bajo las indicaciones del IMC usted tiene: \nDELGADEZ ACEPTABLE');
    }
    else if(imc = 18.5 && imc < 24.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nNORMOPESO');
    }
    else if(imc = 25 && imc < 26.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nSOBREPESO GRADO 1');
    }
    else if(imc = 27 && imc < 29.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nSOBREPESO GRADO 2');
    }
    else if(imc = 30 && imc < 34.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nOBESIDAD TIPO 1');
    }
    else if(imc = 35 && imc < 39.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nOBESIDAD TIPO 2');
    }
    else if(imc = 40 && imc < 49.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nOBESIDAD DE TIPO (MORBIDA)');
    }
    else if(imc > 50){
        alert('Bajo las indicaciones del IMC usted tiene: \nOBESIDAD TIPO 4 (EXTREMA)');
    }
    else{
        alert('Los valores no corresponden a la tabla de IMC');
    }
}

imcDelUsuario();