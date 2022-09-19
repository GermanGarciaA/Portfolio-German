// INGRESO USUARIO

const btnUsuario = document.querySelector('#btnUsuario');
const resultadoIngresoUsuario = document.querySelector('.resultadoIngresoUsuario');

btnUsuario.addEventListener('click', (e)=>{
    e.preventDefault();
    const nombreIngresado = document.querySelector('#nombre').value;
    const apellidoIngresado = document.querySelector('#apellido').value;

    const ingresoNombreYApellido = () =>{
        if ((nombreIngresado === '' || (!isNaN(nombreIngresado || apellidoIngresado))) || apellidoIngresado === '') {
            const divIngreso = document.createElement('div');
            divIngreso.innerHTML = `
            <div class= "contenedorIngreso">
            <h2>Ingrese correctamente su nombre y apellido</h2>
            </div>
            `
            resultadoIngresoUsuario.append(divIngreso);
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
        localStorage.setItem('datosIngresoNombre', nombreIngresado);
        localStorage.setItem('datosIngresoApellido', apellidoIngresado);
    }
    ingresoNombreYApellido();
});

let datosIngresoNombree = localStorage.getItem('datosIngresoNombre');
let datosIngresoApellidoo = localStorage.getItem('datosIngresoApellido');


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
            <h2>Bajo las indicaciones del IMC usted tiene: OBESIDAD</h2>
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

// LISTA DE EJERCICIOS POR GRUPO MUSCULAR

let listaDeEjerciciosRealizados = JSON.parse(localStorage.getItem('listaDeEjerciciosRealizados')) || [];
const resultadoEjerciciosRealizados = document.querySelector('.resultadoEjerciciosRealizados');

// GRUPO MUSCULAR PECTORALES

const listaDeEjerciciosPectorales = [
    {
        nombre: 'Press de pecho con barra',
        grupoMuscular: 'Pectorales',
        id: '1',
    },
    {
        nombre: 'Aperturas de pecho con mancuernas',
        grupoMuscular: 'Pectorales',
        id: '2',
    },
    {
        nombre: 'Flexiones de brazos',
        grupoMuscular: 'Pectorales',
        id: '3',
    },
    {
        nombre: 'Press de pecho en máquina',
        grupoMuscular: 'Pectorales',
        id: '4',
    },
    {
        nombre: 'Peck Deck',
        grupoMuscular: 'Pectorales',
        id: '5',
    },
];

const ejerciciosPectoralesDiv = document.querySelector('.ejerciciosPectorales');

function crearEjerciciosPectorales(){
    listaDeEjerciciosPectorales.forEach(element=>{
        const divPectorales = document.createElement('div');
        divPectorales.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${element.nombre}</h4>
                    <button id="btnPectorales${element.id}" class="btn btn-outline-dark">Elegir</button>
                </li>
            </ul>
        `
        ejerciciosPectoralesDiv.append(divPectorales);
    })
    botonPectorales();
}

function botonPectorales(){
    listaDeEjerciciosPectorales.forEach(ejercicio=>{
        document.querySelector(`#btnPectorales${ejercicio.id}`).addEventListener('click',()=>{
            ejerciciosRealizados(ejercicio);
        })
    })
}

// GRUPO MUSCULAR ESPALDA

const listaDeEjerciciosEspalda = [
    {
        nombre: 'Tracción dorsal',
        grupoMuscular: 'Espalda',
        id: '6',
    },
    {
        nombre: 'Remo bajo en máquina',
        grupoMuscular: 'Espalda',
        id: '7',
    },
    {
        nombre: 'Serrucho',
        grupoMuscular: 'Espalda',
        id: '8',
    },
    {
        nombre: 'Dorsalera dividida',
        grupoMuscular: 'Espalda',
        id: '9',
    },
    {
        nombre: 'Remo alto en máquina',
        grupoMuscular: 'Espalda',
        id: '10',
    },
];

const ejerciciosEspaldaDiv = document.querySelector('.ejerciciosEspalda');

function crearEjerciciosEspalda(){
    listaDeEjerciciosEspalda.forEach(element=>{
        const divEspalda = document.createElement('div');
        divEspalda.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${element.nombre}</h4>
                    <button id="btnEspalda${element.id}" class="btn btn-outline-dark">Elegir</button>
                </li>
            </ul>
        `
        ejerciciosEspaldaDiv.append(divEspalda);
    })
    botonEspalda();
}

function botonEspalda(){
    listaDeEjerciciosEspalda.forEach(ejercicio=>{
        document.querySelector(`#btnEspalda${ejercicio.id}`).addEventListener('click',()=>{
            ejerciciosRealizados(ejercicio);
        })
    })
}

