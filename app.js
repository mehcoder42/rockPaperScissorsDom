// Return what the user pick between rock, paper, or scissors

function playRock() {
    userSelection = 'rock';
    return userSelection;
}

function playPaper() {
    userSelection = 'paper';
    return userSelection;
}

function playScissors() {
    userSelection = 'scissors';
    return userSelection;
}

// Return what the computer pick between rock, paper, or scissors

function computerPlay() {
    let computerMoves = ['rock', 'paper', 'scissors'];
    computerSelection = computerMoves[Math.floor(Math.random() * computerMoves.length)];
    return computerSelection;
}

// Change text and background color if user win / lose

const result = document.querySelector('.result');
const textResult = document.querySelector('.textResult');
const userReference = document.querySelector('.userReference');
const computerReference = document.querySelector('.computerReference');

function compWin() {
    computerScore++;
    scoreAfter();
}

function userWin() {
    userScore++;
    scoreAfter();
}

function tie() {
    textResult.textContent = 'it\'s a tie ! Looks like both of you pick ' + computerSelection + '.';
    userReference.style.backgroundColor = 'lightgrey';
    computerReference.style.backgroundColor = 'lightgrey';
}

// Play one round of rock, paper, or scissors 

let userSelection;
let computerSelection;

let userScore = 0;
let computerScore = 0;

function playRound(userSelection, computerSelection) {
    if (userScore < 5 && computerScore < 5) {
        if (userSelection === 'rock' && computerSelection === 'paper') {
            textResult.textContent = 'You lose! Paper beats Rock';
            userReference.style.backgroundColor = 'lightcoral';
            computerReference.style.backgroundColor = 'lightgreen';
            compWin();
        } else if (userSelection === 'scissors' && computerSelection === 'rock') {
            textResult.textContent = 'You lose! Rock beats Scissors';
            userReference.style.backgroundColor = 'lightcoral';
            computerReference.style.backgroundColor = 'lightgreen';
            compWin();
        } else if (userSelection === 'paper' && computerSelection === 'scissors') {
            textResult.textContent = 'You lose! scissors beats paper';
            userReference.style.backgroundColor = 'lightcoral';
            computerReference.style.backgroundColor = 'lightgreen';
            compWin();
        } else if (userSelection === 'rock' && computerSelection === 'scissors') {
            textResult.textContent = 'You won! Rock beats scissors';
            userReference.style.backgroundColor = 'lightgreen';
            computerReference.style.backgroundColor = 'lightcoral';
            userWin()
        } else if (userSelection === 'scissors' && computerSelection === 'paper') {
            textResult.textContent = 'You won! Scissors beats paper';
            userReference.style.backgroundColor = 'lightgreen';
            computerReference.style.backgroundColor = 'lightcoral';
            userWin()
        } else if (userSelection === 'paper' && computerSelection === 'rock') {
            textResult.textContent = 'You won! paper beats rock';
            userReference.style.backgroundColor = 'lightgreen';
            computerReference.style.backgroundColor = 'lightcoral';
            userWin()
        } else {
            tie();
        }
    } else if (computerScore === 5 || userScore === 5) {
            hideText();
            winnerAnnouncement();
        }
}


// Display what the user currently pick

const userChoice = document.querySelector('.userChoice');

function userImage() {
    if (userScore < 6 && computerScore < 6) {
        if (userSelection === 'rock') {
            document.getElementById('userPickImage').src = 'rock.png';
            userChoice.textContent = 'Rock';
        } else if (userSelection === 'paper') {
            document.getElementById('userPickImage').src = 'paper.png';
            userChoice.textContent = 'Paper';
        } else if (userSelection === 'scissors') {
            document.getElementById('userPickImage').src = 'scissors.png';
            userChoice.textContent = 'Scissors';
        }
    }
}

// Display what the computer currently pick

const compChoice = document.querySelector('.compChoice');

function computerImage() {
    if (userScore < 6 && computerScore < 6) {
        if (computerSelection === 'rock') {
            document.getElementById('computerPickImage').src = 'rock.png';
            compChoice.textContent = 'Rock';
        } else if (computerSelection === 'scissors') {
            document.getElementById('computerPickImage').src = 'scissors.png';
            compChoice.textContent = 'Scissors';
        } else if (computerSelection === 'paper') {
            document.getElementById('computerPickImage').src = 'paper.png';
            compChoice.textContent = 'Paper';
        }
    }
}

// Add event listener when user rock, paper, or scissors

const rock = document.querySelector('.rock');
rock.addEventListener('click', function () {
    playRock();
    computerPlay();
    playRound(userSelection, computerSelection);
    userImage();
    computerImage();
})


const paper = document.querySelector('.paper');
paper.addEventListener('click', function () {
    playPaper();
    computerPlay();
    playRound(userSelection, computerSelection);
    userImage();
    computerImage();
})

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function () {
    playScissors();
    computerPlay();
    playRound(userSelection, computerSelection);
    userImage();
    computerImage();
})


// Announce the winner of 5 round game

const gameoverText = document.querySelector('.gameoverText');

function winnerAnnouncement() {
    if (userScore === 5) {
        gameoverText.textContent = 'You Won ! Congratulations !';
    } else if (computerScore === 5) {
        gameoverText.textContent = 'You Lose ! Do Better Next Time !';
    } else {
        gameoverText.textContent = 'It\'s a Tie ! Better Luck Next Time !';
    }
}


// Add event listener to retry button

const retryButton = document.querySelector('.retryButton');
retryButton.addEventListener('click', newGame);


// Display current score of the game

const user = document.querySelector('.userScore');
const computer = document.querySelector('.computerScore');

function scoreAfter() {
    user.textContent = 'User Score : ' + userScore;
    computer.textContent = 'Computer Score : ' + computerScore;
}

// Hide certain text when the game over / starting over

const rockPaperScissors = document.querySelector('.rockPaperScissors');
const hidden = document.querySelector('.hidden');
const pick = document.querySelector('.pick');
const references = document.querySelector('.references');

function hideText() {
    hidden.classList.toggle('normal');
    rockPaperScissors.classList.toggle('hidden');
    result.classList.toggle('hidden');
    pick.classList.toggle('hidden');
    references.classList.toggle('hidden');
    userReference.style.backgroundColor = 'rgba(189,183,107,0.5)';
    computerReference.style.backgroundColor = 'rgba(189,183,107,0.5)';
}


// Reset the game

function newGame() {
    userScore = 0;
    computerScore = 0;

    scoreAfter();
    hideText();
    reset();
}

function reset() {
    gameoverText.textContent = '';
    textResult.textContent = 'First to 5 Win !!!';
    document.getElementById('userPickImage').src = 'question.png';
    document.getElementById('computerPickImage').src = 'question.png';
}





