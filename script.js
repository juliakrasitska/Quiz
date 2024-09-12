const quizData = [
    {
        question: "Скільки вам років?",
        options: ["20-30", "30-35", "35-40", "приховую вік"],
        answer: "20-30"
    },
    {
        question: "Чи користуєтесь ви Інтернетом?",
        options: ["ніколи", "зрідка", "так", "утримаюсь від відповіді"],
        answer: "так"
    },
    {
        question: "Ваш рівень англійської мови?",
        options: ["A1", "B1", "B2-C1", "знаю німецьку"],
        answer: "B2-C1"
    },
    {
        question: "Чи проживаєте ви у місті Львові",
        options: ["Так", "Івано-Франківськ", "Тернопіль", " варіанти вірні"],
        answer: " варіанти вірні"
    },
    {
        question: "Що з переліченого не є мовою програмування?",
        options: ["Piton", "CSS", "C++", "JS"],
        answer: "CSS"
    },
    {
        question: "Чи є у вас досвід програмування",
        options: ["від року", "немає"],
        answer: "від року"
    },
    {
        question: "Ви командний гравець?",
        options: ["не дуже", "так", "ні", "залежить від команди"],
        answer: "так"
    },
    {
        question: "Ваш улюблений колір",
        options: ["жовтий", "синій", "зелений", "чорний"],
        answer: "чорний"
    },
    {
        question: "Чи любите ви котів",
        options: ["максимально", "так", "ненавиджу", " варіанти вірні"],
        answer: "максимально"
    },
    {
        question: "Пиво Арсенал топ за свої гроші?",
        options: ["Авжеж", "Ще б пак", "на всі 100", "ні"],
        answer: ["авжеж", "Ще б пак", "на всі 100"]
    }
];
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');
const results = document.getElementById('nextButton');

let currentQuestionIndex = 0;
let score = 0;
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener('click', selectOption);
        optionsElement.appendChild(button);
    });
}

function selectOption(evenet) {
    const selectedOption = evenet.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextButton.style.display = 'block';
    questionElement.querySelectorAll('button'.forEach(button => {
        button.removeEventListener('click', selectOption);
    }));

}
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.style.display = "none";

    } else {
        showResults();
    }
}
function showResults() {
    results.textContent = "Ви IT-машина на " + score + " з " + quizData.length;

}
nextButton.addEventListener('click', nextQuestion);
loadQuestion();