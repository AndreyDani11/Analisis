
//punto1
console.log("punto 1");
var ciclo1=prompt("ingrese el numero de veces que quiere que se repita el ciclo");
var ciclo2 = 0;
while(ciclo2<ciclo1){ 

    if(ciclo2%5==0){  //En esta linea se usa % para decir quienes son multiplos del 5
        console.log("El " ,ciclo2, " si es multiplo de 5"); //en esta linea muestra que numero es multiplo de 5 
    }else{  //Si no se cumple la condicion anterior
            console.log("El " ,ciclo2, " no es multiplo de 5"); //Aqui nos muestra que numero no es multiplo de 5
    }   //Se cierra el if
    ciclo2++; //Nos ayuda a que el ciclo no sea infinito
}  //Se cierra el ciclo while

//punto2
console.log("punto 2");
var cajero=prompt("Ingrese la cantidad de articulos que va a registrar");
var acumulador=0
var ciclo3=1 
var precio_articulo
while(ciclo3<=cajero){ 
precio_articulo=parseInt(prompt("Ingrese el valor de cada articulo"))
acumulador=precio_articulo + acumulador
ciclo3+=1
}
console.log("El total a pagar es " + acumulador);

//punto3
console.log("punto 3");

var cajero=prompt("Ingrese la cantidad de articulos que va a registrar");
var acumulador=0
var ciclo3=1 
var precio_articulo
while(ciclo3<=cajero){ 
precio_articulo=parseInt(prompt("Ingrese el valor de cada articulo"))
acumulador=precio_articulo + acumulador

var continuar =prompt("Desea continuar registrando articulos");
    if(continuar == "si"){
        ciclo3+=1
    }else{
    console.log("El total a pagar es " + acumulador);
    ciclo3=cajero+1
    }
}

//punto4
console.log("punto 4");
var cajero=prompt("Ingrese la cantidad de articulos que va a registrar");
var acumulador=0
var ciclo3=1 
var precio_articulo=0
var descuento=0


while(ciclo3<=cajero){ 
precio_articulo=parseInt(prompt("Ingrese el valor de cada articulo"))
acumulador=precio_articulo + acumulador

var continuar =prompt("Desea continuar registrando articulos");
    if(continuar == "si"){
        ciclo3+=1
    }else{
        acumulador=descuento*acumulador
    console.log("El total a pagar es " + acumulador);
    }
}

if (cajero>=8 && cajero<=14){ 
    acumulador *= 0.9
    console.log("El total a pagar es " ,acumulador, " y su descuento es del 10%")
}else if(cajero>=15 && cajero<=24){ 
    acumulador *= 0.85
    console.log("El total a pagar es " ,acumulador, " y su descuento es del 15%")
}else if(cajero>=25){ 
    acumulador *= 0.8
    console.log("El total a pagar es " ,acumulador, " y su descuento es del 20%")
}else if(cajero<8){ 
    console.log("El total a pagar es " ,acumulador,)
}

//punto5
console.log("punto 5");
var estudiantes=prompt("Ingrese el numero de estudiantes")
var contador_estudiante=1
while(contador_estudiante<=estudiantes)
var nombre_estudiante=prompt("Ingrese el nombre del estudiante")
var cantidad_notas=prompt("Ingrese la cantidad de notas que quiere digitar");
var notas
var estudiante_aprobado=0
var estudiante_reprobado=0
var total_notas=0
var ciclo4=1
var promedio

while(ciclo4<=cantidad_notas){ 
notas=parseFloat(prompt("Ingrese las notas del estudiante"))

if(notas>5 || notas<1){
    console.log("La nota no es correcta debe ser entre 1 y 5");
}else{
   total_notas=notas+total_notas
   promedio=total_notas/cantidad_notas
   ciclo4+=1
}

if(promedio>=3.5){
    console.log("El estudiante " ,nombre_estudiante, "aprobo la asignatura y su nota final es " ,promedio)
    estudiante_aprobado+=1
}else{
    console.log("El estudiante" ,nombre_estudiante, "reprobo la asignatura y su nota final es " ,promedio)
    estudiante_reprobado+=1   
}
contador_estudiante+=1

if(estudiante_reprobado>=estudiante_aprobado){
    console.log("Debe abrirse el curso de verano")
}else{
    console.log("La cantidad de estudiantes no es suficiente para curso de verano")
}
}