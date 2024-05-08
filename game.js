// Questions and answers array
const questions = [
    {
        question: "What year was the Magna Carta signed?",
        options: ["1215", "1315"],
        correct: 0 // Index of the correct answer (0 for the first option, 1 for the second)
    },
    {
        question: "Who was the first emperor of China?",
        options: ["Qin Shi Huang", "Kublai Khan"],
        correct: 0
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Diamond", "Quartz"],
        correct: 0
    },
    {
        question: "What element does the symbol 'Hg' represent on the periodic table?",
        options: ["Mercury", "Hydrogen"],
        correct: 0
    },
    {
        question: "Who wrote the novel 'One Hundred Years of Solitude'?",
        options: ["Gabriel García Márquez", "Mario Vargas Llosa"],
        correct: 0
    },
    {
        question: "What play features the character Iago?",
        options: ["Othello", "Macbeth"],
        correct: 0
    },
    {
        question: "What is the largest island in the world?",
        options: ["Greenland", "New Guinea"],
        correct: 0
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Canberra"],
        correct: 1
    },
    {
        question: "Who composed the music for the film 'Star Wars'?",
        options: ["John Williams", "Hans Zimmer"],
        correct: 0
    },
    {
        question: "In the TV show 'Friends,' what is the name of Ross and Carol's son?",
        options: ["Ben", "Joey"],
        correct: 0
    }
];

// Initialize game
function initGame() {
    loadQuestion();
}

// Load a question and its options
function loadQuestion() {
    const currentQuestionIndex = Math.floor(Math.random() * questions.length); // Choose a random question
    const currentQuestion = questions[currentQuestionIndex];
    
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("option1").innerText = currentQuestion.options[0];
    document.getElementById("option2").innerText = currentQuestion.options[1];

    // Save the correct answer index and current question index in the game state for future use
    document.getElementById("option1").dataset.correct = currentQuestion.correct === 0;
    document.getElementById("option2").dataset.correct = currentQuestion.correct === 1;
}

// Handle the player's answer
function handleAnswer(event) {
    const isCorrect = event.target.dataset.correct === "true";

    // Logic for handling correct/incorrect answers, scoring, and game progress goes here
    // E.g., update player score if correct, monkey's random choice, check for end of game, etc.

    // Move to the next question
    loadQuestion();
}

// Event listeners for answer buttons
document.getElementById("option1").addEventListener("click", handleAnswer);
document.getElementById("option2").addEventListener("click", handleAnswer);

// Initialize the game when the page loads
window.onload = initGame;

