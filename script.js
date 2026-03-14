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

//Escolha do jogador
function getHumanChoice() {
    const choice = prompt("Escolhe: rock, paper ou scissors");
    return choice;
};

// Jogo de uma rodada
function playRound(humanChoice, computerChoice, scores) {
    
    if (!humanChoice) {
        console.log("Escolha Inválida.");
        return;
    }
    
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
        scores.humanScore++;
        console.log("O humano ganhou a rodada!");
    } else {
        scores.computerScore++;
        console.log("O computador ganhou a rodada!");
    }
};

// Jogo completo
function playGame () {

    const scores = {
        humanScore: 0,
        computerScore: 0
    };

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection, scores);

        console.log(`Pontuação: Humano ${scores.humanScore} - Computador ${scores.computerScore}`);
    }

    if (scores.humanScore > scores.computerScore) {
        console.log("🎉 O humano venceu o jogo!");
    } else if (scores.computerScore > scores.humanScore) {
        console.log("💻 O computador venceu o jogo!");
    } else {
        console.log("🤝 O jogo terminou empatado!");
    }
};

playGame();