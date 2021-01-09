import '../../styles/assets.scss';
import './authors.scss';

const buttonSkip = document.querySelector('#buttonSkip');
const containerStarWarsEffect = document.querySelector('#starWarsEffect');
const containerAuthors = document.querySelector('#authors');
const ANIMATION_DURATION = 60;

const checkAnimationFinished = () => {
  setTimeout(() => {
    skipAnimation();
  }, ANIMATION_DURATION * 1000);
};

const skipAnimation = () => {
  containerStarWarsEffect.style.display = 'none';
  containerStarWarsEffect.classList.add('star-wars-effect--invisible');
  containerAuthors.classList.remove('container--invisible');
};

window.addEventListener('load', checkAnimationFinished, false);
buttonSkip.addEventListener('click', skipAnimation, false);
