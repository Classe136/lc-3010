"use strict";
console.clear();

const ingredienti = [
  "farina",
  "uova",
  "zucchero",
  "cioccolata",
  "lievito",
  "amido",
  "latte",
  "vaniglia",
];

const giocataLotto = [23, 44, 50, 90, 13, 7];
const newArray = []; // array vuoto

// // stampo la lunghezza dell'array ovvero il numero di elemento che l'array contiene
// console.log(newArray.length); //output 0
// console.log(ingredienti.length); //output 8

// //stampo la cioccolata che è il quarto dell'array di ingredienti

// console.log(ingredienti[3]);

// //stampo lottavo elemento dell'array di ingredienti
// console.log(ingredienti[7]);

// //modifico l'ottavo elemento dell'array ingredienti
// ingredienti[7] = "scorzetta di limone";
// console.log(ingredienti[7]);

// // attenzione oggetti e array vengono copiati per riferimento !!!
// const ing2 = ingredienti;
// ing2[7] = "marmellata";

// console.dir(ing2);
// console.log(ingredienti);

// //stampo tutti gli elementi di un array
// for (let i = 0; i < ingredienti.length; i++) {
//   console.log(ingredienti[i]);
// }

// //stampo il tipo di dato

// console.dir(Math);
// console.log(typeof ingredienti);
// const pippo = "personaggio fumetti";
// console.log(!newArray.length); //sapere se è vuoto output true è vero che è vuoto
// console.log(!ingredienti.length); //output false è falso che è vuoto

// stringa vuota, 0, undefined sono false

//Cercare un valore in un array
console.log(ingredienti.indexOf("vaniglia")); //se lo trova ritorna indice
console.log(ingredienti.indexOf("pepe")); // se non lo trova ritorna -1

let index = ingredienti.indexOf("vaniglia");
// console.log(index);
if (index !== -1) {
  console.log(ingredienti[index]);
} else {
  console.log("Elemento non trovato!");
}

//inseriamo elementi nell'array alla fine
ingredienti.push("aromi");
console.log(ingredienti);

ingredienti.unshift("sale");
console.log(ingredienti);

// rimuovere elementi da un array

const removedEl = ingredienti.pop();
console.log(ingredienti);
console.log(removedEl);

ingredienti.shift();
console.log(ingredienti);

// aggiungere rimuovere elementi in mezzo all'array

let index2 = ingredienti.indexOf("cioccolata");

if (index2 !== -1) {
  let removed = ingredienti.splice(index2, 1);
  console.log(ingredienti);
  console.log(removed);
}

// clone di array

const copiDiIngredienti = ingredienti.slice();

let copiaDiArray = [];
for (let i = 0; i < ingredienti.length; i++) {
  const elemento = ingredienti[i];
  copiaDiArray.push(elemento);
}

console.log(copiDiIngredienti);
console.log(copiaDiArray);

copiaDiArray.pop();

console.log(copiDiIngredienti);
console.log(copiaDiArray);
console.log(ingredienti);
