function ToPlay() {

    // Solicita a idade do jogador
    let idade = prompt("Quantos anos você tem?");
    
    // Verifica se o jogador tem idade suficiente para jogar
    if (idade < 18) {
        alert("Você não pode jogar Jokenpo, precisa ser maior de idade.");
        return; // Finaliza a função se o jogador for menor de idade
    }

    // Começar o jogo
    alert("Vamos começar a jogar!");

    // Solicita a escolha de um numero entre 1-2-3
    let escolhaJogador = prompt("Escolha: 1 - Pedra, 2 - Papel ou 3 - Tesoura?");
    
    //Gerar um número aleatório
    if (escolhaComputador = Math.floor(Math.random() * 3) + 1);

    if ((escolhaJogador == 1 && escolhaComputador == 1) || (escolhaJogador == 2 && escolhaComputador == 2) || (escolhaJogador == 3 && escolhaComputador == 3)) {
        alert("Empate!!!");
    }

    //escolhajogador--> Jogador venceu
    else if ((escolhaJogador == 1 && escolhaComputador == 3) || (escolhaJogador == 2 && escolhaComputador == 1) || (escolhaJogador == 3 && escolhaComputador == 2)) {
        alert("Você venceu!!!");
    }
    //escolhaComputador--> Computador venceu
    else if ((escolhaComputador == 1 && escolhaJogador == 3) || (escolhaComputador == 2 && escolhaJogador == 1) || (escolhaComputador == 3 && escolhaJogador == 2)) {
        alert("Computador vence!!!");
    }

    //escolhajogador--> Jogador venceu
    else if ((escolhaJogador == 2 && escolhaComputador == 1) || (escolhaJogador == 2 && escolhaComputador == 1) || (escolhaJogador == 3 && escolhaComputador == 2)) {
        alert("Você venceu!!!");
    }
    //escolhaComputador--> Computador venceu
    else if ((escolhaComputador == 2 && escolhaJogador == 1) || (escolhaComputador == 2 && escolhaJogador == 1) || (escolhaComputador == 3 && escolhaJogador == 2)) {
        alert("Computador vence!!!");
    }
    
    
}

