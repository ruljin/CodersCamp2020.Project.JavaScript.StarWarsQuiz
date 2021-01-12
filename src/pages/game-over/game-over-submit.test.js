document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Star Wars Quiz</title>
  </head>
  <body class="container background">
    <header>
      <h1 id="banner" class="banner banner--alternative">Game Over</h1>
    </header>
    <main class="page-content">
      <table class="table table--no-scroll table--limited">
        <thead class="table__head">
          <tr class="table__row">
            <th class="table__data">Place</th>
            <th class="table__data">Player</th>
            <th class="table__data">Points</th>
          </tr>
        </thead>
        <tbody id="tableBody" class="table__body"></tbody>
      </table>
      <form class="form">
        <label id="label" for="usernameInput" class="text text--small">
          Please fill your name in order to receive eternal glory in whole
          Galaxy!
        </label>
        <input id="usernameInput" class="form__input" type="text" />
        <input
          id="submit"
          class="button button--submit"
          type="submit"
          value="Submit"
        />
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
</html>
`;

const ls = require('../../scripts/localScorage');
ls.saveSettings('category1', 120, 'mode1', 'difficulty1');
const gameOverSubmit = require('./game-over-submit');

test('creating a Table Row for 1st place ', () => {
  gameOverSubmit.createTableRow(1, 'Joda', 20, true);
  expect(gameOverSubmit.createTableRow(1, 'Joda', 20, true)).toMatch(
    '<td class="table__data">1st</td>'
  );
}),
  test('creating a Table Row for 2nd place ', () => {
    gameOverSubmit.createTableRow(2, 'Joda', 20, true);
    expect(gameOverSubmit.createTableRow(2, 'Joda', 20, true)).toMatch(
      '<td class="table__data">2nd</td>'
    );
  }),
  test('creating a Table Row for 3rd place ', () => {
    gameOverSubmit.createTableRow(3, 'Joda', 20, true);
    expect(gameOverSubmit.createTableRow(3, 'Joda', 20, true)).toMatch(
      '<td class="table__data">3rd</td>'
    );
  }),
  test('creating a Table Row for 5th place ', () => {
    gameOverSubmit.createTableRow(5, 'Joda', 20, true);
    expect(gameOverSubmit.createTableRow(5, 'Joda', 20, true)).toMatch(
      '<td class="table__data">5th</td>'
    );
  }),
  test('creating a Table Row - adding nickname ', () => {
    gameOverSubmit.createTableRow(2, 'Joda', 20, true);
    expect(gameOverSubmit.createTableRow(2, 'Joda', 20, true)).toMatch(
      '<td class="table__data">Joda</td>'
    );
  }),
  test('creating a Table Row - adding points ', () => {
    gameOverSubmit.createTableRow(2, 'Joda', 20, true);
    expect(gameOverSubmit.createTableRow(2, 'Joda', 20, true)).toMatch(
      '<td class="table__data">20</td>'
    );
  }),
  test('creating a Table Row - highliting  ', () => {
    gameOverSubmit.createTableRow(2, 'Joda', 20, true);
    expect(gameOverSubmit.createTableRow(2, 'Joda', 20, true)).toMatch(
      '<tr class="table__row table__row--highlighted">'
    );
  }),
  test('create player table row', () => {
    gameOverSubmit.createPlayerTableRow(1);
    expect(gameOverSubmit.createPlayerTableRow(1)).toMatch(
      '<td class="table__data">1st</td>'
    );
  }),
  test('create computer table row', () => {
    gameOverSubmit.createComputerTableRow(2);
    expect(gameOverSubmit.createComputerTableRow(2)).toMatch(
      '<td class="table__data">2nd</td>'
    );
  }),
  test('check computer mode', () => {
    ls.saveSettings('', '', 'solo', '');
    expect(gameOverSubmit.checkComputerMode()).toBe(false);
  }),
  test('get points from correct answer number', () => {
    expect(gameOverSubmit.getPointsFromCorrectAnswersNumber(11)).toBe(11);
  }),
  test('get places', () => {
    ls.savePlayerCorrectAnswersNumber(10);
    ls.saveComputerCorrectAnswersNumber(20);
    expect(gameOverSubmit.getPlaces()).toStrictEqual([2, 1]);
  }),
  test('get places', () => {
    ls.savePlayerCorrectAnswersNumber(20);
    ls.saveComputerCorrectAnswersNumber(2);
    expect(gameOverSubmit.getPlaces()).toStrictEqual([1, 2]);
  }),
  test('get player points', () => {
    ls.savePlayerCorrectAnswersNumber(19);
    expect(gameOverSubmit.getPlayerPoints()).toBe(
      gameOverSubmit.getPointsFromCorrectAnswersNumber(19)
    );
  }),
  test('get computer points', () => {
    ls.saveComputerCorrectAnswersNumber(19);
    expect(gameOverSubmit.getComputerPoints()).toBe(
      gameOverSubmit.getPointsFromCorrectAnswersNumber(19)
    );
  }),
  test('set banner', () => {
    document.body.innerHTML = `<h1 id="banner" class="banner banner--alternative">Game Over</h1>`;

    ls.saveSettings('', '', 'solo', '');
    gameOverSubmit.setBanner();
    expect(document.querySelector('#banner').textContent).toBe('You Won!');
    expect(
      document.querySelector('#banner').classList.contains('banner--win')
    ).toBe(true);
  }),
  test('set banner won', () => {
    document.body.innerHTML = `<h1 id="banner" class="banner banner--alternative">Game Over</h1>`;

    ls.saveSettings('', '', 'computer', '');
    ls.savePlayerCorrectAnswersNumber(20);
    ls.saveComputerCorrectAnswersNumber(2);
    gameOverSubmit.setBanner();
    expect(document.querySelector('#banner').textContent).toBe('You Won!');
    expect(
      document.querySelector('#banner').classList.contains('banner--win')
    ).toBe(true);
  }),
  test('set banner lost', () => {
    document.body.innerHTML = `<h1 id="banner" class="banner banner--alternative">Game Over</h1>`;

    ls.saveSettings('', '', 'computer', '');
    ls.savePlayerCorrectAnswersNumber(2);
    ls.saveComputerCorrectAnswersNumber(20);
    gameOverSubmit.setBanner();
    expect(document.querySelector('#banner').textContent).toBe('Game Over!');
    expect(
      document.querySelector('#banner').classList.contains('banner--lose')
    ).toBe(true);
  }),
  test('submit score', () => {
    ls.savePlayerCorrectAnswersNumber(12);
    ls.saveSettings('starships', '', '', '');
    gameOverSubmit.submitScore('Joda');
    expect(ls.getScoreboard()[0]).toStrictEqual({
      name: 'Joda',
      points: gameOverSubmit.getPointsFromCorrectAnswersNumber(12),
      category: 'starships'
    });
  }),
  test('switch label', () => {
    document.body.innerHTML = `<label id="label" for="usernameInput" class="text text--small">
  Please fill your name in order to receive eternal glory in whole
  Galaxy!
</label>`;
    gameOverSubmit.switchLabel(false);
    expect(document.querySelector('#label').textContent).toBe(
      'Please enter valid name!'
    );
  }),
  test('switch label', () => {
    document.body.innerHTML = `<label id="label" for="usernameInput" class="text text--small">
  Please fill your name in order to receive eternal glory in whole
  Galaxy!
</label>`;
    ls.savePlayerCorrectAnswersNumber(14);
    gameOverSubmit.switchLabel(true, 'Joda');

    expect(document.querySelector('#label').textContent).toBe(
      `Joda, your score - ${gameOverSubmit.getPointsFromCorrectAnswersNumber(
        14
      )} - has been added to the hall of fame!`
    );
  });
