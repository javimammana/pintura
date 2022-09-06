let metroCuadrado = (valorUno, valorDos) => (valorUno * valorDos)/rendimientoPintura;
let rendimientoPintura = 12;

let nombre = prompt ("Bienvenido!!! Por favor, ingrese su nombre...");
let paredes = parseInt(prompt("Hola " + nombre + ", Ingresa la cantidad de paredes a pintar..."));

for (let i = 1; i <= paredes; i ++) {
    let paredAlto = parseFloat(prompt("Ingrese el ALTO de la Pared " + i));
    let paredAncho = parseFloat(prompt("Ingrese el ANCHO de la Pared " + i));
    let resultado = metroCuadrado (paredAlto, paredAncho);
    console.log ("Para su pared de " + paredAlto + " por " + paredAncho + " necesita " + resultado + "Lts de Pintura");
}
