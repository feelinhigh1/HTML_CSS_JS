console.log('Welcome');

score = 0;
cross = true;

audioGameOver = new Audio('sounds/gameover.mp3');
audioGame = new Audio('sounds/music.mp3');

setTimeout(()=>{
  audioGame.play();
},1000)



// for dino if the arrow up key or space button is pressed 

document.onkeydown = (e) => {
  // console.log(e.key);
  if(e.key === 'ArrowUp' || e.key === " ") {
    dino = document.querySelector('.dino'); 
    dino.classList.add('animateDino'); // add animate dino class
    setTimeout(()=>{
      dino.classList.remove('animateDino'); //set timeoout when to remove the animate dino class
    },700);
   }
   else if(e.key === 'ArrowLeft' ) {
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinoX - 112) + 'px';

   }
   else if(e.key === 'ArrowRight') {
    dino = document.querySelector('.dino'); 
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinoX + 112) + 'px';
   }
}
setInterval(()=>{
  dino = document.querySelector('.dino'); 
  gameOver = document.querySelector('.gameOver');
  obstacle = document.querySelector('.obstacle'); 
  
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

  offSetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offSetX, offsetY);

  // if obstacle and dino crashes
  if(offSetX < 73 && offsetY < 52) {
    gameOver.style.visibility = "visible";
    obstacle.classList.remove('obstacleAni');
    setTimeout(()=>{
      audioGameOver.play();
      audioGame.pause();
    },1000)
  }
  else if (offSetX< 145 && cross) {
    score +=1;
    updateScore();
    cross =false;
    setTimeout(()=>{
      cross = true;
    },1000);
    setTimeout(()=>{
      aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.001;
      obstacle.style.animationDuration = newDur + 's';
    },500)
    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.001;
    obstacle.style.animationDuration = newDur + 's';
  }
},10);

function updateScore() {
  scoreCount.innerHTML = `Your Score : ${score}`;
}