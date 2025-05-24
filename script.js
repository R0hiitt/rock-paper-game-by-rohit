let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const getCompChoice = () =>{
    const option = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return option[randomIndex];
}


const drawGame = ()=>{
    msg.innerText = "Game was draw !. Play again ";
    msg.style.backgroundColor = "white";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you won ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#00FF7F";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost ! your ${userChoice} loses to ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) =>{
    const compChoice = getCompChoice();
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


document.getElementById("reset").addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Scores Reset! Play Again";
    msg.style.backgroundColor = "yellow";
    
   
});

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});