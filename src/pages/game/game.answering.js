const ls = require('../../scripts/localScorage');
const api = require('../../scripts/api');
const config = require('../../../config');
const timer = require('./game.timer');
let correctAnswer = '';
let availableQuestionsIds = [];
let allQuestionsIds = [];
let firstQuestion = true;

window.onload = function clear() {
  ls.removeFromLocalStorage('playerCorrectAnswers');
  ls.removeFromLocalStorage('computerCorrectAnswers');
};

if (ls.getSettings() === null) {
  location.href = './index.html';
}

const setNextQuestion = async () => {
  if (firstQuestion) {
    populateQuestionsIds();
    timer.startGame();
    firstQuestion = false;
  }
  if (availableQuestionsIds.length === 0) {
    location.replace('game-over.html');
    return;
  }

  const [
    correctAnswerText,
    fakeAnswers,
    correctAnswerImage
  ] = await randomizeNewQuestion();
  saveCurrentCorrectAnswer(correctAnswerText);
  clearAnswers();
  setNewAnswers([correctAnswerText, ...fakeAnswers]);
  changeImage(correctAnswerImage);
  timer.runTimer();
};

const clearAnswers = () => {
  const answersContainerEl = document.querySelector('#answersContainer');
  answersContainerEl.innerHTML = `
    <button data-answer="" class="selector selector--game"></button>
    <button data-answer="" class="selector selector--game"></button>
    <button data-answer="" class="selector selector--game"></button>
    <button data-answer="" class="selector selector--game"></button>
  `;
  getAnswersElArray().forEach(answer => {
    answer.addEventListener('click', checkSelectedAnswer);
  });
};

const randomizeNewQuestion = async () => {
  const questionId = randomQuestionId();
  const answer = await getAnswerFromAPI(questionId);
  const category = ls.getSettings().category;

  const img = require(`../../assets/img/modes/${category}/${questionId}.jpg`);

  return [answer, await getFakeAnswersFromAPI(questionId), img];
};

const randomQuestionId = () => {
  const index = Math.floor(Math.random() * availableQuestionsIds.length);
  const questionId = availableQuestionsIds[index];
  availableQuestionsIds.splice(index, 1);
  return questionId;
};

const getAnswerFromAPI = async id => {
  const category = ls.getSettings().category;
  if (category === config.CATEGORIES[0]) return await api.getPerson(id);
  if (category === config.CATEGORIES[1]) return await api.getVehicle(id);
  if (category === config.CATEGORIES[2]) return await api.getStarship(id);
};

const getFakeAnswersFromAPI = async id => {
  let fakeQuestionId, fakeQuestionId2, fakeQuestionId3;

  do {
    fakeQuestionId =
      allQuestionsIds[Math.floor(Math.random() * allQuestionsIds.length)];
  } while (id === fakeQuestionId);

  do {
    fakeQuestionId2 =
      allQuestionsIds[Math.floor(Math.random() * allQuestionsIds.length)];
  } while (id === fakeQuestionId2 || fakeQuestionId === fakeQuestionId2);

  do {
    fakeQuestionId3 =
      allQuestionsIds[Math.floor(Math.random() * allQuestionsIds.length)];
  } while (
    id === fakeQuestionId3 ||
    fakeQuestionId2 === fakeQuestionId3 ||
    fakeQuestionId === fakeQuestionId3
  );

  const category = ls.getSettings().category;
  if (category === config.CATEGORIES[0]) {
    return [
      await api.getPerson(fakeQuestionId),
      await api.getPerson(fakeQuestionId2),
      await api.getPerson(fakeQuestionId3)
    ];
  }
  if (category === config.CATEGORIES[1]) {
    return [
      await api.getVehicle(fakeQuestionId),
      await api.getVehicle(fakeQuestionId2),
      await api.getVehicle(fakeQuestionId3)
    ];
  }
  if (category === config.CATEGORIES[2]) {
    return [
      await api.getStarship(fakeQuestionId),
      await api.getStarship(fakeQuestionId2),
      await api.getStarship(fakeQuestionId3)
    ];
  }
};

const populateQuestionsIds = () => {
  const category = ls.getSettings().category;

  if (category === config.CATEGORIES[0]) {
    availableQuestionsIds = [...config.CATEGORY_PEOPLE_IDS];
    allQuestionsIds = [...config.CATEGORY_PEOPLE_IDS];
  }

  if (category === config.CATEGORIES[1]) {
    availableQuestionsIds = [...config.CATEGORY_VEHICLES_IDS];
    allQuestionsIds = [...config.CATEGORY_VEHICLES_IDS];
  }

  if (category === config.CATEGORIES[2]) {
    availableQuestionsIds = [...config.CATEGORY_STARSHIPS_IDS];
    allQuestionsIds = [...config.CATEGORY_STARSHIPS_IDS];
  }
};

