setInterval(()=>{
  date = new Date();
  hourTime = date.getHours();
  minuteTime = date.getMinutes();
  secondTime = date.getSeconds();
  hourRotation = 30*hourTime + minuteTime/2 + secondTime/120;
  minuteRotation = 6*minuteTime + secondTime/10;
  secondRotation = 6*secondTime;

  document.getElementById('hour').style.transform = `rotate(${hourRotation}deg`;
  document.getElementById('minute').style.transform = `rotate(${minuteRotation}deg`;
  document.getElementById('second').style.transform = `rotate(${secondRotation}deg`;

  // const now = `(${hourTime}:${minuteTime}:${secondTime})`;
  // document.querySelector('.time').innerText = now;
},1000)


// setInterval -> whatever we tell it it will do it in given interval of time 1000-> 1s 