// GRUPO MUSCULAR PIERNAS

const listaDeEjerciciosPiernas = [
    {
        nombre: 'Sillón de cuádriceps',
        grupoMuscular: 'Piernas',
        id: '11',
    },
    {
        nombre: 'Camilla de isquiotibiales',
        grupoMuscular: 'Piernas',
        id: '12',
    },
    {
        nombre: 'Gemelos',
        grupoMuscular: 'Piernas',
        id: '13',
    },
    {
        nombre: 'Aductores',
        grupoMuscular: 'Piernas',
        id: '14',
    },
    {
        nombre: 'Aductores',
        grupoMuscular: 'Piernas',
        id: '15',
    },
];

const ejerciciosPiernasDiv = document.querySelector('.ejerciciosPiernas');

function crearEjerciciosPiernas(){
    listaDeEjerciciosPiernas.forEach(element=>{
        const divPiernas = document.createElement('div');
        divPiernas.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${element.nombre}</h4>
                    <button id="btnPiernas${element.id}" class="btn btn-outline-dark">Elegir</button>
                </li>
            </ul>
        `
        ejerciciosPiernasDiv.append(divPiernas);
    })
    botonPiernas();
}

function botonPiernas(){
    listaDeEjerciciosPiernas.forEach(ejercicio=>{
        document.querySelector(`#btnPiernas${ejercicio.id}`).addEventListener('click',()=>{
            ejerciciosRealizados(ejercicio);
        })
    })
}

// GRUPO MUSCULAR HOMBROS

const listaDeEjerciciosHombros = [
    {
        nombre: 'Press de hombros',
        grupoMuscular: 'Hombros',
        id: '16',
    },
    {
        nombre: 'Press arnold',
        grupoMuscular: 'Hombros',
        id: '17',
    },
    {
        nombre: 'Vuelos frontales',
        grupoMuscular: 'Hombros',
        id: '18',
    },
    {
        nombre: 'Jalones al mentón',
        grupoMuscular: 'Hombros',
        id: '19',
    },
    {
        nombre: 'Vuelos laterales',
        grupoMuscular: 'Hombros',
        id: '20',
    },
];

const ejerciciosHombrosDiv = document.querySelector('.ejerciciosHombros');

function crearEjerciciosHombros(){
    listaDeEjerciciosHombros.forEach(element=>{
        const divHombros = document.createElement('div');
        divHombros.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${element.nombre}</h4>
                    <button id="btnHombros${element.id}" class="btn btn-outline-dark">Elegir</button>
                </li>
            </ul>
        `
        ejerciciosHombrosDiv.append(divHombros);
    })
    botonHombros();
}

function botonHombros(){
    listaDeEjerciciosHombros.forEach(ejercicio=>{
        document.querySelector(`#btnHombros${ejercicio.id}`).addEventListener('click',()=>{
            ejerciciosRealizados(ejercicio);
        })
    })
}

// GRUPO MUSCULAR BICEPS

const listaDeEjerciciosBiceps = [
    {
        nombre: 'Curl de bíceps',
        grupoMuscular: 'Bíceps',
        id: '21',
    },
    {
        nombre: 'Bíceps con barra',
        grupoMuscular: 'Bíceps',
        id: '22',
    },
    {
        nombre: 'Bíceps en polea baja',
        grupoMuscular: 'Bíceps',
        id: '23',
    },
    {
        nombre: 'Bíceps 21',
        grupoMuscular: 'Bíceps',
        id: '24',
    },
    {
        nombre: 'Bíceps concentrado',
        grupoMuscular: 'Bíceps',
        id: '25',
    },
];

const ejerciciosBicepsDiv = document.querySelector('.ejerciciosBiceps');

function crearEjerciciosBiceps(){
    listaDeEjerciciosBiceps.forEach(element=>{
        const divBiceps = document.createElement('div');
        divBiceps.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${element.nombre}</h4>
                    <button id="btnBiceps${element.id}" class="btn btn-outline-dark">Elegir</button>
                </li>
            </ul>
        `
        ejerciciosBicepsDiv.append(divBiceps);
    })
    botonBiceps();
}

function botonBiceps(){
    listaDeEjerciciosBiceps.forEach(ejercicio=>{
        document.querySelector(`#btnBiceps${ejercicio.id}`).addEventListener('click',()=>{
            ejerciciosRealizados(ejercicio);
        })
    })
}

// GRUPO MUSCULAR TRICEPS

