/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("--------------ESERCIZIO 1--------------");
function area(l1, l2) {
  let risultato = l1 * l2;
  return risultato;
}
console.log("l'area è " + area(5, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("--------------ESERCIZIO 2--------------");
function crazySum(num1, num2) {
  let sum = num1 + num2;
  console.log("somma iniziale: ", sum);
  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}
console.log("Esempio se numeri diversi: ", crazySum(5, 3));
console.log("Esempio se numeri uguali: ", crazySum(3, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

console.log("--------------ESERCIZIO 3--------------");
function crazyDiff(num1) {
  let diff = Math.abs(num1 - 19);
  if (num1 > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}
console.log("Esempio se numero inserito è maggiore di 19: ", crazyDiff(22));
console.log("Esempio se numero inserito è minore di 19: ", crazyDiff(6));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

console.log("--------------ESERCIZIO 4--------------");
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log("Esempio se n  rispetta i parametri: ", boundary(46));
console.log("Esempio se non rispetta i parametri: ", boundary(19));
console.log("Esempio se n è uguale a 400: ", boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
console.log("--------------ESERCIZIO 5--------------");
function epify(word) {
  if (word.startsWith("EPICODE")) {
    return word;
  } else {
    return "EPICODE", word;
  }
}
console.log(epify("Ciaooo"));
console.log(epify("EPICODE Corso"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
console.log("--------------ESERCIZIO 6--------------");
function check3and7(num1) {
  if (num1 < 0) {
    return false;
  }
  if (num1 % 3 === 0 || num1 % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(" il numero è un multiplo di 3 o di 7?: ", check3and7(21));
console.log(" il numero è un multiplo di 3 o di 7?: ", check3and7(53));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

console.log("--------------ESERCIZIO 7--------------");
function reverseString(word) {
  const arrayCaratteri = word.split("");
  const arrayCaratteriInvert = arrayCaratteri.reverse();
  const stringInvert = arrayCaratteriInvert.join("");
  return stringInvert;
}
console.log(reverseString("ciao epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

console.log("--------------ESERCIZIO 8--------------");
/*function upperFirst(string) {
  const arrayX = string.split("");
  for (let index = 0; index < arrayX; index++) {
    const element = array[index];
  }
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

console.log("--------------ESERCIZIO 9--------------");

function cutString(string) {
  if (string.length < 2) {
    return " ";
  } else {
    return string.slice(1, -1);
  }
}
console.log(cutString("ciao"));
console.log(cutString("Federico"));
console.log(cutString("la"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

console.log("--------------ESERCIZIO 10--------------");

function giveMeRandom(num) {
  let randomNumbers = [];
  for (let index = 0; index < num; index++) {
    let nRandom = Math.floor(Math.random() * 11);
    randomNumbers.push(nRandom);
  }
  return randomNumbers;
}
console.log(giveMeRandom(7));
