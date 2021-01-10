const headerText = require('./game-over-submit.js');

test('setting header according to scores', () => {
    expect(headerText(30,20)).toHaveTextContent("You Won!")
});



