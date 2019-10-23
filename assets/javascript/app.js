$(document).ready(function () {
var wins =0;
var losses = 0;
var countDown = 20;
var intervalId;
var rightAnswer;
// make array of answers for each question 
var unanswered = 0;
var questionOne = {question:"which one of these is not from dc comics?", 
                  answer: ["batman ", "superman ", "ant-man ", "flash"],
                  correctAnswer: "ant-man"};

var questionTwo = {question:"which one of these is not from marval comics?", 
                    answer: ["deadpool ", "cyborg ", "hulk ", "x-men"],
                    correctAnswer: "cyborg"};

// on load make html of #questions be a button to start game
function reset (){
    // show start game button and reset all stats
    wins = 0;
    losses = 0;
    unanswered = 0;
}
// function that will start countdown
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  $("#reset").on("click", run);

  function decrement() {
    //  Decrease number by one.
    countDown--;
    //  Show the number in the #show-number tag.
    $("#timeRemaining").text(countDown);
  };
function newSlide(){
    run();
    // $("#question").text(questionOne.question);
    // console.log(questionOne.question);
    // $("#answers").text(questionOne.answer);
    // console.log(questionOne.answer);
    // rightAnswer = questionOne.correctAnswer;
    $("#question").text(this.question);
    console.log(this.question);
    $("#answers").text(this.answer);
    console.log(this.answer);
    rightAnswer = this.correctAnswer;

}

$("#reset").on("click",newSlide);
if(countDown < 1){
  // if countdown reaches 0, display correct answer
  $("#answers").text(rightAnswer);
  // then pull next question
} else {
    $("#question").text("nope, wrong answer");
    $("#answers").text(rightAnswer);
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

// if time runs out then question is made not answered

// when we get to the end hide time remaining 
// have correct answers 
// how many were answered wrong
// unanswered 
// start over button apears to restart quiz



});