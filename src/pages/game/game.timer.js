const ls = require('../../scripts/localScorage');

const TIME_TO_CHANGE_ELEMENTS_COLOR_TO_RED = 20;
const TIME_TO_CHANGE_ELEMENTS_COLOR_TO_YELLOW = 40;
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

const changeTimerStyle = (color, time = 1) => {
  const lightTimerBlade = document.querySelector('#lightTimerBlade');
  const textTimer = document.querySelector('#textTimer');
  const textTimerTime = document.querySelector('#textTimerTime');

  lightTimerBlade.style.transition = `width 0.99s linear, box-shadow ${time}s linear`;
  textTimer.style.transition = `text-shadow ${time}s linear`;
  textTimerTime.style.transition = `color ${time}s linear`;

  lightTimerBlade.style.boxShadow = `10px -5px 15px ${color}, 10px 5px 15px ${color}`;
  textTimer.style.textShadow = `4px 4px 40px ${color}`;
  textTimerTime.style.color = `${color}`;
};

const updateTime = () => {
  let seconds = timer.gameTime;

  setTimerValues(seconds);

  if (seconds == TIME_TO_CHANGE_ELEMENTS_COLOR_TO_RED)
    changeTimerStyle('#ff0000', 2.5);
  if (seconds == TIME_TO_CHANGE_ELEMENTS_COLOR_TO_YELLOW)
    changeTimerStyle('#fac300', 2.5);
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
  changeTimerStyle,
  updateTime,
  getLightTimerWidth,
  checkGameFinished,
  setTimerValues
};
