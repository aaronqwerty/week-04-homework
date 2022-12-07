let startButton = document.getElementById("start-btn");
let timeLeftDisplay = document.getElementById("time-left");
let timeLeft = 75;
let questionContainer = document.getElementById("question-container");
let choiceBtns = document.getElementById("answer-buttons");
let choiceBtn1 = document.getElementById("choice-btn-1");
let choiceBtn2 = document.getElementById("choice-btn-2");
let choiceBtn3 = document.getElementById("choice-btn-3");
let choiceBtn4 = document.getElementById("choice-btn-4");
let welcomeContent = document.querySelector(".welcome-message");
let answerButtons = document.getElementById("answer-buttons");
let welcomeMessage =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
let submitButton = document.getElementById("submit-btn")
let userInitialsEl = document.getElementById("user-initials")
let score = 0;
let scoreForm = document.getElementById("score-form");

document.querySelector(".welcome-message").innerHTML = welcomeMessage;

if (JSON.parse(localStorage.getItem("scoreSet"))=== null) {
  localStorage.setItem("scoreSet", JSON.stringify([]));
}

let highestScore = JSON.parse(localStorage.getItem("scoreSet"));
let questionNumber = 0;


// Questions

let questions = [
  {
    question:
      "Commonly used data types do not include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer: "alerts",
  },

  {
    question: "The condition in an if/else statement is enclosed within:",
    choice1: "quotes",
    choice2: "curley brackets",
    choice3: "parenthases",
    choice4: "square brackets",
    answer:"parenthases"
  },

  {
    question:
      "Arrays in JavaScript can be used to store:",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer:"all of the above"
  },

  {
    question: "String values must be enclosed within _____ when being assigned to variables",
    choice1: "commas",
    choice2: "curely brackets",
    choice3: "quotes",
    choice4: "parentheses",
    answer:"quotes"
  },
];

//start the countdown timer
function countDown() {
  let interval = setInterval(function () {
    if (timeLeft <= 0) {
      timeLeft = 0;
      gameOver();
      clearInterval(interval);
    }
    if (questionNumber >= 4) {
      clearInterval(interval);
    }
    timeLeftDisplay.innerHTML = timeLeft;
    timeLeft -= 1;
  }, 1000);
}

function hideShowClock() {
  var clock = document.getElementById("clock");
  clock.classList.toggle("clockHide");
}

function hideShowConfetti() {
  var clock = document.getElementById("confetti");
  clock.classList.toggle("confettiHide");
}


// Get question 1
function getQuestion1() {
  question.innerHTML = questions[0].question;
  choiceBtn1.innerHTML = questions[0].choice1;
  choiceBtn2.innerHTML = questions[0].choice2;
  choiceBtn3.innerHTML = questions[0].choice3;
  choiceBtn4.innerHTML = questions[0].choice4;

  // Listen for which button is clicked, and grab text from button

  choiceBtn1.addEventListener("click", wrongAnswer);
  choiceBtn1.addEventListener("click", getQuestion2);
  choiceBtn2.addEventListener("click", wrongAnswer);
  choiceBtn2.addEventListener("click", getQuestion2);
  choiceBtn3.addEventListener("click", rightAnswer);
  choiceBtn3.addEventListener("click", getQuestion2);
  choiceBtn4.addEventListener("click", wrongAnswer);
  choiceBtn4.addEventListener("click", getQuestion2);
}

// Get question 2
function getQuestion2() {
  let btn = document.querySelectorAll(".btn");
  setTimeout(() => {
    // display question and choices from question array
    question.innerHTML = questions[1].question;
    choiceBtn1.innerHTML = questions[1].choice1;
    choiceBtn2.innerHTML = questions[1].choice2;
    choiceBtn3.innerHTML = questions[1].choice3;
    choiceBtn4.innerHTML = questions[1].choice4;
    //Remove event listeners from previous question
    choiceBtn1.removeEventListener("click", wrongAnswer);
    choiceBtn1.removeEventListener("click", getQuestion2);
    choiceBtn2.removeEventListener("click", wrongAnswer);
    choiceBtn2.removeEventListener("click", getQuestion2);
    choiceBtn3.removeEventListener("click", rightAnswer);
    choiceBtn3.removeEventListener("click", getQuestion2);
    choiceBtn4.removeEventListener("click", wrongAnswer);
    choiceBtn4.removeEventListener("click", getQuestion2);
    // Add event listeners for right/wrong and to move to next question
    choiceBtn1.addEventListener("click", wrongAnswer);
    choiceBtn1.addEventListener("click", getQuestion3);
    choiceBtn2.addEventListener("click", wrongAnswer);
    choiceBtn2.addEventListener("click", getQuestion3);
    choiceBtn3.addEventListener("click", rightAnswer);
    choiceBtn3.addEventListener("click", getQuestion3);
    choiceBtn4.addEventListener("click", wrongAnswer);
    choiceBtn4.addEventListener("click", getQuestion3);
  }, 1000);
}

