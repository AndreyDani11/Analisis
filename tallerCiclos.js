
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
console.log(ciclo3 + "es par");
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
while(ciclo5 %2==0){
console.log(ciclo5)
ciclo5=prompt("ingrese un impar para detenerse");
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
console.log("El total de edades de los estudiantes es " + acumulador);

//punto7
console.log("punto 7")
var intentos=0
var comida=prompt("ingrese la comida")
while(comida != "salpicon"){ 
    comida=prompt("ingrese la comida")
    intentos+=1
    }
    console.log("El usuario gano la rifa en " + intentos + "intentos")
    console.log(intentos)

//punto8
console.log("punto 8")
var nombreEstudiante=prompt("ingrese el nombre del estudiante");
var numerodenotas=prompt("ingrese el numero de notas");
var notas
var Promedio
var contadorcito=1
var total_notas=0

while(contadorcito<=numerodenotas){
    notas=parseFloat(prompt("Ingrese las notas"))
    if(notas>5 || notas<1)
    console.log("El valor es incorrecto debe estar entre 1 y 5")
}else{
    total_notas=notas+total_notas
    Promedio=total_notas/numerodenotas
    contadorcito+=1
}
if(Promedio>=3.5){
    console.log("El estudiante", nombreEstudiante, "aprobo la asignatura y su nota final es " ,Promedio)
}else{
    console.log("El estudiante", nombreEstudiante, " reprobo la asignatura y su nota final es ", Promedio)
}

//punto9
var numero_estudiantes=prompt("ingrese el numero de estudiantes")
var contadorcitoestudiantes=1
while(contadorcitoestudiantes<=numero_estudiantes){
    var nombreEstudiante=prompt("Ingrese el nombre del estudiante")
    var numero_notas=promt("Ingrese el numero de notas")
    var totalnotas=0
    var Notas
    var prom
    var contador=1
    while(contador<=numero_notas){
        Notas=parseFloat(promt("Digite las notas del estudiante"))

        if(Notas>5 || Notas<1){
            console.log("La nota es incorrecta esta debe ser entre 1 y 5")
        }else{
            totalnotas=Notas+totalnotas
            prom=totalnotas/numero_notas
            contador+=1
        }
    }

    if(prom>=3.5){
        console.log("El estudiante " ,nombreEstudiante, "aprobo la materia y su nota final es " ,prom)
    }else{
        console.log("El estudiante " ,nombreEstudiante, "reprobo la materia y su nota final es " ,prom)
    }
    contadorcitoestudiantes+=1
}