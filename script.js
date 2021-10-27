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
    const buttons = document.querySelectorAll(".buttons");
    const gameWinner = document.querySelector("h1");
    const roundAnnouncer = document.querySelector("h2");
    let score = document.querySelector("h3");
    let playerScore = 0;
    let computerScore = 0;
    let roundWinner = '';
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            roundWinner = playRound(button.getAttribute('id'), computerPlay());
            
            if(roundWinner.includes('won')) {
                playerScore++;
            } else if (roundWinner.includes('lost')) {
                computerScore++;
            }
            score.textContent = `Player: ${playerScore}    Computer: ${computerScore}`;
            
            if(playerScore === 5) {
                gameWinner.textContent = "You won the game!";
                roundAnnouncer.textContent = "";
                setTimeout(() => {
                    location.reload();
                }, 5000);
            } else if (computerScore === 5) {
                gameWinner.textContent = "You lost the game!";
                roundAnnouncer.textContent = "";
                setTimeout(() => {
                    location.reload();
                }, 5000);
            } else {
                roundAnnouncer.textContent = roundWinner;
            }
        })
    }) 
    
    
    
}

game();