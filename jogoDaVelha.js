let tabuleiro
let board
let aviso
let jogador
let linha
let coluna

function iniciar(){
    tabuleiro = []
    board = document.getElementById('board')
    aviso = document.getElementById('aviso')
    jogador = 1

    for(let i = 0; i < 3; i++){
        tabuleiro[i] = []
        for(let j = 0; j < 3; j++){
            tabuleiro[i][j] = 0
        }
    }

    console.table(tabuleiro)
    exibir()
}

function exibir(){
    let tabela = '<table cellpadding="10" border="1">'

    for(let t = 0; t < 3; t++){
        tabela += '<tr>'

        for(let c = 0; c < 3; c++){

            switch(tabuleiro[t][c]){
                case -1: marcador = 'X'; break;
                case 1: marcador = 'O'; break;
                default: marcador = '_'
            }

            tabela += '<td> '+ marcador +' </td>'
        }

        tabela += '</tr>'
    }

    tabela += '</table>'

    board.innerHTML = tabela
}

function jogar(){
    aviso.innerHTML = 'Vez do Jogador: ' + numeroJogador()

    linha = document.getElementById('linha').value - 1
    coluna = document.getElementById('coluna').value - 1

    if(tabuleiro[linha][coluna] == 0){
        tabuleiro[linha][coluna] = numeroJogador() == 1 ? 1 : -1
    } else {
        aviso.innerHTML = 'Campo marcado!'
    }

    
    console.table(tabuleiro)

    jogador++
    exibir()
    checar()


}

function checar(){
    // Linhas
    for(let t = 0; t < 3; t++){
        let soma = 0
        soma = tabuleiro[t][0] + tabuleiro[t][1] + tabuleiro[t][2]

        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'O Jogador ' + numeroJogador() + ' ganhou!'
        }
    }

    // Colunas
    for(let t = 0; t < 3; t++){
        let soma = 0
        soma = tabuleiro[0][t] + tabuleiro[1][t] + tabuleiro[2][t]

        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'O Jogador ' + numeroJogador() + ' ganhou!'
        }
    }

    // Diagonal
    for(let t = 0; t < 3; t++){
        let soma = 0
        soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]
        if(soma == 3 || soma == -3){
            aviso.innerHTML = 'O Jogador ' + numeroJogador() + ' ganhou!'
        }
    }

}

function numeroJogador(){
    return jogador%2 + 1
}