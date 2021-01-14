const ls = require('../../scripts/localScorage');

const TIME_TO_CHANGE_ELEMENTS_COLOR_TO_RED = 20;
const TIME_TO_CHANGE_ELEMENTS_COLOR_TO_YELLOW = 40;
let isTimerPaused = true;
let gameTime = 0;

const runTimer = () => {
  isTimerPaused = false;
};

const pauseTimer = () => {
  isTimerPaused = true;
};

const decreaseGameTimer = () => {
  gameTime--;
};

const setGameTime = value => {
  gameTime = value;
};

const getGameTime = () => {
  return gameTime;
};

const getIsTimerPaused = () => {
  return isTimerPaused;
};

const getSpeedFromLocalStorage = () => {
  const settings = ls.getSettings();
  if (!settings) return 0;

  return settings.speed;
};

const secondsToTime = seconds => {
  let minutes = 0;

  while (seconds >= 60) {
    seconds -= 60;
    minutes++;
  }

  return `${minutes}m ${seconds}s`;
};

const changeTimerStyle = color => {
  const lightTimerBlade = document.querySelector('#lightTimerBlade');
  const textTimer = document.querySelector('#textTimer');
  const textTimerTime = document.querySelector('#textTimerTime');

  lightTimerBlade.style.boxShadow = `10px -5px 15px ${color}, 10px 5px 15px ${color}`;
  textTimer.style.textShadow = `4px 4px 40px ${color}`;
  textTimerTime.style.color = `${color}`;
};

const updateTime = () => {
  let seconds = gameTime;

  setTimerValues(seconds);

  if (seconds == TIME_TO_CHANGE_ELEMENTS_COLOR_TO_RED)
    changeTimerStyle('#ff0000');
  if (seconds == TIME_TO_CHANGE_ELEMENTS_COLOR_TO_YELLOW)
    changeTimerStyle('#fac300');
  if (checkGameFinished(seconds)) {
    pauseTimer();
    location.replace('game-over.html');
  }

  decreaseGameTimer();
};

const setTimerValues = seconds => {
  const lightTimerBlade = document.querySelector('#lightTimerBlade');
  const textTimerTime = document.querySelector('#textTimerTime');
  const timeToShow = secondsToTime(seconds);
  const lightTimerWidth = getLightTimerWidth(seconds);

  textTimerTime.innerHTML = timeToShow;
  lightTimerBlade.style.width = lightTimerWidth + '%';
  console.log(lightTimerWidth);
};

const getLightTimerWidth = seconds => {
  const gameSpeedType = getSpeedFromLocalStorage();
  const gameSpeed = gameSpeedType.toLowerCase() == 'fast' ? 20 : gameSpeedType.toLowerCase() == 'normal' ? 40 : 60;
  

  let result = 100 * ((gameSpeed - seconds) / gameSpeed);
  return result;
};

const checkGameFinished = seconds => {
  return seconds <= 0 ? true : false;
};

const timerInterval = () => {
  setInterval(() => {
    if (isTimerPaused) return;
    updateTime();
  }, 1000);
};

const startGame = () => {
  const timeName = getSpeedFromLocalStorage();
  let time = 0;
  if (timeName === 'long') {
    time = 60;
  } else if (timeName === 'normal') {
    time = 40;
  } else if (timeName === 'fast') {
    time = 20;
  }
  gameTime = time;
  runTimer();
  timerInterval();
};

module.exports = {
  getSpeedFromLocalStorage,
  secondsToTime,
  changeTimerStyle,
  updateTime,
  getLightTimerWidth,
  checkGameFinished,
  setTimerValues,
  startGame,
  pauseTimer,
  runTimer,
  decreaseGameTimer,
  getGameTime,
  setGameTime,
  getIsTimerPaused
};
