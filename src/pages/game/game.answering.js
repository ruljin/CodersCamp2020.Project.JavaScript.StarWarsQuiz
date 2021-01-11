const ls = require('../../scripts/localScorage');
let correctAnswer = '';

const setNextQuestion = () => {
  clearAnswers();
  const [
    correctAnswerText,
    wrongAnswer1,
    wrongAnswer2,
    wrongAnswer3,
    correctAnswerImage
  ] = randomizeNewQuestion();
  saveCurrentCorrectAnswer(correctAnswerText);
  setNewAnswers([correctAnswerText, wrongAnswer1, wrongAnswer2, wrongAnswer3]);
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

const randomizeNewQuestion = () => {
  // CHECK DUPLICATE QUESTIONS ARRAY

  // MAKE API CALL

  // ADD QUESTION TO DUPLICATE QUESTIONS ARRAY

  const img = require('../../assets/img/modes/people/1.jpg');

  return ['SampleCorrect', 'SampleWrong1', 'SampleWrong2', 'SampleWrong3', img];
};

const setNewAnswers = answers => {
  const shuffledAnswers = shuffleArrayFisherYates(answers);
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

const shuffleArrayFisherYates = arr => {
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

/* sprawdzanie, czy odpowiedź się dubluje */
// function checkDuplicate(arr) {
//   let findDuplicates = arr =>
//     arr.filter((item, index) => arr.indexOf(item) != index);
//   while (findDuplicates(arr).length > 0) {
//     const indexOfDuplicate = arr.indexOf(findDuplicates(arr)[0]);
//     arr[indexOfDuplicate] =
//       answers[Math.floor(Math.random() * answers.length)]['fields']['name'];
//   }
//   return arr;
// }

module.exports = {
  getAnswersElArray,
  incrementComputerCorrectAnswersNumber,
  incrementPlayerCorrectAnswersNumber,
  highlightAnswerEl,
  checkAnswer,
  getAnswerFromAnswerEl,
  getCorrectAnswerEl,
  shuffleArrayFisherYates,
  saveCurrentCorrectAnswer,
  changeImage,
  clearAnswers
};
