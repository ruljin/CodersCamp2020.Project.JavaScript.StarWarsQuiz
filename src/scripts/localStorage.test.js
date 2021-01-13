const localStorage = require('./localScorage');
const config = require('../../config');

test('saving, getting and removing settings to/from local storage', () => {
  [category, speed, mode, difficulty] = ['Wuhan', 'Fast', 'Versus', 'Hard'];
  localStorage.saveSettings(category, speed, mode, difficulty);
  expect(localStorage.getSettings()).toStrictEqual({
    category,
    speed,
    mode,
    difficulty
  });
  localStorage.removeFromLocalStorage(config.LOCAL_STORAGE_SETTINGS);
  expect(localStorage.getSettings()).toStrictEqual(null);
});

test('saving, getting and removing score to/from local storage', () => {
  [name, points, category] = ['Pawello', '997', 'Kłopoty'];
  localStorage.savePlayerScore(name, points, category);
  expect(localStorage.getScoreboard()).toStrictEqual([
    {
      name,
      points,
      category
    }
  ]);

  const lastScoreboardLength = localStorage.getScoreboard().length;
  localStorage.removeLastScore();
  expect(localStorage.getScoreboard().length === lastScoreboardLength - 1);
});

test('saving, getting and removing computer and player answers to/from local storage', () => {
  [category, speed, mode, difficulty] = ['Wuhan', 'Fast', 'Versus', 'Hard'];
  localStorage.savePlayerCorrectAnswersNumber(12);
  localStorage.saveComputerCorrectAnswersNumber(20);
  expect(localStorage.getPlayerCorrectAnswersNumber()).toBe(12);
  expect(localStorage.getComputerCorrectAnswersNumber()).toBe(20);
  localStorage.removeFromLocalStorage(config.LOCAL_STORAGE_PLAYER_CORRECT);
  localStorage.removeFromLocalStorage(config.LOCAL_STORAGE_COMPUTER_CORRECT);
  expect(localStorage.getPlayerCorrectAnswersNumber()).toBe(null);
  expect(localStorage.getComputerCorrectAnswersNumber()).toBe(null);
});
