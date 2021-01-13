const changeImage = require('./settings-image');

test('change signature for starships', () => {
    document.body.innerHTML = `
    <button class="selector selector--selected" data-type="category" data-value="vehicles">
        Vehicles
    </button> 
    <img
        id="categorySampleImage"
        src=""
        class="category-image__image"
        alt="Category sample image"/>
    <p class="text text--alternative category-image__label" id="signature"></p>`
    
    changeImage.changeImage();
    expect(document.querySelector('#signature').textContent).toBe('Vehicles');
})