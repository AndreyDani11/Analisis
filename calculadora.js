function suma(num1, num2){
    var resultado = num1 + num2;
    var mensaje = "el resultado de sumar "+ num1 + " y " + num2 + " es " + resultado;
    //return mensaje;
    return resultado;

}
function resta(num1, num2){
    var resultado = num1 - num2;
    var mensaje = "el resultado de restar "+ num1 + " y " + num2 + " es " + resultado;
    //return mensaje;
    return resultado;
}
function division(num1, num2){
    var resultado = num1 / num2;
    var mensaje = "el resultado de division "+ num1 + " y " + num2 + " es " + resultado;
    //return mensaje;
    return resultado;

}
function multiplicacion(num1, num2){
    var resultado = num1 * num2;
    var mensaje = "el resultado de multiplicar "+ num1 + " y " + num2 + " es " + resultado;
    //return mensaje;
    return resultado;
}
function potencia(num1, num2){
    var resultado = num1 ** num2;
    var mensaje = "el resultado de potenciar "+ num1 + " y " + num2 + " es " + resultado;
    //return mensaje;
    return resultado;
}

function main_calculadora(){
var eleccion = prompt ("por favor ingrese el numero de la operacion que desea realizar: \n 1. Suma \n 2. Resta \n 3. Division \n 4. Multiplicacion \n 5. Potencia \n 6. Doble de una suma \n 7. Mitad de un producto \n 8.Triple de una resta \n 9.Quinta parte de una resta \n 10.El cociente aumentado 5 \n 11.La potencia aumentada la base");

var num1 = parseFloat(prompt("por favor ingrese el primer valor:"));
var num2 = parseFloat(prompt("por favor ingrese el segundo valor:"));

if(eleccion == 1){
    console.log(suma(num1, num2));
}else if(eleccion == 2){
    console.log(resta(num1, num2));
}else if(eleccion == 3){
    console.log(division(num1, num2));
}else if(eleccion == 4){
    console.log(multiplicacion(num1, num2));
}else if(eleccion == 5){
    console.log(potencia(num1, num2));
}else if(eleccion == 6){
    var resultadoSuma = suma(num1, num2);
    console.log("El doble de la suma de " + num1 + " y " + num2 + " es " + multiplicacion(resultadoSuma, 2))
}else if(eleccion == 7){
    var resultadoMultiplicacion = multiplicacion(num1, num2);
    console.log("La mitad de la multiplicacion de " + num1 + " y " + num2 + " es " + division(resultadoMultiplicacion, 2))
}else if(eleccion == 8){
    var resultadoResta = resta(num1, num2);
    console.log("El triple de la resta de " + num1 + " y " + num2 + " es " + multiplicacion(resultadoResta, 3))
}else if(eleccion == 9){
    var resultadoPotencia = potencia(num1, num2);
    console.log("La quinta parte de la potencia de " + num1 + " a la " + num2 + " es " + division(resultadoPotencia, 5))
}else if(eleccion == 10){   
    var resultadoDivision = division(num1, num2)

}else if(eleccion == 11){
}
}
