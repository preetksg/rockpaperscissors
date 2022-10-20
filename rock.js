const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice () {
    const random = choices[Math.floor(Math.random()*choices.length)];
    return(random);
}
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

console.log(btn1);

// let run = getComputerChoice();
// run = run.toString();
// run = run.toUpperCase();
//console.log(run);


btn1.addEventListener('click', () => {
    round('ROCK');
} )

btn2.addEventListener('click', () => {
    round('PAPER');
} )

btn3.addEventListener('click', () => {
    round('SCISSORS');
} )


// let run = getComputerChoice();
// run = run.toString();
// run = run.toUpperCase();
// console.log(run);

// let playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
// playerSelection = playerSelection.toString();
// playerSelection = playerSelection.toUpperCase();
// console.log(playerSelection);
let result;
let win = 0;
let lose = 0;

function round (playerSelection) {
    console.log(playerSelection);
    let run = getComputerChoice();
    run = run.toString();
    run = run.toUpperCase();
    console.log(run);
    if((win < 5) && (lose < 5)) {
        if ((playerSelection == "ROCK") && (run == "ROCK")) {
            result = "tie";
        }
        else if ((playerSelection == "ROCK") && (run == "PAPER")) {
            result = "lose";
            lose = lose+1;
        }
        else if ((playerSelection == "ROCK") && (run == "SCISSORS")) {
            result = "win";
            win = win+1;
        }
        else if ((playerSelection == "PAPER") && (run == "PAPER")) {
            result = "tie";
        }
        else if ((playerSelection == "PAPER") && (run == "SCISSORS")) {
            result = "lose";
            lose = lose+1;
        }
        else if ((playerSelection == "PAPER") && (run == "ROCK")) {
            result = "win";
            win = win+1;
        }
        else if ((playerSelection == "SCISSORS") && (run == "ROCK")) {
            result = "lose";
            lose = lose+1;
        }
        else if ((playerSelection == "SCISSORS") && (run == "SCISSORS")) {
            result = "tie";
        }
        else if ((playerSelection == "SCISSORS") && (run == "PAPER")) {
            win = win+1;
            result = "win";
        }
    }
    if (win == 5) {
        document.write("Game Over, You Win!");
    }
    else if (lose == 5) {
        document.write("Game Over, You Lose! Final Score: You: " + win + ", Computer: " + lose);
    }
    document.getElementById("roundRes").innerHTML = "Round Result = " + result;
    document.getElementById("live").innerHTML = "Current Score: You: " + win + ", Computer: " + lose;
    console.log(result);
    return(result);
}

// Previous code:

// let final;
// let roundResult;

// let run;
//let playerSelection;

// function game() {
//     //for (let i = 0; i < 5; i++) {
//         // run = getComputerChoice();
//         // run = run.toString();
//         // run = run.toUpperCase();
//         // console.log(run);

//         playerSelection = window.prompt("Choose Rock, Paper, or Scissors");
//         playerSelection = playerSelection.toString();
//         playerSelection = playerSelection.toUpperCase();
//         console.log(playerSelection);

//         roundResult = round();
//         console.log(roundResult);

//         if (roundResult == "win") {
//             win = win + 1;
//         }
//         else if (roundResult == "lose") {
//             lose = lose + 1;
//         }
//     }
//     // if (win > lose) {
//     //     final = "You win";
//     // }
//     // else if (win < lose) {
//     //     final = "You lose";
//     // }
//     // else if (win == lose) {
//     //     final = "It is a tie";
//     // }
//     // return (final);
// //}

// let finalResult = game();
// console.log(finalResult);