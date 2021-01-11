const localStorage = require('../../scripts/localScorage');

const header = document.querySelector('#banner');
const firstPlayer = document.querySelector('#firstPlayer');
const firstScore = document.querySelector('#firstScore');
const secondPlayer = document.querySelector('#secondPlayer');
const secondScore = document.querySelector('#secondScore');
const second = document.querySelector('#second');
const firstRow = document.querySelector('#firstRow');
const secondRow = document.querySelector('#secondRow');

const form = document.querySelector('#form');
const input = document.querySelector('#username');
const submit = document.querySelector('#submit');

const playerScore = 35; 
const computerScore = 20;
//const playerScore = localStorage.getPlayerCorrectAnswersNumber;
//const computerScore = localStorage.getComputerCorrectAnswersNumber;
const savePlayerScore = localStorage.savePlayerScore;
//const saveSettings = localStorage.getSettings;
const storedCategory = localStorage.getSettings("category");


//Set game over or you win

function headerText(pScore, cScore) {
    const header = document.querySelector('#banner');   
    if (pScore >= cScore) {
        header.textContent = "You Won!";
        header.style.color = "rgb(112, 181, 245)";
    }
    else {
        header.textContent = "Game over!";
        header.style.color = "rgb(255, 0, 0)";
    }
}

//Set first score on first place and highlight player

function firstPlace(pScore1, pScore2) {
    const firstPlayer = document.querySelector('#firstPlayer');
    const firstScore = document.querySelector('#firstScore');
    const firstRow = document.querySelector('#firstRow');
    if (pScore1 >= pScore2) {
        firstPlayer.textContent = "Player";
        firstScore.textContent = playerScore;
        firstRow.setAttribute("class", "table__row--highlighted"); 
    }
    else {
        firstPlayer.textContent = "Computer";
        firstScore.textContent = computerScore;
    }
};

//Set second score on second place and highlight player
function secondPlace(pScore2, cScore2) {
    const secondPlayer = document.querySelector('#secondPlayer');
    const secondScore = document.querySelector('#secondScore');
    const secondRow = document.querySelector('#secondRow');
    if (cScore2 > pScore2) {
        secondPlayer.textContent = "Player";
        secondScore.textContent = playerScore;
        secondRow.setAttribute("class", "table__row--highlighted");
    }
    else {
        secondPlayer.textContent = "Computer";
        secondScore.textContent = computerScore;
    }
};

//Solo player mode 
function soloPlayer(pScoreSolo, cScoreSolo) {
    const header = document.querySelector('#banner'); 
    const firstPlayer = document.querySelector('#firstPlayer');
    const firstScore = document.querySelector('#firstScore');
    const firstRow = document.querySelector('#firstRow');
    const second = document.querySelector('#second');

    if (pScoreSolo && !cScoreSolo && cScoreSolo == 0 && cScoreSolo == ' ') {
        header.textContent = "You Won!";
        header.style.color = "rgb(112, 181, 245)";
        firstPlayer.textContent = "Player";
        firstScore.textContent = playerScore;
        firstRow.setAttribute("class", "table__row--highlighted"); 
        second.textContent = "--";
    }
    else {
        console.log(headerText(playerScore, computerScore));
        console.log(firstPlace(playerScore, computerScore));
        console.log(secondPlace(playerScore, computerScore));
    }
}

//Save player score to localStorage on submit
function saveName() {
    function save(){
        localStorage.savePlayerScore(input.value, playerScore, storedCategory)
    }
    submit.addEventListener("click", save);
}

//Change text after submit  
function changeSubmit(e) {
    e.preventDefault();
    form.textContent = input.value + ", your score (" + playerScore + ") has been added to the hall of fame!"; 
    form.setAttribute("class", "text--alternative");
    form.style.fontSize = "250%";
    form.style.margin = "auto";
};

function submitChange() {
submit.addEventListener ("click", changeSubmit);};


window.addEventListener('load', soloPlayer(playerScore, computerScore));
//console.log(soloPlayer(playerScore, computerScore));
console.log(submitChange());
console.log(saveName());


module.exports = {
    headerText, 
    firstPlace,
    secondPlace, 
    soloPlayer, 
    saveName, 
    changeSubmit, 
    submitChange, 
    playerScore, 
    computerScore
};