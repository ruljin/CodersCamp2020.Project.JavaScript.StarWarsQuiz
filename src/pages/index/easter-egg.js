const buttonCloseEasterEgg = document.querySelector('#buttonCloseEasterEgg');
const easterEggArrowLeft = document.querySelector('#easterEggArrowLeft');
const easterEggArrowRight = document.querySelector('#easterEggArrowRight');
const modal = document.querySelector('#easterEggModal');
const backgroundClose = document.querySelector('.modal-easter-egg');
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let keyPressed = [];


import memImage1 from '../../assets/ui/mem1.jpg';
import memImage2 from '../../assets/ui/mem2.jpg';
import memImage3 from '../../assets/ui/mem3.jpg';

const memImageObject = {
    memImages: [memImage1, memImage2, memImage3],
    currentImageShown: 0,
    maxImageIndex: 2,
    decreaseCurrentImageShown: function() {
        if (this.currentImageShown > 0) {
            this.currentImageShown--;
        }
    },
    increaseCurrentImageShown: function() {
        if (this.currentImageShown < this.maxImageIndex) {
            this.currentImageShown++;
        }
    },
    getCurrentImage: function() {
        return this.memImages[this.currentImageShown];
    }
}

const checkKonamiCode = (e) => {
    keyPressed.push(addPressedKey(e.key));
    keyPressed = getLastTenItemsOfArray(keyPressed);
    if (compareArrays(keyPressed, konamiCode)) {
        toggleEasterEggModal('open', memImageObject.memImages[0]);
    }
}

const addPressedKey = (key) => {
    if (key === 'A') return 'a';
    else if (key === 'B') return 'b';
    else return key;
}

const compareArrays = (array1, array2) => {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index]) ? true : false;
}

const consoleLogHint = (text) => {
    console.log(text);
}

const getLastTenItemsOfArray = (array) => {
    return array.slice(Math.max(array.length - 10, 0));
}

const toggleEasterEggModal = (state, image = undefined) => {
    const modalContainer = document.querySelector('.modal-easter-egg');
    const container = document.querySelector('.container');
    if (state == 'open') {
        modalContainer.classList.add('active');
        container.classList.add('container--blur');
        if (image) {
            const easterEggImage = document.querySelector('#easterEggImage');
            easterEggImage.src = image;
        }
    }
    else if (state == 'close') {
        modalContainer.classList.remove('active');
        container.classList.remove('container--blur');
        memImageObject.currentImageShown = 0;
        checkArrowStyles();
    }
    else {
        throw new Error(`State '${state}' is unknown, expected 'open' or 'close'`);
    }
}

const easterEggSwapImage = (direction) => {
    const easterEggImage = document.querySelector('#easterEggImage');
    if (direction == 'left') {
        memImageObject.decreaseCurrentImageShown();
        easterEggImage.src = memImageObject.getCurrentImage();

    }
    else if (direction == 'right') {
        memImageObject.increaseCurrentImageShown();
        easterEggImage.src = memImageObject.getCurrentImage();
    }
    else {
        throw new Error(`Direction ${direction} is unknown, expected 'left' or 'right'`);
    }

    checkArrowStyles();
}

const checkArrowStyles = () => {
    memImageObject.currentImageShown == 0 ? easterEggArrowLeft.classList.add('arrow--disabled') : easterEggArrowLeft.classList.remove('arrow--disabled');
    memImageObject.currentImageShown == memImageObject.maxImageIndex ? easterEggArrowRight.classList.add('arrow--disabled') : easterEggArrowRight.classList.remove('arrow--disabled');
}

const modalStopPropagation = (e) => {
    e.stopPropagation();
}

window.addEventListener('load', consoleLogHint.bind(null, 'Dear user\nTry to use the Konami Code and you will get eternal glory and worship!'), false) ;
window.addEventListener('keydown', checkKonamiCode, false);
buttonCloseEasterEgg.addEventListener('click', toggleEasterEggModal.bind(null, 'close'), false);
easterEggArrowLeft.addEventListener('click', easterEggSwapImage.bind(null, 'left'), false);
easterEggArrowRight.addEventListener('click', easterEggSwapImage.bind(null, 'right'), false);
modal.addEventListener('click', modalStopPropagation, false);
backgroundClose.addEventListener('click', toggleEasterEggModal.bind(null, 'close'), false);