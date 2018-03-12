// 'use strict';

// consent to play
alert('WOULD YOU LIKE TO PLAY A GAME?');
console.log('Let\'s play a game!');

// instructions
alert('Answer the following yes or no');
console.log('Yes or no questions');

// 1st question: what's my favorite show
function vampire(){
    var Buff = prompt('Do you think I liked Buffy the vampie Slayer?').toLowerCase();
    console.log('favorite show');
    if(Buff.toLowerCase() === 'yes' ) {
      alert('that is correct! You win a cookie.');
    } else {
      alert('Wrong! The Earth is doomed.');
    }
  }
  vampire();

// 2nd question: Do I like seafood
function seafood() {
    var food =prompt('do I like seafood?').toLowerCase();
    console.log('seafood is the best');
    if(food.toLowerCase() === 'yes' ) {
      alert('Yes, I\'m a seafood-a-saurus');
    } else {
      alert('Wrong! If you don\'t know me by now. You will never never know me.');
    }
  }
  
  seafood();

// 3rd question: Do I wear glasses
function eyes() {
    var glasses =prompt('Do I wear glasses?').toLowerCase();
    console.log('I am blind');
    if(glasses.toLowerCase() === 'yes' ) {
      alert('Yup, so thick I can see into the future');
    } else {
      alert('Who said that? I can\'t see you.');
    }
  }
  
  eyes();

  // 4th question: Do I walk

function walk() {
    var Transport =prompt('Do I walk to class?').toLowerCase();
    console.log('walk or bus');
    if(Transport.toLowerCase() === 'yes' ) {
      alert('No, Walkings for suckers');
    } else {
      alert('Kinda, The wheels on the bus go round and round');
    }
  }
  
  walk();


// 5th question: fear of clowns
function spider() {
  var spiderman =prompt('am I afraid of clowns?').toLowerCase();
  console.log('clowns are creepy');
  if(spiderman.toLowerCase() === 'yes') {
    alert('You\'ll float too!!');
  } else {
    alert('No, but spiders are scaaaary too!!!');
  }
}
spider();

//new way to answer questions
alert('Time to change things up');
console.log('changing the game');


// 6th question: Favorite color
function color() {
var color =prompt('what is one of my two favorite colors?').toLowerCase();
var colorArray = ["purple", "blue"];
console.log('My colors');
for(var i = 0; i < 4; i++){
        console.log(i);
        for(var counter = 0; counter < colorArray.length; counter = counter + 1) {
            if(color === colorArray[counter]) {
                alert('You got it!')
                break;
            }
    }
   if(counter < colorArray.length){
    break;
  } else {
    alert('color me bad, wrong answer');
    console.log('not my color');
   }
 }
}



// 7th question: where have I lived
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

    
      

var playAgain = confirm('A strange game. The only winning move is not to play. A nice game of chess or play again?');
console.log(playAgain)