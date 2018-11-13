class Game{
    constructor(){
        this.missed = 0;
        this.phrases = ['hello sary are you here'];
        // this.phrases = ['hello', 'Sary', 'are', 'you', 'here'];
        this.phrase = new Phrase(this.getRandomPhrase());
    }


    getRandomPhrase(){
        const randomNum = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNum];
    }


    handleInteraction(){
        $('#qwerty').on('click', e => {
            const clickedLetter = e.target.textContent;
            const hiddenObject  = this.phrase;
            const hiddenPhrase  = hiddenObject.phrase;
            if(hiddenObject.checkLetter(clickedLetter, hiddenPhrase)){
                hiddenObject.showMatchedLetter(clickedLetter, hiddenPhrase);
                this.checkForWin();
            } else {
                this.removeLife();
            }
        })
    }


    removeLife(){
        const hearts    = $('#scoreboard ol').children();
        const lastHeart = $('#scoreboard ol').children().last();
        const livesNum  = $('#scoreboard ol').children().length;
        if (livesNum > 1) {
            lastHeart.remove();
        } else {
            this.gameOver();
        }
    }


    checkForWin(){
        const letters = $('#phrase ul').children();
        for (let i = 0; i < letters.length; i++) {
            if(letters[i].className === 'hide letter'){
                return false
            }
        }
        return true
    }


    gameOver(){}
}
