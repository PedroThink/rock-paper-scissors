let humanScore = 0;
let computerScore = 0;

// Escolha do computador
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); //Declara a variável randomNumber e atribui-lhe um número aleatório, multiplicado por 3 e arredondado para baixo. Opções: 0, 1, 2;

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};
    

console.log(getComputerChoice());

//Escolha do jogador
function getHumanChoice() {
    const choice = prompt("Escolhe: rock, paper ou scissors");
    return choice;
};

// Jogo de uma rodada
function playRound(humanChoice, computerChoice) {
    // tornar humanChoise insensível a case
    humanChoice = humanChoice.toLowerCase();

    const wins = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (humanChoice === computerChoice) {
        console.log("Empate!");
        return;
    }

    if (wins[humanChoice] === computerChoice) {
        humanScore++;
        console.log("O humano ganhou a rodada!");
    } else {
        computerScore++;
        console.log("O computador ganhou a rodada!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);