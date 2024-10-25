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
    name: "citybike",
    weight: {
      numWeight: 15,
      unit: "Kg",
    },
  },
  {
    name: "montainbike",
    weight: {
      numWeight: 25,
      unit: "Kg",
    },
  },
  {
    name: "racebike",
    weight: {
      numWeight: 10,
      unit: "Kg",
    },
  },
];

// peso bici
const bikeWeight = biciclette[0].weight.numWeight;
const montainbikeWeight = biciclette[1].weight.numWeight;
const citybikeWeight = biciclette[2].weight.numWeight;
const racebikeWeight = biciclette[3].weight.numWeight;
const bicycleWeight = [
  bikeWeight,
  montainbikeWeight,
  citybikeWeight,
  racebikeWeight,
];

let lightestBike = "";

let currentBike = 0;

for (let i = 0; i < bicycleWeight.length; i++) {
  if (bicycleWeight[i] > currentBike) {
    currentBike = bicycleWeight[i];
    lightestBike = biciclette[i].name;
  }
}

console.log("Snack 1: " + lightestBike);

// Snack 2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function randomNumberGenerator(max) {
  return Math.floor(Math.random() * max);
}

const footballTeam = [
  {
    name: "Inter",
    score: randomNumberGenerator(4),
    fauls: randomNumberGenerator(8),
  },
  {
    name: "Milan",
    score: randomNumberGenerator(4),
    fauls: randomNumberGenerator(8),
  },
  {
    name: "Juventus",
    score: randomNumberGenerator(4),
    fauls: randomNumberGenerator(8),
  },
  {
    name: "Roma",
    score: randomNumberGenerator(4),
    fauls: randomNumberGenerator(8),
  },
  {
    name: "Lazio",
    score: randomNumberGenerator(4),
    fauls: randomNumberGenerator(8),
  },
];

const teamName = [];

for (let i = 0; i < footballTeam.length; i++) {
  teamName.push(footballTeam[i].name);
  teamName.push(footballTeam[i].fauls);
}

console.log("Snack 2: " + teamName);

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
console.log("Snack 3: " + numDue);
