const sampleImage1 = require('../../assets/img/modes/people/1.jpg');
const sampleImage2 = require('../../assets/img/modes/people/2.jpg');
const sampleImage3 = require('../../assets/img/modes/people/3.jpg');
const sampleImage4 = require('../../assets/img/modes/people/4.jpg');
const sampleImage5 = require('../../assets/img/modes/people/5.jpg');
const sampleImage6 = require('../../assets/img/modes/people/6.jpg');
const sampleImage7 = require('../../assets/img/modes/people/7.jpg');

const sampleImages = {
  1: sampleImage1, 
  2: sampleImage2, 
  3: sampleImage3, 
  4: sampleImage4,
  5: sampleImage5,
  6: sampleImage6,
  7: sampleImage7
}
const keyNames = Object.keys(sampleImages)

// przykładowe odpowiedzi
let answers = [
    {
      "fields": {
        "edited": "2014-12-20T21:17:56.891Z",
        "name": "Luke Skywalker",
        "created": "2014-12-09T13:50:51.644Z",
        "gender": "male",
        "skin_color": "fair",
        "hair_color": "blond",
        "height": "172",
        "eye_color": "blue",
        "mass": "77",
        "homeworld": 1,
        "birth_year": "19BBY",
        "image": "luke_skywalker.jpg"
      },
      "model": "resources.people",
      "pk": 1
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.309Z",
        "name": "C-3PO",
        "created": "2014-12-10T15:10:51.357Z",
        "gender": "n/a",
        "skin_color": "gold",
        "hair_color": "n/a",
        "height": "167",
        "eye_color": "yellow",
        "mass": "75",
        "homeworld": 1,
        "birth_year": "112BBY",
        "image": "c-3po.jpg"
      },
      "model": "resources.people",
      "pk": 2
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.311Z",
        "name": "R2-D2",
        "created": "2014-12-10T15:11:50.376Z",
        "gender": "n/a",
        "skin_color": "white, blue",
        "hair_color": "n/a",
        "height": "96",
        "eye_color": "red",
        "mass": "32",
        "homeworld": 8,
        "birth_year": "33BBY",
        "image": "r2-d2.jpg"
      },
      "model": "resources.people",
      "pk": 3
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.313Z",
        "name": "Darth Vader",
        "created": "2014-12-10T15:18:20.704Z",
        "gender": "male",
        "skin_color": "white",
        "hair_color": "none",
        "height": "202",
        "eye_color": "yellow",
        "mass": "136",
        "homeworld": 1,
        "birth_year": "41.9BBY",
        "image": "darth_vader.jpg"
      },
      "model": "resources.people",
      "pk": 4
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.315Z",
        "name": "Leia Organa",
        "created": "2014-12-10T15:20:09.791Z",
        "gender": "female",
        "skin_color": "light",
        "hair_color": "brown",
        "height": "150",
        "eye_color": "brown",
        "mass": "49",
        "homeworld": 2,
        "birth_year": "19BBY",
        "image": "leia_organa.jpg"
      },
      "model": "resources.people",
      "pk": 5
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.317Z",
        "name": "Owen Lars",
        "created": "2014-12-10T15:52:14.024Z",
        "gender": "male",
        "skin_color": "light",
        "hair_color": "brown, grey",
        "height": "178",
        "eye_color": "blue",
        "mass": "120",
        "homeworld": 1,
        "birth_year": "52BBY",
        "image": "owen_lars.jpg"
      },
      "model": "resources.people",
      "pk": 6
    },
    {
      "fields": {
        "edited": "2014-12-20T21:17:50.319Z",
        "name": "Beru Whitesun lars",
        "created": "2014-12-10T15:53:41.121Z",
        "gender": "female",
        "skin_color": "light",
        "hair_color": "brown",
        "height": "165",
        "eye_color": "blue",
        "mass": "75",
        "homeworld": 1,
        "birth_year": "47BBY",
        "image": "beru_whitesun_lars.jpg"
      },
      "model": "resources.people",
      "pk": 7
    },
  ]


