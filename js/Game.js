class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['Avengers Infinity War',
                        'Jurassic World Fallen Kingdom',
                        'Black Panther',
                        'Mission Impossible Fallout',
                        'AntMan and the Wasp',
                        'Bros Ready Player One',
                        'Operation Red Sea',
                        'Star Wars The Force Awakens',
                        'The Hunger Games Mockingjay',
                        'Inside Out'];
        this.phrase = this.startGame;
    }


    /*
     * Randomly retrieves one of the phrases stored in the phrases array.
     * @return   {Object}   Phrase - The phrase that will be hidden.
     */
    get getRandomPhrase(){
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return new Phrase(this.phrases[randomNum]);
    }


    /*
     * Checks to see if the button clicked by the player matches a letter in the
     * phrase.
     */
    handleInteraction(event){
        const hiddenObject  = this.phrase;
        const hiddenPhrase  = hiddenObject.phrase;
        // make sure the players doesn't remove a life when clicking
        // in an empty space
        if(event.target.className.indexOf('key') != -1 &&
           event.target.className.indexOf('keyrow') === -1){
            const clickedLetter = event.target.textContent;
            if(hiddenObject.checkLetter(clickedLetter, hiddenPhrase)){
                hiddenObject.showMatchedLetter(clickedLetter, hiddenPhrase);
                if (this.checkForWin()) {
                    this.gameOver();
                }
            } else {
                // Change the color of wrong letters
                event.target.classList.add('wrong');
                this.removeLife();
            }
        }
    }


    /*
     * Removes a life, removes a heart from the board, and, if the player is out
     * of lives, ends the game.
     */
    removeLife(){
        const hearts    = $('#scoreboard ol').children();
        const lastHeart = $('#scoreboard ol').children().last();
        const livesNum  = $('#scoreboard ol').children().length;
        if (livesNum > 1) {
            lastHeart.remove();
        } else {
            lastHeart.remove();
            this.gameOver();
        }
    }


    /*
     * Checks to see if the player has selected all of the letters.
     */
    checkForWin(){
        const letters = $('#phrase ul').children();
        for (let i = 0; i < letters.length; i++) {
            if(letters[i].className === 'hide letter'){
                return false
            }
        }
        return true
    }


    /*
     * Displays a message if the player wins and another message if he loses.
     */
    gameOver(){
        const gameOverHeader = $('#game-over-message');
        if (this.checkForWin()) {
            $(gameOverHeader).text('Congratulations you won the Game Yaay');
            $('#btn__reset').text('Play Again');
        } else {
            $(gameOverHeader).text('Sorry you lost, Try one more time');
            $('#btn__reset').text('Play Again');
        }
        $('#overlay').show();
    }


    /*
     * Uses the randomly picked phrase to display it on the board
     */
    get startGame(){
        const phraseObj = this.getRandomPhrase;
        const phrase = phraseObj.phrase;
        phraseObj.addPhraseToDisplay(phrase);
        return phraseObj
    }
}
