//definisco un array vuoto che andrò a mettere in numbers list
const numbers = [];
let generatedNumber = 0;

//faccio un ciclo per riempire l'array con 5 numeri casuali
for (i=0; i < 5;i++) {
  generatedNumber = Math.floor(Math.random() * 100)
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