let num1 = 3;
let num2 = 5;
let num3 = 6;
let num4 = 9;
let num5 = 12;

let sum = num1 + num2 + num3 + num4 + num5;
let media = sum / 5;

let sumString = `la somma tra i numeri equivale a ${sum}`;
let mediaString = `la media tra i numeri equivale a ${media}`;

console.log(sumString + " " + mediaString);

console.log("\n");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let currentYear = 2024;
let bornYear = 2001;

let myAge = 2024 - 2001;
let yearsToHundred = 100 - myAge;

let myYearString = `Hai ${myAge} anni e ti mancano ${yearsToHundred} anni per compierne 100`

console.log(myYearString + "\n");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let totCats = 44;
let catsInARow = 6;

let totRows = totCats / catsInARow;
let catsOutRow = totCats % catsInARow;
let catsForARow = catsInARow - catsOutRow;

let finalMsg = `Ci sono ${Math.floor(totRows)} file di gatti e ne mancano ${catsForARow} per una nuova fila, con un avanzo di ${catsOutRow}`;

console.log(finalMsg);



