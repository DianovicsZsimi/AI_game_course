// Questions and answers array
const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4"],
        correct: 1 // Index of the correct answer (0 for the first option, 1 for the second)
    },
    {
        question: "What color is the sky?",
        options: ["Blue", "Green"],
        correct: 0
    },
    // Add more questions as needed
];

let playerScore = 0;
let monkeyScore = 0;
let currentQuestionIndex = 0;

// Initialize game
function initGame() {
    loadQuestion();
}

// Load a question and its options
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("option1").innerText = currentQuestion.options[0];
    document.getElementById("option2").innerText = currentQuestion.options[1];
}

// Handle the player's answer
function handleAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const monkeyChoice = Math.floor(Math.random() * 2); // Randomly select monkey's choice (0 or 1)

    // Check player's answer
    if (selectedIndex === currentQuestion.correct) {
        playerScore++;
    }

    // Check monkey's answer
    if (monkeyChoice === currentQuestion.correct) {
        monkeyScore++;
    }

    // Update scores and display results
    updateScores();

    // Check if the game should end
    if (playerScore >= 10 || monkeyScore >= 10) {
        endGame();
    } else {
        // Move to the next question
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        loadQuestion();
    }
}

// Update the scores on the screen
function updateScores() {
    document.getElementById("score").innerText = `Your Score: ${playerScore} | Monkey's Score: ${monkeyScore}`;
}

// End the game
function endGame() {
    let resultMessage = "";
    if (playerScore >= 10) {
        resultMessage = "You won! You are smarter than the monkey!";
    } else {
        resultMessage = "The monkey won! Better luck next time!";
    }

    document.getElementById("result").innerText = resultMessage;
    // Disable buttons to end the game
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
}

// Event listeners for answer buttons
document.getElementById("option1").addEventListener("click", () => handleAnswer(0));
document.getElementById("option2").addEventListener("click", () => handleAnswer(1));

// Initialize the game when the page loads
window.onload = initGame;
