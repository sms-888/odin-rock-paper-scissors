// Rock Paper Scissors

function getRandomIndex(length) {
    // check if length is an integer > 0
    if (Number.isInteger(length) && length > 0) {
        return Math.floor(Math.random() * length);
    } else {
        return "Error: require an integer length greater than 0";
    }
}

function capitalizeString(str) {
    // return input string with first char uppercase and rest lowercase
    const fChar = str.charAt(0); // get first letter
    const restStr = str.slice(1); // get rest of letters

    // return uppercase first let concatenated to lowercase rest of letters
    return fChar.toUpperCase() + restStr.toLowerCase();
}


function getComputerChoice() {
    // define string array with rock,paper,scissors choices
    const rpsChoices = ['rock', 'paper', 'scissors'];
    
    // get random index passing array length to getRandomIndex function
    let randIndex = getRandomIndex(rpsChoices.length);

    // return random rpsChoises array element
    return rpsChoices[randIndex];
}

function playRound(playerSelection, computerSelection) {
    // playRound gets player and computer inputs and outputs result
    
    // define rock, paper, scissors constants for the comparisons
    const ROCK = 'Rock', PAPER = 'Paper', SCISSORS = 'Scissors';
    const WIN = 'WIN', LOST = 'LOST', TIE = 'TIE'; // for output msg

    // convert inputs to capital case to standardise comparisons
    const pSelection = capitalizeString(playerSelection);
    const cSelection = capitalizeString(computerSelection);

    // initialise player win result to false and result message variable
    /*let playerWin = false;*/
    let message = "";

    // game logic
    if (pSelection === cSelection) {
        /*message = `It's a Tie. ${pSelection} and ${cSelection} cancel each other`;*/
        message = TIE;
    } else if   ((pSelection === ROCK && cSelection === SCISSORS) ||
                (pSelection === PAPER && cSelection === ROCK) ||
                (pSelection === SCISSORS && cSelection === PAPER)) {
            /*message = `You Win! ${pSelection} beats ${cSelection}`;*/
            message = WIN;
    } else {
        /*message = `You Lose! ${cSelection} beats ${pSelection}`;*/
        message = LOST;
    }

    // return result
    return message;

}

function game() {
    const WIN = 'WIN', LOST = 'LOST', TIE = 'TIE';
    const promptMsg = "Enter Choice: ";
    const outputWin = "Player Wins", outputLost = "Player Loses", outputTie = "Game Tied";
    const MAXWIN = 5;
    let player = 0, computer = 0;
    let roundResult, playerSelection,computerSelection;

    // play till playerScore or computerScore is equal to 5
    if (playerScore < MAXWIN && computerScore < MAXWIN) {
        playerSelection = btn.textContent;
        computerSelection = getComputerChoice();

        roundResult = playRound(playerSelection, computerSelection);
        //console.log(roundResult);
        
        if (roundResult === WIN) {
            playerScore++;
        } else if (roundResult === LOST) {
            computerScore++;
        }
        result = `Result: ${roundResult}`;
        scoreBoard = `Player Score: ${playerScore}\tComputer Score: ${computerScore}`;
        resultPara.textContent = result;
        scorePara.textContent = scoreBoard;
    }

    if (playerScore >= MAXWIN) {
        result = `Result: Player Wins`;
        resultPara.textContent = result;
    } else if (computerScore >= MAXWIN) {
        result = `Result: Computer Wins`;
        resultPara.textContent = result;
    }


}

// GUI code
const buttons = document.querySelectorAll('ul button');
const resultDiv = document.querySelector('.result');
const resultPara = document.querySelector('#result');
const scorePara = document.querySelector('#score')

let playerScore = 0;
let computerScore = 0;
let result = `Result: `;
let scoreBoard = `Player Score: ${playerScore}\tComputer Score: ${computerScore}`;

resultPara.textContent = result;
scorePara.textContent = scoreBoard;

for (btn of buttons) {
    btn.addEventListener('click', game);
}


