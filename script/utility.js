function getRandomAlphabet(){
 let alphabetString = 'abcdefghijklmnopqrstuvwxyz' ;
 let alphabets = alphabetString.split('');
 console.log(alphabets)
 // this is the main swings of this 
 let randomNumber = Math.random()*25 ;
 let index = Math.round(randomNumber);
 console.log(index)
 // final call
 const alphabet = alphabets[index];
 console.log(index , alphabet) ;
 return alphabet ;
}
// background color
function addBackgroundColorById(elementId){
let element = document.getElementById(elementId);
element.classList.add('bg-orange-400');
}

// remove background color

function removeBackgroundColor(removeBg){
   let backgroundColor = document.getElementById(removeBg);
  backgroundColor.classList.remove('bg-orange-400') ;
}