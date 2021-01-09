const timer = require('./game.timer.js');
const ls = require('../../scripts/localScorage');

test('checking timer functions', () => {
  const timerObject = timer.timer;
  timerObject.gameTime = 10;
  timerObject.decreaseGameTimer();
  expect(timerObject.gameTime).toBe(9);

  timerObject.pauseTimer();
  expect(timerObject.isTimerPaused).toBe(true);

  timerObject.runTimer();
  expect(timerObject.isTimerPaused).toBe(false);
});

test('getting speed from localStorage', () => {
  ls.saveSettings('', 100, '', '');
  expect(timer.getSpeedFromLocalStorage()).toBe(100);
});

test('getting time text from seconds', () => {
  expect(timer.secondsToTime(300)).toBe('5m 0s');
  expect(timer.secondsToTime(140)).toBe('2m 20s');
});

// test('testing if function add classes to DOM', () => {
//   document.body.innerHTML = `
//     <footer class="container__footer">
//       <div class="light-timer">
//         <img
//           id="lightSaberImage"
//           alt="Lightsaber"
//         />
//         <div class="light-timer__timer">
//           <div class="light-timer__background"></div>
//           <div id="lightTimerBlade" class="light-timer__blade"></div>
//         </div>
//       </div>
//       <p id="textTimer" class="timer">
//         <span class="text">Remaining time:</span>
//         <span id="textTimerTime" class="text text--colored">Loading...</span>
//       </div>
//     </footer>
//     `;

//   const lightTimerBlade = document.querySelector('#lightTimerBlade');
//   const textTimerTime = document.querySelector('#textTimerTime');

//   timer.changeTimerStyleToRed();

//   expect(lightTimerBlade.classList.contains('shadow--red')).toBeTruthy();
//   expect(lightTimerBlade.classList.contains('shadow--blue')).toBeFalsy();
//   expect(
//     textTimerTime.children[0].classList.contains('text-shadow--red')
//   ).toBeTruthy();
//   expect(
//     textTimerTime.children[0].classList.contains('text-shadow--blue')
//   ).toBeFalsy();
//   expect(textTimerTime.children[1].classList.contains('text--red')).toBeTruthy();
//   expect(textTimerTime.children[1].classList.contains('text--blue')).toBeFalsy();
//   expect(
//     textTimerTime.children[1].classList.contains('text-shadow--red')
//   ).toBeTruthy();
//   expect(
//     textTimerTime.children[1].classList.contains('text-shadow--blue')
//   ).toBeFalsy();
// });

test('checking if function set timer values properly', () => {
  ls.saveSettings('', 200, '', '');
  document.body.innerHTML = `
    <footer class="container__footer">
      <div class="light-timer">
        <img
          id="lightSaberImage"
          alt="Lightsaber"
        />
        <div class="light-timer__timer">
          <div class="light-timer__background"></div>
          <div id="lightTimerBlade" class="light-timer__blade"></div>
        </div>
      </div>
      <p id="textTimer" class="timer">
        <span class="text">Remaining time:</span>
        <span id="textTimerTime" class="text text--colored">Loading...</span>
      </div>
    </footer>
    `;

  const lightTimerBlade = document.querySelector('#lightTimerBlade');
  const textTimerTime = document.querySelector('#textTimerTime');

  timer.setTimerValues(100);

  expect(lightTimerBlade.style.width).toBe('50%');
  expect(textTimerTime.innerHTML).toBe('1m 40s');
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
