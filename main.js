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


function getPlayerChoice() {
    return prompt('INtroduzca su jugada. Las opciones son Rock, Paper or Scissors: ')
}

function game() {
    let juegos = 0;
    let ganados = 0;
    let perdidos = 0;
    for (let i = 0; i < 5; i++) {
        juegos += 1;
        let juego = playRound();
        if (juego == 'Felicitaciones! Ganaste') {
            ganados += 1;
        }
        else if (juego = 'Ups! Perdiste') {
            perdidos += 1
        }
        console.log(juego);
    }
    if (ganados > perdidos) {
        return 'Ganaste el partido!!!'
    }
    else if (ganados < perdidos) {
        return 'Perdiste el partido :('
    } 
    else {
        return 'ES un empate!'
    } 
}

// console.log(playRound(getComputerChoice(),getPlayerChoice()))