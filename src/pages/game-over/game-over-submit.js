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

const playerScore = 45; 
const computerScore = 50;
//const playerScore = localStorage.getPlayerCorrectAnswersNumber;
//const computerScore = localStorage.getComputerCorrectAnswersNumber;
const savePlayerScore = localStorage.savePlayerScore;
//const saveSettings = localStorage.getSettings;
const storedCategory = localStorage.getSettings("category");


//Set game over or you win

function headerText()  {
    if (playerScore >= computerScore) {
        header.textContent = "You Won!";
        header.style.color = "rgb(112, 181, 245)";
    }
    else {
        header.textContent = "Game over!";
        header.style.color = "rgb(255, 0, 0)";
    }
}

//Set first score on first place and highlight player

function firstPlace() {
    if (playerScore >= computerScore) {
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
function secondPlace() {
    if (computerScore > playerScore) {
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
function soloPlayer() {
    if (playerScore && !computerScore && computerScore == 0 && computerScore == ' ') {
        header.textContent = "You Won!";
        header.style.color = "#70b5f5";
        firstPlayer.textContent = "Player";
        firstScore.textContent = playerScore;
        firstRow.setAttribute("class", "table__row--highlighted"); 
        second.textContent = "--";
    }
    else {
        console.log(headerText());
        console.log(firstPlace());
        console.log(secondPlace());
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



console.log(soloPlayer());
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