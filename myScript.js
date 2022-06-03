function computerPlay() {
    computerPlay = Math.floor(Math.random() * 3);
    if (computerPlay === 0 ) {
         console.log("rock") ;
    } else if (computerPlay === 1) {
         console.log ("paper");
    } else if (computerPlay === 2) {
       console.log ("scissors");
    }
}
console.log(computerPlay())

function rules (playerSelection, computerSelection) {
//rock
    if(playerSelection == "rock" && computerSelection == "scissors"){
         return "Good job! You had a one in three chance to win and you did.  Congratulations...";
    } else if (playerSelection == "rock" && computerSelection == "rock") {
         return "Oh, Well. It could be worse. You Could of Chosen paper."
    }  else if  (playerSelection == "rock" && computerSelection == "paper") {
         return "AHAHAHA. You lost. Loser"
    }


//paper
    if(playerSelection == "paper" && computerSelection == "rock"){
     return "Good job! You had a one in three chance to win and you did.  Congratulations...";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
     return "Oh, Well. It could be worse. You Could of Chosen paper."
    }  else if (playerSelection == "paper" && computerSelection == "scissors") {
     return "AHAHAHA. You lost. Loser"
    }


//scissors
  if(playerSelection == "scissors" && computerSelection == "paper") {
     return "Good job! You had a one in three chance to win and you did.  Congratulations...";
   } else if (playerSelection == "scissors" && computerSelection == "scissors") {
     return "Oh, Well. It could be worse. You Could of Chosen paper."
   }  else if  (playerSelection == "scissors" && computerSelection == "rock") {
     return "AHAHAHA. You lost. Loser"
   }
}
