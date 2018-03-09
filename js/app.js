'use strict';

var numberCorrect = 0;

// consent to play  
alert('WOULD YOU LIKE TO PLAY A GAME?');
console.log('Let\'s play a game!');

// instructions
alert('Answer the following yes or no');
console.log('Yes or no questions');


// 1st question: what's my favorite show
var Buff = prompt('Do you think I liked Buffy the vampie Slayer?').toLowerCase();
if(Buff.toLowerCase() === 'y' ) {
alert('that is correct! You win a cookie.');
console.log('Question 1 correct, welcome to the scooby gang');
numberCorrect++;
} else (Buff.toLowerCase() === 'n') {
alert('Wrong! The Earth is doomed.');
 }

// // 2nd question: Do I walk
// var Transport =prompt('Do I walk to class?').toLowerCase();
// console.log('I have to take a bus and walk.');
// if(Transport.toLowerCase() === 'y') {
//  alert('Walking\'s for suckers');
//  console.log('Question 2 was correct');
//  numberCorrect++
// } else (transport.toLowerCase() === 'n') {
//  alert('Kinda, The wheels on the bus go round and round');
//  console.log('Question 2 was incorrect');
// }

// // 3rd question: Do I like seafood
// var food =prompt('do I like seafood?').toLowerCase();
// console.log('Question 3 correct, I really love sushi');
// if(food.toLowerCase() === 'y') {
//  alert('Yes, I\'m a seafood-a-saurus');
//  numberCorrect++
// } else(food.toLowerCase() === 'n') {
//  alert('Wrong! If you don\'t know me by now. You will never never know me.');
// console.log('Question 3 was wrong, wrong wrong');
// }

// // 4th question: Do I wear glasses
// var glasses =prompt('Do I wear glasses?').toLowerCase();
// console.log('Glasses help me see');
// if(glasses.toLowerCase() === 'y') {
//  alert('Yup, so thick I can see into the future');
//  numberCorrect++
// } else(glasses.toLowerCase() === 'n') { 
//  alert('Who said that? I can\'t see you.');
//  console.log('Nope, I needz them');
// }

// // // 5th question: fear of clowns
// var spiderman =prompt('am I afraid of clowns?').toLowerCase();
// console.log('clowns are creepy');
// if(spiderman.toLowerCase() === 'yes') {
//  alert('You\'ll float too!!');
//  numberCorrect++
// } else {      
//   alert('No, but spiders are scaaaary too!!!')
//   console.log('spiders might be just as scary');
// };

// //new way to answer questions
// alert('Time to change things up');
// console.log('changing the game');


// // 6th question: Favorite color
// var color =prompt('what is one of my two favorite colors?').toLowerCase();
// console.log('My colors');
// var colorArray = ["purple", "blue"]
// if(colorArray.includes(color)) {
//   alert('You got it!');
//   numberCorrect++
// } else {
//   alert('Color me bad, wrong answer');
//   console.log('No, not my color';)
// }



// // // 7th question How many cars have I owned? (NEED TO PROBLEM SOLVE)
// // // var carArray = ['3'];
// // // console.log('how many cars')
// // // for (var i = 0; i < 4; i++)

// // // var car = prompt('How many cars have I owned?');
// // // console.log(i);
// // for(var counter = 0)

// // //   console.log('the counter is' + counter);
// // //   if(var car === counterArray[counter]) {
// // //   alert("You are correct!")
// // //   } else if {
// // //     var (car < counterArray)
// // //   alert('To high! Try again') }
// // //   else  {
// // //     alert('to looow, try again')
// // //   }



// // 8th question: where have I lived
// var stateArray = ["california", "colorado", "louisiana", "arkansas"];
// console.log('state of living');
// for(var i = 0; i < 6; i++){
//   var state = prompt("Name a state, other than Washington, where I have lived").toLowerCase();
//   console.log(i);
//   for(var counter = 0; counter < stateArray.length; counter = counter + 1) {
//     if(state === stateArray[counter]) {
//       alert("congrats! you got it right!")
//       numberCorrect++
//       break;
//     }
//   }
//   if(counter < stateArray.length){
//     break;
//   } else {
//     alert('Incorrect, try again')
//     console.log('Not my state of mind');
//   }
// }


// // Playagain: Wargames reference
// alert(' You got ' + (numverCorrect) + ' correct ');
// var playAgain = confirm('A strange game. The only winning move is not to play. A nice game of chess or play again?');
// console.log(playAgain);