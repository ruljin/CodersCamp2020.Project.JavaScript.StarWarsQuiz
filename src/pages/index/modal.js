const text = document.querySelector('.text__clickable');
const buttonClose = document.querySelector('.button--close');
const backgroundClose = document.querySelector('.modal-wrap');
const modal = document.querySelector('.modal');
const ls = require('../../scripts/localScorage');

window.onload = function clear() {
  ls.removeFromLocalStorage('playerCorrectAnswers');
  ls.removeFromLocalStorage('computerCorrectAnswers');
  ls.removeFromLocalStorage('settings');
  ls.removeFromLocalStorage('answers');
};

function openModal() {
  document.querySelector('.modal-wrap').classList.add('active');
  document.querySelector('.container').classList.add('container--blur');
}

function closeModal() {
  document.querySelector('.modal-wrap').classList.remove('active');
  document.querySelector('.container').classList.remove('container--blur');
}

function modalClick(e) {
  e.stopPropagation();
}

document.addEventListener('DOMContentLoaded', function () {
  text.addEventListener('click', openModal);
  buttonClose.addEventListener('click', closeModal);
  backgroundClose.addEventListener('click', closeModal);
  modal.addEventListener('click', modalClick);
});

module.exports = { openModal, closeModal };
