let computerPlay = () => {
    let random = Math.floor(Math.random() * 3) + 1;
    switch(random) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
            break;
        default:
            console.log('Something is not right.');
    }
}

let playRound = (playerSelection, computerSelection) => {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Draw!';
    } else if(playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Draw!';
    } else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Draw!';
    } else if(playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost! Paper beats rock!';
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! Scissors beats paper!';
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost! Rock beats scissors!';
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You won! Paper beats rock!';
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You won! Scissors beats paper!';
    } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You won! Rock beats scissors!';
    } else {
        return 'This went bad!';
    }
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i < 5; i++) {
        let playerOption = prompt('Please enter your option:');
        let answer = playRound(playerOption.toLowerCase(), computerPlay()); 
        console.log(answer);
        if(answer.includes('won')) {
            playerScore++;
        } else if (answer.includes('lost')) {
            computerScore++;
        }
    }
    console.log('Player score: ' + playerScore + ' | Computer score: ' + computerScore);
    if(playerScore > computerScore) {
        console.log('You won the game!');
    } else if (playerScore < computerScore) {
        console.log('You lost the game!');
    } else {
        console.log("This is a draw!");
    }
}

game();