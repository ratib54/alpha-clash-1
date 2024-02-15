function play(){
 // first section
let displayHomeSection = document.getElementById('home');
displayHomeSection.classList.add('hidden');
// second section
let displayPlaygroundSection = document.getElementById('play-ground');
displayPlaygroundSection.classList.remove('hidden');
}

function continueGame(){
 const alphabet =  getRandomAlphabet();
 // set update alphabet
 let currentAlphabet = document.getElementById('current-alphabet') ;
 currentAlphabet.innerText = alphabet ;
 // sect bg
 addBackgroundColorById(alphabet);
}
// connection of functions in button by onclick...
function connectToButton(){
 play();
 continueGame();
}