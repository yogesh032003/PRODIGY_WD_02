window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let lapCount = 1; // To track lap count
    let appendMinutes = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');
    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let lapBtn = document.querySelector('#lap');
    let Interval;
    
    const startTimer = () => {
      tens++;
      if (tens <= 9) {
        appendTens.innerHTML = '0' + tens;
      } else {
        appendTens.innerHTML = tens;
      }
  
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = seconds <= 9 ? '0' + seconds : seconds;
        tens = 0;
        appendTens.innerHTML = '0' + 0;
      }
  
      if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = minutes <= 9 ? '0' + minutes : minutes;
        seconds = 0;
        appendSeconds.innerHTML = '0' + 0;
      }
    };
  
    startBtn.onclick = () => {
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
    };
  
    stopBtn.onclick = () => {
      clearInterval(Interval);
    };
  
    resetBtn.onclick = () => {
      clearInterval(Interval);
      tens = 0;
      seconds = 0;
      minutes = 0;
      appendTens.innerHTML = '00';
      appendSeconds.innerHTML = '00';
      appendMinutes.innerHTML = '00';
      lapCount = 1; // Reset lap count
    };
  
    lapBtn.onclick = () => {
      const lapTime = `${appendMinutes.innerHTML}:${appendSeconds.innerHTML}.${appendTens.innerHTML}`;
      const lapListItem = document.createElement('li');
      lapListItem.textContent = `Lap ${lapCount}: ${lapTime}`;
      document.getElementById('lapList').appendChild(lapListItem);
      lapCount++;
    };
  };
  