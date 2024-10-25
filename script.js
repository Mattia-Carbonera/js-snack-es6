// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// const biciclette = {
//   name: "bike",
//   weight: {
//     numWeight: 20,
//     unit: "Kg",
//   },
// };

const biciclette = [
  {
    name: "bike",
    weight: {
      numWeight: 20,
      unit: "Kg",
    },
  },
  {
    nome: "montainbike",
    weight: {
      numWeight: 25,
      unit: "Kg",
    },
  },
  {
    nome: "citybike",
    weight: {
      numWeight: 15,
      unit: "Kg",
    },
  },
  {
    nome: "racebike",
    weight: {
      numWeight: 10,
      unit: "Kg",
    },
  },
];

console.log(biciclette);

// Snack 2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = 2;
const b = 6;

let numDue = [];

function selectNumbers(arrayNumber, highNum, lowNum) {
  for (const arrayNumber of num) {
    if (highNum < arrayNumber && lowNum > arrayNumber) {
      numDue.push(arrayNumber);
    }
  }
}

selectNumbers(num, a, b);
console.log(numDue);
