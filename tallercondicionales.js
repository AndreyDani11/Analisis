//punto 1
var saludar = "si" ;
 
if(saludar=="si"){
    console.log("Hola, soy un condicional simple");
 }
//Punto 2

var x=20;
 
    if(x<=20){
        console.log("La condición es verdadera");
    }
    
//Punto 3

var edad=18;
 
if(edad>=18){	
    console.log("Bienvenido, puede ingresar");
}else{ 
    console.log("Lo siento, no tiene edad suficiente para entrar aquí");
 }

//Punto 4

var numero1 = 5;
var numero2 = 8;
 
if(numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
  console.log("numero2 es positivo");
}
if(numero1 <0 ||numero1 !=0) {
  console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1<numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//Punto 5

var numerito = 100;
 
if(numerito < 50) {
  console.log("numerito sí es estrictamente menor que 50");
}else if(numerito > 50 && numerito < 80) {
  console.log("numerito sí está entre 50 y 80");
}else if(numerito > 80 && numerito >= 100) {
  console.log("numerito es mayor que 80 pero no mayor ni igual a 100");
}else if(numerito == 100) {
  console.log("numerito es igual a 100");
}else if (numerito > 100) {
   console.log("numerito es estrictamente mayor a 100");
}

//Punto 6

numerito = 90;

//Punto 7

numerito = 60;

//Punto 8

numerito = 111

//punto 9

var diaActual="jueves";
if(diaActual=="jueves"){  
  console.log ("vaya al poli");
  }else{  
    console.log ("no puede ir al poli");
  }
 
//Punto 10

var Valor1 =2 
var Valor2 =3
if (Valor2==0){
  console.log("no se puede dividir")
}else{
  console.log(Valor1/Valor2);
}

//Punto 11
var tipo
var Dia="jueves";
if (Dia=="lunes"){
console.log ("Hoy toca arroz con pollo.");
}else if (Dia=="martes"){
console.log ("Hoy toca chuleta de cerdo/pollo");
}else if (Dia=="miercoles"){
  console.log("Hoy tocan frijoles");
}else if(Dia=="jueves"){
  console.log("Hoy toca sancocho de pejcao")
}else if (Dia=="viernes"){
  console.log ("Hoy toca bandeja paisa");
}else if (Dia=="sabado"){
  console.log ("Hoy toca ajiaco");
}else if (Dia=="domingo"){
  console.log ("Hoy toca sancocho de gallina");
}

//punto 12

var caracter="d";
if (caracter=="a"||caracter=="e"||caracter=="i"||caracter=="o"||caracter=="u"){  
console.log("el caracter es una vocal");
}else if (caracter=="1"||caracter=="2"||caracter=="3"||caracter=="4"||caracter=="5"||caracter=="6"||caracter=="7"||caracter=="8"||caracter=="9"){
  console.log("el caracter es un numero");
}else { 
  tipo= "una consonante"
  console.log("el caracter ingresado es " + tipo);
}
  
