let getPlayerChoice = () => {
    let option;
    do {
        option = prompt("Enter Rock, Paper, or Scissors. Make sure to capitalize the first letter of the word. Thank you.");
    } while (option !== "Rock" && option !== "Paper" && option !== "Scissors");
    console.log("Player chose", option);
    return option;
};

let getComputerChoice = () => {
    let computer = Math.floor(Math.random() * 3 + 1); 
    if (computer == 1) {
        console.log("Computer chose Rock");
        return "Rock";
    } else if (computer == 2) {
        console.log("Computer chose Paper");
        return "Paper";
    } else if (computer == 3) {
        console.log("Computer chose Scissors");
        return "Scissors";
    };
};

let compare = (player, computer) => {
    if (player === computer) {
        console.log("It was a draw,");
        return "draw";
    } else if (player === "Rock" && computer === "Scissors" || player === "Paper" && computer === "Rock" || player === "Scissors" && computer === "Paper") {
        console.log("You win!");
        return "win";
    }else if (computer === "Rock" && player === "Scissors" || computer === "Paper" && player === "Rock" || computer === "Scissors" && player === "Paper") {
        console.log("You lose.");
        return "lose";
    };
};

let playGame = () => {
    compare(getPlayerChoice(), getComputerChoice());
};

playGame();