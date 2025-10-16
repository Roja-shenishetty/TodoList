// let divs=document.querySelectorAll(".box");
// console.log(divs);
// let idx=1;
// for(let div of divs){
//     div.innerText=`${idx}`;
//     idx++;
// }
// divs[0].innerText='1';
// divs[1].innerText='2';
// divs[2].innerText='3';

//let box=document.getElementById("boxes");
// console.log(box.lastElementChild);
//let d=document.querySelector("#boxes");
//console.log(d.firstChild);

// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";
// document.querySelector("body").prepend(newBtn);
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// let para=document.querySelector("p");

// let btn=document.querySelector("button");
// let box=document.querySelector("div");
// let col="coral";
// btn.addEventListener("click",()=>{
//     if(col==="coral"){
//         col="blue";
//         box.style.backgroundColor="coral";
//     }
//     else if(col==="blue"){
//         col="pink";
//      box.style.backgroundColor="aliceblue";
//     }
//     else if(col==="pink"){
//         col="coral";
//        box.style.backgroundColor="pink";
//     }
//     console.log(col);
// });

let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newBtn=document.querySelector(".newBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX,playerO
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!==""){
    if(pos1val===pos2val && pos2val===pos3val){
        console.log("winner",pos1val);
        showWinner(pos1val);
    }
   }
  }
};
const resetGame=()=>{
    turnO=true;
    enableBtns();
    msgContainer.classList.add("hide");
}

const disableBtns=()=>{
    for(let box of boxes)
        box.disabled=true;
}
const enableBtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText =`Congrats Player${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);