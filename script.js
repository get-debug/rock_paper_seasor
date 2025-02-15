let useScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector(".msg");
const com = document.querySelector(".com");

const user = document.querySelector("#user");
const computer = document.querySelector("#computer");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);

    return options[randIdx];
}

const drawGame = () => {
    // console.log("game was draw!");
    msg.innerHTML = "game was draw !";
}

const showWinner = (result) => {
    if(result){
        // console.log("you are winner");
        msg.innerHTML = "U win!";
        useScore += 1        
        user.innerHTML = useScore;
    } else {
        // console.log("you are lose");
        msg.innerHTML = "U lose!";
        computerScore +=1
        computer.innerHTML = computerScore
    }
}

const playgame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);
    com.innerHTML = compChoice

    if(userChoice === compChoice){
         drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "scissors"){
            userWin = compChoice === "rock" ? false : true;
        }
        else {
            userWin = compChoice === "scissors" ? false : true;
        }

        showWinner(userWin);
    }

}

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);  
    });
 });