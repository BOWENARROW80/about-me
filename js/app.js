'use strict';

// consent to play  
alert('WOULD YOU LIKE TO PLAY A GAME?');
console.log('Let\'s play a game!');

// instructions
alert('Answer the following yes or no');
console.log('Yes or no questions');


// 1st question: what's my favorite show
var buff = prompt('Do you think I liked Buffy the vampie Slayer?').toLowerCase();
if (buff.toLowerCase() === 'yes') {
alert('that is correct! You win a cookie.');
console.log('Question 1 was correct');
} else (buff.toLowerCase() === 'no'); {
alert('Wrong! The Earth is doomed.');
console.log('Question 1 was wrong');
 }

// 2nd question: Do I like seafood
var food = prompt('do I like seafood?').toLowerCase();
if(food.toLowerCase() === 'yes') {
 alert('Yes, I\'m a seafood-a-saurus');
 console.log('Question 2 was correct.');
} else(food.toLowerCase() === 'no'); {
 alert('Wrong! If you don\'t know me by now. You will never never know me.');
console.log('Question 2 was wrong');
}

// 3rd question: Do I walk
var transport =prompt('Do I walk to class?').toLowerCase();
if(transport.toLowerCase() === 'yes') {
 alert('Walking\'s for suckers');
 console.log('Question 3 was correct');
} else (transport.toLowerCase() === 'no'); {
 alert('Kinda, The wheels on the bus go round and round');
 console.log('Question 3 was incorrect');
}

// // // 4th question: Do I wear glasses
var glasses =prompt('Do I wear glasses?').toLowerCase();
if(glasses.toLowerCase() === 'yes') {
 alert('Yup, so thick I can see into the future');
 console.log('Question 4 was correct')
} else(glasses.toLowerCase() === 'no'); { 
 alert('Who said that? I can\'t see you.');
 console.log('Question 4 was incorrect');
}

// 5th question: fear of clowns
var spiderman =prompt('am I afraid of clowns?').toLowerCase();
console.log('clowns are creepy');
if(spiderman.toLowerCase() === 'yes') {
 alert('You\'ll float too!!');
 console.log('Question 5 was correct')
} else {      
  alert('No, but spiders are scaaaary too!!!')
  console.log('question 5 was incorrect');
}

//new way to answer questions
alert('Time to change things up');
console.log('changing the game');



// 6th question: Favorite color
var colorArray = ["purple", "blue"];
console.log('My colors');
for(var i = 0; i < 4; i++){
    var color =prompt('what is one of my two favorite colors?').toLowerCase(); {
        console.log(i);
        for(var counter = 0; counter < colorArray.length; counter = counter + 1) 
            if(color === colorArray[counter]) {
                alert('You got it!')
                break;
            }
    }
   if(counter < colorArray.length){
    break;
  } else {
    alert('color me bad, wrong answer');
    console.log('colors of the wind');
   }
}
   
    

// // 7th question: where have I lived
var stateArray = ["california", "colorado", "louisiana", "arkansas"];
console.log('state of living');
for(var i = 0; i < 6; i++){
  var state = prompt("Name a state, other than Washington, where I have lived").toLowerCase();
  console.log(i);
  for(var counter = 0; counter < stateArray.length; counter = counter + 1) {
    if(state === stateArray[counter]) {
      alert("congrats! you got it right!")
      break;
    }
  }
  if(counter < stateArray.length){
    break;
  } else {
    alert('Incorrect, try again')
  }
}

// // Playagain: Wargames reference
var playAgain = confirm('A strange game. The only winning move is not to play. A nice game of chess or play again?');
console.log(playAgain);