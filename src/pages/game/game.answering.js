const ls = require('../../scripts/localScorage');
const api = require('../../scripts/api');
const config = require('../../../config');
let correctAnswer = '';
let availableQuestionsIds = [];
let questionsLength = 0;
let firstQuestion = true;

const setNextQuestion = async () => {
  if (firstQuestion) {
    await populateQuestionsIds();
  }
  clearAnswers();
  const [
    correctAnswerText,
    fakeAnswers,
    correctAnswerImage
  ] = await randomizeNewQuestion();
  saveCurrentCorrectAnswer(correctAnswerText);
  setNewAnswers([correctAnswerText, ...fakeAnswers]);
  changeImage(correctAnswerImage);
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

  const img = require(`../../assets/img/modes/${category}/${
    questionId + 1
  }.jpg`);

  return [answer, await getFakeAnswersFromAPI(), img];
};

const randomQuestionId = () => {
  const questionId = Math.floor(Math.random() * availableQuestionsIds.length);
  availableQuestionsIds.splice(questionId, 1);
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
    fakeQuestionId = Math.floor(Math.random() * questionsLength);
  } while (id === fakeQuestionId);

  do {
    fakeQuestionId2 = Math.floor(Math.random() * questionsLength);
  } while (id === fakeQuestionId2 && fakeQuestionId === fakeQuestionId2);

  do {
    fakeQuestionId3 = Math.floor(Math.random() * questionsLength);
  } while (
    id === fakeQuestionId3 &&
    fakeQuestionId2 === fakeQuestionId3 &&
    fakeQuestionId1 === fakeQuestionId3
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

const populateQuestionsIds = async () => {
  const lengths = await api.getLengths();
  const category = ls.getSettings().category;

  if (category === config.CATEGORIES[0]) questionsLength = lengths.people;
  if (category === config.CATEGORIES[1]) questionsLength = lengths.vehicles;
  if (category === config.CATEGORIES[2]) questionsLength = lengths.starships;

  for (let i = 0; i < questionsLength; i++) {
    availableQuestionsIds[i] = i;
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
  const selectedAnswerEl = evt.currentTarget;

  if (checkAnswer(getAnswerFromAnswerEl(selectedAnswerEl))) {
    highlightAnswerEl(selectedAnswerEl, 'correct');
    incrementPlayerCorrectAnswersNumber();
  } else {
    highlightAnswerEl(selectedAnswerEl, 'wrong');
    highlightAnswerEl(getCorrectAnswerEl(), 'correct');
  }

  destroyAnswerListeners();

  // RANDOMIZE COMPUTER ANSWER

  // ADD FUNCTION TO LOCALSTORAGE TO SET ANSWERED QUESTIONS NUMBER

  setTimeout(() => {
    setNextQuestion();
  }, 1000);
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
  console.log(selectedAnswer, correctAnswer);
  return selectedAnswer === correctAnswer;
};

const highlightAnswerEl = (answerEl, type) => {
  answerEl.classList.add(`selector--${type}`);
};

const incrementPlayerCorrectAnswersNumber = () => {
  const prevCorrectAnswersCounter = ls.getPlayerCorrectAnswersNumber();
  ls.savePlayerCorrectAnswersNumber(prevCorrectAnswersCounter + 1);
};

const incrementComputerCorrectAnswersNumber = () => {
  const prevCorrectAnswersCounter = ls.getComputerCorrectAnswersNumber();
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

window.addEventListener('load', setNextQuestion, false);

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
