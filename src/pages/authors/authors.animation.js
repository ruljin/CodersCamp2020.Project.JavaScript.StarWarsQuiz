const ANIMATION_DURATION = 60;

const buttonSkip = document.querySelector('#buttonSkip');
const containerStarWarsEffect = document.querySelector('#starWarsEffect');
const containerAuthors = document.querySelector('#authors');

const endAnimation = () => {
  setTimeout(() => {
    removeEffects();
  }, ANIMATION_DURATION * 1000);
};

const removeEffects = () => {
  containerStarWarsEffect.classList.add('star-wars-effect--invisible');
  containerAuthors.classList.remove('container--invisible');
};

window.addEventListener('load', endAnimation, false);
buttonSkip.addEventListener('click', removeEffects, false);