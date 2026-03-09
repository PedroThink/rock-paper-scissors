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

console.log(getHumanChoice());