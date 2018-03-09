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

// 2nd question: Do I walk

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

// 3rd question: Do I like seafood
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

// 4th question: Do I wear glasses
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

alert('Time to change things up');
console.log('changing the game');


// 6th question: Favorite color
function darkness() {
  var color =prompt('what is one of my two favorite colors?').toLowerCase();
  console.log('colors');
  var colorArray = ['purple', 'blue'];
  if(colorArray.includes(color)) {
    alert('You got it!');
  } else {
    alert('Color me bad, wrong answer');
  }
}

darkness();

// 7th question How many cars have I owned? (NEED TO PROBLEM SOLVE)
// var carArray = ['3'];
// console.log('how many cars')
// for (var i = 0; i < 4; i++)

// var car = prompt('How many cars have I owned?');
// console.log(i);
// for(var counter = 0)

//   console.log('the counter is' + counter);
//   if(var car === counterArray[counter]) {
//   alert("You are correct!")
//   } else if {
//     var (car < counterArray)
//   alert('To high! Try again') }
//   else  {
//     alert('to looow, try again')
//   }

// 8th question: where have I lived

function dwelling() {
  var stateArray = ['california', 'colorado', 'louisiana', 'arkansas'];
  console.log('state of living');
  for(var i = 0; i < 6; i++){
    var state = prompt('Name a state, other than Washington, where I have lived').toLowerCase();
    console.log(i);
    for(var counter = 0; counter < stateArray.length; counter = counter + 1) {
      if(state === stateArray[counter]) {
        alert('congrats! you got it right!');
        break;
      }
    }
    if(counter < stateArray.length){
      break;
    } else {
      alert('Incorrect, try again');
    }
  }
}

dwelling();

// Playagain: Wargames reference
var playAgain = confirm('A strange game. The only winning move is not to play. A nice game of chess or play again?');
console.log(playAgain);