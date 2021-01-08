const { addClass, removeClass } = require('./modal.js');

document.body.innerHTML = `
  <div class="container background"></div>
  <section class="modal-wrap">
  <div class="modal">
    <div class="banner">
      <h1>Who is this character?</h1>
    </div>
    <div class="modal-body">
      <img id="questionImage" class="question-image" alt="Target question image" />
      <div class="selector-container">
        <button class="selector selector--game">Luke Skywalker</button>
        <button class="selector selector--game">Darth Vader</button>
        <button class="selector selector--game">Padme Amidala</button>
        <button class="selector selector--game">Jar Jar Binks</button>
      </div>
    </div>
    <div class="modal-footer">
      <button class="button button--close">Close</button>
    </div>
  </div>
</section>`;

const modal = document.querySelector('.modal-wrap');
const container = document.querySelector('.container');

test('Testing if function add classes to DOM', () => {
  addClass();

  expect(modal.classList.contains('active')).toBeTruthy();
  expect(container.classList.contains('container--blur')).toBeTruthy();
});

test('Testing if function remove classes with DOM', () => {
  addClass();
  removeClass();

  expect(modal.classList.contains('active')).toBeFalsy();
  expect(container.classList.contains('container--blur')).toBeFalsy();
});
