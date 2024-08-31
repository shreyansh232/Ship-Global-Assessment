// Array of word objects containing the word, its scrambled version, and a hint
const words = [
    { word: "EXCHANGE", scrambled: "AEGEXCHN", hint: "The act of trading" },
    { word: "TRADING", scrambled: "GTARDIN", hint: "Buying and selling goods or services" },
    { word: "MARKET", scrambled: "AMKRET", hint: "Place where goods are bought and sold" },
    { word: "STOCK", scrambled: "KTSOC", hint: "A share in the ownership of a company" },
    { word: "FINANCE", scrambled: "AEFINCN", hint: "Management of money and investments" }
];

// Game state variables
let currentWord = {};
let attempts = 0;
let timeLeft = 30;
let timerInterval;

// Function to select and display a new word
function getNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById('scrambledWord').textContent = currentWord.scrambled;
    document.getElementById('hint').textContent = `Hint: ${currentWord.hint}`;
    document.getElementById('userGuess').value = '';
    document.getElementById('feedback').textContent = '';
    attempts = 0;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    resetTimer();
}

// Function to check the user's guess
function checkWord() {
    const userGuess = document.getElementById('userGuess').value.toUpperCase();
    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;

    if (userGuess === currentWord.word) {
        document.getElementById('feedback').textContent = 'Correct! Well done!';
        document.getElementById('feedback').style.color = '#2ecc71';
        clearInterval(timerInterval);
    } else {
        document.getElementById('feedback').textContent = 'Incorrect. Try again!';
        document.getElementById('feedback').style.color = '#e74c3c';
    }
}

// Function to reset and start the timer
function resetTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            document.getElementById('feedback').textContent = "Time's up! Try a new word.";
            document.getElementById('feedback').style.color = '#e74c3c';
        }
    }, 1000);
}

// Function to update the timer display
function updateTimerDisplay() {
    document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
}

// Initialize the game with a new word
getNewWord();

// Event listener for Enter key press in the input field
document.getElementById('userGuess').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkWord();
    }
});