console.log("Welcome to Tic Tac Toe");
let music = new Audio("Win.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
let moves=0;


music.addEventListener('play', () => {
    console.log("Music is playing");
});
audioTurn.addEventListener('play', () => {
    console.log("Turn sound is playing");
});
gameover.addEventListener('play', () => {
    console.log("Gameover sound is playing");
});


// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

// Function to check for a win
const checkWin = ()=>{


    if (moves === 9 && !isgameover) {
        document.querySelector('.info').innerText = "It's a Tie!";
        gameover.play();
        isgameover = true;
    }


    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            music.play();
            document.querySelector('.imgbox img').style.width = "200px";
        }
    });

     
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            moves++;
            checkWin();
            
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    });
});

// Add onclick listener to reset button
document.getElementById('reset').addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false;
    moves=0;// Reset move count
    music.pause();//Stop the music
    music.currentTime=0;//Reset music to the begining
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').style.display = "none"
});

