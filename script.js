console.log('siemnako ')

let playerPick

function playerChoice () {
    let playerPick = +prompt('Pick a thing  1 - Rock , 2 - Paper , 3 - Scissors', 1)
    return playerPick;
}

function computerChoice () {
    return Math.floor(Math.random()*3) + 1;
}

// 1 - rock 2 paper 3 scissror
// 1 1 1 2 1 3
// 2 1 2 2 2 3
// 3 1 3 2 3 3

function playRound(player,computer) {

}