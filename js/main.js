// INGRESO USUARIO

const btnUsuario = document.querySelector('#btnUsuario');
const resultadoIngresoUsuario = document.querySelector('.resultadoIngresoUsuario');

btnUsuario.addEventListener('click', (e)=>{
    e.preventDefault();
    const nombreIngresado = document.querySelector('#nombre').value;
    const apellidoIngresado = document.querySelector('#apellido').value;

    const ingresoNombreYApellido = () =>{
        if ((nombreIngresado === '' || (!isNaN(nombreIngresado || apellidoIngresado))) || apellidoIngresado === '') {
            alert('Ingrese correctamente su nombre y apellido');
        }
        else {
            const divIngreso = document.createElement('div');
            divIngreso.innerHTML = `
            <div class= "contenedorIngreso">
            <h2>${nombreIngresado} ${apellidoIngresado} ha ingresado correctamente</h2>
            </div>
            `
            resultadoIngresoUsuario.append(divIngreso);
        }
    }
    ingresoNombreYApellido();
});

// SIMULADOR DE INDICE DE MASA CORPORAL

const btnIMC = document.querySelector('#btnIMC');
const resultadoIMC = document.querySelector('.resultadoIMC');
const clasificacionesIMC = document.querySelector('.clasificacionesIMC');

let imc = 0;

btnIMC.addEventListener('click', (e)=>{
    e.preventDefault();
    const pesoIngresado = document.querySelector('#peso').value;
    const alturaIngresada = document.querySelector('#altura').value;

    const ingresoPesoYAltura = () =>{
        imc = pesoIngresado / (alturaIngresada*alturaIngresada);
        const divIMC = document.createElement('div');
            divIMC.innerHTML = `
            <div class= "contenedorIngreso">
            <h2>Su IMC es de ${Math.round(imc)}</h2>
            </div>
            `
            resultadoIMC.append(divIMC);
    }
    ingresoPesoYAltura();

    const clasificacionIMC = () =>{
        if (imc < 16) {
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: DELGADEZ SEVERA</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc == 16 || imc < 16.99){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: DELGADEZ MODERADA</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc == 17 || imc < 18.49){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: DELGADEZ ACEPTABLE</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc == 18.5 || imc < 24.99){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: NORMOPESO</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc == 25 || imc < 26.99){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: SOBREPESO GRADO 1</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc == 27 || imc < 29.99){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: SOBREPESO GRADO 2</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc == 30 || imc < 34.99){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: OBESIDAD TIPO 1</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc == 35 || imc < 39.99){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: OBESIDAD TIPO 2</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc == 40 || imc < 49.99){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: OBESIDAD TIPO 3 (MORBIDA)</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else if(imc > 50){
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Bajo las indicaciones del IMC usted tiene: OBESIDAD TIPO 4 (EXTREMA)</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
        else{
            const divClasificacionIMC = document.createElement('div');
            divClasificacionIMC.innerHTML =`
            <div class= "contenedorIngreso">
            <h2>Los valores no corresponden a la tabla de IMC</h2>
            </div>
            `
            clasificacionesIMC.append(divClasificacionIMC);
        }
    }
    clasificacionIMC();
});

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
const TricepsTomaInvertida = new CaracteristicasEjercicio('Tríceps toma invertida', 'Triceps');

const EjerciciosRealizados = [];

function cargaDeEjercicios(arr, ejercicio) {
    arr.push(ejercicio);
}
const resultadoEjerciciosRealizados = document.querySelector('.resultadoEjerciciosRealizados');

// EJERCICIOS PECTORALES

const btnPectoral1 = document.querySelector('#btnPectoral1');
const btnPectoral2 = document.querySelector('#btnPectoral2');
const btnPectoral3 = document.querySelector('#btnPectoral3');
const btnPectoral4 = document.querySelector('#btnPectoral4');
const btnPectoral5 = document.querySelector('#btnPectoral5');

btnPectoral1.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, PressDePechoConBarra);
    
    const divPectoral1 = document.createElement('div');
        divPectoral1.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${PressDePechoConBarra.nombre}</h4>
            <h4>${PressDePechoConBarra.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPectoral1);
});

btnPectoral2.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, AperturasDePechoConMancuernas);
    
    const divPectoral2 = document.createElement('div');
        divPectoral2.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${AperturasDePechoConMancuernas.nombre}</h4>
            <h4>${AperturasDePechoConMancuernas.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPectoral2);
});

