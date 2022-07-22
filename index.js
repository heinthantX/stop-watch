const sec = document.getElementById('sec');
const min = document.getElementById('min');
const alarm = document.getElementById('alarm');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

let count = 0;
let intervalId;

function startClick() {
  if (intervalId) return;
  startBtn.style.display = 'none';
  stopBtn.style.display = 'block';
  intervalId = setInterval(() => {
    count++;
    updateText(count);
    if (count % 60 === 0) {
      playAlarm();
    }
  }, 1000);
}

function stopClick() {
  startBtn.style.display = 'block';
  stopBtn.style.display = 'none';
  clearInterval(intervalId);
  intervalId = null;
}

function restartCLick() {
  clearInterval(intervalId);
  intervalId = null;
  count = 0;
  updateText(count);
  startBtn.style.display = 'block';
  stopBtn.style.display = 'none';
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
