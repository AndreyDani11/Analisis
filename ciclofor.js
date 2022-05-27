var limite=prompt("ingrese el limite")
var sumatoria=0
for (var i=0; i<=limite; i++){
sumatoria+=i
}

console.log(sumatoria)

var inicio=parseInt(prompt("ingrese el inicio"));

var fin=prompt("ingrese el fin");
for(var i=inicio; i<=fin; i++){ 
if(i%2==0){ 
    console.log(i);
}

}

var arregloNombres=[];
for(var i=0; i<5; i+=1){
    var nombre=prompt("ingrese un nombre");
arregloNombres.push(nombre);
}
for(var i=0; i<arregloNombres.length;i++){
console.log("el nombre " +i+ "es " +
arregloNombres [i] );
}

var cantNotas = parseInt(promt("ingrese la cantidad"))
var arreglonotas = [];
for(var i = 0;i<cantNotas;i++){
var nota=parseFloat(prompt("nota " +(i+1)));
arreglonotas.push(nota);

}

var sumatoria=0;
for(var i=0; i<cantNotas; i++){
    sumatoria+=arreglonotas[i];
}
var promedio=sumatoria/cantNotas;
console.log("el promedio de notas es " + promedio)
