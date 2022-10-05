// INGRESO USUARIO

const btnUsuario = document.querySelector('#btnUsuario');
const resultadoIngresoUsuario = document.querySelector('.resultadoIngresoUsuario');

btnUsuario.addEventListener('click', (e)=>{
    resultadoIngresoUsuario.innerHTML = ''; 
    e.preventDefault();
    const nombreIngresado = document.querySelector('#nombre').value;
    const apellidoIngresado = document.querySelector('#apellido').value;

    const ingresoNombreYApellido = () =>{
        if ((nombreIngresado === '' || (!isNaN(nombreIngresado || apellidoIngresado))) || apellidoIngresado === '') {
            Swal.fire({
                icon: 'error',
                title: 'USUARIO INCORRECTO',
                text: 'Ingrese correctamente su nombre y apellido',
            })
        }
        else {
            Swal.fire({
                icon: 'success',
                title: '¡Bienvenido/a' + ' ' + nombreIngresado + ' ' + apellidoIngresado + '!',
                text: 'A continuación podrás calcular tu IMC y registrar tu sesión de entrenamiento',
            })
        }
        localStorage.setItem('datosIngresoNombre', nombreIngresado);
        localStorage.setItem('datosIngresoApellido', apellidoIngresado);
    }
    ingresoNombreYApellido();
});

let datosIngresoNombree = localStorage.getItem('datosIngresoNombre');
let datosIngresoApellido = localStorage.getItem('datosIngresoApellido');

// SIMULADOR DE INDICE DE MASA CORPORAL

const btnIMC = document.querySelector('#btnIMC');
const resultadoIMC = document.querySelector('.resultadoIMC');
const clasificacionesIMC = document.querySelector('.clasificacionesIMC');

let imc = 0;

btnIMC.addEventListener('click', (e)=>{
    resultadoIMC.innerHTML = '';
    clasificacionesIMC.innerHTML = '';
    e.preventDefault();
    const pesoIngresado = document.querySelector('#peso').value;
    const alturaIngresada = document.querySelector('#altura').value;

    const ingresoPesoYAltura = () =>{
        imc = pesoIngresado / (alturaIngresada*alturaIngresada);
    }

ingresoPesoYAltura();

    const clasificacionIMC = () =>{
        if (imc < 16) {
            Swal.fire({
                icon: 'warning',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: DELGADEZ SEVERA',
            })
        }
        else if(imc == 16 || imc < 16.99){
            Swal.fire({
                icon: 'warning',
                title: 'Bajo las indicaciones del IMC usted tiene: DELGADEZ MODERADA',
            })
        }
        else if(imc == 17 || imc < 18.49){
            Swal.fire({
                icon: 'success',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: DELGADEZ ACEPTABLE',
            })
        }
        else if(imc == 18.5 || imc < 24.99){
            Swal.fire({
                icon: 'success',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: NORMOPESO',
            })
        }
        else if(imc == 25 || imc < 26.99){
            Swal.fire({
                icon: 'warning',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: SOBREPESO GRADO 1',
            })
        }
        else if(imc == 27 || imc < 29.99){
            Swal.fire({
                icon: 'warning',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: OBESIDAD',
            })
        }
        else if(imc == 30 || imc < 34.99){
            Swal.fire({
                icon: 'warning',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: OBESIDAD TIPO 1',
            })
        }
        else if(imc == 35 || imc < 39.99){
            Swal.fire({
                icon: 'warning',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: OBESIDAD TIPO 2',
            })
        }
        else if(imc == 40 || imc < 49.99){
            Swal.fire({
                icon: 'warning',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: OBESIDAD TIPO 3 (MORBIDA)',
            })
        }
        else if(imc > 50){
            Swal.fire({
                icon: 'warning',
                title: 'Su IMC es de' + ' ' + Math.round(imc),
                text: 'Bajo las indicaciones del IMC usted tiene: OBESIDAD TIPO 4 (EXTREMA)',
            })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Los valores no corresponden a la tabla de IMC',
            })
        }
    }
    clasificacionIMC();
});

// LISTA DE EJERCICIOS POR GRUPO MUSCULAR

let listaDeEjerciciosRealizados = JSON.parse(localStorage.getItem('listaDeEjerciciosRealizados')) || [];
const resultadoEjerciciosRealizados = document.querySelector('.resultadoEjerciciosRealizados');

// GRUPO MUSCULAR PECTORALES

const listaDeEjerciciosPectorales = [];

const grupoMuscularPectorales = async () =>{
    const response = await fetch('./js/dataPectorales.json');

    const data = await response.json();
    data.forEach(element =>{
        listaDeEjerciciosPectorales.push(element);
    })
    crearEjerciciosPectorales(data)
}

grupoMuscularPectorales();

const ejerciciosPectoralesDiv = document.querySelector('.ejerciciosPectorales');

