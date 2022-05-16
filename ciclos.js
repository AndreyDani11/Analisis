/*Ciclo While 
Estructura: While(condicion){
    instrucciones
}
*/

/*
var CantSaludos = 0;
 
while(CantSaludos < 5){
    console.log("Hola ");
    CantSaludos += 1;
}

var respuesta ="si";
 
while(respuesta=="si"){
    console.log("Dijo sí");
    respuesta=prompt("ingrese un valor");
}



var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}
*/

// taller de repaso ciclo While

//punto1
var ciclo1 = 0;
while(ciclo1<5){    
console.log(2);
ciclo1+=1
}

//punto2
console.log("punto 2");
var ciclo2=0;
while(ciclo2 < 8){ 
console.log("va en la interaccion" + ciclo2);
ciclo2+=1;
}

//punto 3
console.log("punto 3");
var ciclo3=0;
while(ciclo3 < 10){ 
console.log("va en la interaccion" + ciclo3);
ciclo3+=2;
}

//punto 4
console.log("punto4");
var ciclo4=prompt("ingrese ok para parar");
while(ciclo4 != "ok"){
console.log("dijo " + ciclo4)
ciclo4=prompt("ingrese ok para parar");
}

//punto 5
console.log("punto 5");
var ciclo5=prompt("ingrese un negativo para detenerse");
while(ciclo5 >= 0){
console.log("dijo " + ciclo5)
ciclo5=prompt("ingrese un negativo para detenerse");
}

//punto 6
console.log("punto 6");
var suma=0;
var num1;
;var num2
while(suma <= 20){
    num1=parseInt(prompt("ingrese un valor"))
    num2=parseInt(prompt("ingrese un valor"))
    suma=num1+num2;
    }