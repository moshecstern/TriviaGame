$(document).ready(function () {
var wins =0;
var losses = 0;
var countDown = 20;
var intervalId;
var rightAnswer;
// make array of answers for each question 
var unanswered = 0;
var currentQuestion = 0;
var allQuestions = [];
var questionOne = {question:"which one of these is not from dc comics?", 
                  answer: ["batman", "superman", "ant-man", "flash"],
                  correctAnswer: "ant-man"};

var questionTwo = {question:"which one of these is not from marval comics?", 
                    answer: ["deadpool", "cyborg", "hulk", "x-men"],
                    correctAnswer: "cyborg"};

    allQuestions.push(questionOne);
    allQuestions.push(questionTwo);
// on load make html of #questions be a button to start game
function reset (){
    // show start game button and reset all stats
    wins = 0;
    losses = 0;
    unanswered = 0;
    currentQuestion = 0;
    newSlide();
}
// function that will start countdown
function startCountDown() {

    countDown = 20;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  $("#reset").on("click", reset);

  function decrement() {
    if(countDown <= 0){
        // if countdown reaches 0, display correct answer
        $("#answers").text(rightAnswer);
        //do score stuff
        currentQuestion++;
        //display function for correct answer
        displayResult();
        //with timeout call next slide
        // then pull next question
        setTimeout(function () {
            console.log("delay")
            if(allQuestions.length == currentQuestion-1){
                checkAnswer();
                // countDown = 0;
                // finalResults();
                // show game stats. and make start button visable
            }else{
                currentQuestion++;
                newSlide();
            }
        }, 3000);
        return ;
      } else {
          countDown--;
      }
    //  Decrease number by one.
    //  Show the number in the #show-number tag.
    $("#timeRemaining").text(countDown);
  };

function newSlide(){
    $("#answers").html("<div> </div>");
    startCountDown();
    let question = allQuestions[currentQuestion];
    $("#question").text(question.question);
for (let i=0; i < question.answer.length; i++){
    let answer = '<div id="answer'+  i + '">' + question.answer[i] + '</div>';
    $("#answers").append(answer);
    let id = "answer" + i;
    document.getElementById(id).addEventListener("click", function () {
        checkAnswer(question.answer[i]);
    })
 
}


   
    let rightAnswer = question.correctAnswer;

}

function checkAnswer(answer){
    console.log('answer', answer, answer.length);
    console.log('correct answer', allQuestions[currentQuestion].correctAnswer, allQuestions[currentQuestion].correctAnswer.length);
    console.log('truth', answer == allQuestions[currentQuestion].correctAnswer);
    if (answer == allQuestions[currentQuestion].correctAnswer) {
        displayResult(true);
    } else {
        displayResult(false);
    };
    setTimeout(function () {
        console.log("delay")
        if(allQuestions.length == currentQuestion-1){
            finalResults();
            // show game stats. and make start button visable
        }else{
            currentQuestion++;
            newSlide();
        }
    }, 3000);
    
}
function displayResult(correctAnswer){
    console.log(correctAnswer);
    if(correctAnswer === true){
        // display you won
        $("#answers").html("<h2>you know it!! " + allQuestions[currentQuestion].correctAnswer + "</h2>");
    }else{
        //display you lost
        $("#answers").html("<h2>nopeee!! the correct answer is " + allQuestions[currentQuestion].correctAnswer + "</h2>")
        decrement();
    }
}
function finalResults(){
// display score
$("#answers").html("<div> wins: " + wins + "</div>"
                + "<div> wrong answers: " + losses + "</div>"
                + "<div> unanswered: " + unanswered + "</div>");
}




// time remaining shoud start countdown 
// have initial html load on page with the first array of answers to choose from 

// on click if correct answer was chosen 
// wins++ 
// make questions html show congrats
// make timeout for a few seconds

//on click if answer is wrong then 
//make questions show nope! 
// losses++ 
// make answers show the correct answer
// make timeout for a few sec 

// either way show gif/ pic of right answer
// and go through the next question

// if time startCountDowns out then question is made not answered

// when we get to the end hide time remaining 
// have correct answers 
// how many were answered wrong
// unanswered 
// start over button apears to restart quiz



});