const answersWrapper = document.querySelector(".answers");
const pictureTag = document.querySelector(".question-image");
console.log(pictureTag)

let shuffledAnswers = [];
let correctAnswer;
let correctAnswers = 0;
let wrongAnswers = 0;
let answersButtons;

// Wstawia zdjęcie
function changeImage(img) {
  for (var x=0; x<answers.length; x++) {
    if (img["pk"] == keyNames[x]) {
      pictureTag.setAttribute("src", sampleImages[x+1]);
      pictureTag.setAttribute("alt", img["fields"]["name"]);
    }
  }
}

/* Usuwa dane z poprzedniego pytania, losuje poprawne pytanie, ładuje do niego zdjęcie, wybiera pozostałe 3 losowe 
odpowiedzi, dodaje do nich poprawne, sprawdza powtórki i miesza odpowiedzi - w konsoli pojawia się poprawne pytanie*/
startGame();
function startGame() {
  resetState();
  /* if (settings.category === "People") {
    correctAnswer = 
    ... */
  correctAnswer = answers[Math.floor(Math.random()*answers.length)];
  changeImage(correctAnswer);
  for (var x=0; x<3; x++) {
      shuffledAnswers.push(answers[Math.floor(Math.random()*answers.length)]["fields"]["name"]);
  }
  shuffledAnswers.push(correctAnswer["fields"]["name"]);
  checkDuplicate(shuffledAnswers);
  shuffleArray(shuffledAnswers);
  showAnswers(shuffledAnswers);
  console.log(correctAnswer["fields"]["name"])
}

/* sprawdzanie, czy odpowiedź się dubluje */
  function checkDuplicate(arr) {
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    while (findDuplicates(arr).length>0){
      const indexOfDuplicate = arr.indexOf(findDuplicates(arr)[0]);
      arr[indexOfDuplicate] = answers[Math.floor(Math.random()*answers.length)]["fields"]["name"];
    }
    return arr;
  }

/* Tasuje odpowiedzi wg algorytmu Fishera-Yatesa */
function shuffleArray(arr) {
  var i = arr.length, k , temp;      // k is to generate random index and temp is to swap the values
  while(--i > 0){
    k = Math.floor(Math.random() * (i+1));
    temp = arr[k];
    arr[k] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

/* pokazuje odpowiedzi i każdej odpowiedzi daje funkcję przy kliknięciu */
function showAnswers(options) {
    let questionsTags = '<div class="selector answers__item"><p>' + options[0] + '</p></div>' 
        + '<div class="selector answers__item"><p>' + options[1] + '</p></div>' 
        + '<div class="selector answers__item"><p>' + options[2] + '</p></div>' 
        + '<div class="selector answers__item correct"><p>' + options[3] + '</p></div>';
    answersWrapper.innerHTML = questionsTags;
    answersButtons = answersWrapper.querySelectorAll(".selector");
    for (var x=0; x<answersButtons.length; x++) {
      answersButtons[x].addEventListener("click", selectAnswer);
    }
}

/* Usuwa poprzednie ustawienia */
function resetState() {
  shuffledAnswers = [];
  correctAnswer -= correctAnswer;
}

/* Przy nacisnięciu jakiegoś przyciska pojawia się na sekundę rozwiązanie, a potem kolejne pytanie */
function selectAnswer(e) {
  e.preventDefault();
  const selectedButton = e.target;
  if (selectedButton.innerText === correctAnswer["fields"]["name"]) {
    correctAnswers++;
    selectedButton.setAttribute("class", "selector answers__item answers__item--blue"); 
  }
  else {
    wrongAnswers++;
    selectedButton.setAttribute("class", "selector answers__item answers__item--red"); 
    for (var x=0; x<answersButtons.length; x++) {
      if (answersButtons[x].innerText === correctAnswer["fields"]["name"]) {
        answersButtons[x].setAttribute("class", "selector answers__item answers__item--blue");
      }
    }
  }
  setTimeout(function(){ startGame() }, 1000);
}

module.exports = {
  changeImage,
  startGame,
  checkDuplicate,
  shuffleArray,
  showAnswers,
  resetState,
  selectAnswer
};