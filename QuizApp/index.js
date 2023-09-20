const question = [
    {
        question: "Kada sam rođen?",
        answers: [ "2002", "2001", "2000", "2003" ],
        correctAnswer: "2002"
    },
    {
        question: "Gdje zivim?",
        answers: [ "Zenica", "Sarajevo", "Travnik", "Kakanj" ],
        correctAnswer: "Zenica"
    },
    {
        question: "Koju drzavu nisam obisao?",
        answers: [ "Njemacku", "Italiju", "Tursku", "Austriju" ],
        correctAnswer: "Njemacku"
    }
]

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const resultText = document.getElementById("result-text");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const current = question[currentQuestion];
    questionText.textContent = current.question;

    answersContainer.innerHTML = "";
    current.answers.forEach((answer, index) => {
        const answerButton = document.createElement("button");
        answerButton.classList.add("answer-btn");
        answerButton.innerText = answer;
        answerButton.addEventListener("click", () => checkAnswer(answer, current.correctAnswer));
        answersContainer.appendChild(answerButton);
    }); 

    nextButton.style.display = "none";
    resultText.textContent = "";
};

function checkAnswer(selectedAnswer, correctAnswer){
    if(selectedAnswer === correctAnswer){
        score++;
    }

    nextButton.style.display = "block";
    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.disabled = true;
    });
}

nextButton.addEventListener("click", ()=>{
    currentQuestion++;
    if(currentQuestion < question.length){
        loadQuestion();
    }else{
        showResult();
    }
});

function showResult(){
    questionText.textContent = "Quiz je zavrsen!";
    answersContainer.innerHTML = `<p>Tvoj rezultat je:  ${score} od ${question.length}</p>`;
    nextButton.style.display = "none";
}

loadQuestion();