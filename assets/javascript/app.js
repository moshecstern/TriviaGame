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
        question: "Which one of these is not from dc comics?",
        answer: ["Batman", "Superman", "Ant-man", "Flash"],
        correctAnswer: "Ant-man"
    };

    var questionTwo = {
        question: "Which one of these is not from marval comics?",
        answer: ["Deadpool", "Cyborg", "Hulk", "X-Men"],
        correctAnswer: "Cyborg"
    };

    var questionThree = {
        question: "Which one of these heroes can not fly?",
        answer: ["Thor", "Aquaman", "Spider-Man", "Wolverine"],
        correctAnswer: "Thor"
    };

    var questionFour = {
        question: "What does Billie Batson say in order to run into?",
        answer: ["I am Groot", "Wassssuuup", "Hickory Dickory Dock", "Shazam"],
        correctAnswer: "Shazam"
    };

    var questionFive = {
        question: "Who has radioactive blood?",
        answer: ["Spider-Man", "Hulk", "Deadpool", "Superman"],
        correctAnswer: "Spider-Man"
    };

    var questionSix = {
        question: "Which hero did not lose his parents at an early age?",
        answer: ["Iron Man", "Daredevil", "Batman", "Thor"],
        correctAnswer: "Thor"
    };

    var questionSeven = {
        question: "Which one of these newspapers is not real in the superhero universe?",
        answer: ["Daily Bugle", "Gotham Gazette", "Daily Planet", "Cornwood Times"],
        correctAnswer: "Cornwood Times"
    };

    var questionEight = {
        question: "Who was the earliest popular superhero?",
        answer: ["Mandrake the Magician", "Batman", "Superman", "The Human Torch"],
        correctAnswer: "Mandrake the Magician"
    };

    var questionNine = {
        question: "Who is the most powerful female superhero?",
        answer: ["Super Girl", "Rogue", "Captain Marvel", "Wonder Woman"],
        correctAnswer: "Wonder Woman"
    };

    var questionTen = {
        question: "Which hero was a star quarterback at Gotham University?",
        answer: ["Booster Gold", "Nightwing", "Blue Beetle", "Red Arrow"],
        correctAnswer: "Booster Gold"
    };


    var allQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];
// for some reason the background image in css didnt work
    // document.body.style.backgroundImage = "url('assets/images/superherobackground.jpg')";
    // document.body.style.backgroundSize = "cover";
    $("#hideContent").hide();


    // on load make html of #questions be a button to start game
    function reset() {
        // show start game button and reset all stats
        wins = 0;
        losses = 0;
        unanswered = 0;
        currentQuestion = 0;
        answer=0;
        playingGame = true;
        clearInterval(intervalId);
        $("#hideContent").show();
        $("#questions").show();
        $("#results").hide();
        newSlide();
    }
    // function that will start countdown
    function startCountDown() {
        $("#reset").hide();
        countDown = 16;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    $("#reset").on("click", reset);
    // 
    function decrement() {
        if (countDown <= 0 && playingGame) {
            clearInterval(intervalId);
            displayResult();
            // startCountDown();
            setTimeout(function () {
                console.log("delay")
                if (currentQuestion > allQuestions.length - 1) {
                    finalResults();
                } else {
                    currentQuestion++;
                    newSlide();
                }
            }, 3000);
        } else {
            countDown--;
        }
        //  Show the number in the #show-number tag.
        $("#timeRemaining").text(countDown);
    };

    function newSlide() {
        console.log("lets see what question we are on " + currentQuestion);
        if (currentQuestion > allQuestions.length - 1) {
            finalResults();
            // show game stats. and make start button visable
        } else {
            $("#answers").html("<div> </div>");
            startCountDown();
            let question = allQuestions[currentQuestion];
            console.log(question);
            $("#question").text(question.question);
            for (let i = 0; i < question.answer.length; i++) {
                let answer = '<div id="answer' + i + '">' + question.answer[i] + '</div>';
                $("#answers").append(answer);
                // console.log("i:", i);
                // console.log("answer:", answer);
                let id = "answer" + i;
                // console.log("id", id);
                document.getElementById(id).addEventListener("click", function () {
                    clearInterval(intervalId);
                    checkAnswer(question.answer[i]);
                })
            }
            let rightAnswer = question.correctAnswer;
        };
    };
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
            console.log("losses" + losses);
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
        $("#results").html("<div> wins: " + wins + "</div>"
            + "<div> wrong answers: " + losses + "</div>"
            + "<div> unanswered: " + unanswered + "</div>");
        $("#results").show();
        $("#questions").hide();
        countDown = 1;
        $("#reset").show();
        // hide countdown button

    }





// copied code- trying to make heros fly around page
$("#reset").on("click",function() {
    animateDiv($('.a'));
        animateDiv($('.b'));
        animateDiv($('.c'));
        animateDiv($('.d'));
        animateDiv($('.e'));
        animateDiv($('.f'));
});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height();
    var w = $container.width();

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}
function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;


}

});