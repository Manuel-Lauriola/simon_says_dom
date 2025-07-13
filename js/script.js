//definisco un array vuoto che andrò a mettere in numbers list
const numbers = [];
let generatedNumber = 0;

//faccio un ciclo per riempire l'array con 5 numeri casuali
for (i=0; i < 5;i++) {
  generatedNumber = Math.floor(Math.random() * 50 +1)
  numbers.push(generatedNumber)
}
  console.log(numbers)

//inserisco sottoforma di elementi lista i numeri generati
const numbersList = document.getElementById(`numbers-list`);
numbersList.innerHTML = `<ul id="numbers-list" class="d-flex gap-5 list-unstyled">
<li>${numbers[0]}</li>
<li>${numbers[1]}</li>
<li>${numbers[2]}</li>
<li>${numbers[3]}</li>
<li>${numbers[4]}</li>
</ul>`

//imposto il timer di 10 secondi da mostrare nel countdown
//lo richiamo dal file html insieme alle istruzioni e al form
const countdown = document.getElementById(`countdown`)
const instructions = document.getElementById(`instructions`)
const answers = document.getElementById(`answers-form`)
//dichiaro una variabile per il countdown
let timer = 10;
//imposto il timer per il conto alla rovescia con intervalli di 1000ms
const count = setInterval(() => {
  timer--;
  countdown.innerText = timer;
  //imposto che il timer sparisca quando finisce il tempo
if (timer === 0 ) {
  countdown.classList.add(`d-none`)
  numbersList.classList.add(`d-none`)
  instructions.innerText = `Inserisci i numeri che hai memorizzato`
  answers.classList.remove(`d-none`)
  clearInterval(count)
}
}, 1000);


//prendo i valori che metterà l'utente
//quindi definisco le variabil degli input e del tasto
const userInputs = document.querySelectorAll(".form-control")
const button = document.querySelector(".btn");
const message = document.getElementById(`message`)

//aggiungo all'evento click la creazione di un array contenente i numeri inseriti
const guessedNumbers = [];
let guessedNumber;
//creo prima una variabile che conti le risposte corrette
let guessedRight = 0;
button.addEventListener(`click`,(e) => {
  e.preventDefault();
  for (i=0;i < userInputs.length; i++) {
    guessedNumber = parseInt(userInputs[i].value)
    guessedNumbers.push(guessedNumber)
  }
  console.log(guessedNumbers)
  //confronto i due array in un for
  for (i=0; i<guessedNumbers.length; i++) {
  if ( numbers.includes(guessedNumbers[i])) {
    guessedRight++;
  }
  }
console.log(guessedRight)
//infine do l'esito del gioco
  if (guessedRight === 5) {
    message.innerText = `hai indovinato tutti i numeri`
  }
    else if (guessedRight === 4) {
      message.innerText = `hai indovinato 4 numeri`
    }
    else if (guessedRight === 3) {
      message.innerText = `hai indovinato 3 numeri`
    }
    else if (guessedRight === 2) {
      message.innerText = `hai indovinato 2 numeri`
    }
    else if (guessedRight === 1) {
      message.innerText = `hai indovinato 1 numeri`
    }
    else {
      message.innerText = `hai indovinato 0 numeri`
    }
}
)







