
/* aqui poner comentarios */

console.log ("hola mundo");

let var1 = 12;

console.log (var1);

console.log (3*2);


/* CREACION DE VARIABLES */

// var
var pepito = "hola mundo" //NO DEBE USARSE
console.log (pepito);  //EL SCOPE GLOBAL QUE TIENE MALA PRACTICA USARLO 
// LET
let juanito = "HOLA JUANITO"
console.log(juanito);

juanito= "hola pedrito"
console.log (juanito);

/* variables y const son espacios de memoria que tenemos asignado para elementos */



/* tipos de datos primitivos */
/* tenemos 7 tipo de datos primitivos */

let nombre = "johan"; /* strin o cadena de texto */

let apellido = "rodriguez montalvo"; /* se toma todos los caracteres incluyendo los espacios */
/* 2 number */

let enteros = 12; /* enteros */
let decimales = 45.5; /* fotante o decimales */
let negativo = -16; /* negativos */

/* tipo boolean */

let verdadero = true; /* o es verdadero */
let falso = false; /* o es falso */

/* undefined */

let indefinida; /* creamos variable y no le asignamos un valor y le asignamos mas adelante... */
console.log (indefinida)

/* null */
let johan = null;

/* symbol */
let simbolo = Symbol("numerico2"); /* para tener identificador unico de esa variable de ese tipo de dato */

/* big int funcion poner numeros grandes cuando se sobre pase 64 bits de tamaño ejmo en inventarios para utilizarlos */
let numeroGrande = 21321321321231321n; /* se coloca al fina "n" minuscula */
let numerGrande2 = BigInt(5246546546551654155151546854651651654); /* llega a tener error */


/* no se puede iniciar una variable con un numero */
/* lower camel case */
let apellidoPaterno;  /* la primera palabra de la segunda letra esta con mayuscula */
let apellidoMaterno;
let apellidoPaternoAbuelo;


console.log(typeof(nombre));



console.log ("1hola mundo"); /* 1 */
console.log ("este va en varias lineas lineas lineas ") /* 2 */
let entero = 10;
let mascota = "zucker";
let hombre = true


/* suma */

let suma = 5+2;
let a =5
let b =2
let resultado = a+b


/* operadores de comparacion  es un booleano true o false*/

let aa =22;
let bb =77;
    
aa == bb;   /* false or true solo compara el dato mas no el tipo de dato  */

resultado = aa+bb;

console.log (resultado);
let numeroPar = 8;
console.log (numeroPar);

numeroPar = 80;
console.log(); /* console log puede recibir parametros infinitos  */

/* operadores logicos */
/* AND && */
/* OR */
/* NOT */

let plata = true;
let tenermuchaplata = false;
let verminona = true;
let viajar = true;
let aprenderaconducir = true;

let viajaritalia = tenermuchaplata && viajar /* false */
let siviajaraitalia = plata || verminona /* true */
let licencia = (tenermuchaplata && aprenderaconducir )& viajar;

console.log (viajaritalia); 

console.log (siviajaraitalia);

console.log (licencia);

















