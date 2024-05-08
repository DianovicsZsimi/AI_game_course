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
    },
    // Additional questions:
    {
        question: "Which planet in our solar system has the most moons?",
        options: ["Jupiter", "Saturn"],
        correct: 1
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

let playerScore = 0; // Player's score
let monkeyScore = 0; // Monkey's score
let usedQuestions = []; // Array to track used questions

// Initialize game
function initGame() {
    // Reset game state
    playerScore = 0;
    monkeyScore = 0;
    usedQuestions = [];
    
    // Hide the Play Another Game button
    document.getElementById("play-another-game").style.display = "none";

    // Hide the monkey image
    document.getElementById("monkey-image").style.display = "none";
    
    // Reset the score and result texts
    document.getElementById("score").innerText = "Your Score: 0 | Monkey's Score: 0";
    document.getElementById("result").innerText = "";

    // Re-enable option buttons
    document.getElementById("option1").disabled = false;
    document.getElementById("option2").disabled = false;

    // Start the game by loading the first question
    loadQuestion();
}

// Load a question and its options
function loadQuestion() {
    // Get unused question indices
    let unusedQuestions = questions.map((_, index) => index).filter(index => !usedQuestions.includes(index));
    
    // Check if there are no unused questions left
    if (unusedQuestions.length === 0) {
        // End the game and show the "Play Another Game" button
        document.getElementById("result").innerText = "Game Over! There are no questions left!";
        endGame();
        document.getElementById("play-another-game").style.display = "block";
        return;
    }

    // Choose a random question from the unused ones
    const randomIndex = Math.floor(Math.random() * unusedQuestions.length);
    const currentQuestionIndex = unusedQuestions[randomIndex];
    
    const currentQuestion = questions[currentQuestionIndex];
    
    // Display the question and options
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("option1").innerText = currentQuestion.options[0];
    document.getElementById("option2").innerText = currentQuestion.options[1];

    // Set data attributes for answer buttons
    document.getElementById("option1").dataset.correct = currentQuestion.correct === 0;
    document.getElementById("option2").dataset.correct = currentQuestion.correct === 1;

    // Add the current question index to the usedQuestions array
    usedQuestions.push(currentQuestionIndex);
}

// Handle the player's answer
function handleAnswer(event) {
    const isCorrect = event.target.dataset.correct === "true";

    // Highlight the selected button based on whether the answer is correct or incorrect
    if (isCorrect) {
        // Add green border for correct answer
        event.target.style.borderColor = 'green';
    } else {
        // Add red border for incorrect answer
        event.target.style.borderColor = 'red';
    }

    // Timeout function to remove the border after 0.5 seconds
    setTimeout(() => {
        event.target.style.borderColor = 'transparent';
    }, 500);

    // Update player's score if the answer is correct
    if (isCorrect) {
        playerScore++;
    }

    // Generate the monkey's random choice
    const monkeyChoice = Math.floor(Math.random() * 2);
    const currentQuestionIndex = usedQuestions[usedQuestions.length - 1]; // The most recent question
    const currentQuestion = questions[currentQuestionIndex];

    // Update monkey's score if its choice is correct
    if (monkeyChoice === currentQuestion.correct) {
        monkeyScore++;
    }

    // Update the displayed scores
    document.getElementById("score").innerText = `Your Score: ${playerScore} | Monkey's Score: ${monkeyScore}`;

    // Check for game-ending conditions
    if (playerScore >= 10 && monkeyScore >= 10) {
        // Tie condition
        document.getElementById("result").innerText = "Tie! Try again!";
        endGame();
        document.getElementById("play-another-game").style.display = "block";
    } else if (playerScore >= 10) {
        // Player wins
        document.getElementById("result").innerText = "You won! You are smarter than the monkey!";
        endGame();
        document.getElementById("play-another-game").style.display = "block";
    } else if (monkeyScore >= 10) {
        // Monkey wins
        document.getElementById("result").innerText = "The monkey won! Better luck next time!";
        endGame();
        document.getElementById("play-another-game").style.display = "block";
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

// Event listener for the "Play Another Game" button
document.getElementById("play-another-game").addEventListener("click", initGame);

// Initialize the game when the page loads
window.onload = initGame;