btnPectoral3.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, FlexionesDeBrazo);
    
    const divPectoral3 = document.createElement('div');
        divPectoral3.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${FlexionesDeBrazo.nombre}</h4>
            <h4>${FlexionesDeBrazo.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPectoral3);
});

btnPectoral4.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, PressDePechoEnMaquina);
    
    const divPectoral4 = document.createElement('div');
        divPectoral4.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${PressDePechoEnMaquina.nombre}</h4>
            <h4>${PressDePechoEnMaquina.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPectoral4);
});

btnPectoral5.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, PeckDeck);

        const divPectoral5 = document.createElement('div');
        divPectoral5.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${PeckDeck.nombre}</h4>
            <h4>${PeckDeck.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPectoral5);
});

// EJERCICIOS EPALDA

const btnEspalda1 = document.querySelector('#btnEspalda1');
const btnEspalda2 = document.querySelector('#btnEspalda2');
const btnEspalda3 = document.querySelector('#btnEspalda3');
const btnEspalda4 = document.querySelector('#btnEspalda4');
const btnEspalda5 = document.querySelector('#btnEspalda5');

btnEspalda1.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, TraccionDorsal);

        const divEspalda1 = document.createElement('div');
        divEspalda1.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${TraccionDorsal.nombre}</h4>
            <h4>${TraccionDorsal.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divEspalda1);
});

btnEspalda2.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, RemoBajoEnMaquina);

        const divEspalda2 = document.createElement('div');
        divEspalda2.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${RemoBajoEnMaquina.nombre}</h4>
            <h4>${RemoBajoEnMaquina.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divEspalda2);
});

btnEspalda3.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, Serrucho);

        const divEspalda3 = document.createElement('div');
        divEspalda3.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${Serrucho.nombre}</h4>
            <h4>${Serrucho.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divEspalda3);
});

btnEspalda4.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, DorsaleraDividida);

        const divEspalda4 = document.createElement('div');
        divEspalda4.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${DorsaleraDividida.nombre}</h4>
            <h4>${DorsaleraDividida.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divEspalda4);
});

btnEspalda5.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, RemoAltoEnMaquina);

        const divEspalda5 = document.createElement('div');
        divEspalda5.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${RemoAltoEnMaquina.nombre}</h4>
            <h4>${RemoAltoEnMaquina.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divEspalda5);
});

// EJERCICIOS PIERNAS

const btnPiernas1 = document.querySelector('#btnPiernas1');
const btnPiernas2 = document.querySelector('#btnPiernas2');
const btnPiernas3 = document.querySelector('#btnPiernas3');
const btnPiernas4 = document.querySelector('#btnPiernas4');
const btnPiernas5 = document.querySelector('#btnPiernas5');

btnPiernas1.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, SillonDeCuadriceps);

        const divPiernas1 = document.createElement('div');
        divPiernas1.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${SillonDeCuadriceps.nombre}</h4>
            <h4>${SillonDeCuadriceps.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPiernas1);
});

btnPiernas2.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, CamillaDeIsquiotibiales);

        const divPiernas2 = document.createElement('div');
        divPiernas2.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${CamillaDeIsquiotibiales.nombre}</h4>
            <h4>${CamillaDeIsquiotibiales.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPiernas2);
});

btnPiernas3.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, Gemelos);

        const divPiernas3 = document.createElement('div');
        divPiernas3.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${Gemelos.nombre}</h4>
            <h4>${Gemelos.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPiernas3);
});

btnPiernas4.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, Aductores);

        const divPiernas4 = document.createElement('div');
        divPiernas4.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${Aductores.nombre}</h4>
            <h4>${Aductores.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPiernas4);
});

btnPiernas5.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, Abeductores);

        const divPiernas5 = document.createElement('div');
        divPiernas5.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${Abeductores.nombre}</h4>
            <h4>${Abeductores.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divPiernas5);
});

// EJERCICIOS HOMBROS

const btnHombros1 = document.querySelector('#btnHombros1');
const btnHombros2 = document.querySelector('#btnHombros2');
const btnHombros3 = document.querySelector('#btnHombros3');
const btnHombros4 = document.querySelector('#btnHombros4');
const btnHombros5 = document.querySelector('#btnHombros5');

