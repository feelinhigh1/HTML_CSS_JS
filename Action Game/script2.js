document.onkeydown = (e)=> {
  console.log(e.key);
  if (e.key === "ArrowUp" || e.key === " ") {
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(()=>{
      dino.classList.remove('animateDino');
    },1000)
  }
  else if (e.key === "ArrowLeft") {

  }
  else if (e.key === "ArrowRight") {
    
  }
}