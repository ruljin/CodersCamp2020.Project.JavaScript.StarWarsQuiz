document.body.innerHTML = `
    <header class="banner"><h1>Settings</h1></header>
    <main class="page-content">
      <div class="selector-container">
        <button class="selector selector--static">Category</button>
        <button class="selector" data-type="category" data-value="people">
          People
        </button>
        <button class="selector" data-type="category" data-value="vehicles">
          Vehicles
        </button>
        <button class="selector" data-type="category" data-value="starships">
          Starships
        </button>
        <button class="selector selector--static">Speed</button>
        <button class="selector" data-type="speed" data-value="fast">
          Fast
        </button>
        <button class="selector" data-type="speed" data-value="normal">
          Normal
        </button>
        <button class="selector" data-type="speed" data-value="long">
          Long
        </button>
        <button class="selector selector--static">Mode</button>
        <button class="selector" data-type="mode" data-value="solo">
          Solo
        </button>
        <button class="selector" data-type="mode" data-value="computer">
          Computer
        </button>
        <button class="selector selector--empty"></button>
        <button class="selector selector--static">Difficulty</button>
        <button class="selector" data-type="difficulty" data-value="easy">
          Easy
        </button>
        <button class="selector" data-type="difficulty" data-value="normal">
          Normal
        </button>
        <button class="selector" data-type="difficulty" data-value="hard">
          Hard
        </button>
      </div>
      <div class="category-image">
        <img
          id="categorySampleImage"
          class="category-image__image"
          alt="Category sample image"
        />
        <p class="text text--alternative category-image__label">People</p>
      </div>
    </main>
    <footer class="button-container">
      <a href="./index.html" class="button">Back</a>
      <a
        id="playButton"
        href="./game.html"
        class="button button--large button--alternative"
      >
        PLAY
      </a>
    </footer>
`;

const selectors = Array.prototype.slice.call(
  document.querySelectorAll(
    '.selector:not(.selector--static):not(.selector--empty)'
  )
);

const modes = require('./modes');
const ls = require('../../scripts/localScorage');

test('Check if default settings are working', () => {
  modes.setDefaultSettings();
  modes.saveChoices();
  expect(ls.getSettings()).toStrictEqual({
    category: 'people',
    speed: 'normal',
    mode: 'computer',
    difficulty: 'normal'
  });
});

test('Check if setting own setting is working', () => {
  modes.handleSelectorClick(selectors[2]);
  modes.handleSelectorClick(selectors[5]);
  modes.handleSelectorClick(selectors[7]);
  modes.handleSelectorClick(selectors[10]);
  modes.saveChoices();
  expect(ls.getSettings()).toStrictEqual({
    category: 'starships',
    speed: 'long',
    mode: 'computer',
    difficulty: 'hard'
  });
});

test('Check if setting solo mode clears difficilty', () => {
  modes.handleSelectorClick(selectors[2]);
  modes.handleSelectorClick(selectors[5]);
  modes.handleSelectorClick(selectors[7]);
  modes.handleSelectorClick(selectors[10]);

  modes.handleSelectorClick(selectors[6]);
  modes.saveChoices();
  expect(ls.getSettings()).toStrictEqual({
    category: 'starships',
    speed: 'long',
    mode: 'solo',
    difficulty: ''
  });
});

test('Check if setting computer mode from solo mode selects default difficulty', () => {
  modes.handleSelectorClick(selectors[2]);
  modes.handleSelectorClick(selectors[5]);
  modes.handleSelectorClick(selectors[6]);

  modes.handleSelectorClick(selectors[7]);
  modes.saveChoices();
  expect(ls.getSettings()).toStrictEqual({
    category: 'starships',
    speed: 'long',
    mode: 'computer',
    difficulty: 'normal'
  });
});
