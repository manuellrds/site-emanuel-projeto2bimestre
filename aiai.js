const perguntas = [
    {
        pergunta: "Qual é a marca mais famosa de smartphones?",
        opcoes: ["Apple", "Samsung", "Huawei", "Sony"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é o processador mais utilizado em PCs para jogos?",
        opcoes: ["Intel Core i7", "AMD Ryzen 7", "Intel Pentium", "AMD Athlon"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual empresa produz a série de placas de vídeo GeForce?",
        opcoes: ["AMD", "NVIDIA", "Intel", "ASUS"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual dispositivo é essencial para conectar um computador à Internet?",
        opcoes: ["Mouse", "Teclado", "Roteador", "Impressora"],
        respostaCorreta: 2
    },
    {
        pergunta: "O que significa a sigla CPU?",
        opcoes: ["Central Processing Unit", "Computer Personal Unit", "Central Process Unit", "Central Processor Unit"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é o componente principal de um monitor de computador?",
        opcoes: ["CPU", "GPU", "RAM", "Tela"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual é a função da placa-mãe em um computador?",
        opcoes: ["Armazenar dados", "Conectar todos os componentes", "Executar programas", "Gerar energia"],
        respostaCorreta: 1
    },
    {
        pergunta: "O que é um SSD?",
        opcoes: ["Solid State Drive", "Super Speed Drive", "Slim Storage Drive", "Software System Drive"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual é a resolução padrão de uma tela Full HD?",
        opcoes: ["720p", "1080p", "1440p", "4K"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é a função da BIOS em um computador?",
        opcoes: ["Controlar o sistema operacional", "Gerenciar a memória RAM", "Iniciar o hardware", "Compactar arquivos"],
        respostaCorreta: 2
    }
];

const perguntaContainer = document.getElementById("pergunta-container");
const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");
const respostaElemento = document.getElementById("resposta");
const proximaBtn = document.getElementById("proxima-btn");

let perguntaAtual = 0;

function mostrarPergunta() {
    respostaElemento.textContent = "";
    perguntaContainer.classList.remove("correto", "errado");
    const perguntaAtualObj = perguntas[perguntaAtual];
    perguntaElemento.textContent = perguntaAtualObj.pergunta;
    opcoesElemento.innerHTML = "";

    perguntaAtualObj.opcoes.forEach((opcao, index) => {
        const opcaoBtn = document.createElement("button");
        opcaoBtn.textContent = opcao;
        opcaoBtn.addEventListener("click", () => verificarResposta(index));
        opcoesElemento.appendChild(opcaoBtn);
    });
}

function verificarResposta(escolha) {
    const perguntaAtualObj = perguntas[perguntaAtual];
    if (escolha === perguntaAtualObj.respostaCorreta) {
        respostaElemento.textContent = "Resposta Correta!";
        respostaElemento.style.color = "green";
        perguntaContainer.classList.add("correto");
    } else {
        respostaElemento.textContent = "Resposta Incorreta. A resposta correta é: " + perguntaAtualObj.opcoes[perguntaAtualObj.respostaCorreta];
        respostaElemento.style.color = "red";
        perguntaContainer.classList.add("errado");
    }

    proximaBtn.style.display = "block";
}

function proximaPergunta() {
    respostaElemento.textContent = "";
    respostaElemento.style.color = "";
    proximaBtn.style.display = "none";

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        perguntaElemento.textContent = "Fim do Jogo!";
        opcoesElemento.innerHTML = "";
    }
}

proximaBtn.addEventListener("click", proximaPergunta);

mostrarPergunta();
