import '../../styles/assets.scss';
import './game-over.scss';

const input = document.querySelector('.input');
const playerName = document.querySelector('.table--player-name');
const header = document.querySelector('.container__header');
const firstPlayer = document.querySelector('.table--first-player');
const firstScore = document.querySelector('.table--first-score');
const secondPlayer = document.querySelector('.table--second-player');
const secondScore = document.querySelector('.table--second-score');
const firstRow = document.querySelector('.table--first');
const secondRow = document.querySelector('.table--second');

let playerScore = 45;
let computerScore = 55;
//const playerScore = localStorage.getItem('getPlayerCorrectAnswersNumber');
//const computerScore = localStorage.getItem('getComputerCorrectAnswersNumber');




//Set game over or you win
if (playerScore >= computerScore) {
    header.innerText = "You Won!";
    header.style.color = "#70b5f5";
};

//Set first score on first place and highlighte player
if (playerScore >= computerScore) {
    firstPlayer.innerText = "Player";
    firstScore.innerText = playerScore;
    firstRow.setAttribute("class", "table__row--highlighted"); 
    firstPlayer.setAttribute("class", "table--player-name");
}
else {
    firstPlayer.innerText = "Computer";
    firstScore.innerText = computerScore;
}

//Set second score on second place and highlighte player
if (computerScore > playerScore) {
    secondPlayer.innerText = "Player";
    secondScore.innerText = playerScore;
    secondRow.setAttribute("class", "table__row--highlighted");
    secondPlayer.setAttribute("class", "table--player-name");
}
else {
    secondPlayer.innerText = "Computer";
    secondScore.innerText = computerScore;
}

//Change "player" for input player's name in table 
input.addEventListener('input', name => {
    playerName.textContent = name.target.value
});




