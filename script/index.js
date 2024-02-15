function play(){
 // first section
let hideHomeSection = document.getElementById('home');
hideHomeSection.classList.add('hidden');
// second section
let showPlaygroundSection = document.getElementById('play-ground');
showPlaygroundSection.classList.remove('hidden');
}
// function of handle keypress //
function handleKeyPress(event){
 let userPress = event.key ;  //this method can find my keys (event.key)
 console.log('user press is', userPress) ;

 // call display alphabets and settings //
 let displayAlphabets = document.getElementById('current-alphabet');
 let innerDisplayText = displayAlphabets.innerText;
 let caseIssue = innerDisplayText.toLowerCase();

 // show  two output in combine then compare ..
 console.log(userPress,caseIssue) ;

 // set condition //
 if(userPress === caseIssue){
  console.log('you are right');
  // set score //
 let callScoreById = document.getElementById('my-score') ;
 let currentScoreText = callScoreById.innerText ;
 let score = parseInt(currentScoreText);
 let updateScore = score + 1 ;
 callScoreById.innerText = updateScore ;
 removeBackgroundColor(caseIssue);
  continueGame() ;
 }
 else{
  console.log('you are wrong')
   // set life //
 let callLifeById = document.getElementById('my-life') ;
 let lifeText = callLifeById.innerText ;
 let life = parseInt(lifeText);
 let finalLife = life - 1 ;
 callLifeById.innerText = finalLife ;
 }

}
// handle keypress
document.addEventListener('keyup', handleKeyPress)


// 
function continueGame(){
 const alphabet =  getRandomAlphabet();
 // set update alphabet
 let currentAlphabet = document.getElementById('current-alphabet') ;
 currentAlphabet.innerText = alphabet ;
 // sect bg of alphabets
 addBackgroundColorById(alphabet);
}
// connection of functions in button by onclick.....................................
function connectToButton(){
 play();
 continueGame();
}