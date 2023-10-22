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

let juegos = 0;
let ganados = 0;
let perdidos = 0;

selection.addEventListener('click', (e) => {
    let resultsContainer = document.querySelector('#results');
    let results = document.createElement('p');
    let finalResultsCon = document.createElement('h1');
    let startAgain = document.querySelector('#startAgain');
    let boton = document.createElement('button');
    boton.textContent = 'Try it Again!';
    juegos += 1;
    if (juegos<=5) {
        let target = e.target;
        let resultPartida = ''
        switch(target.id) {
            case 'rock':
                resultPartida = playRound('rock');
                break;
            case 'paper':
                resultPartida = playRound('paper');
                break;
            case 'scissors':
                resultPartida = playRound('scissors');
                break;
        }
        if (resultPartida.slice(0,4) == 'Feli') {
            ganados += 1;
        }
        else if (resultPartida.slice(0,4) == 'Ups!') {
            perdidos += 1;
        }
        if (juegos==5) {
            if (ganados > perdidos) {
                finalResult = `Ganaste el partido!!! ${ganados} a ${perdidos}!!`
            }
            else if (ganados < perdidos) {
                finalResult =  `Perdiste el partido :( ${perdidos} a ${ganados}`
            } 
            else {
                finalResult = `ES un empate! ${ganados} a ${perdidos}`
            }
            finalResultsCon.textContent = finalResult;
            startAgain.appendChild(boton);
        }    
    results.textContent = resultPartida;
    resultsContainer.appendChild(results);
    resultsContainer.appendChild(finalResultsCon);
    }
    boton.addEventListener('click', function() {
        juegos = 0;
        perdidos = 0;
        ganados = 0;
        deleteChilds(resultsContainer);
        deleteChilds(startAgain);
    })   
})

function deleteChilds (container) {
    let child = container.lastElementChild;
        while (child) {
            container.removeChild(child);
            child = container.lastElementChild;
        }
}