function crearEjerciciosPectorales(){
    listaDeEjerciciosPectorales.forEach(element=>{
        let {nombre, id} = element;
        const divPectorales = document.createElement('div');
        divPectorales.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${nombre}</h4>
                    <button id="btnPectorales${id}" class="btn btn-outline-dark">Elegir</button>
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

const listaDeEjerciciosEspalda = [];

const grupoMuscularEspalda = async () =>{
    const response = await fetch('./js/dataEspalda.json');

    const data = await response.json();
    data.forEach(element =>{
        listaDeEjerciciosEspalda.push(element);
    })
    crearEjerciciosEspalda(data)
}

grupoMuscularEspalda();

const ejerciciosEspaldaDiv = document.querySelector('.ejerciciosEspalda');

function crearEjerciciosEspalda(){
    listaDeEjerciciosEspalda.forEach(element=>{
        let {nombre, id} = element;
        const divEspalda = document.createElement('div');
        divEspalda.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${nombre}</h4>
                    <button id="btnEspalda${id}" class="btn btn-outline-dark">Elegir</button>
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

const listaDeEjerciciosPiernas = [];

const grupoMuscularPiernas = async () =>{
    const response = await fetch('./js/dataPiernas.json');

    const data = await response.json();
    data.forEach(element =>{
        listaDeEjerciciosPiernas.push(element);
    })
    crearEjerciciosPiernas(data)
}

grupoMuscularPiernas();

const ejerciciosPiernasDiv = document.querySelector('.ejerciciosPiernas');

function crearEjerciciosPiernas(){
    listaDeEjerciciosPiernas.forEach(element=>{
        let {nombre, id} = element;
        const divPiernas = document.createElement('div');
        divPiernas.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${nombre}</h4>
                    <button id="btnPiernas${id}" class="btn btn-outline-dark">Elegir</button>
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

const listaDeEjerciciosHombros = [];

const grupoMuscularHombros = async () =>{
    const response = await fetch('./js/dataHombros.json');

    const data = await response.json();
    data.forEach(element =>{
        listaDeEjerciciosHombros.push(element);
    })
    crearEjerciciosHombros(data)
}

grupoMuscularHombros();

const ejerciciosHombrosDiv = document.querySelector('.ejerciciosHombros');

function crearEjerciciosHombros(){
    listaDeEjerciciosHombros.forEach(element=>{
        let {nombre, id} = element;
        const divHombros = document.createElement('div');
        divHombros.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${nombre}</h4>
                    <button id="btnHombros${id}" class="btn btn-outline-dark">Elegir</button>
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

const listaDeEjerciciosBiceps = [];

const grupoMuscularBiceps = async () =>{
    const response = await fetch('./js/dataBiceps.json');

    const data = await response.json();
    data.forEach(element =>{
        listaDeEjerciciosBiceps.push(element);
    })
    crearEjerciciosBiceps(data)
}

grupoMuscularBiceps();

const ejerciciosBicepsDiv = document.querySelector('.ejerciciosBiceps');

function crearEjerciciosBiceps(){
    listaDeEjerciciosBiceps.forEach(element=>{
        let {nombre, id} = element;
        const divBiceps = document.createElement('div');
        divBiceps.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${nombre}</h4>
                    <button id="btnBiceps${id}" class="btn btn-outline-dark">Elegir</button>
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

const listaDeEjerciciosTriceps = [];

const grupoMuscularTriceps = async () =>{
    const response = await fetch('./js/dataTriceps.json');

    const data = await response.json();
    data.forEach(element =>{
        listaDeEjerciciosTriceps.push(element);
    })
    crearEjerciciosTriceps(data)
}

grupoMuscularTriceps();

const ejerciciosTricepsDiv = document.querySelector('.ejerciciosTriceps');

function crearEjerciciosTriceps(){
    listaDeEjerciciosTriceps.forEach(element=>{
        let {nombre, id} = element;
        const divTriceps = document.createElement('div');
        divTriceps.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${nombre}</h4>
                    <button id="btnTriceps${id}" class="btn btn-outline-dark">Elegir</button>
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
        let {nombre, grupoMuscular, id} = ejercicios;
        const divEjerciciosRealizados = document.createElement('div');
        divEjerciciosRealizados.innerHTML +=`
            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <h4>${nombre}</h4>
                    <h4>${grupoMuscular}</h4>
                </li>
                <button id="btnBorrar${id}" class="btn btn-outline-secondary">Borrar</button>
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
    resultadoBuscador.innerHTML = '';
    e.preventDefault();
    const ejercicioIngresado = document.querySelector('#buscador').value;

    const buscadorDeEjercicios = () =>{
        if ((ejercicioIngresado === '' || (!isNaN(ejercicioIngresado)))) {
            Swal.fire('Ingrese un ejercicio valido');
        }
        else {
            function buscarPorNombre(arr, ejercicio){
                let encontrado = arr.find((el) => {
                    return el.nombre == ejercicio;
                });
                return encontrado;
            }
            const encontrado = buscarPorNombre(listaDeEjerciciosRealizados, ejercicioIngresado);

            Swal.fire(encontrado.nombre + ' ' + 'pertenece al grupo muscular' + ' ' + encontrado.grupoMuscular);
        }
    }
    buscadorDeEjercicios();
});