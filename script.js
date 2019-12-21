//$(document).ready(function(){


/*******var decleration******************/
var timerDisplay = $('#time-display');
var startButton = $('#start-button');
var timeRemaining = questions.length * 15;
var timerId;
var questionIndex = 0;
 

/****************************************/
startButton.on("click", function(){

    startGame()
    generateQuestion(questions);


});


function generateQuestion(questionsArr)
{
    var quizDiv = $("#quiz");
    var displayedQuestion = $("<h1></h1>")
    displayedQuestion.text(questionsArr[questionIndex].title);
    quizDiv.append(displayedQuestion);
    
    for(var i = 0; i< questionsArr[questionIndex].choices.length;i++)
    {
        console.log(questionsArr[questionIndex].choices.length);
        var choice = $("<a>----------------</a>");
        quizDiv.append(choice);



    }


    


questionIndex++;
}




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

function startGame() {

    $("#start-screen").hide();

     timerId = setInterval(timer, 1000);
    
}




function timer() {

    --timeRemaining;

    timerDisplay.text(timeRemaining);

    if (timeRemaining <= 0) {
        
        // GameOver
        clearInterval(timerId)
    }
}



















//});
