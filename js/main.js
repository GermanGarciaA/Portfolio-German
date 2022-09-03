// DESAFIO COMPLEMENTARIO ARRAYS

function CaracteristicasEjercicio(nombre, grupoMuscular){
    this.nombre = nombre;
    this.grupoMuscular = grupoMuscular;
    this.agregarEjercicio = () => {
        EjerciciosRealizados.push(this.nombre);
    }
}

// EJERCICIOS GRUPO MUSCULAR PECTORAL
const PressDePechoConBarra = new CaracteristicasEjercicio('Press de pecho con barra', 'Pectorales');
const AperturasDePechoConMancuernas = new CaracteristicasEjercicio('Aperturas de pecho con mancuernas', 'Pectorales');
const FlexionesDeBrazo = new CaracteristicasEjercicio('Press de pecho', 'Pectorales');
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
                PressDePechoConBarra.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioPectoral === 2) {
                AperturasDePechoConMancuernas.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioPectoral === 3) {
                FlexionesDeBrazo.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioPectoral === 4) {
                PressDePechoEnMaquina.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioPectoral === 5) {
                PeckDeck.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else {
                alert('Su plan de entrenamiento incluyo los siguientes ejercicios: ' + EjerciciosRealizados);
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
                TraccionDorsal.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioEspalda === 2) {
                RemoBajoEnMaquina.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioEspalda === 3) {
                Serrucho.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioEspalda === 4) {
                DorsaleraDividida.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioEspalda === 5) {
                RemoAltoEnMaquina.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else {
                alert('Su plan de entrenamiento incluyo los siguientes ejercicios: ' + EjerciciosRealizados);
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
                SillonDeCuadriceps.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioPiernas === 2) {
                CamillaDeIsquiotibiales.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioPiernas === 3) {
                Gemelos.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioPiernas === 4) {
                Aductores.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioPiernas === 5) {
                Abeductores.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else {
                alert('Su plan de entrenamiento incluyo los siguientes ejercicios: ' + EjerciciosRealizados);
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
                PressDeHombros.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioHombros === 2) {
                PressArnold.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioHombros === 3) {
                VuelosFrontales.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioHombros === 4) {
                JalonesAlMenton.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioHombros === 5) {
                VuelosLaterales.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else {
                alert('Su plan de entrenamiento incluyo los siguientes ejercicios: ' + EjerciciosRealizados);
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
                CurlDeBiceps.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioBicep === 2) {
                BicepsConBarra.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioBicep === 3) {
                BicepsEnPoleaBaja.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioBicep === 4) {
                Biceps21.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioBicep === 5) {
                BicepsConcentrado.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else {
                alert('Su plan de entrenamiento incluyo los siguientes ejercicios: ' + EjerciciosRealizados);
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
                TricepsEnPolea.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioTricep  === 2) {
                Trasnuca.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioTricep  === 3) {
                PatadaDeBurro.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioTricep  === 4) {
                FondoDeTriceps.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else if (ejercicioTricep  === 5) {
                TricepsTomaInvertida.agregarEjercicio();
                alert('Usted realizo los siguientes ejercios:' + ' ' + EjerciciosRealizados);
            }
            else {
                alert('Su plan de entrenamiento incluyo los siguientes ejercicios: ' + EjerciciosRealizados);
            }
        }
    }
}

let ejerciciosTriceps = grupoMuscularTriceps();
