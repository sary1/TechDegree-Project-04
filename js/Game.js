class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['hello sary are you here',
                        'My name is Sary',
                        'Do you know my name',
                        'This app is amazing',
                        'OOP is not that difficult after all'];
        this.phrase = this.getRandomPhrase;
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
    handleInteraction(){
        const hiddenObject  = this.phrase;
        const hiddenPhrase  = hiddenObject.phrase;
        $('#qwerty').on('click', e => {
            if(e.target.className === 'key'){
                const clickedLetter = e.target.textContent;
                if(hiddenObject.checkLetter(clickedLetter, hiddenPhrase)){
                    hiddenObject.showMatchedLetter(clickedLetter, hiddenPhrase);
                    if (this.checkForWin()) {
                        this.gameOver();
                    }
                } else {
                    this.removeLife();
                }
            }
        })
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
            $(gameOverHeader).text('Congratulations you won the Game Yaay ;)');
        } else {
            $(gameOverHeader).text('Sorry you lost, Try one more time');
        }
        $('#overlay').show();
    }


    /*
     * Uses the randomly picked phrase to display it on the board
     */
    startGame(){
        const phraseObj = this.phrase;
        const phrase = phraseObj.phrase;
        phraseObj.addPhraseToDisplay(phrase);
        return phraseObj;
    }
}
