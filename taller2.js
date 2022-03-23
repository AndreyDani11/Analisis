/*
Taller 2
Fecha: 08-03-2022
Realizado por: Andrea Leal Ospina y Julian Torres
*/

//Punto #1
var area=prompt("ingrese cuanto mide un lado del cuadrado");
console.log(area);
var areaCuadrado=area**2;
console.log(areaCuadrado);
console.log("El area del cuadrado mide " + areaCuadrado)
var volumen=prompt("Ingrese el valor de la arista del cuadrado");
console.log(volumen);
var volumenCuadrado=volumen**3;
console.log(volumenCuadrado);
console.log("El volumen del cuadrado es " + volumenCuadrado)

//Punto #2
var longitud=prompt("Digite la longitud del rectangulo");
console.log(longitud);
var lado=prompt("Digite el lado del rectangulo");
console.log(lado);
var area=longitud*lado;
console.log(area);
var perimetro=longitud*4;
console.log(perimetro);

//Punto #3
var diametro=prompt("Ingrese el diametro del circulo");
console.log(diametro);
var area=Math.PI*(diametro/2)**2;
console.log(area);
var volumen=4/3*Math.PI*(diametro/2)**3;
console.log(volumen);

//Punto #4
var base1=prompt("Ingrese el valor de la base 1");
var base2=prompt("Ingrese el valor de la base 2");
var h=prompt("Ingrese el valor de altura");
var area=0.5*base1 + base2*h;
console.log(area);

//Punto #5
var ancho=prompt("Ingrese el ancho de la piscina");
console.log(ancho);
var largo=prompt("Ingrese el largo de la piscina");
console.log(largo);
var profundo=prompt("Ingrese la profundidad de la piscina");
console.log(profundo);
var litros=profundo*largo*ancho;
console.log(litros);

//Punto #6
var altoMuro=prompt("Ingrese el alto del muro");
console.log(altoMuro);
var anchoMuro=prompt("Ingrese el ancho del muro");
console.log(anchoMuro);
var m2=altoMuro*anchoMuro;
console.log(m2);
var total_A_pagar=22000*m2;
console.log(total_A_pagar);

//Punto #7
var centimetros;
var kilometro;
var decilitro;
var litro;
var microgramo;
var gramos;
var kilometro2;
var milimetro;
centimetros=prompt("Ingrese cuanto valen los centimetros");
kilometro=prompt("Ingrese el volumen en decilitros");
decilitro=prompt("ingrese la masa en microgramos");
litro=prompt("ingrese la distancia en kilometros");
microgramo=(centimetros*100000);
gramos=(kilometro*0,1);
kilometro2=(decilitro*1e-6);
milimetro=(litro*1000000);
