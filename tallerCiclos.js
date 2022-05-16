
//punto1
console.log("punto 1");
var ciclo1=0;
while(ciclo1 < 7){ 
console.log("lleva " + ciclo1 + " repeticiones");
ciclo1+=1;
}

//punto2
console.log("punto 2");
var ciclo2 = 0;
while(ciclo2 < 33){ 
console.log("este es un multiplo de tres " + ciclo2);
ciclo2 += 3;
}

//punto3
console.log("punto 3");
var ciclo3=2;
while(ciclo3 < 50){ 
console.log("va en la interaccion" + ciclo3);
ciclo3+=2;
}

//punto4
console.log("punto4");
var ciclo4=1;
var ciclo4_2 = prompt("ingrese el numero limite")
while ( ciclo4 <= ciclo4_2) {
console.log(ciclo4);
ciclo4+=2;
}

//punto5
console.log("punto 5");
var ciclo5=prompt("ingrese un numero impar");
while(ciclo5 >= 1){
console.log(ciclo5)
ciclo5=prompt("ingrese un negativo para detenerse");
}

//punto6
console.log("punto 6")
var acumulador = 0;
var valoraSumar;
var ciclo6 = 1; 
var personasSalon=prompt ("ingrese la cantidad de personas que hay en su salon");
while(ciclo6 <= personasSalon){
valoraSumar = parseInt(prompt("ingrese la edad del estudiante"))
acumulador=valoraSumar+acumulador
ciclo6+=1;
}
console.log("el total del acumuladores es " + acumulador);

//punto7
console.log("punto 7")
var intentos
var comida=prompt("ingrese la comida")
while(comida == "salpicon"){ 
    console.log("el usuario gano una andrea")
    intentos+=1
    }
    console.log(intentos)

//punto8
console.log("punto 8")
var nombreEstudiante=prompt("ingrese el nombre del estudiante");
var notas=prompt("ingrese ")