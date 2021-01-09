const text = document.querySelector('.text__clickable');
const buttonClose = document.querySelector('.button--close');

function addClass() {
  document.querySelector('.modal-wrap').classList.add('active');
  document.querySelector('.container').classList.add('container--blur');
}

function removeClass() {
  document.querySelector('.modal-wrap').classList.remove('active');
  document.querySelector('.container').classList.remove('container--blur');
}

document.addEventListener('DOMContentLoaded', function () {
  text.addEventListener('click', addClass);
  buttonClose.addEventListener('click', removeClass);
});

module.exports = { addClass, removeClass };
