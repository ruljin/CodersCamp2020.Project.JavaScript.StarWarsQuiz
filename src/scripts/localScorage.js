const config = require('../../config.js');

const saveSettings = (category, speed, mode, difficulty) => {
  const settings = createSettingsObject(category, speed, mode, difficulty);
  saveToLocalStorage(config.LOCAL_STORAGE_SETTINGS, settings);
};

const createSettingsObject = (category, speed, mode, difficulty) => {
  const settings = { category, speed, mode, difficulty };
  return settings;
};

const savePlayerScore = (name, points, category) => {
  const playerScore = createPlayerScoreObject(name, points, category);
  const oldScoreboard = getScoreboard();
  const newScoreboard = saveScoreToScoreboard(oldScoreboard, playerScore);
  saveToLocalStorage(config.LOCAL_STORAGE_SCOREBOARD, newScoreboard);
};

const createPlayerScoreObject = (name, points, category) => {
  const playerScore = { name, points, category };
  return playerScore;
};

const getScoreboard = () => {
  let scoreboard = getFromLocalStorage(config.LOCAL_STORAGE_SCOREBOARD);
  if (scoreboard === null) {
    scoreboard = createScoreboard();
  }
  return scoreboard;
};

const createScoreboard = () => {
  saveToLocalStorage(config.LOCAL_STORAGE_SCOREBOARD, []);
  return getFromLocalStorage(config.LOCAL_STORAGE_SCOREBOARD);
};

const saveScoreToScoreboard = (scoreboard, playerScore) => {
  return [playerScore, ...scoreboard];
};

const savePlayerCorrectAnswersNumber = number => {
  saveToLocalStorage(config.LOCAL_STORAGE_PLAYER_CORRECT, number);
};

const saveComputerCorrectAnswersNumber = number => {
  saveToLocalStorage(config.LOCAL_STORAGE_COMPUTER_CORRECT, number);
};

const saveToLocalStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};

const getSettings = () => {
  return getFromLocalStorage(config.LOCAL_STORAGE_SETTINGS);
};

const getFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

const getPlayerCorrectAnswersNumber = () => {
  return getCorrectAnswersNumber(config.LOCAL_STORAGE_PLAYER_CORRECT);
};

const getComputerCorrectAnswersNumber = () => {
  return getCorrectAnswersNumber(config.LOCAL_STORAGE_COMPUTER_CORRECT);
};

const getCorrectAnswersNumber = key => {
  const correctAnswersNumber = getFromLocalStorage(key);
  return correctAnswersNumber === null ? 0 : correctAnswersNumber;
};

const removeFromLocalStorage = key => {
  localStorage.removeItem(key);
};

const removeLastScore = () => {
  const oldScoreboard = getScoreboard();
  const newScoreboard = removeLastScoreFromScoreboard(oldScoreboard);
  saveToLocalStorage(config.LOCAL_STORAGE_SCOREBOARD, newScoreboard);
};

const removeLastScoreFromScoreboard = scoreboard => {
  return scoreboard.slice(1);
};

const saveAnswersNumber = number => {
  saveToLocalStorage(config.LOCAL_STORAGE_ANSWERS, number);
};

const getAnswersNumber = () => {
  getFromLocalStorage(config.LOCAL_STORAGE_ANSWERS);
};

module.exports = {
  saveSettings,
  savePlayerScore,
  savePlayerCorrectAnswersNumber,
  saveComputerCorrectAnswersNumber,
  saveAnswersNumber,
  getSettings,
  getScoreboard,
  getPlayerCorrectAnswersNumber,
  getComputerCorrectAnswersNumber,
  getAnswersNumber,
  removeFromLocalStorage,
  removeLastScore
};
