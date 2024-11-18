console.log('Hello!')
console.log('If you want to play a Rock Paper Scissors game type \'playGame()\'')

let playerScore = 0;
let computerScore = 0;
const scoreDiv = document.querySelector(".scoreDiv");
const compChoice = document.querySelector(".compChoice");
const whoWonDiv = document.querySelector(`.whoWonDiv`);

console.log(whoWonDiv)

// to ma zwracac string xdd

function playerChoice (pickNum) {
    pickNum;
    if (pickNum === 1 ) {
        pickNum = 'Rock'
   } else if (pickNum === 2) {
       pickNum = 'Paper' 
   } else if (pickNum === 3){
        pickNum = 'Scissors'
   } else {
    console.log('you picked wrong number so you get a rock')
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
    console.log('player picked Rock !')
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
        console.log('player picked Paper !')
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
    console.log('player picked Scissors !')
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
}

/// dokoczyc zeby kazdy komunikat sie pojawial w domie to kot wygyrqa i wgl punkt 2/3



const choiceButDiv = document.querySelector(".choiceButtons");

console.log(choiceButDiv)

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



checkScorePlayer =+ playerScore;
console.log(checkScorePlayer)





// function playGame(howManyGames) {
// howManyGames = +prompt('How many times do you want to play?(default is 5)', 5);
// for (let i = 0; i < howManyGames; i++) {
// playRound()
// }
// }