'use strict';

const guessNumber = function () {
  let randomNum = parseInt(Math.random() * 101);
  let userNum = prompt('Угадай число от 1 до 100');
  let attempts = 10;
  attempts--;
  function startGame() {
    if (userNum == randomNum) {
      let result = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
      function restart() {
        if (result === true) {
          return guessNumber();
        } else {
          alert('Спасибо за игру');
        }
      }
      restart();
    } else if (userNum === null) {
      alert('Игра окончена.');
    } else if (userNum < randomNum && attempts > 0) {
      userNum = prompt(`Загаданное число больше, у вас осталось ${attempts} попыток`);
      attempts--;
      return startGame();
    } else if (userNum > randomNum && attempts > 0) {
      userNum = prompt(`Загаданное число меньше, у вас осталось ${attempts} попыток`);
      attempts--;
      return startGame();
    } else if (isNaN(userNum)) {
      userNum = prompt('Введи число!');
      startGame();
    } else if (attempts === 0) {
      let result = confirm('Попытки закончились. Хотите сыграть еще?');
      function restart() {
        if (result === true) {
          return guessNumber();
        } else {
          alert('Спасибо за игру');
        }
      }
      restart();
    }
  }
  return startGame();
};

guessNumber();
