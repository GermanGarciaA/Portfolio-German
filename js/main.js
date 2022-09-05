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
        alert('El valor debe ser un número');
        pesoDelUsuario = parseFloat(prompt('Ingrese su peso: \nEn kilogramos, sin unidades, seperado de decimales \nEJ: si pesa 81.5, pondrá 81.5'));
    }
}

peso();

let alturaDelUsuario = 0;

function altura() {
    alturaDelUsuario = parseFloat(prompt('Ingrese su altura: \nAltura en metros, sin unidades, separado de decimales \nEJ: si mide 1.82 metros, pondrá 1.82'));
    while ((isNaN(alturaDelUsuario))) {
        alert('El valor debe ser un número');
        alturaDelUsuario = parseFloat(prompt('Ingrese su altura: \nAltura en metros, sin unidades, separado de decimales \nEJ: si mide 1.82 metros, pondrá 1.82'));
    }
}

altura();

alert('Su peso es de ' + pesoDelUsuario + ' kg' + '\nSu altura es de ' + alturaDelUsuario + ' metros');

let imc = 0;

function imcDelUsuario() {
    imc = pesoDelUsuario / (alturaDelUsuario*alturaDelUsuario);

    alert('Su Indice de masa corporal es de: ' + Math.round(imc));

    if (imc < 16) {
        alert('Bajo las indicaciones del IMC usted tiene: \nDELGADEZ SEVERA');
    }
    else if(imc == 16 || imc < 16.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nDELGADEZ MODERADA');
    }
    else if(imc == 17 || imc < 18.49){
        alert('Bajo las indicaciones del IMC usted tiene: \nDELGADEZ ACEPTABLE');
    }
    else if(imc == 18.5 || imc < 24.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nNORMOPESO');
    }
    else if(imc == 25 || imc < 26.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nSOBREPESO GRADO 1');
    }
    else if(imc == 27 || imc < 29.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nSOBREPESO GRADO 2');
    }
    else if(imc == 30 || imc < 34.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nOBESIDAD TIPO 1');
    }
    else if(imc == 35 || imc < 39.99){
        alert('Bajo las indicaciones del IMC usted tiene: \nOBESIDAD TIPO 2');
    }
    else if(imc == 40 || imc < 49.99){
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

// LISTA DE EJERCICIOS REALIZADOS EN UNA SESION DE ENTRENAMIENTO

function CaracteristicasEjercicio(nombre, grupoMuscular){
    this.nombre = nombre;
    this.grupoMuscular = grupoMuscular;
}

// EJERCICIOS GRUPO MUSCULAR PECTORAL
const PressDePechoConBarra = new CaracteristicasEjercicio('Press de pecho con barra', 'Pectorales');
const AperturasDePechoConMancuernas = new CaracteristicasEjercicio('Aperturas de pecho con mancuernas', 'Pectorales');
const FlexionesDeBrazo = new CaracteristicasEjercicio('Flexiones de brazos', 'Pectorales');
const PressDePechoEnMaquina = new CaracteristicasEjercicio('Press de pecho en máquina', 'Pectorales');
const PeckDeck = new CaracteristicasEjercicio('Peck Deck', 'Pectorales');
    
// EJERCICIOS GRUPO MUSCULAR ESPALDA
const TraccionDorsal = new CaracteristicasEjercicio('Traccion dorsal','Espalda');
const RemoBajoEnMaquina = new CaracteristicasEjercicio('Remo bajo en máquina', 'Espalda');
const Serrucho = new CaracteristicasEjercicio('Serrucho', 'Espalda');
const DorsaleraDividida = new CaracteristicasEjercicio('Dorsalera dividida', 'Espalda');
const RemoAltoEnMaquina = new CaracteristicasEjercicio('Remo ato en máquina', 'Espalda');
    
// EJERCICIOS GRUPO MUSCULAR PIERNAS
const SillonDeCuadriceps = new CaracteristicasEjercicio('Sillón de cuádriceps','Piernas');
const CamillaDeIsquiotibiales = new CaracteristicasEjercicio('Camilla de isquiotibiales', 'Piernas');
const Gemelos = new CaracteristicasEjercicio('Gemelos', 'Piernas');
const Aductores = new CaracteristicasEjercicio('Aductores', 'Piernas');
const Abeductores = new CaracteristicasEjercicio('Abeductores', 'Piernas');
    
// EJERCICIOS GRUPO MUSCULAR HOMBROS
const PressDeHombros = new CaracteristicasEjercicio('Press de hombros','Hombros');
const PressArnold = new CaracteristicasEjercicio('Press arnold', 'Hombros');
const VuelosFrontales = new CaracteristicasEjercicio('Vuelos frontales', 'Hombros');
const JalonesAlMenton = new CaracteristicasEjercicio('Jalones al mentón', 'Hombros');
const VuelosLaterales = new CaracteristicasEjercicio('Vuelos laterales', 'Hombros');
    
// EJERCICIOS GRUPO MUSCULAR BICEPS
const CurlDeBiceps = new CaracteristicasEjercicio('Curl de bíceps','Biceps');
const BicepsConBarra = new CaracteristicasEjercicio('Bíceps con barra', 'Biceps');
const BicepsEnPoleaBaja = new CaracteristicasEjercicio('Bíceps en polea baja', 'Biceps');
const Biceps21 = new CaracteristicasEjercicio('Bíceps 21', 'Biceps');
const BicepsConcentrado = new CaracteristicasEjercicio('Bíceps concentrado', 'Biceps');
    
// EJERCICIOS GRUPO MUSCULAR TRICEPS
const TricepsEnPolea = new CaracteristicasEjercicio('Tríceps en polea','Triceps');
const Trasnuca = new CaracteristicasEjercicio('Trasnuca', 'Triceps');
const PatadaDeBurro = new CaracteristicasEjercicio('Patada de burro', 'Triceps');
const FondoDeTriceps = new CaracteristicasEjercicio('Fondo de tríceps', 'Triceps');
const TricepsTomaInvertida = new CaracteristicasEjercicio('Tríceps toma invvertida', 'Triceps');

const EjerciciosRealizados = [];

function cargaDeEjercicios(arr, ejercicio) {
    arr.push(ejercicio);
}

function grupoMuscular(){
    let entrenamientoUsuario;
    do{
        entrenamientoUsuario = parseInt(prompt('Eliga el grupo muscular que trabajó en el gimnasio: \n1) Pectorales \n2) Espalda \n3) Piernas \n4) Hombros \n5) Bíceps \n6) Tríceps'));
    }while(entrenamientoUsuario != 1 && entrenamientoUsuario != 2 && entrenamientoUsuario != 3 && entrenamientoUsuario != 4 && entrenamientoUsuario != 5 && entrenamientoUsuario !=6);
    
    switch (entrenamientoUsuario){
        case 1:
            return 'Pectorales';
        case 2:
            return 'Espalda';
        case 3:
            return 'Piernas';
        case 4:
            return 'Hombros';
        case 5:
            return 'Bíceps';     
        case 6:
            return 'Tríceps';
    }
}

let miEntrenamiento = grupoMuscular();

// EJERCICIOS PECTORALES

let ejercicioPectoral = true;

function grupoMuscularPectorales() {
    if (miEntrenamiento === 'Pectorales'){
        alert('Eligio el grupo muscular PECTORALES');

        while (ejercicioPectoral != 0) {
            ejercicioPectoral = parseInt(prompt('Coloque el número del ejercicio que realizo y cuando quiera finalizar escriba el número 0. \n 1) Press de pecho con barra \n 2) Aperturas de pecho con mancuernas \n 3) Flexiones de brazo \n 4) Press de pecho en máquina \n 5) Peck Deck'));
            
            if (ejercicioPectoral === 1) {
                cargaDeEjercicios(EjerciciosRealizados, PressDePechoConBarra);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + PressDePechoConBarra.nombre);
            }
            else if (ejercicioPectoral === 2) {
                cargaDeEjercicios(EjerciciosRealizados, AperturasDePechoConMancuernas);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + AperturasDePechoConMancuernas.nombre);
            }
            else if (ejercicioPectoral === 3) {
                cargaDeEjercicios(EjerciciosRealizados, FlexionesDeBrazo);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + FlexionesDeBrazo.nombre);
            }
            else if (ejercicioPectoral === 4) {
                cargaDeEjercicios(EjerciciosRealizados, PressDePechoEnMaquina);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + PressDePechoEnMaquina.nombre);
            }
            else if (ejercicioPectoral === 5) {
                cargaDeEjercicios(EjerciciosRealizados, PeckDeck);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + PeckDeck.nombre);
            }
            else {
                alert('Finalizó la carga de ejercicios de PECTORALES');
            }
        }
    }
}

