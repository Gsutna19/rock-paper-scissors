let plScore = 0;
let compScore = 0;

function restart() {
    plScore = 0;
    compScore = 0;

    document.getElementById("0").disabled = false;
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    
    document.getElementById("pl-score").innerHTML = 0;
    document.getElementById("comp-score").innerHTML = 0;

    document.getElementById("game-result").innerHTML = " ";

    // playGame();
}

function getComputerChoice() {
    
    // Rock = 0
    // Paper = 1
    // Scissors = 2
    let compChoice = parseInt(((Math.random() * 10) + 1) % 3);
    console.log(compChoice); 
    return compChoice;
}

function getPlayerChoice(buttonId) {

    let choice = 0;

    if (buttonId == "1") {
        choice = 1;
    } else if (buttonId == "2") {
        choice = 2;
    } else {
        choice = 0;
    }
    
    return choice;
}

// function convertChoiceToNum(plChoice) {
//     if (plChoice == "rock") {
//         numPlChoice = 0;
//     } else if (plChoice == "paper") {
//         numPlChoice = 1;
//     } else if (plChoice == "scissors") {
//         numPlChoice = 2;
//     } else {
//         console.log("Choice not allowed. The FBI is looking for you now.");
//     }

//     return numPlChoice;
// }

function playRound(compChoice, plChoice) {
    


    // let clicked = 0;
    // document.getElementById("rock").addEventListener("click", function() {
    //     clicked = 0;
    //     return clicked;
    // });
    // document.getElementById("paper").addEventListener("click", function() {
    //     clicked = 1;
    //     return clicked;
    // });
    // document.getElementById("scissors").addEventListener("click", function() {
    //     clicked = 2;
    //     return clicked;
    // });
    // if ((clicked == 0 && compChoice == 2) || (clicked == 1 && compChoice == 0) || (clicked == 2 && compChoice == 1)) {
    //     return "You win!";
    // } else if (clicked == compChoice) {
    //     return "You tied!";
    // } else {
    //     return "You lose!";
    // }
    // const rock = document.querySelector('#rock').textContent;
    // const paper = document.querySelector('#paper').textContent;
    // const scissors = document.querySelector('#scissors').textContent;

    // rock.addEventListener('click', function(plChoice) {
    //         alert('rock');
    //     });
    // paper.addEventListener('click', function(plChoice) {
    //     plChoice = 'paper';
    // });
    // scissors.addEventListener('click', function(plChoice) {
    //     plChoice = 'scissors';
    // });



    // let numPlChoiceRock = parseInt(rock);
    // let numPlChoicePaper = parseInt(paper);
    // let numPlChoiceScissor = parseInt(scissors);
    
    console.log(plChoice)
    // console.log("Player: " + plScore + " Comp: " + compScore)

    if((plChoice == 0 && compChoice == 2) || (plChoice == 1 && compChoice == 0) || (plChoice == 2 && compChoice == 1)) {
        plScore++;
        document.getElementById("pl-score").innerHTML = parseInt(plScore);
        return "You win!";
    } else if (plChoice == compChoice) {
        // document.getElementById("round-result").textContent = "You tied this round!";
        return "You tied!";
    } else {
        compScore++;
        document.getElementById("comp-score").innerHTML = parseInt(compScore);
        return "You lose!";
    }
}

// function keepPlScore () {

//     let plScore;

//     plScore += 1;

//     return plScore;
// }

// function keepCompScore () {

//     let compScore;

//     compScore += 1;
    
//     return compScore;
// }

function playGame(button) {
    
    let x = button.id;
    
    /*for (let i = 0; i < 5; i++) {*/
    //let lowPlChoice = getPlayerChoice();
    // let clicked = 0;
    // document.getElementById("rock").addEventListener("click", function(clicked) {
    //     clicked = 0;
    //     return clicked;
    // })
    // document.getElementById("paper").addEventListener("click", function(clicked) {
    //     clicked = 1;
    //     return clicked;
    // })
    // document.getElementById("scissors").addEventListener("click", function(clicked) {
    //     clicked = 0;
    //     return clicked;
    // })
    // if (clicked == )
    // let lowPlChoice = 'blank';

    
    
    //}*/

    // do {
        
    //     if (gameRound == "You win!") {
    //         console.log("You win!");
    //         plScore += 1;
    //     } else if(gameRound == "You lose!") {
    //         console.log("You lose!");
    //         compScore += 1;
    //     } else {
    //         console.log("You tied!");
    //     }
    //     console.log("Player: " + plScore + " Computer: " + compScore);
    // }

    let plChoice = getPlayerChoice(x);
    let compChoice = getComputerChoice();
    let gameRound = playRound(compChoice, plChoice);

    if (gameRound == "You win!") {
        console.log("You win!");
        // plScore += 1;
    } else if(gameRound == "You lose!") {
        console.log("You lose!");
        // compScore += 1;
    } else {
        console.log("You tied!");
    }

    if (plScore >= 5) {
        document.getElementById("game-result").textContent = "You win!";
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
    } else if (compScore >= 5) {
        document.getElementById("game-result").textContent = "Computer wins!"
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
    }
    // console.log("Player: " + plScore + " Computer: " + compScore);
}

// playGame();