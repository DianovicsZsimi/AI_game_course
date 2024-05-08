// Questions and answers array
const questions = [
    {
        question: "What year was the Magna Carta signed?",
        options: ["1215", "1315"],
        correct: 0
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
    },
{
    question: "Which planet in our solar system has the most moons?",
    options: ["Jupiter", "Saturn"],
    correct: 1 // Index of the correct answer (0 for the first option, 1 for the second)
},
{
    question: "Who was the first woman to win a Nobel Prize?",
    options: ["Marie Curie", "Jane Addams"],
    correct: 0
},
{
    question: "Which language is spoken in Brazil?",
    options: ["Portuguese", "Spanish"],
    correct: 0
},
{
    question: "Who painted the 'Mona Lisa'?",
    options: ["Leonardo da Vinci", "Vincent van Gogh"],
    correct: 0
},
{
    question: "What is the largest desert in the world?",
    options: ["Sahara", "Arctic"],
    correct: 1
},
{
    question: "What year did the Titanic sink?",
    options: ["1912", "1913"],
    correct: 0
},
{
    question: "Who is known as the father of modern computer science?",
    options: ["Alan Turing", "Albert Einstein"],
    correct: 0
},
{
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Nitrogen", "Oxygen"],
    correct: 0
},
{
    question: "What is the largest country in the world by land area?",
    options: ["Russia", "Canada"],
    correct: 0
},
{
    question: "Who wrote the epic poem 'The Odyssey'?",
    options: ["Homer", "Virgil"],
    correct: 0
}
];

let playerScore = 0; // Track player's score
let monkeyScore = 0; // Track monkey's score

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

    // Update player's score if the answer is correct
    if (isCorrect) {
        playerScore++;
    }

    // Generate the monkey's answer randomly
    const monkeyChoice = Math.floor(Math.random() * 2);
    const currentQuestionIndex = Math.floor(Math.random() * questions.length);
    const currentQuestion = questions[currentQuestionIndex];

    if (monkeyChoice === currentQuestion.correct) {
        monkeyScore++;
    }

    // Update scores
    document.getElementById("score").innerText = `Your Score: ${playerScore} | Monkey's Score: ${monkeyScore}`;

    // Check for game end (when either the player or the monkey reaches 10 points)
    if (playerScore >= 10) {
        document.getElementById("result").innerText = "You won! You are smarter than the monkey!";
        endGame();
    } else if (monkeyScore >= 10) {
        document.getElementById("result").innerText = "The monkey won! Better luck next time!";
        endGame();
    } else {
        // Move to the next question if the game hasn't ended
        loadQuestion();
    }
}

// Function to end the game and disable answer buttons
function endGame() {
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
}

// Event listeners for answer buttons
document.getElementById("option1").addEventListener("click", handleAnswer);
document.getElementById("option2").addEventListener("click", handleAnswer);

// Initialize the game when the page loads
window.onload = initGame;
