const gameAnswering = require('./game.answering');
const ls = require('../../scripts/localScorage');

describe('Testing game answers file', () => {
  document.body.innerHTML = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Star Wars Quiz</title>
  </head>
  <body class="container background">
    <header class="banner">
      <h1>Who is this character?</h1>
    </header>
    <main class="page-content">
      <img
        id="questionImage"
        class="question-image"
        alt="Target question image"
      />
      <div id="answersContainer" class="selector-container">
        <button data-answer="" class="selector selector--game"></button>
        <button data-answer="" class="selector selector--game"></button>
        <button data-answer="" class="selector selector--game"></button>
        <button data-answer="" class="selector selector--game"></button>
      </div>
    </main>
    <footer class="container__footer">
      <div class="light-timer">
        <img id="lightSaberImage" alt="Lightsaber" />
        <div class="light-timer__timer">
          <div class="light-timer__background"></div>
          <div id="lightTimerBlade" class="light-timer__blade"></div>
        </div>
      </div>
      <p id="textTimer" class="timer">
        <span class="text">Remaining time:</span>
        <span id="textTimerTime" class="text text--colored">Loading...</span>
      </p>
    </footer>
  </body>
</html>
  `;
  test('testing checkDuplicate function', () => {
    expect(gameAnswering.checkDuplicate([1, 2, 3, 4, 2, 3])).toBe([4, 5]);

    test('checking duplicates in array', () => {
      let arr = ['a', 'b', 'c', 'd'];
      expect(gameAnswering.checkDuplicates(arr)).toBe(
        arr[0] !== arr[1] &&
          arr[2] &&
          arr[3] &&
          arr[1] !== arr[2] &&
          arr[3] &&
          arr[2] !== arr[3]
      );
    });
  });

  test('checking getAnswersElArray function', () => {
    const answersContainer = document.querySelector('#answersContainer');
    answersContainer.children[0].innerHTML = 'test';

    expect(gameAnswering.getAnswersElArray()[0].innerHTML).toBe(`test`);
  });

  test('checking incrementComputerCorrectAnswersNumber function', () => {
    let currentAnswerCounter = ls.getComputerCorrectAnswersNumber();
    gameAnswering.incrementComputerCorrectAnswersNumber();
    expect(ls.getComputerCorrectAnswersNumber()).toBe(++currentAnswerCounter);
  });

  test('checking incrementPlayerCorrectAnswersNumber function', () => {
    let currentAnswerCounter = ls.getPlayerCorrectAnswersNumber();
    gameAnswering.incrementPlayerCorrectAnswersNumber();
    expect(ls.getPlayerCorrectAnswersNumber()).toBe(++currentAnswerCounter);
  });

  test('checking highlightAnswerEl function', () => {
    const answerElement = document.querySelectorAll('.selector');

    gameAnswering.highlightAnswerEl(answerElement[0], 'wrong');
    gameAnswering.highlightAnswerEl(answerElement[1], 'success');
    gameAnswering.highlightAnswerEl(answerElement[2], 'success');
    gameAnswering.highlightAnswerEl(answerElement[3], 'wrong');

    expect(answerElement[0].classList.contains('selector--wrong')).toBeTruthy();
    expect(
      answerElement[1].classList.contains('selector--success')
    ).toBeTruthy();
    expect(
      answerElement[2].classList.contains('selector--success')
    ).toBeTruthy();
    expect(answerElement[3].classList.contains('selector--wrong')).toBeTruthy();
  });

  test('checking checkAnswer and saveCurrentCorrectAnswer function', () => {
    gameAnswering.saveCurrentCorrectAnswer('test');
    expect(gameAnswering.checkAnswer('test')).toBeTruthy();
  });

  test('checking getAnswerFromAnswerEl function', () => {
    const answer = document.querySelector('.selector');
    answer.dataset.answer = 'test';
    expect(gameAnswering.getAnswerFromAnswerEl(answer)).toBe('test');
  });

  test('checking getCorrectAnswerEl function', () => {
    expect(gameAnswering.getCorrectAnswerEl().dataset.answer).toBe('test');
  });

  test('checking shuffleArrayFisherYates function', () => {
    expect(gameAnswering.shuffleArrayFisherYates([0, 1, 2, 3])).toEqual(
      expect.arrayContaining([0, 1, 2, 3])
    );
  });

  test('checking changeImage function', () => {
    const pictureEl = document.querySelector('#questionImage');
    gameAnswering.changeImage('testSource');
    expect(pictureEl.src).toMatch('testSource');
  });

  test('checking clearAnswers function', () => {
    const answersContainerEl = document.querySelector('#answersContainer');
    answersContainerEl.innerHTML = `
    <button data-answer="wrong" class="selector selector--game">test</button>
    <button data-answer="wrong" class="selector selector--game">test2</button>
    <button data-answer="correct" class="selector selector--game">answer</button>
    <button data-answer="wrong" class="selector selector--game">wrong answer</button>
  `;

    gameAnswering.clearAnswers();

    const quantity = answersContainerEl.innerHTML
      .trim()
      .split(
        '<button data-answer="" class="selector selector--game"></button>\n'
      );
    expect(quantity.length).toBe(4);
  });
});