const setNewAnswers = answers => {
  const shuffledAnswers = shuffleArray(answers);
  for (let i = 0; i < getAnswersElArray().length; i++) {
    getAnswersElArray()[i].textContent = shuffledAnswers[i];
    getAnswersElArray()[i].dataset.answer = shuffledAnswers[i];
  }
};

const changeImage = src => {
  const pictureEl = document.querySelector('#questionImage');
  pictureEl.src = src;
};

const saveCurrentCorrectAnswer = answer => {
  correctAnswer = answer;
};

const shuffleArray = arr => {
  let arrCopy = [...arr];
  let i = arrCopy.length;

  while (--i > 0) {
    let k = Math.floor(Math.random() * (i + 1));
    let temp = arrCopy[k];
    arrCopy[k] = arrCopy[i];
    arrCopy[i] = temp;
  }

  return arrCopy;
};

const checkSelectedAnswer = evt => {
  destroyAnswerListeners();
  timer.pauseTimer();
  const selectedAnswerEl = evt.currentTarget;

  if (checkAnswer(getAnswerFromAnswerEl(selectedAnswerEl))) {
    highlightAnswerEl(selectedAnswerEl, 'correct');
    incrementPlayerCorrectAnswersNumber();
  } else {
    highlightAnswerEl(selectedAnswerEl, 'wrong');
    highlightAnswerEl(getCorrectAnswerEl(), 'correct');
  }

  if (ls.getSettings().mode === 'computer') {
    randomComputerAnswer();
  }

  if (ls.getAnswersNumber() == null) {
    ls.saveAnswersNumber(1);
  } else {
    ls.saveAnswersNumber(ls.getAnswersNumber() + 1);
  }

  setTimeout(() => {
    setNextQuestion();
  }, 1000);
};

const randomComputerAnswer = () => {
  const difficulty = ls.getSettings().difficulty;
  const computerScore = ls.getComputerCorrectAnswersNumber() || 0;

  if (difficulty === 'easy') {
    if (Math.random() <= 0.25)
      ls.saveComputerCorrectAnswersNumber(computerScore + 1);
  } else if (difficulty === 'normal') {
    if (Math.random() <= 0.5)
      ls.saveComputerCorrectAnswersNumber(computerScore + 1);
  } else if (difficulty === 'hard') {
    if (Math.random() <= 0.75)
      ls.saveComputerCorrectAnswersNumber(computerScore + 1);
  }
};

const getCorrectAnswerEl = () => {
  return getAnswersElArray().find(answerEl =>
    checkAnswer(answerEl.dataset.answer)
  );
};

const getAnswerFromAnswerEl = answerEl => {
  return answerEl.dataset.answer;
};

const checkAnswer = selectedAnswer => {
  return selectedAnswer === correctAnswer;
};

const highlightAnswerEl = (answerEl, type) => {
  answerEl.classList.add(`selector--${type}`);
};

const incrementPlayerCorrectAnswersNumber = () => {
  const prevCorrectAnswersCounter = ls.getPlayerCorrectAnswersNumber() || 0;
  ls.savePlayerCorrectAnswersNumber(prevCorrectAnswersCounter + 1);
};

const incrementComputerCorrectAnswersNumber = () => {
  const prevCorrectAnswersCounter = ls.getComputerCorrectAnswersNumber() || 0;
  ls.saveComputerCorrectAnswersNumber(prevCorrectAnswersCounter + 1);
};

const getAnswersElArray = () => {
  const answersContainerEl = document.querySelector('#answersContainer');
  return Array.prototype.slice.call(answersContainerEl.children);
};

const destroyAnswerListeners = () => {
  getAnswersElArray().forEach(answerEl => {
    answerEl.removeEventListener('click', checkSelectedAnswer);
  });
};

const changeSiteQuestion = () => {
  const siteQuestionEl = document.querySelector('#siteQuestion');
  const category = ls.getSettings().category;

  if (category === config.CATEGORIES[0]) {
    siteQuestionEl.textContent = 'Who is this character?';
  }

  if (category === config.CATEGORIES[1]) {
    siteQuestionEl.textContent = 'What is this vehicle?';
  }

  if (category === config.CATEGORIES[2]) {
    siteQuestionEl.textContent = 'What is this spaceship?';
  }
};

window.addEventListener('load', setNextQuestion, false);
window.addEventListener('load', changeSiteQuestion, false);

module.exports = {
  getAnswersElArray,
  incrementComputerCorrectAnswersNumber,
  incrementPlayerCorrectAnswersNumber,
  highlightAnswerEl,
  checkAnswer,
  getAnswerFromAnswerEl,
  getCorrectAnswerEl,
  shuffleArrayFisherYates: shuffleArray,
  saveCurrentCorrectAnswer,
  changeImage,
  clearAnswers
};
