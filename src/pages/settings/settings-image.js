const imageSignature = document.querySelector('#signature');
const button = document.querySelectorAll('.selector');


import imagePeople from '../../assets/img/modes/people/1.jpg';
import imageVehicles from '../../assets/img/modes/vehicles/18.jpg';
import imageStarships from '../../assets/img/modes/starships/28.jpg';
import { doc } from 'prettier';


function changeImage() {
    const selectedButton = document.querySelector('.selector--selected');
    if (selectedButton.dataset.value === 'vehicles') {
        
        document.querySelector('#categorySampleImage').src = imageVehicles
        imageSignature.textContent = "Vehicles"
    }
    else if (selectedButton.dataset.value === 'starships') {
        document.querySelector('#categorySampleImage').src = imageStarships
        imageSignature.textContent = "Starships"
    }
    else {
        document.querySelector('#categorySampleImage').src = imagePeople
        imageSignature.textContent = "People"
    }
}

 
button.forEach(button => {
    button.addEventListener("click", changeImage)})