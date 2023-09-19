function getComputerChoice () {
    const choice =  Math.floor(Math.random() * 3) + 1;
    if (choice == 1) {
        return 'Rock'
    }
    else if (choice == 2) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

function playRound (computerSelection, playerSelection) {
    const playerS = playerSelection.toLowerCase();
    const win = 'Felicitaciones! Ganaste';
    const tie = 'ES un empate!';
    const loose = 'Ups! Perdiste';
    if (playerS == 'rock') {
        if (computerSelection == 'Rock') {
            return tie
        }
        else if (computerSelection == 'Paper') {
            return loose
        }
        else {
            return win
        }
    }
    else if (playerS == 'paper') {
            if (computerSelection == 'Rock') {
                return win
            }
            else if (computerSelection == 'Paper') {
                return tie
            }
            else {
                return loose
            }
    }
    else if (playerS == 'scissors') {
        if (computerSelection == 'Rock') {
            return win
        }
        else if (computerSelection == 'Paper') {
            return loose
        }
        else {
            return tie
        } 
    }
    else {
        alert('No existe')
    }    
}

const player = prompt('INtroduzca su jugada. Las opciones son Rock, Paper or Scissors: ');
const computer = getComputerChoice();

console.log(playRound(computer,player));