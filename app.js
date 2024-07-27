let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let NumeroMaximo = 10;

function AsignarTextoElemento(Elemento,Texto) {
    let ElementoHTML = document.querySelector(Elemento);
    ElementoHTML.innerHTML = Texto;
    return;
}

function VerificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
   if (numeroUsuario === numeroSecreto) {AsignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else{
    if (numeroUsuario > numeroSecreto) {
        AsignarTextoElemento('p','El número secreto es menor');
        
    } else{
        AsignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    Limpiarcaja();
   }
   return;

}

function Limpiarcaja() {
   document.querySelector('#valorUsuario').value = '';
}

function AsignarNumeroSecreto() {
let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
if (ListaNumerosSorteados.length == NumeroMaximo) {
    AsignarTextoElemento('p', 'Ya se sortearon todos los números posibles'); 
} else{
    if (ListaNumerosSorteados.includes(NumeroGenerado)) {
    return AsignarNumeroSecreto();
}   else{ListaNumerosSorteados.push(NumeroGenerado);
    return NumeroGenerado;
}
}
}
function CondicionesIniciales() {
    AsignarTextoElemento('h1','Juego del número secreto');
    AsignarTextoElemento('p',`Indica un número del 1 al ${NumeroMaximo}`);
    numeroSecreto = AsignarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar Caja
    Limpiarcaja();
    numeroSecreto = AsignarNumeroSecreto();
    CondicionesIniciales();
    //Deshabilitar boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

CondicionesIniciales();