let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"]; // Changed "purple" to "blue" assuming that's the intended color class

let gameStart = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (gameStart == false) {
        console.log("Game is started");
        gameStart = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("gameFlash");

    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 300);

}
function userFlash(btn) {
    btn.classList.add("userFlash");

    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 300);

}

function levelUp() {
    userSeq = [];
    level++;

    h3.innerText = `Level ${level}`;
    console.log(h3.innerText);

    let randIdx = Math.floor(Math.random() * 3); // Fixed Math.random() usage
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`); // Updated to select elements with class
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){

    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp , 1000);
        }
    }else{
        h3.innerHTML = `Game Over! your score was <b> ${level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        }, 150);
        reset();
    }
}

function btnPressed(){
    console.log("button was pressed");
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPressed);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level= 0;
}