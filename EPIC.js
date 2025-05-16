// DOM Elements
const sequenceEl = document.getElementById('sequence');
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const feedbackEl = document.getElementById('feedback');

// Game state
let currentSequence = [];
let missingIndex = -1;
let correctAnswer = null;

// Event listener
submitBtn.addEventListener('click', () => {
  const userAnswer = answerInput.value.trim();
  checkAnswer(userAnswer);
});

// Main functions
function generateSequence() {
  // (will fill this in next)
}

function displaySequence() {
  // (will show sequence with ?)
}

function checkAnswer(input) {
  // (will validate input)
}

// Start game
generateSequence();
displaySequence();
