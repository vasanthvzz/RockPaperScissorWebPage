const choices = ["rock","paper","scissor"]
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")

const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0
let computerScore = 0

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if( playerChoice === computerChoice){
        result = "tie";
    }else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice ==="scissor") ? "You won" : "You lose!"

            case "scissor":
                result = (computerChoice ==="paper") ? "You won" : "You lose!"

            case "paper":
                result = (computerChoice ==="rock") ? "You won" : "You lose!"
        }
    }

    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("redText","greenText");

    switch(result){
        case "You won":
            playerScore++;
            resultDisplay.classList.add("greenText");
            playerScoreDisplay.textContent = playerScore;
            break;

        case "You lose!":
            computerScore++;
            resultDisplay.classList.add("redText");
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}