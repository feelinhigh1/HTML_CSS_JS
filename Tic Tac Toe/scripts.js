
console.log("TicTacToe");

let music = new Audio("1.mp4");
let audioTurn = new Audio("ting.mp3");
let audioGameOver = new Audio("gameOver.mp3");
let turn = "X";

let gameOver = false;


// Function to change the turn

const changeTurn  = () => {
  return turn === "X" ? "O" : "X";  // If turn === X then it will return O else X
}

// Function to check for a Win 

const checkWin = () => {
  let boxText = document.getElementsByClassName('boxText');
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
  ]
  wins.forEach(e => {
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
      document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
      gameOver = true;
      document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "250px";
    }
  })
}



// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxText = element.querySelector('.boxText');
  element.addEventListener('click', ()=> {
    if(boxText.innerText === ''){
      boxText.innerText = turn;
      audioTurn.play();
      turn = changeTurn();
      
      checkWin();
      if(!gameOver) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  })
})


// Add onclick listener to Reset

reset.addEventListener('click',()=>{
  let boxTexts = document.querySelectorAll('.boxText');
  Array.from(boxTexts).forEach(element => {
    element.innerText = "";
  });
  turn = "X";
  gameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "0px";
})