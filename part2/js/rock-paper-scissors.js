/*eslint-env browser*/

var userChoice;
var compChoice;
var scoreUser;
var scoreComp;

function displayType() {
    "use strict";
    window.alert("Welcome to the Rock, Paper, Scissors Game!");
}


function playGame() {
    "use strict";
    var r;
        
    do {
    userChoice = window.prompt("Your choice: Rock, Scissors or Paper? \n(Input in the field)").toUpperCase();
   
      if (userChoice !== "ROCK" && userChoice !== "SCISSORS" && userChoice !== "PAPER") {
            window.alert("Your input choice was incorrect. You should enter one of the following: Rock, Scissors or Paper"); 
        } 
    } while (userChoice !== "ROCK" && userChoice !== "SCISSORS" && userChoice !== "PAPER");
    
    r = Math.random();
    if (r < 0.33) {
        compChoice = "ROCK";
    } else if (r > 0.66) {
        compChoice = "SCISSORS";
    } else {
        compChoice = "PAPER";
    }
    
    if (userChoice === compChoice) {
        window.alert("Its a Tie")
    } else if (userChoice === "ROCK" && compChoice === "SCISSORS" || userChoice === "SCISSORS" && compChoice === "PAPER" || userChoice === "PAPER" && compChoice === "ROCK") {
        scoreUser++;
        window.alert("Your choice: " + userChoice + "\nComputer choice: " + compChoice + "\nYOU WIN");
    } else {
        scoreComp++;
        window.alert("Your choice: " + userChoice + "\nComputer choice: " + compChoice + "\nYOU LOSE");
        
    }
}


function main() {
    "use strict"
    displayType();
    scoreComp = 0;
    scoreUser = 0;
    var playAgain = "y";  
    while (playAgain === "y") {
        playGame();
        window.alert("SCORE \nYou: " + scoreUser + "\nComputer: " + scoreComp);
        playAgain = window.prompt("Do you want to play again? (y/n)", "y");
    }
    window.alert("Thanks for playing the game!");
    if (scoreUser > scoreComp) {
        window.alert("You are winner \nCONGRATULATIONS!");
    } else if (scoreUser < scoreComp) {
        window.alert("You lost");
    } else {
        window.alert("Nobody win! Its a Tie!");
    }
}

main();
