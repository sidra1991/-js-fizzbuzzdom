// Consegna:

// ----------------------------------------------------------------------------------------
// Scrivi un programma che stampi in console i numeri da 1 a 100.

// for (let nunberBase = 1; nunberBase <= 100; nunberBase++) {
//     console.log(nunberBase) 
// }


// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

// for (let number = 1; number <= 100 ; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         console.log("FizzBuzz")
//     } else if (number % 5 === 0){
//         console.log("buzz")
//     } else if (number % 3 === 0 ) {
//         console.log("fizz")
//     }else {
//         console.log (number)
//     }
// }
// --------------------------------------------------------------------------------------


// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// for (let number = 1; number <= 100; number++) {
//     if (number % 3 === 0 && number % 5 === 0) {
//         document.writeln("FizzBuzz")
//     } else if (number % 5 === 0) {
//         document.writeln("buzz")
//     } else if (number % 3 === 0) {
//         document.writeln("fizz")
//     } else {
//         document.writeln(number)
//     }
// }


// MILESTONE 3
// Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
// Consigli del giorno:


let container = document.querySelector(`.container`)

for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
        container.innerHTML = container.innerHTML +`<div class="square bgFizzBuzz"> Fizz buzz ${number} </div>`
    } else if (number % 5 === 0) {
        container.innerHTML = container.innerHTML +`<div class="square bgBuzz"> Buzz ${number}</div>`
    } else if (number % 3 === 0) {
        container.innerHTML = container.innerHTML +`<div class="square bgFizz"> Fizz ${number}</div>`
    } else {
        container.innerHTML = container.innerHTML +`<div class="square bgNumber ">${number}</div>`
    }
}


// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare

// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:



alert(" finito (sto inserendo scemnze) grazie mauro ")