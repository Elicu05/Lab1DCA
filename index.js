import _ from "lodash";

//Exersise 1

const numeros = [1, 2, 3, 4, 5];
_.reverse(numeros);
console.log(numeros);

//Excersise 2 
const valores = [0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true];
_.compact([0, "Hola", false, 42, "", null, "Mundo", undefined, NaN, true]);
const valoresFiltrados = _.compact(valores);
console.log(valoresFiltrados);

//Excersise 3 
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const array3 = _.concat(array1, array2);
console.log(array3);

//Excersise 4 
const palabras = ["hola", "mundo", "hola", "javascript", "mundo", "hola"];

const countBy = _.countBy([
  "hola",
  "mundo",
  "hola",
  "javascript",
  "mundo",
  "hola",
]);
console.log(countBy);

//Excersise 5 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const difference = _.differenceWith(arr1, arr2);
console.log(difference);

//Excersise 6 
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Juan", edad: 30 },
];
const ages = _.sortBy(personas, ["edad"]);
console.log(ages);

//Excersise 7 

const numerosRepetidos = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueNumbers = _.uniq(numerosRepetidos);
console.log(uniqueNumbers);

//Excersise 8 
const n = 3;
const elementos = ["a", "b", "c", "d", "e", "f", "g", "h"];
const grupos = _.chunk(elementos, n)
console.log(grupos)

//Exersise 9
const persona = { nombre: "Carlos", apellido: "Pérez", edad: 28 };
persona.nombre = _.toUpper(persona.nombre);
persona.apellido = _.toUpper(persona.apellido);
console.log(persona)

//Excersise 10 
const anidado = [1, [2, [3, [4, 5]]], 6];
const flat= _.flattenDeep(anidado)
console.log(flat)

//Excersise 11 
const lista1 = [1, 2, 3, 4, 5];const lista2 = [3, 4, 5, 6, 7];const lista3 = [5, 6, 7, 8, 9];
const newList =_.intersection(lista1, lista2, lista3);
console.log(newList)

//Excersise 12 Agrupar por Propiedad Dinámica: Dado un arreglo de objetos y una clave, agrupa los objetos según el valor de esa clave.
const clave = "curso";
const estudiantes = [
  { nombre: "Mario", curso: "Matemáticas" },
  { nombre: "Lucía", curso: "Historia" },
  { nombre: "Juan", curso: "Matemáticas" },
  { nombre: "Elena", curso: "Historia" }
];

const agrupado = _.groupBy(estudiantes, 'curso');
console.log(agrupado)