let ejerciciosPectorales = grupoMuscularPectorales();

// EJERCICIOS ESPALDA

let ejercicioEspalda = true;
    
function grupoMuscularEspalda() {
    if (miEntrenamiento === 'Espalda'){
        alert('Eligio el grupo muscular ESPALDA');

        while (ejercicioEspalda != 0) {
            ejercicioEspalda = parseInt(prompt('Coloque el número del ejercicio que realizo y cuando quiera finalizar escriba el número 0. \n 1) Tracción dorsal \n 2) Remo bajo en máquina \n 3) Serrucho \n 4) Dorsalera Dividida \n 5) Remo alto en máquina'));
            
            if (ejercicioEspalda === 1) {
                cargaDeEjercicios(EjerciciosRealizados, TraccionDorsal);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + TraccionDorsal.nombre);
            }
            else if (ejercicioEspalda === 2) {
                cargaDeEjercicios(EjerciciosRealizados, RemoBajoEnMaquina);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + RemoBajoEnMaquina.nombre);
            }
            else if (ejercicioEspalda === 3) {
                cargaDeEjercicios(EjerciciosRealizados, Serrucho);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + Serrucho.nombre);
            }
            else if (ejercicioEspalda === 4) {
                cargaDeEjercicios(EjerciciosRealizados, DorsaleraDividida);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + DorsaleraDividida.nombre);
            }
            else if (ejercicioEspalda === 5) {
                cargaDeEjercicios(EjerciciosRealizados, RemoAltoEnMaquina);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + RemoAltoEnMaquina.nombre);
            }
            else {
                alert('Finalizó la carga de ejercicios de ESPALDA');
            }
        }
    }
}
    
