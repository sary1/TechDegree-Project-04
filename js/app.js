const startDiv = $('#overlay');
$('#btn__reset').on('click', e =>{
    startDiv.hide();
})



/*
const game = new Game();
game.getRandomPhrase();
game.handleInteraction();
*/


// Checking results of Phrase class
const phrase = new Phrase('hello sary are you here');
phrase.addPhraseToDisplay('hello sary are you here');
console.log(phrase.checkLetter('y', 'hello sary are you here'));
console.log(phrase.checkLetter('z', 'hello sary are you here'));
// phrase.showMatchedLetter('y', 'Sary are you here');


const game = new Game();
game.handleInteraction();
