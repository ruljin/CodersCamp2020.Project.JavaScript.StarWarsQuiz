const ls = require('../../scripts/localScorage');
window.onload = function clear() {
  ls.removeFromLocalStorage('playerCorrectAnswers');
  ls.removeFromLocalStorage('computerCorrectAnswers');
  ls.removeFromLocalStorage('settings');
  ls.removeFromLocalStorage('answers');
};

const selectors = Array.prototype.slice.call(
  document.querySelectorAll(
    '.selector:not(.selector--static):not(.selector--empty)'
  )
);
const playButton = document.querySelector('#playButton');
let [category, speed, mode, difficulty] = ['', '', '', ''];

const selectorsCategory = selectors.filter(
  selector => selector.dataset.type === 'category'
);

const selectorsSpeed = selectors.filter(
  selector => selector.dataset.type === 'speed'
);

const selectorsMode = selectors.filter(
  selector => selector.dataset.type === 'mode'
);

const selectorsDifficulty = selectors.filter(
  selector => selector.dataset.type === 'difficulty'
);

const hideDifficultySelector = () => {
  selectorsDifficulty.forEach(selector => {
    selector.classList.add('selector--empty');
  });
};

const showDifficultySelector = () => {
  selectorsDifficulty.forEach(selector => {
    selector.classList.remove('selector--empty');
  });
};

const saveChoices = () => {
  ls.saveSettings(category, speed, mode, difficulty);
};

const changeStyle = chosenSelector => {
  selectors.forEach(selector => {
    if (selector.dataset.type === chosenSelector.dataset.type) {
      selector.classList.remove('selector--selected');
    }
  });
  chosenSelector.classList.add('selector--selected');
};

const handleSelectorClick = evt => {
  const chosenSelector = evt instanceof MouseEvent ? evt.currentTarget : evt;
  changeStyle(chosenSelector);
  checkDifficultySelector(chosenSelector);
  saveChoice(chosenSelector.dataset.type, chosenSelector.dataset.value);
};

const checkDifficultySelector = chosenSelector => {
  if (chosenSelector.dataset.type === 'mode') {
    if (chosenSelector.dataset.value === 'solo') {
      hideDifficultySelector();
      difficulty = '';
    } else {
      showDifficultySelector();
      handleSelectorClick(selectorsDifficulty[1]);
    }
  }
};

const saveChoice = (type, value) => {
  if (type === 'category') {
    category = value;
  } else if (type === 'speed') {
    speed = value;
  } else if (type === 'mode') {
    mode = value;
  } else if (type === 'difficulty') {
    difficulty = value;
  }
};

const setDefaultSettings = () => {
  handleSelectorClick(selectorsCategory[0]);
  handleSelectorClick(selectorsSpeed[1]);
  handleSelectorClick(selectorsMode[1]);
  handleSelectorClick(selectorsDifficulty[1]);
};

selectors.forEach(selector => {
  selector.addEventListener('click', handleSelectorClick);
});

playButton.addEventListener('click', saveChoices);

setDefaultSettings();

module.exports = {
  saveChoices,
  handleSelectorClick,
  setDefaultSettings
};
