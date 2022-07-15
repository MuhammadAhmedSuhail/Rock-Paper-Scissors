function computerPlay() {
    num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "Rock";
    } else if (num == 1) {
        return "Paper";
    }
    else {
        return "Scissors"
    }
}

function playRound(player, computer) {

    if (player == "Rock") {
        if (computer == "Paper") {
            return "Paper beats Rock, Computer Wins!"
        }
        else if (player == computer) {
            return "Tie"
        }
        else {
            return "Rock beats ".concat(computer).concat(", Player Wins!")
        }

    }
    else if (player == "Paper") {
        if (computer == "Scissors") {
            return "Scissors beats Rock, Computer Wins!"
        }
        else if (player == computer) {
            return "Tie"
        }
        else {
            return "Paper beats ".concat(computer).concat(", Player Wins!")
        }
    }
    else {
        if (computer == "Rock") {
            return "Rock beats Scissors, Computer Wins!"
        }
        else if (player == computer) {
            return "Tie"
        }
        else {
            return 'Scissors beats '.concat(computer).concat(", Player Wins!")
        }
    }
}

function playerPlay() {
    let playernum = prompt("0 For Rock \n1 For Paper \n2 For Scissors \nWhat's your move?");
    if (playernum == 0) {
        return "Rock"
    }
    else if (playernum == 1) {
        return "Paper"
    }
    else if (playernum == 2) {
        return "Scissors"
    }
    else {
        console.log("Enter Number between 0 to 2")
        playerPlay()
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        str = playRound(playerPlay(), computerPlay());
        console.log(str)
    }
}