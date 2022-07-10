const sec = document.getElementById('sec');
const min = document.getElementById('min');
const alarm = document.getElementById('alarm');

let count = 0;
let intervalId;

function startClick() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    count++;
    updateText(count);
    if (count % 60 === 0) {
      playAlarm();
    }
  }, 1000);
}

function stopClick() {
  clearInterval(intervalId);
  intervalId = null;
  count = 0;
  updateText(count);
}

function updateText(count) {
  const minute = Math.floor(count / 60);
  const second = count % 60;
  sec.innerText = second < 10 ? `0${second}` : second;
  min.innerText = minute < 10 ? `0${minute}` : minute;
}

function playAlarm() {
  alarm.play();
}
