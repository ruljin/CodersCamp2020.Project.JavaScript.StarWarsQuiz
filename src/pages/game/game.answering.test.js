document.body.innerHTML = `
<main class="container__question">
  <img class="question-image" src="" alt="" />
  <div class="answers">
  </div>
</main>
`;
const answering = require('./game.answering.js');
const sampleImage1 = require('../../assets/img/modes/people/1.jpg');
let sampleAnswer = [
  {
    fields: {
      edited: '2014-12-20T21:17:56.891Z',
      name: 'Luke Skywalker',
      created: '2014-12-09T13:50:51.644Z',
      gender: 'male',
      skin_color: 'fair',
      hair_color: 'blond',
      height: '172',
      eye_color: 'blue',
      mass: '77',
      homeworld: 1,
      birth_year: '19BBY',
      image: 'luke_skywalker.jpg'
    },
    model: 'resources.people',
    pk: 1
  }
];

// on tu przyjmuje obiekt jako argument
test('checking adding pictures', () => {
  const sampleImages = { 1: sampleImage1 };
  const keyNames = Object.keys(sampleImages);
  const pictureTag = document.querySelector('.question-image');
  expect(answering.changeImage(sampleAnswer[0])).toBe(
    pictureTag.complete && image.naturalHeight !== 0
  );
});

test('checking loading answers', () => {
  answering.startGame();
  const correctAnswer = answers[0];
  expect(correctAnswer['fields']['name'].length !== 0).toBeTruthy();
});

test('checking duplicates in array', () => {
  let arr = ['a', 'b', 'c', 'd'];
  expect(checkDuplicates(arr)).toBe(
    arr[0] !== arr[1] &&
      arr[2] &&
      arr[3] &&
      arr[1] !== arr[2] &&
      arr[3] &&
      arr[2] !== arr[3]
  );
});

test('checking if at least one element has diffrent place', () => {
  let arr = ['a', 'b', 'c', 'd'];
  expect(shuffleArray(arr)).toBe(
    arr.indexOf('a') !== 0 ||
      arr.indexOf('b') !== 2 ||
      arr.indexOf('c') !== 3 ||
      arr.indexOf('d') !== 3
  );
});