let ejerciciosEspalda = grupoMuscularEspalda();

// EJERCICIOS PIERNAS

let ejercicioPiernas = true;
    
function grupoMuscularPiernas() {
    if (miEntrenamiento === 'Piernas'){
        alert('Eligio el grupo muscular PIERNAS');

        while (ejercicioPiernas != 0) {
            ejercicioPiernas = parseInt(prompt('Coloque el número del ejercicio que realizo y cuando quiera finalizar escriba el número 0. \n 1) Sillón de cuádriceps \n 2) Camilla de isquiotibiales \n 3) Gemelos \n 4) Aductores \n 5) Abeductores'));
            
            if (ejercicioPiernas === 1) {
                cargaDeEjercicios(EjerciciosRealizados, SillonDeCuadriceps);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + SillonDeCuadriceps.nombre);
            }
            else if (ejercicioPiernas === 2) {
                cargaDeEjercicios(EjerciciosRealizados, CamillaDeIsquiotibiales);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + CamillaDeIsquiotibiales.nombre);
            }
            else if (ejercicioPiernas === 3) {
                cargaDeEjercicios(EjerciciosRealizados, Gemelos);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + Gemelos.nombre);
            }
            else if (ejercicioPiernas === 4) {
                cargaDeEjercicios(EjerciciosRealizados, Aductores);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + Aductores.nombre);
            }
            else if (ejercicioPiernas === 5) {
                cargaDeEjercicios(EjerciciosRealizados, Abeductores);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + Abeductores.nombre);
            }
            else {
                alert('Finalizó la carga de ejercicios de PIERNAS');
            }
        }
    }
}
    
let ejerciciosPiernas = grupoMuscularPiernas();

// EJERCICIOS HOMBROS

let ejercicioHombros = true;
    
function grupoMuscularHombros() {
    if (miEntrenamiento === 'Hombros'){
        alert('Eligio el grupo muscular HOMBROS');

        while (ejercicioHombros != 0) {
            ejercicioHombros = parseInt(prompt('Coloque el número del ejercicio que realizo y cuando quiera finalizar escriba el número 0. \n 1) Press de hombros \n 2) Press arnold \n 3) Vuelos frontales \n 4) Jalones al mentón \n 5) Vuelos laterales'));
            
            if (ejercicioHombros === 1) {
                cargaDeEjercicios(EjerciciosRealizados, PressDeHombros);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + PressDeHombros.nombre);
            }
            else if (ejercicioHombros === 2) {
                cargaDeEjercicios(EjerciciosRealizados, PressArnold);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + PressArnold.nombre);
            }
            else if (ejercicioHombros === 3) {
                cargaDeEjercicios(EjerciciosRealizados, VuelosFrontales);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + VuelosFrontales.nombre);
            }
            else if (ejercicioHombros === 4) {
                cargaDeEjercicios(EjerciciosRealizados, JalonesAlMenton);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + JalonesAlMenton.nombre);
            }
            else if (ejercicioHombros === 5) {
                cargaDeEjercicios(EjerciciosRealizados, VuelosLaterales);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + VuelosLaterales.nombre);
            }
            else {
                alert('Finalizó la carga de ejercicios de HOMBROS');
            }
        }
    }
}
    