const listaDeEjerciciosTriceps = [
    {
        nombre: 'Tríceps en polea',
        grupoMuscular: 'Tríceps',
        id: '26',
    },
    {
        nombre: 'Trasnuca',
        grupoMuscular: 'Tríceps',
        id: '27',
    },
    {
        nombre: 'Patada de burro',
        grupoMuscular: 'Tríceps',
        id: '28',
    },
    {
        nombre: 'Fondo de tríceps',
        grupoMuscular: 'Tríceps',
        id: '29',
    },
    {
        nombre: 'Tríceps toma invertida',
        grupoMuscular: 'Tríceps',
        id: '30',
    },
];

const ejerciciosTricepsDiv = document.querySelector('.ejerciciosTriceps');

function crearEjerciciosTriceps(){
    listaDeEjerciciosTriceps.forEach(element=>{
        const divTriceps = document.createElement('div');
        divTriceps.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${element.nombre}</h4>
                    <button id="btnTriceps${element.id}" class="btn btn-outline-dark">Elegir</button>
                </li>
            </ul>
        `
        ejerciciosTricepsDiv.append(divTriceps);
    })
    botonTriceps();
}

function botonTriceps(){
    listaDeEjerciciosTriceps.forEach(ejercicio=>{
        document.querySelector(`#btnTriceps${ejercicio.id}`).addEventListener('click',()=>{
            ejerciciosRealizados(ejercicio);
        })
    })
}

function ejerciciosRealizados(ejercicio) {
    listaDeEjerciciosRealizados.push(ejercicio);
    mostrarEjercicios();
}

function mostrarEjercicios() {
    resultadoEjerciciosRealizados.innerHTML = '';
    listaDeEjerciciosRealizados.forEach(ejercicios=>{
        const divEjerciciosRealizados = document.createElement('div');
        divEjerciciosRealizados.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${ejercicios.nombre}</h4>
                    <h4>${ejercicios.grupoMuscular}</h4>
                </li>
                <button id="btnBorrar${ejercicios.id}" class="btn btn-outline-secondary">Borrar</button>
            </ul>
        `
        resultadoEjerciciosRealizados.append(divEjerciciosRealizados);
    })
    localStorage.setItem('listaDeEjerciciosRealizados', JSON.stringify(listaDeEjerciciosRealizados));
    borrarEjercicio();
}

function borrarEjercicio() {
    listaDeEjerciciosRealizados.forEach(ejercicio=>{
        document.querySelector(`#btnBorrar${ejercicio.id}`).addEventListener('click',()=>{
            let ejerciciosElegidos = listaDeEjerciciosRealizados.findIndex(element=>element.id===ejercicio.id);
            listaDeEjerciciosRealizados.splice(ejerciciosElegidos,1);
            mostrarEjercicios();
        })
    })
}

mostrarEjercicios();
crearEjerciciosPectorales();
crearEjerciciosEspalda();
crearEjerciciosPiernas();
crearEjerciciosHombros();
crearEjerciciosBiceps();
crearEjerciciosTriceps();

// FILTRO PARA BUSCAR EL GRUPO MUSCULAR DE ALGUNOS DE LOS EJERCICIOS ELEGIDOS

const btnBuscador = document.querySelector('#btnBuscador');
const resultadoBuscador = document.querySelector('.resultadoBuscador');

btnBuscador.addEventListener('click', (e)=>{
    e.preventDefault();
    const ejercicioIngresado = document.querySelector('#buscador').value;

    const buscadorDeEjercicios = () =>{
        if ((ejercicioIngresado === '' || (!isNaN(ejercicioIngresado)))) {
            const divBuscador1 = document.createElement('div');
            divBuscador1.innerHTML = `
            <div class= "contenedorIngreso">
                <h2>Ingrese un ejercicio valido</h2>
            </div>
            `
            resultadoBuscador.append(divBuscador1);
        }
        else {
            function buscarPorNombre(arr, ejercicio){
                let encontrado = arr.find((el) => {
                    return el.nombre == ejercicio;
                });
                return encontrado;
            }
            const encontrado = buscarPorNombre(listaDeEjerciciosRealizados, ejercicioIngresado);

            const divBuscador2 = document.createElement('div');
            divBuscador2.innerHTML = `
            <div class= "contenedorIngreso">
                <h2>${encontrado.nombre} pertenece al grupo muscular ${encontrado.grupoMuscular}</h2>
            </div>
            `
            resultadoBuscador.append(divBuscador2);
        }
    }
    buscadorDeEjercicios();
});