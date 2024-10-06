// Get elements from the DOM
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll(".choice");

// Get scoreboard elements
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

let playerChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

// Add event listeners to all choice buttons
choices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    // Check if the target is the image or the button and get the id
    if (e.target.tagName === "IMG") {
      playerChoice = e.target.parentElement.id; // Get button id (parent of image)
    } else {
      playerChoice = e.target.id; // Get the button's id directly
    }

    // Display player's choice
    playerChoiceDisplay.textContent = playerChoice;

    // Generate computer's choice
    generateComputerChoice();

    // Get the result of the game
    getResult();

    // Update the score
    updateScore();
  })
);

// Function to randomly select computer's choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); // Generate random number between 0-2
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  // Display computer's choice
  computerChoiceDisplay.textContent = computerChoice;

  // Log choices for debugging
  console.log("Player Choice: " + playerChoice);
  console.log("Computer Choice: " + computerChoice);
}

// Function to determine the result of the game
function getResult() {
  if (playerChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You win!";
    playerScore++; // Increment player score
  } else {
    result = "You lose!";
    computerScore++; // Increment computer score
  }

  // Display the result
  resultDisplay.textContent = result;
}

// Function to update the scores
function updateScore() {
  playerScoreDisplay.textContent = playerScore; // Update player's score display
  computerScoreDisplay.textContent = computerScore; // Update computer's score display
}
