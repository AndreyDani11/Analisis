console.log("Hola Mundo");
// comentarios en linea
/*comentario 
de 
varias
lineas
*/

// Variables
var primerVariable;
let edadUsuario;
//Declarar variables
var nombreVariable;
//Crear variable sin asignar valor
/* 
Inicializar variable:
Asignar un valor al momento de crear la variable
*/
var gradoEstudiantes=

/*
Asignar un valor:
Igualar una variable existente a un nuevo valor
*/
edadUsuario=16;
//Asignar valor desde otra variable
console.log(edadUsuario);
var edad=17;
edadUsuario=edad;
console.log(edadUsuario);


//por teclado

var apellido=prompt("ingrese su apellido");
console.log(apellido);
//Constantes: son valores que no pueden ser cambiados a lo largo del codigo. Siempre deben ser inicializadas. El nombre debe ir en mayuscula
const PI=3.1416;

//Imprimir por pantalla

console.log(edadUsuario); // imprimir variable
console.log("hola este es un mensaje"); // imprimir un mensaje
console.log("El usuario tiene " + edadUsuario + " años"); //concatena mensajes y variables

//Operadores
//Suma
var suma;
suma=5+4;
console.log(suma);

var a=12;
suma=a+8;
console.log(suma);

var b=20
suma=a+b
console.log(suma);

//Resta
var resultado;
resultado=a-b; //-8
console.log(resultado);
resultado=b-a; //8
console.log(resultado);

//Multiplicacion
var producto;
producto=a*b;
console.log(producto);

//Division 
var division;
division=a/b;
console.log(division);
division=b/a;
console.log(division);

//Orden de operaciones
var result;
result=a*b;
console.log(result);
result=a*b-10;
console.log(result);
result=a*(b-10);
console.log(result);

//Exponente/potencia
var exp=3**2;
console.log(exp);
exp=3**3;
console.log(exp);

//Cadenas o String
var cadenita1="3";
var cadenita2="5";
var sumaCadenas=cadenita1+cadenita2;
console.log(sumaCadenas);

var nombrecito="Andrea";
var apellidito="Leal";
var nomCompleto=nombrecito+ " " +apellidito;
console.log(nomCompleto);

var longitud=nombrecito.length;
console.log(longitud);
console.log(nomCompleto.length);

//Encontrar caracteres dada la posicion en el vector
var primeraLetra;
primeraLetra=nombrecito[0];
console.log(primeraLetra);
console.log(nombrecito[1]);

//Encontrar la ultima posicion de una cadena o vector
//Se debe buscar la longitud de la cadena y restarle 1 para encontrar la ultima letra
console.log(nombrecito[nombrecito.length-1]);

//Valores inmutables
//Las posiciones de una cadena se pueden consultar pero no se puede reasignar su valor
nombrecito[0]="P";
console.log(nombrecito);
nombrecito="Daniela";
console.log(nombrecito);

//Parseo o casting
/*Se trata de convertir las variables a otro tipo de dato, los cambios existentes son:
*a entero parseInt()
*a decimal parseFloat()
*a cadena String()
*/


//convertir variable 
var entero1=prompt("Ingrese un entero");
var entero2=prompt("Ingrese otro entero");
var sumaE=entero1+entero2;
console.log("Sin parseInt" + sumaE)

//Forma 1
/*
Convetir el dato justo en el momento en que se recibe por teclado
Esto implica que cuando se llame la variable ya este convertida al tipo de dato deseado
*/

entero1=parseInt(prompt("Ingrese un entero"));
entero2=parseInt(prompt("Ingrese otro entero"));
sumaE=entero1+entero2;
console.log("convertido " + sumaE)

//P=Alt+base+Alt+base
var P;
var Alt=parseInt(prompt("Ingrese el valor de la altura"));
var base=parseInt(prompt("Ingrese el valor de la base"));
P=Alt+base+Alt+base;
console.log("El valor del perimetro es " + P);






