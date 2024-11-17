console.log('Hello!')
console.log('If you want to play a Rock Paper Scissors game type \'playGame()\'')

let playerScore = 0;
let computerScore = 0;

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

// 1 - rock 2 paper 3 scissror
// 1 1 = 2 1 2 = 3 1 3 = 4
// 2 1 2 2 2 3
// 3 1 3 2 3 3


function playRound(pick) {
    player = playerChoice(pick).toLowerCase();

    computer = computerChoice().toLowerCase();
if (player == 'rock' ) {
    console.log('player picked Rock !')
    if (player  === computer) {
        console.log('computer picked Rock !')
        playerScore += 1
        computerScore += 1
        console.log('it\'s a TIE!')
    } else if ( computer === "paper") {
        console.log('computer picked Paper !')
        computerScore += 1
        console.log('computer Wins !')
    } else if (computer === 'scissors') {
        console.log('computer picked Scissors !')
        playerScore += 1
        console.log('Player wins!!')
    } else {
        console.log('Something went wrong sorry :(')
    }
} else if (player == 'paper') {
        console.log('player picked Paper !')
        if (player === computer) {
            console.log('computer picked Paper !')
            playerScore += 1
            computerScore += 1
            console.log('it\'s a TIE!')
        } else if (computer === 'rock') {
            console.log('computer picked Rock !')
            playerScore += 1
            console.log('Player  Wins !')
        } else if (computer === 'scissors') {
            console.log('computer picked Scissors !')
            computerScore += 1
            console.log('Computer wins!!')
        } else {
            console.log('Something went wrong sorry :(')
        }
} else if (player == 'scissors') {
    console.log('player picked Scissors !')
        if (player === computer) {
            console.log('computer picked Scissors !')
            playerScore += 1
            computerScore += 1
            console.log('it\'s a TIE!')
        } else if (computer === 'paper') {
            console.log('computer picked Paper !')
            playerScore += 1
            console.log('Player  Wins !')
        } else if (computer === 'rock') {
            console.log('computer picked Rock !')
            computerScore += 1
            console.log('Computer wins!!')
        } else {
            console.log('Something went wrong sorry :(')
        }
} else {
    console.log(`You can only pick 1-3 and you picked ${player} try again sucka`)
}

return console.log(`the score is ${playerScore} - ${computerScore}`)
}



const rockBut = document.querySelectorAll("button");

rockBut.forEach(but => but.addEventListener("click",  (e) => {
    console.log(e)
    if (e.target.classList == "rockBut") {
        playRound(1)
    } else if (e.target.classList == "paperBut") {
        playRound(2)
    } else if (e.target.classList == "scissorsBut") {
        playRound(3)
    } else {
        playRound(1)
    }

    
}))



// function playGame(howManyGames) {
// howManyGames = +prompt('How many times do you want to play?(default is 5)', 5);
// for (let i = 0; i < howManyGames; i++) {
// playRound()
// }
// }