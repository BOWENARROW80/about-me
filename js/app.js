// consent to play  
alert('WOULD YOU LIKE TO PLAY A GAME?');
console.log('Let\'s play a game!');

// instructions
alert('Answer the following yes or no');
console.log('Yes or no questions');


// 1 My favorite show
var Buff = prompt('Do you think I liked Buffy the vampie Slayer?').toLowerCase();

if(Buff.toLowerCase() === 'yes' ) {
alert('that is correct! You win a cookie.');
} else {
alert('Wrong! The Earth is doomed.');
 }

// 2 I take the bus so sad
var Transport =prompt('Do I walk to class?').toLowerCase();

if(Transport.toLowerCase() === 'yes' ) {
 alert('No, Walkings for suckers');
} else {
 alert('Kinda, The wheels on the bus go round and round');
};

// 3 food nomnomnom
var food =prompt('do I like seafood?').toLowerCase();

if(food.toLowerCase() === 'yes' ) {
 alert('Yes, I\'m a seafood-a-saurus');
} else {
 alert('Wrong! If you don\'t know me by now. You will never never know me.');
};

// 4 Do I wear glasses
var glasses =prompt('Do I wear glasses?').toLowerCase();
if(glasses.toLowerCase() === 'yes' ) {
 alert('Yup, so thick I can see into the future');
} else { 
 alert('Who said that? I can\'t see you.')
};

// 5 spiderclown
var spiderman =prompt('am I afraid of clowns?').toLowerCase();
if(spiderman.toLowerCase() === 'yes') {
 alert('You\'ll float too!!');
} else {      
  alert('No, but spiders are scaaaary too!!!')
};

// WARGAMES reference man
var playAgain = confirm('A strange game. The only winning move is not to play. A nice game of chess or play again?');
console.log(playAgain);