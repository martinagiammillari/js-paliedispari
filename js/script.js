// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (NON usare split, reverse e join)

//-----------------------------------------------------------------------


// const promtName = prompt("Inserisci un nome");
// function isPalindroma(name) {


//     for (let i = 0; i < promtName.length / 2; i++) {
//         const currentName = promtName[i];
//         if (currentName !== promtName[promtName.length - 1 - i]) {
//             return false;
//         }
//     }

//     return true
// }


// console.log(isPalindroma(promtName));

//-----------------------------------------------------------------------
























// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const sceltaUtente = prompt("Scegli: pari o dispari?");
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));

function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

let numeroComputer = generaNumeroRandom();

console.log("Hai scelto:", sceltaUtente);
console.log("Il tuo numero:", numeroUtente);
console.log("Numero del computer:", numeroComputer);

let somma = numeroUtente + numeroComputer;
console.log("La somma è:", somma);

function pariOdispari(numero) {
    if (numero % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

let risultato = pariOdispari(somma);
console.log("La somma è:", risultato);

if (risultato === sceltaUtente.toLowerCase()) {
  console.log("Hai vinto!");
} else {
  console.log("Ha vinto il computer!");
}