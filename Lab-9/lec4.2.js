const startTime = new Date();
let secondsPassed = 0;

while (true) {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);

  if (elapsedTime > secondsPassed) {
    secondsPassed = elapsedTime;
    console.log(secondsPassed);
  }

  if (elapsedTime >= 10) {
    console.log("Таймер завершено: минуло 10 секунд.");
    break;
  }
}
