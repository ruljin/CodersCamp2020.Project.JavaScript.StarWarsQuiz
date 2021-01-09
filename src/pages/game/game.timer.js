const ls = require('../../scripts/localScorage');

const TIME_TO_CHANGE_ELEMENTS_COLOR_TO_RED = 30;
const timer = {
  gameTime: 0,
  isTimerPaused: true,
  runTimer: function () {
    this.isTimerPaused = false;
  },
  pauseTimer: function () {
    this.isTimerPaused = true;
  },
  decreaseGameTimer: function () {
    this.gameTime--;
  }
};

const getSpeedFromLocalStorage = () => {
  const settings = ls.getSettings();
  if (!settings) throw new Error('Failed to load data from localStorage');

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

// change function name
const changeTimerStyleToRed = () => {
  const lightTimerBlade = document.querySelector('#lightTimerBlade'); // animate 'box-shadow'
  const textTimer = document.querySelector('#textTimer'); // animate 'text-shadow'
  const textTimerTime = document.querySelector('#textTimerTime'); // animate 'color'

  // here
};

const updateTime = () => {
  let seconds = timer.gameTime;

  setTimerValues(seconds);

  if (seconds == TIME_TO_CHANGE_ELEMENTS_COLOR_TO_RED) changeTimerStyleToRed(); // set color change every second (or after x seconds every second)
  if (checkGameFinished(seconds)) timer.pauseTimer();

  timer.decreaseGameTimer();
};

const setTimerValues = seconds => {
  const lightTimerBlade = document.querySelector('#lightTimerBlade');
  const textTimerTime = document.querySelector('#textTimerTime');
  const timeToShow = secondsToTime(seconds);
  const lightTimerWidth = getLightTimerWidth(seconds);

  textTimerTime.innerHTML = timeToShow;
  lightTimerBlade.style.width = lightTimerWidth + '%';
};

const getLightTimerWidth = seconds => {
  const gameSpeed = getSpeedFromLocalStorage();

  let result = 100 * ((gameSpeed - seconds) / gameSpeed);
  return result;
};

const checkGameFinished = seconds => {
  return seconds <= 0 ? true : false;
};

const timerInterval = () => {
  setInterval(() => {
    if (timer.isTimerPaused) return;
    updateTime();
  }, 1000);
};

const startGame = () => {
  const time = getSpeedFromLocalStorage();
  timer.gameTime = time;
  timer.runTimer();
  timerInterval();
};

window.addEventListener('load', startGame, false);

module.exports = {
  timer,
  getSpeedFromLocalStorage,
  secondsToTime,
  changeTimerStyleToRed,
  updateTime,
  getLightTimerWidth,
  checkGameFinished,
  setTimerValues
};
