const quizQuestions = [
    {
        question: "What color is in the middle of the rainbow?",
        options: ["Blue", "Yellow", "Green", "Red"],
        correctAnswer: "Green"
    },
    {
        question: "How high is Mount Everest?",
        options: ["5,849 m", "8,849 m", "6,849 m", "7,849 m"],
        correctAnswer: "8,849 m"
    },
    {
        question: "What is the largest canyon in the world?",
        options: ["Verdon Gorge, France", "King’s Canyon, Australia", "Grand Canyon, USA", "Fjaðrárgljúfur Canyon, Iceland"],
        correctAnswer: "Grand Canyon, USA"
    },
    {
        question: "How many strings has a standard bass guitar?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "Who is the Greek goddess of beauty?",
        options: ["Aphrodite", "Demeter", "Hestia", "Athena"],
        correctAnswer: "Aphrodite"
    },
    {
        question: "Which of the following is the largest city?",
        options: ["Tokyo", "New York", "London", "Rome"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Which country is the top producer of coffee?",
        options: ["Colombia", "Ivory Coast", "Brazil", "Argentina"],
        correctAnswer: "Brazil"
    },
    {
        question: "How many elements are there on the periodic table?",
        options: ["58", "78", "98", "118"],
        correctAnswer: "118"
    },
    {
        question: "Who painted 'Girl with a Pearl Earring'?",
        options: ["Johannes Vermeer", "Vincent Van Gogh", "Leonardo da Vinci", "Sandro Botticelli"],
        correctAnswer: "Johannes Vermeer"
    },
    {
        question: "In which city is the Juventus Football Club based?",
        options: ["Turin", "Barcelona", "Manchester", "Marseille"],
        correctAnswer: "Turin"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timerInterval;

function startQuiz() {

    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
}


function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");

    questionText.innerHTML = "";
    answerButtons.innerHTML = "";

    questionText.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-button");
        answerButtons.appendChild(button);

        button.addEventListener("click", function () {
            checkAnswer(option);
        });
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }


    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}


function endQuiz() {
    clearInterval(timerInterval);

    const scorePercentage = (score / quizQuestions.length) * 100;

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
}

document.getElementById("start-button").addEventListener("click", startQuiz);