const ls = require('../../scripts/localScorage');
const submitEl = document.querySelector('#submit');

const createTableRow = (place, nickname, points, isHighlited) => {
  if (place === 1) {
    place = place + 'st';
  } else if (place === 2) {
    place = place + 'nd';
  } else if (place === 3) {
    place = place + 'rd';
  } else {
    place = place + 'th';
  }

  return `
    <tr class="table__row ${isHighlited ? 'table__row--highlighted' : ''}">
      <td class="table__data">${place}</td>
      <td class="table__data">${nickname}</td>
      <td class="table__data">${points}</td>
    </tr>
  `;
};

const createPlayerTableRow = place => {
  return createTableRow(place, 'Player', getPlayerPoints(), true);
};

const createComputerTableRow = place => {
  return createTableRow(place, 'Computer', getComputerPoints(), false);
};

const populateTable = () => {
  const tableBodyEl = document.querySelector('#tableBody');

  if (checkComputerMode()) {
    const [playerPlace, computerPlace] = getPlaces();

    const rowsEl = ['', ''];
    rowsEl[playerPlace - 1] = createPlayerTableRow(playerPlace);
    rowsEl[computerPlace - 1] = createComputerTableRow(computerPlace);

    tableBodyEl.innerHTML = rowsEl.join('');
  } else {
    tableBodyEl.innerHTML = createPlayerTableRow(1);
  }
};

const checkComputerMode = () => {
  const settings = ls.getSettings();
  if (settings === null) return false;
  return settings.mode === 'computer';
};

const getPlaces = () => {
  const playerCorrectAnswersNumber = ls.getPlayerCorrectAnswersNumber();
  const computerCorrectAnswersNumber = ls.getComputerCorrectAnswersNumber();

  return playerCorrectAnswersNumber >= computerCorrectAnswersNumber
    ? [1, 2]
    : [2, 1];
};

const getPlayerPoints = () => {
  const correctAnswersNumber = ls.getPlayerCorrectAnswersNumber();
  return getPointsFromCorrectAnswersNumber(correctAnswersNumber);
};

const getComputerPoints = () => {
  const correctAnswersNumber = ls.getComputerCorrectAnswersNumber();
  return getPointsFromCorrectAnswersNumber(correctAnswersNumber);
};

const getPointsFromCorrectAnswersNumber = correctAnswersNumber => {
  const correctAnswersNumber = Math.floor(ls.getPlayerCorrectAnswersNumber * getTimeModifier) + Math.floor((ls.getPlayerCorrectAnswersNumber / ls.getAnswersNumber) * (ls.getPlayerCorrectAnswersNumber * getTimeModifier))
  return correctAnswersNumber;
};

const getTimeModifier = () => {
  const timeModifier = ls.getSettings().speed;
  if (timeModifier === 'long') {
    timeModifier = 1;
  } else if ( timeModifier === 'normal') {
    timeModifier = 2;
  } else {
    timeModifier = 3;
  }
  return timeModifier;
};

const setBanner = () => {
  const bannerEl = document.querySelector('#banner');
  if (checkComputerMode() && getPlaces()[0] === 2) {
    bannerEl.textContent = 'Game Over!';
    bannerEl.classList.add('banner--lose');
  } else {
    bannerEl.textContent = 'You Won!';
    bannerEl.classList.add('banner--win');
  }
};

const handleSubmitButton = evt => {
  evt.preventDefault();
  const usernameInputEl = document.querySelector('#usernameInput');
  const username = usernameInputEl.value;

  if (usernameInputEl.disabled === true) {
    return;
  }

  if (username !== '') {
    submitScore(username);
    blockInput();
    switchLabel(true, username);
  } else {
    switchLabel(false);
  }
};

const submitScore = username => {
  ls.savePlayerScore(username, getPlayerPoints(), ls.getSettings().category);
};

const blockInput = () => {
  const usernameInputEl = document.querySelector('#usernameInput');
  usernameInputEl.disabled = true;
};

const switchLabel = (isValid, username = '') => {
  const labelEl = document.querySelector('#label');
  labelEl.textContent = isValid
    ? `${username}, your score - ${getPlayerPoints()} - has been added to the hall of fame!`
    : `Please enter valid name!`;
};

populateTable();
setBanner();
submitEl.addEventListener('click', handleSubmitButton);

module.exports = {
  createTableRow,
  createPlayerTableRow,
  getPlayerPoints,
  createComputerTableRow,
  getComputerPoints,
  checkComputerMode,
  populateTable,
  getPointsFromCorrectAnswersNumber,
  setBanner,
  getPlaces,
  getPlayerPoints,
  switchLabel,
  blockInput,
  submitScore,
  handleSubmitButton
};
