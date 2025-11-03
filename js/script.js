// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (NON usare split, reverse e join)


const promtName = prompt("Inserisci un nome");
function isPalindroma(name) {


    for (let i = 0; i < promtName.length / 2; i++) {
        const currentName = promtName[i];
        if (currentName !== promtName[promtName.length - 1 - i]) {
            return false;
        }
    }

    return true
}


console.log(isPalindroma(promtName));







// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.