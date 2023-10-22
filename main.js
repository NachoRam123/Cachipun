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

function playRound (playerSelection) {
    const playerS = playerSelection;
    const computerSelection = getComputerChoice();
    const win = 'Felicitaciones! Ganaste';
    const tie = 'ES un empate!';
    const loose = 'Ups! Perdiste';
    const mensaje = '. Your: ' + playerS + '. Computer: ' + computerSelection
    let result = ''
    if (playerS == 'rock') {
        if (computerSelection == 'Rock') {
            result = (tie + mensaje)
        }
        else if (computerSelection == 'Paper') {
            result = loose + mensaje
        }
        else {
            result = win + mensaje
        }
    }
    else if (playerS == 'paper') {
            if (computerSelection == 'Rock') {
                result = win + mensaje
            }
            else if (computerSelection == 'Paper') {
                result = tie + mensaje
            }
            else {
                result = loose + mensaje
            }
    }
    else if (playerS == 'scissors') {
        if (computerSelection == 'Rock') {
            result = win + mensaje
        }
        else if (computerSelection == 'Paper') {
            result = loose + mensaje
        }
        else {
            result = tie + mensaje
        } 
    }
    else {
        alert('No existe')
    }
    console.log(result)
    return result    
}


// function getPlayerChoice() {
//     return prompt('INtroduzca su jugada. Las opciones son Rock, Paper or Scissors: ')
// }

// function game() {
//     let juegos = 0;
//     let ganados = 0;
//     let perdidos = 0;
//     for (let i = 0; i < 5; i++) {
//         juegos += 1;
//         let juego = playRound();
//         if (juego.slice(0,4) == 'Feli') {
//             ganados += 1;
//         }
//         else if (juego.slice(0,4) == 'Ups!') {
//             perdidos += 1
//         }
//         console.log(juego);
//     }
//     if (ganados > perdidos) {
//         return `Ganaste el partido!!! ${ganados} a ${perdidos}!!`
//     }
//     else if (ganados < perdidos) {
//         return `Perdiste el partido :( ${perdidos} a ${ganados}`
//     } 
//     else {
//         return `ES un empate! ${ganados} a ${perdidos}`
//     } 
// }

// console.log(playRound(getComputerChoice(),getPlayerChoice()))

let selection = document.querySelector('#Selections');

selection.addEventListener('click', (e) => {
    let target = e.target;
    switch(target.id) {
        case 'rock':
            playRound('rock');
            break;
        case 'paper':
            playRound('paper');
            break;
        case 'scissors':
            playRound('scissors');
            break;
    }
})