const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    const random = choices[Math.floor(Math.random()*choices.length)];
    return(random);
}
// let run = getComputerChoice();
// run = run.toString();
// run = run.toUpperCase();
// console.log(run);

// let playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
// playerSelection = playerSelection.toString();
// playerSelection = playerSelection.toUpperCase();
// console.log(playerSelection);
let result;

function round () {
    if ((playerSelection == "ROCK") && (run == "ROCK")) {
         result = "tie";
    }
    else if ((playerSelection == "ROCK") && (run == "PAPER")) {
         result = "lose";
    }
    else if ((playerSelection == "ROCK") && (run == "SCISSORS")) {
         result = "win";
    }
    else if ((playerSelection == "PAPER") && (run == "PAPER")) {
         result = "tie";
    }
    else if ((playerSelection == "PAPER") && (run == "SCISSORS")) {
         result = "lose";
    }
    else if ((playerSelection == "PAPER") && (run == "ROCK")) {
         result = "win";
    }
    else if ((playerSelection == "SCISSORS") && (run == "ROCK")) {
         result = "lose";
    }
    else if ((playerSelection == "SCISSORS") && (run == "SCISSORS")) {
         result = "tie";
    }
    else if ((playerSelection == "SCISSORS") && (run == "PAPER")) {
         result = "win";
    }
    return(result);
}

let win = 0;
let lose = 0;
let final;
let roundResult;

let run;
let playerSelection;

function game() {
    for (let i = 0; i < 5; i++) {
        run = getComputerChoice();
        run = run.toString();
        run = run.toUpperCase();
        console.log(run);

        playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
        playerSelection = playerSelection.toString();
        playerSelection = playerSelection.toUpperCase();
        console.log(playerSelection);

        roundResult = round();
        console.log(roundResult);

        if (roundResult == "win") {
            win = win + 1;
        }
        else if (roundResult == "lose") {
            lose = lose + 1;
        }
    }
    if (win > lose) {
        final = "You win";
    }
    else if (win < lose) {
        final = "You lose";
    }
    else if (win == lose) {
        final = "It is a tie";
    }
    return (final);
}

let finalResult = game();
console.log(finalResult);