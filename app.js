let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numtentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function limparCampo() {
    chute =  document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length();
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function mensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p', 'Digite um valor entre 1 e 10');
}


mensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let tentativas = numtentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Parabéns você acertou o número secreto com ${numtentativas} ${tentativas}`
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
        //desabilitando o botão de reiniciar depois que acertar
        document.getElementById('reiniciar').removeAttribute('disabled');

    }  else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior'); 
        }
        numtentativas++;
        limparCampo();
    }
}


function reiniciarJogo(){
    limparCampo();
    mensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    numtentativas = 1;
    document.getElementById('reiniciar').getAttribute('disabled', true);
   
}


