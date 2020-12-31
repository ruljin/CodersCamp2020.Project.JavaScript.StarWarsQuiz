import '../../styles/assets.scss';
import './authors.scss'

const buttonSkip = document.querySelector('#buttonSkip');
const containerStarWarsEffect = document.querySelector('.container--star-wars-effect');
const containerAuthors = document.querySelector('.container--authors');
const ANIMATION_DURATION = 60;

const checkAnimationFinished = () => {
    setTimeout(() => {
        skipAnimation();
    }, ANIMATION_DURATION * 1000 )
}

const skipAnimation = () => {
    containerStarWarsEffect.style.display = 'none';
    containerAuthors.style.display = 'flex';
}

window.addEventListener('load', checkAnimationFinished, false);
buttonSkip.addEventListener('click', skipAnimation, false);

