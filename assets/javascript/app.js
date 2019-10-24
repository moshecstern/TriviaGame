$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var countDown = 20;
    var intervalId;
    var rightAnswer;
    var playingGame = true;
    // make array of answers for each question 
    var unanswered = 0;
    var currentQuestion;
    var questionOne = {
        question: "which one of these is not from dc comics?",
        answer: ["batman", "superman", "ant-man", "flash"],
        correctAnswer: "ant-man"
    };

    var questionTwo = {
        question: "which one of these is not from marval comics?",
        answer: ["deadpool", "cyborg", "hulk", "x-men"],
        correctAnswer: "cyborg"
    };

    var allQuestions = [questionOne, questionTwo];

    // on load have page display game name 
    // start button to start the questions and answers

    // when start button is clicked countdown starts
    // loop through first question
    // display question 
    // display answers



    // function listAllQuestions(){
    //     for(var i = 0; i < allQuestions.length; i++){
    //         console.log(allQuestions[i].question);
    //         console.log(allQuestions[i].answer);
    //         console.log(allQuestions[i].correctAnswer);
    //         $("#question").append("<div>"+allQuestions[i].question+"</div> ");
    //         $("#answers").append("<div><p>"+allQuestions[i].answer+"</p></div> <br>");
    //         // $("#answers").on("click", function(){
    //         //     let array = allQuestions[i].answer;
    //         //     array.forEach(element => {

    //         //     });
    //         // })
    //         // let answer = '<div id="answer'+  i + '">' + question.answer[i] + '</div>';
    // //     $("#answers").append(answer);

    //     // document.getElementById(question).addEventListener("click", function () {
    //     //     allQuestions.answer;
    //     // })
    //     }
    // }
    // $("#reset").on("click", function() {
    //     listAllQuestions();
    // })



    // on load make html of #questions be a button to start game
    function reset() {
        // show start game button and reset all stats
        wins = 0;
        losses = 0;
        unanswered = 0;
        currentQuestion = 0;
        newSlide();
    }
    // function that will start countdown
    function startCountDown() {

        countDown = 5;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    $("#reset").on("click", reset);
// 
    function decrement() {
        if (countDown <= 0 && playingGame) {
            clearInterval(intervalId);
            // if countdown reaches 0, display correct answer
            // $("#answers").text(rightAnswer);
            //do score stuff
            // currentQuestion++;
            //display function for correct answer
            // finalResults();
            //with timeout call next slide
            // then pull next question
            displayResult();
            // startCountDown();
            setTimeout(function () {
                console.log("delay")
                // if(allQuestions.length == currentQuestion-1){
                if (currentQuestion > allQuestions.length - 1) {
                    // checkAnswer();
                    finalResults();
                    // countDown = 0;
                    // show game stats. and make start button visable
                } else {
                    // checkAnswer(false);
                    // currentQuestion++;
                    currentQuestion++;
                    newSlide();
                }
            }, 3000);
            // return;
        } else {
            countDown--;
        }
        //  Decrease number by one.
        //  Show the number in the #show-number tag.
        $("#timeRemaining").text(countDown);
    };

    function newSlide() {
        console.log("lets see what question we are on " + currentQuestion);
        // if(allQuestions.length === currentQuestion-1){
        if (currentQuestion > allQuestions.length - 1) {
            finalResults();
            // show game stats. and make start button visable
        } else {
            $("#answers").html("<div> </div>");
            startCountDown();
            let question = allQuestions[currentQuestion];
            console.log("if statement to end loop");
            //  
            //  
            // 

            $("#question").text(question.question);
            for (let i = 0; i < question.answer.length; i++) {
                let answer = '<div id="answer' + i + '">' + question.answer[i] + '</div>';
                $("#answers").append(answer);
                let id = "answer" + i;
                document.getElementById(id).addEventListener("click", function () {
                    clearInterval(intervalId);
                    checkAnswer(question.answer[i]);
                })
            }
            let rightAnswer = question.correctAnswer;
        };
    }
    function checkAnswer(answer) {
        // console.log('answer', answer, answer.length);
        // console.log('correct answer', allQuestions[currentQuestion].correctAnswer, allQuestions[currentQuestion].correctAnswer.length);
        // console.log('truth', answer == allQuestions[currentQuestion].correctAnswer);
        if (answer == allQuestions[currentQuestion].correctAnswer) {
            displayResult(true);
        } else {
            displayResult(false);
        };
        setTimeout(function () {
            console.log("delay")
            if (allQuestions.length - 1 == currentQuestion) {
                finalResults();
                // show game stats. and make start button visable
            } else {
                currentQuestion++;
                // this is where it calling new slide even if we dont have one
                newSlide();
            }
        }, 3000);
    };

    function displayResult(correctAnswer) {
        console.log(correctAnswer);
        // if there is another slide
        // if(allQuestions.length == currentQuestion-1){
        console.log("our current question is at" + currentQuestion);
        // finalResults();
        // }else
        if (correctAnswer === true) {
            // display you won
            $("#answers").html("<h2>you know it!! " + allQuestions[currentQuestion].correctAnswer + "</h2>");
            wins++;
        } else if (correctAnswer === false) {
            //display you lost
            $("#answers").html("<h2>nopeee!! the correct answer is " + allQuestions[currentQuestion].correctAnswer + "</h2>");
            losses++;
            // }else{
            //     unanswered++;
            // }
            // else display final result
        } else if (correctAnswer === undefined) {
            $("#answers").html("<h2>out of time!! the correct answer is " + allQuestions[currentQuestion].correctAnswer + "</h2>");
            unanswered++;
        }
    }
    function finalResults() {
        playingGame = false;
        // display score
        $("#questions").html("<div> wins: " + wins + "</div>"
            + "<div> wrong answers: " + losses + "</div>"
            + "<div> unanswered: " + unanswered + "</div>");
        countDown = 1;
        // hide countdown button

    }




    // time remaining should start countdown 
    // have initial html load on page with the first array of answers to choose from 

    // on click if correct answer was chosen 
    // wins++ 
    // make questions html show congrats
    // make timeout for a few seconds

    // on click if answer is wrong then 
    // make questions show nope! 
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