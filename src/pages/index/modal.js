const text = document.querySelector('.text__clickable');
const buttonClose = document.querySelector('.button--close');
const backgroundClose = document.querySelector('.modal-wrap');
const modal = document.querySelector('.modal');

function addClass() {
  document.querySelector('.modal-wrap').classList.add('active');
  document.querySelector('.container').classList.add('container--blur');
}

function removeClass() {
  document.querySelector('.modal-wrap').classList.remove('active');
  document.querySelector('.container').classList.remove('container--blur');
}

function modalClick(e) {
  e.stopPropagation();
}

document.addEventListener('DOMContentLoaded', function () {
  text.addEventListener('click', addClass);
  buttonClose.addEventListener('click', removeClass);
  backgroundClose.addEventListener('click', removeClass);
  modal.addEventListener('click', modalClick);
});

module.exports = { addClass, removeClass };