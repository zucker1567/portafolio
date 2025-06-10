/* carlcular el aerea de un cuadrado-rectangulo-triangulo */
let operacion= parseFloat(prompt("ingresa una opcion 1 para saber area de triangulo, 2 para saber area de rectangulo, 3 para saber area de cuadrado"));
let altura= parseFloat(prompt("ingresa la altura"));
let base= parseFloat(prompt("ingresa la base"));
let lado1 =parseFloat(prompt("ingresa lado"));



function calcularTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularRectangulo(base, altura) {
    return base * altura;
}

function calcularCuadrado(lado1) {
    return lado1 * lado1;
}

if (operacion === 1) { 
    console.log("Área del triángulo = " + calcularTriangulo(base, altura));
} else if (operacion === 2) {
    console.log("Área del rectángulo = " + calcularRectangulo(base, altura));
} else if (operacion === 3) { 
    console.log("Área del cuadrado = " + calcularCuadrado(lado1));
} else {
    console.log("La opción que elegiste no existe");
}