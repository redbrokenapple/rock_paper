function playRound()  {
     
  const computerSelection = computerPlayer();
  const playerSelection = humanPlayer();  
     //plays one round
     //rock
   if(playerSelection === "rock" && computerSelection === "scissors"){
     console.log( "Good job! You had a one in three chance to win and you did. Congratulations...");
     } else if (playerSelection === "rock" && computerSelection === "rock") {
     console.log ("Oh, Well. It could be worse. You Could of Chosen paper.");
     } else if (playerSelection === "rock" && computerSelection === "paper") {
     console.log( "AHAHAHA. You lost. Loser.")
     }
     //paper
     else if(playerSelection === "paper" && computerSelection == "rock"){
     console.log( "Good job! You had a one in three chance to win and you did. Congratulations...");
     } else if (playerSelection === "paper" && computerSelection === "paper") {
     console.log( "Oh, Well. It could be worse. You Could of Chosen scissors.");     
     } else if (playerSelection === "paper" && computerSelection === "scissors") {
     console.log ("AHAHAHA. You lost. Loser.");
     }
     //scissors
     else if(playerSelection === "scissors" && computerSelection === "paper") {
     console.log( "Good job! You had a one in three chance to win and you did. Congratulations...");
     } else if (playerSelection === "scissors" && computerSelection === "scissors") {
     console.log( "Oh, Well. It could be worse. You Could of Chosen paper.");
     } else if (playerSelection === "scissors" && computerSelection === "rock") {
     console.log( "AHAHAHA. You lost. Loser.");
     } else {
     console.log("You can't choose that!");
     }
}


function humanPlayer() {
//sets rules for player
//prompts player
     let input = prompt("what do you choose, rock, paper, or scissors?");
     if (input === null) {
     return input;
     }
}


function computerPlayer() {
     let choices = ["rock", "paper", "scissors"]     
     return choices[Math.floor(Math.random()*choices.length)]
}

let playerPoints = 0;
let computerPoints = 0;  

function game()  {
     for (let i = 0; i <= 5; i++) {
        playRound();
     }
}

console.log(game())