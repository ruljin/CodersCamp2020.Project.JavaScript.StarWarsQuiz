const timer = require('./game.timer.js');
const ls = require('../../scripts/localScorage');

test('checking timer functions', () => {
  const timerObject = timer.timer;
  timerObject.gameTime = 10;
  timerObject.decreaseGameTimer();
  expect(timerObject.getGameTime()).toBe(9);

  timerObject.pauseTimer();
  expect(timerObject.getIsTimerPaused()).toBe(true);

  timerObject.runTimer();
  expect(timerObject.getIsTimerPaused()).toBe(false);
});

test('getting speed from localStorage', () => {
  ls.saveSettings('', 100, '', '');
  expect(timer.getSpeedFromLocalStorage()).toBe(100);
});

test('getting time text from seconds', () => {
  expect(timer.secondsToTime(300)).toBe('5m 0s');
  expect(timer.secondsToTime(140)).toBe('2m 20s');
});

test('testing if function add classes to DOM', () => {
  document.body.innerHTML = `
        <footer class="container__footer">
            <div class="container__light-timer">
                <img src="../src/assets/ui/lightsaberHandle.png" alt="lightsaber" />
                <div class="light-timer">
                    <div class="light-timer__background"></div>
                    <div class="light-timer__countdown-timer shadow shadow--blue"></div>
                </div>
            </div>
            <div class="timer">
                <p class="text text-shadow text-shadow--blue">Time Left:</p>
                <p id="time" class="text text--blue text-shadow text-shadow--blue timer__text">Loading...</p>
            </div>
        </footer>
        `;

  const lightTimer = document.querySelector('.light-timer__countdown-timer');
  const timerDOM = document.querySelector('.timer');

  timer.changeTimerStyleToRed();

  expect(lightTimer.classList.contains('shadow--red')).toBeTruthy();
  expect(lightTimer.classList.contains('shadow--blue')).toBeFalsy();
  expect(
    timerDOM.children[0].classList.contains('text-shadow--red')
  ).toBeTruthy();
  expect(
    timerDOM.children[0].classList.contains('text-shadow--blue')
  ).toBeFalsy();
  expect(timerDOM.children[1].classList.contains('text--red')).toBeTruthy();
  expect(timerDOM.children[1].classList.contains('text--blue')).toBeFalsy();
  expect(
    timerDOM.children[1].classList.contains('text-shadow--red')
  ).toBeTruthy();
  expect(
    timerDOM.children[1].classList.contains('text-shadow--blue')
  ).toBeFalsy();
});

test('checking if function set timer values properly', () => {
  ls.saveSettings('', 200, '', '');
  document.body.innerHTML = `
    <footer class="container__footer">
        <div class="container__light-timer">
            <img src="../src/assets/ui/lightsaberHandle.png" alt="lightsaber" />
            <div class="light-timer">
                <div class="light-timer__background"></div>
                <div class="light-timer__countdown-timer shadow shadow--blue"></div>
            </div>
        </div>
        <div class="timer">
            <p class="text text-shadow text-shadow--blue">Time Left:</p>
            <p id="time" class="text text--blue text-shadow text-shadow--blue timer__text">Loading...</p>
        </div>
    </footer>
    `;

  const lightTimer = document.querySelector('.light-timer__countdown-timer');
  const time = document.querySelector('#time');

  timer.setTimerValues(100);

  expect(lightTimer.style.width).toBe('50%');
  expect(time.innerHTML).toBe('1m 40s');
});

test('check if functions properly calculate lightTimer width', () => {
  ls.saveSettings('', 200, '', '');
  expect(timer.getLightTimerWidth(25)).toBe(87.5);
  expect(timer.getLightTimerWidth(150)).toBe(25);
});

test('check function that checks end of game', () => {
  expect(timer.checkGameFinished(10)).toBeFalsy();
  expect(timer.checkGameFinished(0)).toBeTruthy();
});
