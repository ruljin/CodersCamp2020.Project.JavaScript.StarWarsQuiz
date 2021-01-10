const answering = require('./game.js');

test('checking adding pictures', () => {
    const imageTags = answering.pictureTag;
    expect(imageTags.complete && image.naturalHeight !== 0).toBeTruthy;
    expect(imageTags.hasAttribute("src")).toBeTruthy;
});

test('answers', () => {
    
});
