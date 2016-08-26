var buttonStart = document.querySelector('a');
var buttonStop = document.querySelectorAll('a')[1];
var mileSeconds=0,seconds=0,minutes=0,hours=0;
var timeFace = document.querySelector('div');
var interval;
displayTime();
buttonStart.addEventListener('click',start);
buttonStop.addEventListener('click',stop);

function start() {
  interval=setInterval(timer,9);
  buttonStart.className = 'pure-button pure-button--pause';
  buttonStart.innerHTML = 'PAUSE';
  buttonStart.addEventListener('click',pause);
  buttonStart.removeEventListener('click',start);
}
function pause () {
  clearInterval(interval);
  buttonStart.className = 'pure-button pure-button--start';
  buttonStart.innerHTML = 'START';
  buttonStart.addEventListener('click',start);
  buttonStart.removeEventListener('click',pause);
}
function stop () {
  buttonStart.addEventListener('click',start);
  clearInterval(interval);
  mileSeconds=0;
  seconds=0;
  minutes=0;
  hours=0;
  displayTime();
}
function timer() {
  mileSeconds++;
  if (mileSeconds > 99){
    mileSeconds = 0;
    seconds+=1;
    mileSeconds++;
  }
  if (seconds>59){
    seconds=0;
    minutes+=1;
    mileSeconds++;
  }
  if (minutes>59){
    minutes=0;
    hours+=1;
    mileSeconds++;
  }
  if (minutes>=59){
    hours=0;
    mileSeconds++;
  }
  displayTime();
}
function displayTime() {
  for (var i=0;i<4;i++){
    document.querySelectorAll('span')[i];
    if(i===0){
      document.querySelectorAll('span')[i].innerHTML = hours;
      if(hours<10){
        document.querySelectorAll('span')[i].innerHTML = '0' + hours;
      }
    }
    if(i===1){
      document.querySelectorAll('span')[i].innerHTML = minutes;
      if(minutes<10){
        document.querySelectorAll('span')[i].innerHTML = '0' + minutes;
      }
    }
    if(i===2){
      document.querySelectorAll('span')[i].innerHTML = seconds;
      if(seconds<10){
        document.querySelectorAll('span')[i].innerHTML = '0' + seconds;
      }
    }
    if(i===3){
      document.querySelectorAll('span')[i].innerHTML = mileSeconds;
      if(mileSeconds<10){
          document.querySelectorAll('span')[i].innerHTML = '0' + mileSeconds;
      }
    }
  }
}
//Возможно ли сделать,что бы таймер не отставал?
