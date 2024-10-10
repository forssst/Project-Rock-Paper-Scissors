console.log('siemnako ')

let playerScore = 0;
let computerScore = 0;

// to ma zwracac string xdd

function playerChoice () {
    let playerPick = +prompt('Pick a thing  1 - Rock , 2 - Paper , 3 - Scissors', 1)
    return playerPick;
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


function playRound() {
    player = playerChoice()

    computer = computerChoice()
if (player == 1 ) {
    console.log('player picked Rock !')
    if (player + computer === 2) {
        console.log('computer picked Rock !')
        playerScore += 1
        computerScore += 1
        console.log('it\'s a TIE!')
    } else if ( player + computer === 3) {
        console.log('computer picked Paper !')
        computerScore += 1
        console.log('computer Wins !')
    } else if (player + computer === 4) {
        console.log('computer picked Scissors !')
        playerScore += 1
        console.log('Player wins!!')
    } else {
        console.log('Something went wrong sorry :(')
    }
} else if (player == 2) {
        console.log('player picked Paper !')
        if (player + computer === 4) {
            console.log('computer picked Paper !')
            playerScore += 1
            computerScore += 1
            console.log('it\'s a TIE!')
        } else if ( player + computer === 3) {
            console.log('computer picked Rock !')
            playerScore += 1
            console.log('Player  Wins !')
        } else if (player + computer === 5) {
            console.log('computer picked Scissors !')
            computerScore += 1
            console.log('Computer wins!!')
        } else {
            console.log('Something went wrong sorry :(')
        }
} else if (player == 3) {
    console.log('player picked Scissors !')
        if (player + computer === 6) {
            console.log('computer picked Scissors !')
            playerScore += 1
            computerScore += 1
            console.log('it\'s a TIE!')
        } else if ( player + computer === 5) {
            console.log('computer picked Paper !')
            playerScore += 1
            console.log('Player  Wins !')
        } else if (player + computer === 4) {
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

function playGame(howManyGames) {
howManyGames = +prompt('How many times do you want to play?(default is 5)', 5);
for (let i = 0; i < howManyGames; i++) {
playRound()
}
}