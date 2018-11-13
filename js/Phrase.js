class Phrase{
    constructor(phrase){
        this.phrase = phrase;
    }


    /*
     * Adds letter placeholders to the display when the game starts.
     * @param   {string}   phrase - The phrase that needs to be hidden.
     */
    addPhraseToDisplay(phrase){
        const phraseUL = $('#phrase ul')
        for (let letter of phrase) {
            if(letter !== ' '){
                const listItem = document.createElement('li');
                listItem.className = 'hide letter';
                $(listItem).text(letter);
                $(phraseUL).append(listItem);
            } else if (letter === ' '){
                const listItem = document.createElement('li');
                listItem.className = 'hide space';
                $(phraseUL).append(listItem);
            }
        }
    }


    /*
     * Checks to see if letter selected by player matches a letter in the phrase.
     * @param    {string}    letter - The letter users are searching for.
     * @param    {string}    phrase - The phrase that needs to be searched.
     * @return   {boolean}   true if the letter was found and false if not.
     */
    checkLetter(letter, phrase){
        for (let i = 0; i < phrase.length; i++) {
            if (phrase[i].toLowerCase() === letter.toLowerCase()) {
                return true
            }
        }
        return false
    }


    /*
     * Reveals the letter(s) on the board that matches player's selection.
     * @param    {string}    letter - The letter users are searching for.
     * @param    {string}    phrase - The phrase that needs to be searched.
     */
    showMatchedLetter(letter, phrase){
        const phraseUL = $('#phrase ul')
        for (let i = 0; i < phrase.length; i++) {
            if (phrase[i].toLowerCase() === letter.toLowerCase()) {
                $(phraseUL).children().eq(i).removeClass('hide');
                $(phraseUL).children().eq(i).addClass('show');
            }
        }
    }
}

