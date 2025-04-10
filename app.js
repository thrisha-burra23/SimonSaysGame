// array for storing the sequence of clors flashed & clors clicked by user
let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"]; //btns array

let level = 0; 
let start = false;

let score = [];

let h2 = document.querySelector("h2");

//starting the  game when any key is pressed
document.addEventListener("keypress", function () {
  if (start == false) {
    start = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash"); // making it to white color so that it will flash
  setTimeout(function () {
    // timer function to make it original color
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash"); // making it to white color so that it will flash
  setTimeout(function () {
    // timer function to make it original color
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = []; // making the user seq empty so that the user has to press the complete seq from start
  level++; //leveling up
  h2.innerText = `Level ${level}`; //making the level display on screen
  let randomIdx = Math.floor(Math.random() * 3); // choosing a random index
  let randomColor = btns[randomIdx]; //choosing a color from that random index(generating a random color)
  let randomBtn = document.querySelector(`.${randomColor}`); //accessing the color btn we have chosen bt making a class
  gameSeq.push(randomColor); //pushing the generated color into the array
  gameFlash(randomBtn); //making the btn we choose to flash
}

function checkAns(idx) {
  // checking the user color and game seq color matches or not
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000); // making the function delay
    }
  } else {
    //score.push(level);
    h2.innerHTML = `Game over!! Your score is <i>${level}</i><br>Press any key to start... `;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    // highScore(level);
    restart();
  }
}

function btnPress() {
  let btn = this; // accessing the button which is pressed
  userFlash(btn);
  userColor = btn.getAttribute("id"); // accessing the button pressed by the user by its id
  userSeq.push(userColor); // pushing the color pressed by the user into the array
  checkAns(userSeq.length - 1); // checking the last entered oclor is same or not
}

let allBtns = document.querySelectorAll(".btn"); // accessing all buttons
for (btn of allBtns) {
  //adding event listeners to all the buttons
  btn.addEventListener("click", btnPress);
}

function restart() {
  // resetting everything to start new
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
/*
function highScore(lel) {
    // function to check highest score
    let score = document.createElement("h1"); // creating element
    let container = document.getElementById("container"); //accessing the container from html
    for (let i = 0; i < score.length; i++) {// running a loop to check high score
      if ( lel > score[i]) {
        score.innerText = "High Score!!";
        container.appendChild(score); // if high score adding it to the page
        break;
      }
    }
 
}
*/
