// console.log('Ciao');

var hamburger = document.querySelector('.hamburger-btn');
var theBody = document.querySelector('body');

hamburger.onclick = function() {
  console.log('click');
  theBody.classList.toggle('menu-is-open');
}


// Basi di JS
var today = new Date();
var hourNow = today.getHours();
var greetings;

console.log(today);
console.log(hourNow);
console.log(greetings); // undefined

if(hourNow > 17) {
  greetings = 'Buona sera';
} else if(hourNow > 12) {
  greetings = 'Buon pomeriggio';
} else if (hourNow > 5) {
  greetings = 'Buongiorno';
} else {
  greetings = 'Ciao';
}
console.log(greetings);
// document.write(greetings);

var colors = [
  'red',
  'blue',
  'green'
];
console.log(colors);
console.log(colors[1]);
console.log(colors.length);

var thirdColor = colors[2];
console.log(thirdColor);

var numberOne = 5;
var numberTwo = 10;
console.log(numberTwo + numberOne);
console.log(numberTwo - numberOne);
console.log(numberTwo / numberOne);
console.log(numberTwo * numberOne);
console.log(numberTwo % numberOne);
console.log(numberTwo++, numberTwo++);
console.log(numberOne--, numberOne--);

var cost1 = "3";
var cost2 = "2";
var word = "Andrea";
console.log(cost1 + cost2)
console.log(cost1 * cost2)
console.log(word + cost1)
console.log(word * cost1)