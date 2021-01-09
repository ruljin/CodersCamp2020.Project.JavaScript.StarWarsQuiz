import '../../styles/assets.scss';
import './scores.scss';

const localStorage = require('../../scripts/localScorage');
const selectorOne = document.querySelector('.selector:nth-of-type(1)');
const table = document.querySelector('.table');
const scoreboard = localStorage.getScoreboard();

function peopleScores() {
  scoreboard.forEach(function (element) {
    if (element.category === 'people') {
      table.innerHTML = `
      <thead class="table__head">
      <tr class="table__row">
        <th class="table__data">Place</th>
        <th class="table__data">Player</th>
        <th class="table__data">Points</th>
      </tr>
    </thead>
    <tbody>
        <tr class="table__row">
          <td class="table__data">1st</td>
          <td class="table__data">${element.name}</td>
          <td class="table__data">${element.points}</td>
        </tr>
      </tbody>
      `;
    }
  });
}

function vehiclesScores() {
  scoreboard.forEach(function (element) {
    if (element.category === 'vehicles') {
      table.innerHTML = `
      <thead class="table__head">
      <tr class="table__row">
        <th class="table__data">Place</th>
        <th class="table__data">Player</th>
        <th class="table__data">Points</th>
      </tr>
    </thead>
    <tbody>
        <tr class="table__row">
          <td class="table__data">1st</td>
          <td class="table__data">${element.name}</td>
          <td class="table__data">${element.points}</td>
        </tr>
      </tbody>
      `;
    }
  });
}

function starshipsScores() {
  scoreboard.forEach(function (element) {
    if (element.category === 'starships') {
      table.innerHTML = `
      <thead class="table__head">
      <tr class="table__row">
        <th class="table__data">Place</th>
        <th class="table__data">Player</th>
        <th class="table__data">Points</th>
      </tr>
    </thead>
    <tbody>
        <tr class="table__row">
          <td class="table__data">1st</td>
          <td class="table__data">${element.name}</td>
          <td class="table__data">${element.points}</td>
        </tr>
      </tbody>
      `;
    }
  });
}

// select default category
window.onload = function () {
  selectorOne.classList.add('selector--selected');
  peopleScores();
};

//Change category after click
const btns = document.querySelectorAll('.selector');

btns.forEach(function (element) {
  element.addEventListener('click', function () {
    if (document.querySelector('.selector--selected')) {
      document
        .querySelector('.selector--selected')
        .classList.remove('selector--selected');
    }
    this.classList.add('selector--selected');
  });
});

//change table
const tableEmpty = document.querySelector('.table__empty');

btns.forEach(function (element) {
  element.addEventListener('click', function () {
    if (
      element.classList.contains('selector--people') &&
      element.classList.contains('selector--selected')
    ) {
      peopleScores();
    } else if (
      element.classList.contains('selector--vehicles') &&
      element.classList.contains('selector--selected')
    ) {
      vehiclesScores();
    } else {
      starshipsScores();
    }
  });
});