// Get question 3
function getQuestion3() {
  setTimeout(() => {
    // display question and choices from question array
    question.innerHTML = questions[2].question;
    choiceBtn1.innerHTML = questions[2].choice1;
    choiceBtn2.innerHTML = questions[2].choice2;
    choiceBtn3.innerHTML = questions[2].choice3;
    choiceBtn4.innerHTML = questions[2].choice4;
    //Remove event listeners from previous question
    choiceBtn1.removeEventListener("click", wrongAnswer);
    choiceBtn1.removeEventListener("click", getQuestion3);
    choiceBtn2.removeEventListener("click", wrongAnswer);
    choiceBtn2.removeEventListener("click", getQuestion3);
    choiceBtn3.removeEventListener("click", rightAnswer);
    choiceBtn3.removeEventListener("click", getQuestion3);
    choiceBtn4.removeEventListener("click", wrongAnswer);
    choiceBtn4.removeEventListener("click", getQuestion3);
    // Add event listeners for right/wrong and to move to next question
    choiceBtn1.addEventListener("click", wrongAnswer);
    choiceBtn1.addEventListener("click", getQuestion4);
    choiceBtn2.addEventListener("click", wrongAnswer);
    choiceBtn2.addEventListener("click", getQuestion4);
    choiceBtn3.addEventListener("click", wrongAnswer);
    choiceBtn3.addEventListener("click", getQuestion4);
    choiceBtn4.addEventListener("click", rightAnswer);
    choiceBtn4.addEventListener("click", getQuestion4);
  }, 1000);
}

// Get question 4
function getQuestion4() {
  setTimeout(() => {
    // display question and choices from question array
    question.innerHTML = questions[3].question;
    choiceBtn1.innerHTML = questions[3].choice1;
    choiceBtn2.innerHTML = questions[3].choice2;
    choiceBtn3.innerHTML = questions[3].choice3;
    choiceBtn4.innerHTML = questions[3].choice4;
    //Remove event listeners from previous question
    choiceBtn1.removeEventListener("click", wrongAnswer);
    choiceBtn1.removeEventListener("click", getQuestion4);
    choiceBtn2.removeEventListener("click", wrongAnswer);
    choiceBtn2.removeEventListener("click", getQuestion4);
    choiceBtn3.removeEventListener("click", wrongAnswer);
    choiceBtn3.removeEventListener("click", getQuestion4);
    choiceBtn4.removeEventListener("click", rightAnswer);
    choiceBtn4.removeEventListener("click", getQuestion4);
    // Add event listeners for right/wrong and to move to next question
    choiceBtn1.addEventListener("click", wrongAnswer);
    choiceBtn1.addEventListener("click", getResult);
    choiceBtn2.addEventListener("click", wrongAnswer);
    choiceBtn2.addEventListener("click", getResult);
    choiceBtn3.addEventListener("click", rightAnswer);
    choiceBtn3.addEventListener("click", getResult);
    choiceBtn4.addEventListener("click", wrongAnswer);
    choiceBtn4.addEventListener("click", getResult);
  }, 1000);
}

function rightAnswer() {
  // console.log("right answer");
  questionContainer.classList.add("correct");
  setTimeout(() => {
    questionContainer.classList.remove("correct");
    questionNumber++;
  }, 1000);
}

function wrongAnswer() {
  // console.log("wrong answer");
  timeLeft -= 10;
  questionContainer.classList.add("incorrect");
  setTimeout(() => {
    questionContainer.classList.remove("incorrect");
    questionNumber++;
  }, 1000);
}

function getResult() {
  score = timeLeft;
  questionContainer.innerText = "Your score = " + score;
  timeLeftDisplay.classList.add("hide");
  clock.classList.add("hide");
  clock1.classList.add("hide");
  if (score >= 1) {
    setTimeout(confetti.classList.remove("hide"), 1000);
    scoreForm.classList.remove("hide");
  };
  // if (let(this.score) => 1) {
  //   setTimeout(confetti.classList.remove("hide"), 1000);
  // };
  console.log(score);
}

// Start game
function startGame() {
  startButton.classList.add("hide");
  welcomeContent.classList.add("hide");
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  clock1.classList.remove("hide");
  clock.classList.remove("hide");
  countDown();
  getQuestion1();
}

gameOverMessage = document.querySelector(".game-over-message")

function gameOver() {
  timeLeft = 0;
  gameOverMessage.classList.remove("hide");
  answerButtons.classList.add("hide");
  questionContainer.classList.add("hide");
  fail.classList.remove("hide");
  clock.classList.add("hide");
  clock1.classList.add("hide");
}

function enterScore(event) {
  event.preventDefault()
  let userInitials = userInitialsEl.value;
  let scoreObject = {
    "initials": userInitials,
    "score": score
  };
  highestScore.push(scoreObject);
  localStorage.setItem("scoreSet", JSON.stringify(highestScore));
  window.location.href = "scores.html";
}

//Start button starts calls startGame
startButton.addEventListener("click", startGame);
submitButton.addEventListener("click", enterScore);