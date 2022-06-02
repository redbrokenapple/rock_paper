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