let ejerciciosHombros = grupoMuscularHombros();

// EJERCICIOS BICEPS

let ejercicioBicep = true;
    
function grupoMuscularBiceps() {
    if (miEntrenamiento === 'Bíceps'){
        alert('Eligio el grupo muscular BÍCEPS');

        while (ejercicioBicep != 0) {
            ejercicioBicep = parseInt(prompt('Coloque el número del ejercicio que realizo y cuando quiera finalizar escriba el número 0. \n 1) Curl de Bíceps \n 2) Bíceps con barra \n 3) Bíceps en polea baja \n 4) Biceps 21 \n 5) Bíceps concentrado'));
            
            if (ejercicioBicep === 1) {
                cargaDeEjercicios(EjerciciosRealizados, CurlDeBiceps);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + CurlDeBiceps.nombre);
            }
            else if (ejercicioBicep === 2) {
                cargaDeEjercicios(EjerciciosRealizados, BicepsConBarra);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + BicepsConBarra.nombre);
            }
            else if (ejercicioBicep === 3) {
                cargaDeEjercicios(EjerciciosRealizados, BicepsEnPoleaBaja);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + BicepsEnPoleaBaja.nombre);
            }
            else if (ejercicioBicep === 4) {
                cargaDeEjercicios(EjerciciosRealizados, Biceps21);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + Biceps21.nombre);
            }
            else if (ejercicioBicep === 5) {
                cargaDeEjercicios(EjerciciosRealizados, BicepsConcentrado);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + BicepsConcentrado.nombre);
            }
            else {
                alert('Finalizó la carga de ejercicios de BÍCEPS');
            }
        }
    }
}
    
let ejerciciosBiceps = grupoMuscularBiceps();

// EJERCICIOS TRICEPS

let ejercicioTricep = true;
    
function grupoMuscularTriceps() {
    if (miEntrenamiento === 'Tríceps'){
        alert('Eligio el grupo muscular TRÍCEPS');

        while (ejercicioTricep != 0) {
            ejercicioTricep = parseInt(prompt('Coloque el número del ejercicio que realizo y cuando quiera finalizar escriba el número 0. \n 1) Tríceps en polea \n 2) Trasnuca \n 3) Patada de burro \n 4) Fondo de tríceps 21 \n 5) Tríceps toma invertida'));
            
            if (ejercicioTricep  === 1) {
                cargaDeEjercicios(EjerciciosRealizados, TricepsEnPolea);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + TricepsEnPolea.nombre);
            }
            else if (ejercicioTricep  === 2) {
                cargaDeEjercicios(EjerciciosRealizados, Trasnuca);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + Trasnuca.nombre);
            }
            else if (ejercicioTricep  === 3) {
                cargaDeEjercicios(EjerciciosRealizados, PatadaDeBurro);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + PatadaDeBurro.nombre);
            }
            else if (ejercicioTricep  === 4) {
                cargaDeEjercicios(EjerciciosRealizados, FondoDeTriceps);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + FondoDeTriceps.nombre);
            }
            else if (ejercicioTricep  === 5) {
                cargaDeEjercicios(EjerciciosRealizados, TricepsTomaInvertida);
                alert('Usted eligió el siguiente ejercicio:' + ' ' + TricepsTomaInvertida.nombre);
            }
            else {
                alert('Finalizó la carga de ejercicios de TRÍCEPS');
            }
        }
    }
}

let ejerciciosTriceps = grupoMuscularTriceps();
console.log(EjerciciosRealizados);

// ITERACION PARA QUE EL USUARIO SEPA CUANTOS Y QUE EJERCICIOS ELIGIO 

for (const ejercicios of EjerciciosRealizados) {
    console.log(ejercicios);
}

// FILTRO PARA BUSCAR EL GRUPO MUSCULAR DE ALGUNOS DE LOS EJERCICIOS ELEGIDOS

let busquedaEjercicioRealizado = prompt('Ingrese el nombre del ejercicio que realizo para saber a que grupo muscular pertenece');

function buscarPorNombre(arr, ejercicio){
    let encontrado = arr.find((el) => {
        return el.nombre == ejercicio;
    });
    return encontrado;
}

const encontrado = buscarPorNombre(EjerciciosRealizados, busquedaEjercicioRealizado);
alert('El ejercicio que selecciono ' + encontrado.nombre + ' pertenece al grupo muscular: ' + encontrado.grupoMuscular);
