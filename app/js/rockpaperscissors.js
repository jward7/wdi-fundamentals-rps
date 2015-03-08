////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
console.log("Debug -showing that NodeJS runs this file")
playToFive();

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    // TODO error here. prompt is not a recognised function
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

// Write an expression that operates on a variable called `move`
// If a `move` has a value, your expression should evaluate to that value.
// However, if `move` is not specified / is null, your expression should equal `getInput()`.
// JLW -can probably use ternary operator for one liner, but need to practise JS syntax.
function getPlayerMove(move) {
    if (move != null) {
        return move;
    } else {
        return getInput();
    }
}
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // JLW -can probably use ternary operator for one liner, but need to practise JS syntax.
    if (move != null) {
        return move;
    } else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove) {
        winner ="tie"
    } else if(playerMove == "rock" && computerMove == "paper"){
        winner = "player"
    } else if(playerMove == "rock" && computerMove == "scissors") {
        winner = "computer"
    } else if(playerMove == "paper" && computerMove == "scissors") {
        winner = "computer"
    } else if(playerMove == "paper" && computerMove == "rock") {
        winner = "player"
    } else if(playerMove == "scissors" && computerMove == "paper") {
        winner = "player"
    }  else if(playerMove == "scissors" && computerMove == "rock") {
        winner = "computer"
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    var playerMove;
    var computerMove;
    var winner;

    while (playerWins < 5 || computerWins < 5){
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        console.log("Player chose " + playerMove + " while Computer chose " + computerMove);

        winner = getWinner(playerMove, computerMove)
        if (winner == "computer"){
            computerWins += 1;
        } else if (winner == "player"){
            playerWins += 1;
        }
        console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    }
    return [playerWins, computerWins];
}

