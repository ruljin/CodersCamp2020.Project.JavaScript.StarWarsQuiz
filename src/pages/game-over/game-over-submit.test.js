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

const gameOverSubmit = require('./game-over-submit.js');


describe('set header depending on scores', () => {

  
  test('setting header when Player wins', () => {
    document.body.innerHTML = 
    `<h1 class="banner" id="banner">Game Over</h1>`
    const header = document.querySelector('#banner');
    gameOverSubmit.headerText(10,5);

    expect(header.textContent).toBe("You Won!");
    expect(header.style.color).toBe('rgb(112, 181, 245)');
});
  test('setting header when Computer wins', () => {
    document.body.innerHTML = 
    `<h1 class="banner" id="banner">Game Over</h1>`
    const header = document.querySelector('#banner');
    gameOverSubmit.headerText(10,15);

    expect(header.textContent).toBe("Game over!");
    expect(header.style.color).toBe('rgb(255, 0, 0)');
});
  test('setting header when draft', () => {
    document.body.innerHTML = 
    `<h1 class="banner" id="banner">Game Over</h1>`
    const header = document.querySelector('#banner');
    gameOverSubmit.headerText(10,10);

    expect(header.textContent).toBe("You Won!");
    expect(header.style.color).toBe('rgb(112, 181, 245)');
});
}),

describe('set first row depending on scores', () => {
  test('setting first row when Player wins', () => {
    document.body.innerHTML = 
    `<tr class="table__row" id="firstRow">
    <td class="table__data">1st</td>
    <td class="table__data" id="firstPlayer"></td>
    <td class="table__data" id="firstScore"></td>
    </tr>`
    const firstPlayer = document.querySelector('#firstPlayer');
    const firstScore = document.querySelector('#firstScore');
    const firstRow = document.querySelector('#firstRow');
    gameOverSubmit.firstPlace(10,5);

    expect(firstPlayer.textContent).toBe("Player");
    expect(firstScore.textContent).toBe(10)
    expect(firstRow.classList.contains('table__row--highlighted')).toBeTruthy();
});
  test('setting first row when Computer wins', () => {
    document.body.innerHTML = 
    `<tr class="table__row" id="firstRow">
    <td class="table__data">1st</td>
    <td class="table__data" id="firstPlayer"></td>
    <td class="table__data" id="firstScore"></td>
    </tr>`
    const firstPlayer = document.querySelector('#firstPlayer');
    const firstScore = document.querySelector('#firstScore');
    const firstRow = document.querySelector('#firstRow');
    gameOverSubmit.firstPlace(10,15);

    expect(firstPlayer.textContent).toBe("Computer");
    expect(firstScore.textContent).toBe(15)
    expect(firstRow.classList.contains('table__row--highlighted')).toBeFalsy();
});
  test('setting first row when draft', () => {
    document.body.innerHTML = 
    `<tr class="table__row" id="firstRow">
    <td class="table__data">1st</td>
    <td class="table__data" id="firstPlayer"></td>
    <td class="table__data" id="firstScore"></td>
    </tr>`
    const firstPlayer = document.querySelector('#firstPlayer');
    const firstScore = document.querySelector('#firstScore');
    const firstRow = document.querySelector('#firstRow');
    gameOverSubmit.firstPlace(10,10);

  expect(firstPlayer.textContent).toBe("Player");
  expect(firstScore.textContent).toBe(10)
  expect(firstRow.classList.contains('table__row--highlighted')).toBeTruthy();
});
}),

describe('set second row depending on scores', () => {
    document.body.innerHTML = 
    `<tr class="table__row" id="secondRow">
    <td class="table__data" id="second">2nd</td>
    <td class="table__datar" id="secondPlayer"></td>
    <td class="table__data" id="secondScore"></td>
    </tr>`
    const secondPlayer = document.querySelector('#secondPlayer');
    const secondScore = document.querySelector('#secondScore');
    const secondRow = document.querySelector('#secondRow');
  
  test('setting second row when Player wins', () => {
    document.body.innerHTML = 
    `<tr class="table__row" id="secondRow">
    <td class="table__data" id="second">2nd</td>
    <td class="table__datar" id="secondPlayer"></td>
    <td class="table__data" id="secondScore"></td>
    </tr>`
    const secondPlayer = document.querySelector('#secondPlayer');
    const secondScore = document.querySelector('#secondScore');
    const secondRow = document.querySelector('#secondRow');
    gameOverSubmit.secondPlace(10,5);

    expect(secondPlayer.textContent).toBe("Computer");
    expect(secondScore.textContent).toBe(5)
    expect(secondRow.classList.contains('table__row--highlighted')).toBeFalsy();
});
  test('setting second row when Computer wins', () => {
    document.body.innerHTML = 
    `<tr class="table__row" id="secondRow">
    <td class="table__data" id="second">2nd</td>
    <td class="table__datar" id="secondPlayer"></td>
    <td class="table__data" id="secondScore"></td>
    </tr>`
    const secondPlayer = document.querySelector('#secondPlayer');
    const secondScore = document.querySelector('#secondScore');
    const secondRow = document.querySelector('#secondRow');
    gameOverSubmit.secondPlace(10,15);

  expect(secondPlayer.textContent).toBe("Player");
  expect(secondScore.textContent).toBe(10)
  expect(secondRow.classList.contains('table__row--highlighted')).toBeTruthy();
});
test('setting second row when draft', () => {
  document.body.innerHTML = 
  `<tr class="table__row" id="secondRow">
  <td class="table__data" id="second">2nd</td>
  <td class="table__datar" id="secondPlayer"></td>
  <td class="table__data" id="secondScore"></td>
  </tr>`
  const secondPlayer = document.querySelector('#secondPlayer');
  const secondScore = document.querySelector('#secondScore');
  const secondRow = document.querySelector('#secondRow');
  gameOverSubmit.secondPlace(10,10);

expect(secondPlayer.textContent).toBe("Computer");
expect(secondScore.textContent).toBe(10)
expect(secondRow.classList.contains('table__row--highlighted')).toBeFalsy();
});
})