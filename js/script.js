"use strict";
let turn = "x";
let title = document.querySelector("header"),
span = document.querySelector("header span"),
p = document.querySelector("header p");
span.innerHTML = turn;
p.innerHTML = "turn";
function titlefun(){span.innerHTML = turn;};
let gameArea = document.querySelector(".game-area"),
items = document.querySelectorAll(".game-area button");
let reset = document.querySelector(".reset");
let attempts = 0;
let arr = [...items]
items.forEach((item,i) => {
    item.addEventListener("click",item => {
        if(turn == "x" && item.target.innerHTML === ""){
            item.target.innerHTML = turn;
            arr[i] = item.target.innerHTML;
            turn = "o";
            titlefun();
            win();
        }else if(turn == "o" && item.target.innerHTML === ""){
            item.target.innerHTML = turn;
            arr[i] = item.target.innerHTML;
            turn = "x";
            titlefun();
            win();
        };
        if(attempts === Array.from(items).length){
            span.innerHTML = "";
            span.style.width = "0px";
            p.innerHTML = "draw";
            p.style.color = "red";
        };
    });
});
function win(){
if( (arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] == arr[4] && arr[4] == arr[6])
){  
    span.innerHTML = `${turn == "o"? "x": "o"}`;
    p.innerHTML = `won`;
    p.style.color = "#f0db4f";
    gameArea.style.pointerEvents = "none";
}else{attempts++};
};
reset.addEventListener("click",() => {
    items.forEach(item => item.innerHTML = "");
    arr = [...items];
    attempts = 0;
    gameArea.style.pointerEvents = "";
    span.style.width = "20px";
    p.style.color = "";
    p.innerHTML = "turn";
    turn = "x";
    titlefun();
});
