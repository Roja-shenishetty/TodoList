let userScore=0;
let compScore=0;
let user=document.querySelector(".player-score");
let comp=document.querySelector(".computer-score");
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
const genCompGame=()=>{
    const options=["rock","paper","scissor"];
    const randomIndex=Math.floor(Math.random() * options.length);
    return options[randomIndex];
};
const drawGame=()=>{ 
    msg.innerText = "It is a draw";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        user.innerText=userScore;
    msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp.innerText=compScore;
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);
    const compChoice=genCompGame();
    console.log("Computer choice:",compChoice);
    if(userChoice===compChoice){
    drawGame();
    }
    else{
    let userWin=true;
    if(userChoice==="rock"){
        //paper,scissor
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        //scissor,rock
        userWin=compChoice==="scissor"?false:true;
    }
    else{
        //rock,paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);    
});
});