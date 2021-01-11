const localStorage = require('../../scripts/localScorage');
const selectorOne = document.querySelector('.selector:nth-of-type(1)');
const tableBody = document.querySelector('#tableBody');
const scoreboard = localStorage.getScoreboard();

function createTR(place, nickname, points, isHighlited) {
  if (place === 1) {
    place = place + 'st';
  } else if (place === 2) {
    place = place + 'nd';
  } else if (place === 3) {
    place = place + 'rd';
  } else {
    place = place + 'th';
  }

  return `
    <tr class="table__row ${isHighlited ? 'table__row--highlighted' : ''}">
      <td class="table__data">${place}</td>
      <td class="table__data">${nickname}</td>
      <td class="table__data">${points}</td>
    </tr>
  `;
}

function tableEmpty() {
  return `
    <tr class="table__row">
      <td class="table__data table__data--wide">
        Leaderboard is empty...
      </td>
    </tr>
  `;
}

function populateTable(category) {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  let number = 1;
  scoreboard.filter(function (element) {
    if (element.category === category) {
      const tableRows = createTR(
        number,
        element.name,
        element.points,
        number === 1 ? true : false
      );
      tableBody.innerHTML += tableRows;
      number++;
    }
  });

  if (!tableBody.firstChild) {
    tableBody.innerHTML = tableEmpty();
  }
}

//select default category
window.onload = function defaultValue() {
  selectorOne.classList.add('selector--selected');
  populateTable('people');
};

//change category after click
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
btns.forEach(function (element) {
  element.addEventListener('click', function () {
    if (
      element.classList.contains('selector--people') &&
      element.classList.contains('selector--selected')
    ) {
      populateTable('people');
    } else if (
      element.classList.contains('selector--vehicles') &&
      element.classList.contains('selector--selected')
    ) {
      populateTable('vehicles');
    } else {
      populateTable('starships');
    }
  });
});

module.exports = createTR;
