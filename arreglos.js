/*Los arreglos son estructuras que almacenan informacion de cualquier
tipo de datos, es decir, string, int, double, array, objetos, entre otros.
*/
//Los arreglos tienen operaciones tales como consultar, modificar, eliminar e insertar.
//Los arreglos se declaran con corchetes [].
//Creacion de arreglos
var arreglo = ["Juan", 14];
console.log(arreglo);
//arreglo de arreglos
var notasEstudiantes=[["sofia", 4.8],["isa", 4.6]]; 
console.log(notasEstudiantes);
//consultar contenido del arreglo
console.log(notasEstudiantes[0]);
console.log(notasEstudiantes[0][0]); //sofia
console.log(notasEstudiantes[1][1]); //4.6
//Modificar elementos 
console.log(arreglo[0]+"tiene "+ arreglo [1]);
arreglo[1]=15;
console.log(arreglo[0]+"tiene "+ arreglo [1]+  "años");
//Isa obtuvo 5 en su nota final
notasEstudiantes=[["sofia", 4.8],["isa", 5.0]];
console.log(notasEstudiantes[1][1]);

//Agregar elementos al arreglo
console.log("sin agregar " + arreglo);
arreglo.push("10A");
console.log("agregado "+ arreglo);

console.log("sin agregar " + arreglo);
arreglo.unshift("Perez");
console.log("agregado "+ arreglo);

//Eliminar elementos al arreglo
console.log("sin eliminar "+ arreglo);
arreglo.pop(); //Elimina el ultimo dato
console.log("Eliminado "+ arreglo);
arreglo.shift(); //Elimina el primer elemento
console.log("Elimina .shift" + arreglo);

//Ejercicio
/*
1.//crear el arreglo con los valores

-Analisis
-Tecnologia
-Desarrollo

2.//Cambiar desarrollo por BBDD
3.//convertir el vector en :

-Introduccion
-Analisis
-Tecnologia
*/

//Solucion

var materias=["Analisis","biologia","desarrollo"];
console.log("sin arreglo" + materias);
materias[2]="BBDD"
console.log("arreglado" + materias);
materias.pop();
materias.unshift("introduccion");
console.log("vector convertido" + materias);

