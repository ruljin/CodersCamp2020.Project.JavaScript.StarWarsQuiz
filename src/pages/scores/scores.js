import '../../styles/assets.scss';
import './scores.scss';

const localStorage = require('../../scripts/localScorage');

const selectorOne = document.querySelector('.selector:nth-of-type(1)');

const table = document.querySelector('.table');

// select default category
window.onload = function () {
  selectorOne.classList.add('selector--selected');
  table.style.backgroundColor = 'red';
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
      table.style.backgroundColor = 'red';
    } else if (
      element.classList.contains('selector--vehicles') &&
      element.classList.contains('selector--selected')
    ) {
      table.style.backgroundColor = 'blue';
    } else {
      table.style.backgroundColor = 'green';
    }
  });
});
