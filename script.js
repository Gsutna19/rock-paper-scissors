function getComputerChoice() {
    // Rock = 0
    // Paper = 1
    // Scissors = 2
    let compChoice = parseInt(((Math.random() * 10) + 1) % 3);
    return compChoice;
    console.log(compChoice); 
}

function getPlayerChoice() {

    let plChoice = prompt("Choose Rock, Paper, or Scissors.");
    // let compChoice = getComputerChoice();
    let lowPlChoice = plChoice.toLowerCase();
    // let gameRound = playRound(compChoice, lowPlChoice);
    return lowPlChoice;
}

function convertChoiceToNum(plChoice) {
    if (plChoice == "rock") {
        numPlChoice = 0;
    } else if (plChoice == "paper") {
        numPlChoice = 1;
    } else if (plChoice == "scissors") {
        numPlChoice = 2;
    } else {
        console.log("Choice not alowed. The FBI is looking for you now.");
    }

    return numPlChoice;
}

function playRound(compChoice, plChoice) {

    let numPlChoice = convertChoiceToNum(plChoice);
    
    if((numPlChoice == 0 && compChoice == 2) || (numPlChoice == 1 && compChoice == 0) || (numPlChoice == 2 && compChoice == 1)) {
        return "You win!";
    } else if (numPlChoice == compChoice) {
        return "You tied!";
    } else {
        return "You lose!";
    }
}

function playGame() {
    let plScore = 0;
    let compScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let lowPlChoice = getPlayerChoice();
        let compChoice = getComputerChoice();
        let gameRound = playRound(compChoice, lowPlChoice);
        if (gameRound == "You win!") {
            console.log("You win!");
            plScore += 1;
        } else if(gameRound == "You lose!") {
            console.log("You lose!");
            compScore += 1;
        } else {
            console.log("You tied!");
        }
    }
    
    console.log("Player: " + plScore + " Computer: " + compScore);
}

playGame();