import '../../styles/assets.scss';
import './game.scss';

//  4 przykładowe odpowiedzi
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
    }
  ]


const answersWrapper = document.getElementsByClassName("answers");

let shuffledAnswers = [];
let shuffledNames = [];
let correctAnswer;

// Wstawia zdjęcie
function changeImage(img) {
  document.getElementsByClassName("question-image").src = img;
}

/* Losuje poprawne pytanie, ładuje do niego zdjęcie, wybiera pozostałe 3 losowe 
odpowiedzi i dodaje do nich poprawne, usuwa dane z poprzedniego pytania */
startGame();
function startGame() {
  correctAnswer = answers[Math.floor(Math.random()*answers.length)];
  changeImage(correctAnswer["fields"]["image"]);
  for (var x=0; x<answers.length-1; x++) {
    shuffledAnswers.push(answers[Math.floor(Math.random()*answers.length)]);
  }
  for (var x=0; x<shuffledAnswers.length; x++) {
    shuffledNames.push(shuffledAnswers[x]["fields"]["name"]);
  }
  shuffledNames.push(correctAnswer["fields"]["name"]);
  console.log(shuffledNames);
  resetState();
  showAnswers(shuffledNames);
}

/* pokazuje odpowiedzi */
function showAnswers(options) {
  const questionsTags = '<div class="selector answers__item"><p>' + options[0] + '</p></div>' 
  + '<div class="selector answers__item"><p>' + options[1] + '</p></div>' 
  + '<div class="selector answers__item"><p>' + options[2] + '</p></div>' 
  + '<div class="selector answers__item"><p>' + options[3] + '</p></div>';
  answersWrapper.innerHTML = questionsTags;
  const option = answersWrapper.querySelectorAll("selector answers__item");
  console.log(option);
  for (var x=0; x<option.length; x++) {
    option[x].addEventListener('click', selectAnswer)
  }
}

function resetState() {
  while (answersWrapper.firstChild) {
    answersWrapper.removeChild(answersWrapper.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  if (selectedButton===correctAnswer) {
    
  }
}

