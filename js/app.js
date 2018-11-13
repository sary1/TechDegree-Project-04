// Initializng the game
let game = new Game();


// This function resets the game
function resetDisplay(){
    // hide starting screen overlay
    const startDiv = $('#overlay');
    $('#btn__reset').on('click', e =>{
        startDiv.hide();
    })

    // reset onscreen keyboard classes
    $('.key').removeClass('wrong');
    $('.key').removeClass('chosen');

    // retrieve life hearts
    const hearts = '<li class="tries"><img src="images/liveHeart.png" height="35px" widght="30px"></li>'
    const heartsNum = $('#scoreboard ol').children().length;
    for (let i = 0; i < 5-heartsNum; i++) {
        $('#scoreboard ol').append(hearts);
    }

    // reset phrase display
    $('#phrase ul').remove();
    const ul = '<ul></ul>'
    $('#phrase').append(ul);
}


// a function that handles interactions inside the game object
// * Disables the button on the onScreen
function markButton(event){
    // Mark each clicked letter as chosen
    if(event.target.className.indexOf('keyrow') === -1 &&
       event.target.className.indexOf('section') === -1){
        event.target.classList.add('chosen');
    }

    // Handle interactions with the hidden phrase
    game.handleInteraction(event);
}


// A listener to letter clicks that calls mark button function
$('#qwerty').on('click', e => {
    console.log(e.target.textContent);
    markButton(e);
})


// a function that resets the game, initialize a new one and start it
$('#btn__reset').on('click', e => {
    resetDisplay();
    game = new Game();
})


resetDisplay();


// Simulating a mouse click on the onscreen keyboard when using the
// keyboard
$(document).on('keypress', e => {
    const letter = e.key;
    const button = $(`button:contains(${letter}):last`)
    const clickedBtn = button[0];
    $(clickedBtn).trigger('click');
})
