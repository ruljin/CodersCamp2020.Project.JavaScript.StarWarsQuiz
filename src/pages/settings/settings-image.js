const button = document.querySelectorAll('.selector');

const imagePeople = require('../../assets/img/modes/people/1.jpg');
const imageVehicles = require('../../assets/img/modes/vehicles/18.jpg');
const imageStarships = require('../../assets/img/modes/starships/28.jpg');

const changeImage = () => {
  const selectedButton = document.querySelector('.selector--selected');
  const imageSignature = document.querySelector('#signature');

  if (selectedButton.dataset.value === 'vehicles') {
    document.querySelector('#categorySampleImage').src = imageVehicles;
    imageSignature.textContent = 'Vehicles';
  } else if (selectedButton.dataset.value === 'starships') {
    document.querySelector('#categorySampleImage').src = imageStarships;
    imageSignature.textContent = 'Starships';
  } else {
    document.querySelector('#categorySampleImage').src = imagePeople;
    imageSignature.textContent = 'People';
  }
};

button.forEach(button => {
  button.addEventListener('click', changeImage);
});

module.exports = {
  changeImage
};
