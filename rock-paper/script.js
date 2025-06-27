console.log("Hello World");

// Function to get computer choice
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Function to get human choice
function getHumanChoice() {
  const userInput = prompt("Enter your choice: rock, paper, or scissors");
  return userInput.toLowerCase();
}

// Declare score variables
let humanScore = 0;
let computerScore = 0;

//Function to play a single round
function playRound(humanChoice, computerChoice) {
  // Make human choice case-insensitive
  const normalizedHumanChoice = humanChoice.toLowerCase();

  // Determine the winner
  if (normalizedHumanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${computerChoice}`);
    return "tie";
  } else if (
    (normalizedHumanChoice === "rock" && computerChoice === "scissors") ||
    (normalizedHumanChoice === "paper" && computerChoice === "rock") ||
    (normalizedHumanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${normalizedHumanChoice} beats ${computerChoice}`);
    humanScore++;
    return "human";
  } else {
    console.log(`You lose! ${computerChoice} beats ${normalizedHumanChoice}`);
    computerScore++;
    return "computer";
  }
}

function playGame() {
  // Reset scores
  humanScore = 0;
  computerScore = 0;

  console.log("Welcome to Rock Paper Scissors! Let's play 5 rounds.");

  // Play 5 rounds
  for (let round = 1; round <= 5; round++) {
    console.log(`\n--- Round ${round} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    playRound(humanSelection, computerSelection);

    console.log(
      `Current score - You: ${humanScore}, Computer: ${computerScore}`
    );
  }

  // Declare the final winner
  console.log("\n=== GAME OVER ===");
  console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry! The computer won the game.");
  } else {
    console.log("It's a tie game!");
  }
}

// Create a global variable that starts the game when accessed
Object.defineProperty(window, "start", {
  get: function () {
    playGame();
    return "Game started!";
  },
});

// Start the game when the page loads
console.log(
  "Rock Paper Scissors game loaded! Type 'start' in the console to begin playing."
);
