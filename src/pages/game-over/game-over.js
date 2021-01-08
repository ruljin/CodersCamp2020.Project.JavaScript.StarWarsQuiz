import '../../styles/assets.scss';
import './game-over.scss';

const localStorage = require('../../scripts/localScorage');

const header = document.querySelector('.container__header');
const firstPlayer = document.querySelector('.table--first-player');
const firstScore = document.querySelector('.table--first-score');
const secondPlayer = document.querySelector('.table--second-player');
const secondScore = document.querySelector('.table--second-score');
const second = document.querySelector('.table--second');
const firstRow = document.querySelector('.table--first');
const secondRow = document.querySelector('.table--second');

const playerScore = localStorage.getPlayerCorrectAnswersNumber;
const computerScore = localStorage.getComputerCorrectAnswersNumber;

//Set game over or you win
function headerText() {
    if (playerScore >= computerScore) {
        header.innerText = "You Won!";
        header.style.color = "#70b5f5";
    }
    else {
        header.innerText = "Game over!";
        header.style.color = "#ff0000";
    }
};

//Set first score on first place and highlighte player
function firstPlace() {
    if (playerScore >= computerScore) {
        firstPlayer.innerText = "Player";
        firstScore.innerText = playerScore;
        firstRow.setAttribute("class", "table__row--highlighted"); 
    }
    else {
        firstPlayer.innerText = "Computer";
        firstScore.innerText = computerScore;
    }
};

//Set second score on second place and highlighte player
function secondPlace() {
    if (computerScore > playerScore) {
        secondPlayer.innerText = "Player";
        secondScore.innerText = playerScore;
        secondRow.setAttribute("class", "table__row--highlighted");
    }
    else {
        secondPlayer.innerText = "Computer";
        secondScore.innerText = computerScore;
    }
};

//Solo player mode 
function soloPlayer() {
    if (playerScore && !computerScore) {
        header.innerText = "You Won!";
        header.style.color = "#70b5f5";
        firstPlayer.innerText = "Player";
        firstScore.innerText = playerScore;
        firstRow.setAttribute("class", "table__row--highlighted"); 
        second.innerText = "--";
    }
    else {
        console.log(headerText());
        console.log(firstPlace());
        console.log(secondPlace());
    }
}

console.log(soloPlayer());




