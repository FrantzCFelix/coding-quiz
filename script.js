$(document).ready(function(){


/*******var decleration******************/
var timerDisplay = $('#time-display');
var startButton = $('#start-button');
var quizDiv = $("#quiz");
var highScoreDiv = $("#submit-high-score");
var finalScoreSpan = $("#final-score");
var submitButton = $("#submit-button");
var clearButton = $("#clear-storage");
var rankings = $("#high-score-rankings");
var timeRemaining = (questions.length * 15);
var timerId;
var questionIndex = 0;
var score = 0;
var highScoreKey = "highScoreKey";
var highScoreString;

var highScoreArr = JSON.parse(localStorage.getItem(highScoreKey)) || [];
highScoreDiv.hide();


console.log(rankings);

/****************************************/
timerDisplay.text("Time:" + timeRemaining);

startButton.on("click", function () {

    startGame();
    generateQuestion(questions);

});

clearButton.on("click", function(){
    clearHighScore();    
});


function submitScore() {

    highScoreDiv.show();
    finalScoreSpan.text("Your Final Score Is: " + score);
    submitButton.on("click", function () {
        var initialVal = $("#inital-input").val();
        highScoreArr.push({ score, initialVal });
        highScoreString = JSON.stringify(highScoreArr);
        localStorage.setItem(highScoreKey, highScoreString);
        // getHighscore();

    });

}





function gameOver() {

    score = timeRemaining;
    timerDisplay.text(score);
    clearInterval(timerId);
    quizDiv.empty();
    submitScore();
}
function getHighscore()
{   

    console.log(window.location.href);
    HighScoreDisplayArr = JSON.parse(localStorage.getItem(highScoreKey));
    for (var i = 0; i < HighScoreDisplayArr.length; i++) {

        var oldHighScore = $("<li></li>");
        
        oldHighScore.addClass("list-group-item list-group-item-action");
        oldHighScore.attr("id", i);       
        oldHighScore.text(HighScoreDisplayArr[i].initialVal + " " + HighScoreDisplayArr[i].score );
        console.log(rankings);
        $("#high-score-rankings").append(oldHighScore);

}
}
function clearHighScore()
{
    
    localStorage.clear();
    highScoreArr = [];


}




function generateQuestion(questionsArr) {


    var displayedQuestion = $("<h1></h1>");

    if (questionIndex === questions.length) {
        gameOver();
        return;
    }

    displayedQuestion.addClass("text-center text-white");
    displayedQuestion.text(questionsArr[questionIndex].title);
    quizDiv.append(displayedQuestion);

    for (var i = 0; i < questionsArr[questionIndex].choices.length; i++) {

        var choice = $("<a></a>");
        choice.attr("href", "#");
        choice.addClass("list-group-item list-group-item-action choice-button");
        choice.attr("id", i);
        //combine attrs^
        choice.text(questionsArr[questionIndex].choices[i]);
        quizDiv.append(choice);

    }
    valdiateAnswer(questionsArr)

}

function valdiateAnswer(questionArr) {
    var choiceButtons = $(".choice-button");
    choiceButtons.on("click", function () {
        var choiceButtonPicked = $(event.target).attr("id");

        if ((questionArr[questionIndex].choices[choiceButtonPicked] === questionArr[questionIndex].answer) && questionIndex < questionArr.length) {
            var hrBar = $("<hr>");
            hrBar.text("Correct!");
            hrBar.addClass("span-quiz text-center m-auto py-3 badge badge-success w-50")
            quizDiv.append(hrBar);

            //to display correct/wrong before wipe
            //but now able to mash buttons
            setTimeout(function () {
                quizDiv.empty();
            }, 1000);

            questionIndex++;

            setTimeout(function () {
                generateQuestion(questions)
            }, 1000);
        }
        else {
            var hrBar = $("<hr>");
            hrBar.text("Wrong!");
            hrBar.addClass("span-quiz text-center m-auto py-3 badge badge-danger w-50")
            quizDiv.append(hrBar);

            //to display correct/wrong before wipe
            setTimeout(function () {
                quizDiv.empty();
            }, 1000);

            questionIndex++;
            timeRemaining -= 10;

            setTimeout(function () {
                generateQuestion(questions)
            }, 1000);

        }

    });

}

function startGame() {

    $("#start-screen").hide();

    timerId = setInterval(timer, 1000);

}

function timer() {

    --timeRemaining;

    timerDisplay.text("Time:" + timeRemaining);

    if (timeRemaining <= 0) {

        gameOver();
        clearInterval(timerId);
    }
}






if(window.location.href.indexOf("high-score-page.html"))
{
    console.log("High Score");
    getHighscore();
}












});
