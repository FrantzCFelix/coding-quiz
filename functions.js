function startTimer(numOfQuestions, display) {
    
    var duration = numOfQuestions * 15;
    var timer = duration;
    var id = setInterval(function (){

        --timer;
        //grabbing the element with jquery
        display.text(timer);
        //console.log(timer);
        //if timer reaches zero reset duration
        if (timer < 0) {
            timer = duration;
            stopTimer(id);
            display.text(timer);
        }


}, 1000);




}



function stopTimer(timerName) {
    clearInterval(timerName);
}

function startQuiz() {


}