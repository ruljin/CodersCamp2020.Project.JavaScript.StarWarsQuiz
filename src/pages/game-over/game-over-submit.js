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

const playerScore = 20; 
const computerScore = 15;
//const playerScore = localStorage.getPlayerCorrectAnswersNumber;
//const computerScore = localStorage.getComputerCorrectAnswersNumber;
const savePlayerScore = localStorage.savePlayerScore;
const saveSettings = localStorage.saveSettings;
const storedCategory = saveSettings("category");


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

//Set first score on first place and highlight player
function firstPlace() {
    if (playerScore >= !computerScore) {
        firstPlayer.innerText = "Player";
        firstScore.innerText = playerScore;
        firstRow.setAttribute("class", "table__row--highlighted"); 
    }
    else {
        firstPlayer.innerText = "Computer";
        firstScore.innerText = computerScore;
    }
};

//Set second score on second place and highlight player
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
    form.innerText = input.value + ", your score (" + playerScore + ") has been added to the hall of fame!"; 
    form.setAttribute("class", "text--alternative");
    form.style.fontSize = "250%";
    form.style.margin = "auto";
};

function submitChange() {
submit.addEventListener ("click", changeSubmit);};



console.log(soloPlayer());
console.log(submitChange());
console.log(saveName());


