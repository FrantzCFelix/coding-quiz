//$(document).ready(function(){


/*******var decleration******************/
var timerDisplay = $('#time-display');
var startButton = $('#start-button');
var timeRemaining = questions.length * 15;
var timerId;
var questionIndex = 0;
 

/****************************************/
startButton.on("click", startGame);
function startGame() {

    $("#start-screen").hide();

    timerId = setInterval(timer, 1000);
    
}

// generateQuestion()
// question.title[0]
// questionIndex++
// if (questions.length === questionIndex) {gameOver()} else {generateQuestion[questionIndex]}

// clickButton() 
// valdiate answer (right or wrong [if wrong(time -= 10)])
// use array.find?
//for each
//array.some
// generateQuestion()

// gameOver()




// WrongAnswer()




function timer() {

    --timeRemaining;

    timerDisplay.text(timeRemaining);
git
    if (timeRemaining < 0) {
        
        // GameOver
        clearInterval(timerId)
    }
}



















//});