btnHombros1.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, PressDeHombros);

        const divHombros1 = document.createElement('div');
        divHombros1.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${PressDeHombros.nombre}</h4>
            <h4>${PressDeHombros.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divHombros1);
});

btnHombros2.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, PressArnold);

        const divHombros2 = document.createElement('div');
        divHombros2.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${PressArnold.nombre}</h4>
            <h4>${PressArnold.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divHombros2);
});

btnHombros3.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, VuelosFrontales);

        const divHombros3 = document.createElement('div');
        divHombros3.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${VuelosFrontales.nombre}</h4>
            <h4>${VuelosFrontales.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divHombros3);
});

btnHombros4.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, JalonesAlMenton);

        const divHombros4 = document.createElement('div');
        divHombros4.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${JalonesAlMenton.nombre}</h4>
            <h4>${JalonesAlMenton.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divHombros4);
});

btnHombros5.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, VuelosLaterales);

        const divHombros5 = document.createElement('div');
        divHombros5.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${VuelosLaterales.nombre}</h4>
            <h4>${VuelosLaterales.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divHombros5);
});

// EJERCICIOS BICEPS

const btnBiceps1 = document.querySelector('#btnBiceps1');
const btnBiceps3 = document.querySelector('#btnBiceps2');
const btnBiceps4 = document.querySelector('#btnBiceps3');
const btnBiceps5 = document.querySelector('#btnBiceps4');
const btnBiceps6 = document.querySelector('#btnBiceps5');

btnBiceps1.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, CurlDeBiceps);

        const divBiceps1= document.createElement('div');
        divBiceps1.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${CurlDeBiceps.nombre}</h4>
            <h4>${CurlDeBiceps.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divBiceps1);
});

btnBiceps2.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, BicepsConBarra);

        const divBiceps2= document.createElement('div');
        divBiceps2.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${BicepsConBarra.nombre}</h4>
            <h4>${BicepsConBarra.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divBiceps2);
});

btnBiceps3.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, BicepsEnPoleaBaja);

        const divBiceps3= document.createElement('div');
        divBiceps3.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${BicepsEnPoleaBaja.nombre}</h4>
            <h4>${BicepsEnPoleaBaja.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divBiceps3);
});

btnBiceps4.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, Biceps21);

        const divBiceps4= document.createElement('div');
        divBiceps4.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${Biceps21.nombre}</h4>
            <h4>${Biceps21.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divBiceps4);
});

btnBiceps5.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, BicepsConcentrado);

        const divBiceps5= document.createElement('div');
        divBiceps5.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${BicepsConcentrado.nombre}</h4>
            <h4>${BicepsConcentrado.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divBiceps5);
});

// EJERCICIOS TRICEPS

const btnTriceps1 = document.querySelector('#btnTriceps1');
const btnTriceps2 = document.querySelector('#btnTriceps2');
const btnTriceps3 = document.querySelector('#btnTriceps3');
const btnTriceps4 = document.querySelector('#btnTriceps4');
const btnTriceps5 = document.querySelector('#btnTriceps5');

btnTriceps1.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, TricepsEnPolea);

        const divTriceps1= document.createElement('div');
        divTriceps1.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${TricepsEnPolea.nombre}</h4>
            <h4>${TricepsEnPolea.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divTriceps1);
});

btnTriceps2.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, Trasnuca);

        const divTriceps2= document.createElement('div');
        divTriceps2.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${Trasnuca.nombre}</h4>
            <h4>${Trasnuca.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divTriceps2);
});

btnTriceps3.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, PatadaDeBurro);

        const divTriceps3= document.createElement('div');
        divTriceps3.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${PatadaDeBurro.nombre}</h4>
            <h4>${PatadaDeBurro.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divTriceps3);
});

btnTriceps4.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, FondoDeTriceps);

        const divTriceps4= document.createElement('div');
        divTriceps4.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${FondoDeTriceps.nombre}</h4>
            <h4>${FondoDeTriceps.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divTriceps4);
});

btnTriceps5.addEventListener('click', () =>{
    cargaDeEjercicios(EjerciciosRealizados, TricepsTomaInvertida);

        const divTriceps5= document.createElement('div');
        divTriceps5.innerHTML =`
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <h4>${TricepsTomaInvertida.nombre}</h4>
            <h4>${TricepsTomaInvertida.grupoMuscular}</h4>
        </li>
        </ul>
        `
        resultadoEjerciciosRealizados.append(divTriceps5);
});