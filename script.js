let playerScore = 0;
let computerScore = 0;
let winStreak = 0;
const streakThreshold = 3; // Threshold for Winning Streak

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const winStreakElement = document.getElementById('win-streak');
const gameResultElement = document.getElementById('game-result');
const gameOverMessageElement = document.getElementById('game-over-message');
const resetButton = document.getElementById('reset-game');
const gameOverSection = document.querySelector('.game-over');

const choices = ['rock', 'paper', 'scissors'];

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

// Event listeners for choices
rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));

// Reset game functionality
resetButton.addEventListener('click', resetGame);

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);

    // Update scores
    if (result === 'win') {
        playerScore++;
        winStreak++;
    } else if (result === 'lose') {
        computerScore++;
        winStreak = 0; // Reset streak on loss
    }

    // Update DOM with result
    gameResultElement.textContent = `Player chose ${capitalize(playerChoice)}. Computer chose ${capitalize(computerChoice)}. ${getResultMessage(result)}`;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    winStreakElement.textContent = winStreak;

    // Check for Game Over
    if (playerScore === 5 || computerScore === 5) {
        gameOverMessageElement.textContent = playerScore === 5 ? 'You Win the Game!' : 'You Lose the Game!';
        gameOverSection.style.display = 'block';
    }
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}

function getResultMessage(result) {
    if (result === 'win') {
        return 'You win!';
    } else if (result === 'lose') {
        return 'You lose!';
    } else {
        return 'It\'s a draw!';
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    winStreak = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    winStreakElement.textContent = winStreak;
    gameResultElement.textContent = 'Make your choice!';
    gameOverSection.style.display = 'none';
}
