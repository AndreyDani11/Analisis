function suma(num1, num2){
    var resultado = num1 + num2;
    return resultado;

}
function resta(num1, num2){
    var resultado = num1 - num2;
    return resultado;
}
function division(num1, num2){
    var resultado = num1 / num2;
    return resultado;

}
function multiplicacion(num1, num2){
    var resultado = num1 * num2;
    return resultado;
}
function potencia(num1, num2){
    var resultado = num1 ** num2;
    return resultado;
}

 function main_geometria(){
    var eleccion = prompt ("Por favor ingrese la opcion de su preferencia: \n 1. Hallar el area de una figura \n 2. Hallar el perimetro de una figura");
    var eleccion2 = prompt ("Por favor ingrese la figura de su preferencia \n 1. Paralelogramo \n 2. Rectangulo")

var base = parseFloat(prompt("por favor ingrese el valor de la base:"));
var altura = parseFloat(prompt("por favor ingrese el valor de la altura :"));
num1 = base;
num2 = altura;
if(eleccion == 1 && eleccion2 == 1){
    console.log("el area del paralelogramo es " + multiplicacion(base, altura));
}else if(eleccion == 1 && eleccion2 == 2){
    console.log("el area del rectangulo es " + multiplicacion(base, altura));
}else if(eleccion == 2 && eleccion2 == 1){
var doblebase = multiplicacion(num1, 2)
var doblealtura =multiplicacion(num2, 2)
    console.log("el perimetro del paralelogramo es " + suma(doblebase, doblealtura))
}else if(eleccion == 2 && eleccion2 == 2){
var doblebase =multiplicacion(num1, 2);
var doblealtura =multiplicacion(num2, 2);
    console.log("el perimetro del rectangulo es " + suma(doblebase, doblealtura))
}
}
