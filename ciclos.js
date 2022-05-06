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
*/


var valor = true;
var respuesta2;
 
while(valor){
    console.log("valor es " + valor);
    respuesta2=prompt("ingrese un valor 1 verdadero 0 falso");
    if(respuesta2 == 0){
        valor = false;
    }      
}
