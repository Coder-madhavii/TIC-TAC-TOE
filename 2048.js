// console.log("welcome to Tic Tac Toe")
// let music = new Audio("Win.mp3")
// let audioturn = new Audio("ting.mp3")
// let gameover = new Audio("gameover.mp3")
// let turn = "X" 

// //Function to change the turn
// const changeTurn = ()=>{
//     return turn === "X"? "0":"X"
// }

// //Function to check for a win
// const checkWin = ()=>{

// }

// //Game logic 
//   let boxes = document.getElementsByClassName("box");
//   Array.from(boxes).forEach(element =>{
//     let boxtext = element.querySelector('.boxtext');
//     element.addEventListener('click', ()=>{
//    if(boxtext.innerText === ''){
//     boxtext.innerText = turn;
//     turn = changeTurn();
//     audioturn.play();
//     checkWin();
//     document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
//    }
//     })
//   })
let playerText = document.getElementById('playerText')
let restartBtn=document.getElementById('restartBtn')
let boxes=Array.from(document.getElementsByClassName('box'))

console.log(boxes)

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame= () => {
  boxes.forEach(box => box.addEventListener('click',boxClicked))
}

function boxClicked(e){
const id = e.target.id

if(!spaces[id]){
  spaces[id] = currentPlayer
  e.target.innerText = currentPlayer

  currentPlayer  = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
}
}

restartBtn.addEventListener('click',restart)

function restart()
{
  spaces.fill(null)

  boxes.forEach(box =>{
    box.innerText = ''
  })

  currentPlayer = X_TEXT
} 

