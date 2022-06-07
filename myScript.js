


const computerChoice = computerPlay()
const playerChoice = humanPlayer()

function playround() {
//plays one round
//rock
}


function humanPlayer() {
//sets rules for player
//prompts player
     let input = prompt("what do you choose, rock, paper, or scissors?");
     return input;
     }


function computerPlay() {
let choices = ["rock", "paper", "scissors"]     
return choices[Math.floor(Math.random()*choices.length)]
}
console.log(computerPlay())

