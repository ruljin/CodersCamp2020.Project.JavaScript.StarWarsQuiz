document.body.innerHTML = `
  <body class="container background">
    <header>
      <h1 class="banner" id="banner">Game Over</h1>
    </header>
    <main class="page-content">
      <table class="table">
        <thead>
          <tr class="table__row table__row--head">
            <th class="table__data">Place</th>
            <th class="table__data">Player</th>
            <th class="table__data">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table__row" id="firstRow">
            <td class="table__data">1st</td>
            <td class="table__data" id="firstPlayer"></td>
            <td class="table__data" id="firstScore"></td>
          </tr>
          <tr class="table__row" id="secondRow">
            <td class="table__data" id="second">2nd</td>
            <td class="table__datar" id="secondPlayer"></td>
            <td class="table__data" id="secondScore"></td>
          </tr>
        </tbody>
      </table>
      <form class="form" id="form">
        <label for="username" class="text text--small">
          Please fill your name in order to receive eternal glory in whole
          Galaxy!
        </label>
        <input id="username" class="form__input" type="text" />
        <input class="button button--submit" id ="submit" type="submit" value="Submit" />
      </form>
      <p class="text text--uppercase text--large text--alternative">
        May the force be with you!
      </p>
    </main>
    <footer>
      <div class="button-container">
        <a href="./scores.html" class="button">Hall of Fame</a>
        <a href="./settings.html" class="button">Play again</a>
      </div>
    </footer>
  </body>
`;

const doTest = require('./game-over-submit');
const headerText = require('./game-over-submit');
//const soloPlayer = require('./game-over-submit');
//const firstPlace = require('./game-over-submit');
//const secondPlace = require('./game-over-submit');
//const saveName = require('./game-over-submit');
//const changeSubmit = require('./game-over-submit');
//const submitChange = require('./game-over-submit');
//let playerScore = require('./game-over-submit');
//let computerScore = require('./game-over-submit');
const header = document.getElementById('banner');

describe('color of header', () => {
  test('setting header color to blue when won', () => {
    const playerScore = 30;
    const computerScore = 20;
    expect(header.style.color).toBe('rgb(112, 181, 245)');
  });
  test('setting header color to red when lost', () => {
    const playerScore = 30;
    const computerScore = 40;
    expect(header.style.color).toBe('rgb(255, 0, 0)');
  });
  test('setting header color to blue when draft', () => {
    const playerScore = 5;
    const computerScore = 5;
    expect(header.style.color).toBe('rgb(112, 181, 245)');
  });
  test('setting header color to blue when solo game', () => {
    const playerScore = 10;
    const computerScore = 0;
    expect(header.style.color).toBe('rgb(112, 181, 245)');
  });
});

describe('text of header', () => {
  test('setting text of header when won', () => {
    const playerScore = 10;
    const computerScore = 5;
    expect(header.textContent).toBe('You Won!');
  });
  test('setting text of header when lost', () => {
    const playerScore = 10;
    const computerScore = 15;
    expect(header.textContent).toBe('Game over!');
  });
  test('setting text of header when draft', () => {
    const playerScore = 10;
    const computerScore = 10;
    expect(header.textContent).toBe('You Won!');
  });
  test('setting text of header when solo game', () => {
    const playerScore = 10;
    const computerScore = 0;
    expect(header.textContent).toBe('You Won!');
  });
});

function newFunction() {
  const playerScore = 10;
  const computerScore = 5;
  headerText(playerScore, computerScore);
}
