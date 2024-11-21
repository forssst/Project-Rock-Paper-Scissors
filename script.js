

let playerScore = 0;
let computerScore = 0;
const scoreDiv = document.querySelector(".scoreDiv");
const compChoice = document.querySelector(".compChoice");
const whoWonDiv = document.querySelector(`.whoWonDiv`);
const choiceButDiv = document.querySelector(".choiceButtons");


function playerChoice (pickNum) {
    pickNum;
    if (pickNum === 1 ) {
        pickNum = 'Rock'
   } else if (pickNum === 2) {
       pickNum = 'Paper' 
   } else if (pickNum === 3){
        pickNum = 'Scissors'
   } else {
    pickNum = 'Rock'
   }

   return pickNum;
}

function computerChoice () {
    let pickNum = Math.floor(Math.random()*3) + 1;
    if (pickNum === 1 ) {
         pickNum = 'Rock'
    } else if (pickNum === 2) {
        pickNum = 'Paper' 
    } else if (pickNum === 3){
         pickNum = 'Scissors'
    }

    return pickNum;
}



function playRound(pick) {
    player = playerChoice(pick).toLowerCase();

    computer = computerChoice().toLowerCase();
if (player == 'rock' ) {
    if (player  === computer) {
        compChoice.textContent = ('computer picked Rock !')
        playerScore += 1
        computerScore += 1
        whoWonDiv.textContent = ('it\'s a TIE!')
    } else if ( computer === "paper") {
        compChoice.textContent = ('computer picked Paper !')
        computerScore += 1
        whoWonDiv.textContent =('computer Wins !')
    } else if (computer === 'scissors') {
        compChoice.textContent = ('computer picked Scissors !')
        playerScore += 1
        whoWonDiv.textContent =('Player wins!!')
    } else {
        whoWonDiv.textContent =('Something went wrong sorry :(')
    }
} else if (player == 'paper') {
        if (player === computer) {
            compChoice.textContent = ('computer picked Paper !')
            playerScore += 1
            computerScore += 1
            whoWonDiv.textContent =('it\'s a TIE!')
        } else if (computer === 'rock') {
            compChoice.textContent = ('computer picked Rock !')
            playerScore += 1
            whoWonDiv.textContent =('Player  Wins !')
        } else if (computer === 'scissors') {
            compChoice.textContent = ('computer picked Scissors !')
            computerScore += 1
            whoWonDiv.textContent =('Computer wins!!')
        } else {
            whoWonDiv.textContent =('Something went wrong sorry :(')
        }
} else if (player == 'scissors') {
        if (player === computer) {
            compChoice.textContent = ('computer picked Scissors !')
            playerScore += 1
            computerScore += 1
            whoWonDiv.textContent = `it\'s a TIE!`
        } else if (computer === 'paper') {
            compChoice.textContent = ('computer picked Paper !')
            playerScore += 1
            whoWonDiv.textContent =('Player  Wins !')
        } else if (computer === 'rock') {
            compChoice.textContent = ('computer picked Rock !')
            computerScore += 1
            whoWonDiv.textContent =('Computer wins!!')
        } else {
            whoWonDiv.textContent =('Something went wrong sorry :(')
        }
}

scoreDiv.textContent = `the score is ${playerScore} - ${computerScore}`;

    if (playerScore === 5 && computerScore === 5) {
        scoreDiv.textContent = `the score is ${playerScore} - ${computerScore}`;
        whoWonDiv.textContent = "GAME OVER IT\'S A TIE"
        compChoice.textContent = ""
        playerScore = 0
        computerScore = 0
    } else if  (computerScore === 5) {
        scoreDiv.textContent = `the score is ${playerScore} - ${computerScore}`;
        whoWonDiv.textContent = "GAME OVER COMPUTER WINS"
        compChoice.textContent = ""
        playerScore = 0
        computerScore = 0
    } else if (playerScore === 5) {
        scoreDiv.textContent = `the score is ${playerScore} - ${computerScore}`;
        whoWonDiv.textContent = "GAME OVER PLAYER WINS"
        compChoice.textContent = ""
        playerScore = 0
        computerScore = 0
    }


}


choiceButDiv.addEventListener("click", (e) => {
    console.log(e.target.textContent)
    const choiceBut = document.querySelector(`button[data-choice="${e.target.textContent}"]`)
    console.log(choiceBut)
    if (e.target.textContent === "Rock") {
        playRound(1)
    } else if (e.target.textContent === "Paper") {
        playRound(2)
    } else if ( e.target.textContent === "Scissors"){
        playRound(3)
    } else {playRound(1)}
});

