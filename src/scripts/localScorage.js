import {
  LOCAL_STORAGE_SETTINGS,
  LOCAL_STORAGE_SCOREBOARD,
  LOCAL_STORAGE_PLAYER_CORRECT,
  LOCAL_STORAGE_COMPUTER_CORRECT
} from '../config';

const saveSettings = (category, speed, mode, difficulty) => {
  const settings = createSettingsObject(category, speed, mode, difficulty);
  saveToLocalStorage(LOCAL_STORAGE_SETTINGS, settings);
};

const createSettingsObject = (category, speed, mode, difficulty) => {
  const settings = { category, speed, mode, difficulty };
  return settings;
};

const savePlayerScore = (name, points, category) => {
  const playerScore = createPlayerScoreObject(name, points, category);
  const oldScoreboard = getScoreboard();
  const newScoreboard = saveScoreToScoreboard(oldScoreboard, playerScore);
  saveToLocalStorage(LOCAL_STORAGE_SCOREBOARD, newScoreboard);
};

const createPlayerScoreObject = (name, points, category) => {
  const playerScore = { name, points, category };
  return playerScore;
};

const getScoreboard = () => {
  const scoreboard = getFromLocalStorage(LOCAL_STORAGE_SCOREBOARD);
  return scoreboard;
};

const saveScoreToScoreboard = (scoreboard, playerScore) => {
  return [playerScore, ...scoreboard];
};

const savePlayerCorrectAnswersNumber = number => {
  saveCorrectAnswersNumber(LOCAL_STORAGE_PLAYER_CORRECT, number);
};

const saveComputerCorrectAnswersNumber = number => {
  saveCorrectAnswersNumber(LOCAL_STORAGE_COMPUTER_CORRECT, number);
};

const saveCorrectAnswersNumber = (player, number) => {
  saveToLocalStorage(player, number);
};

const saveToLocalStorage = (key, object) => {
  localStorage.setItem(key, JSON.stringify(object));
};

const getSettings = () => {
  return getFromLocalStorage(LOCAL_STORAGE_SETTINGS);
};

const getFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

const getPlayerCorrectAnswersNumber = () => {
  getCorrectAnswersNumber(LOCAL_STORAGE_PLAYER_CORRECT);
};

const getComputerCorrectAnswersNumber = () => {
  getCorrectAnswersNumber(LOCAL_STORAGE_COMPUTER_CORRECT);
};

export {
  saveSettings,
  savePlayerScore,
  savePlayerCorrectAnswersNumber,
  saveComputerCorrectAnswersNumber,
  getSettings,
  getScoreboard,
  getPlayerCorrectAnswersNumber,
  getComputerCorrectAnswersNumber
};
