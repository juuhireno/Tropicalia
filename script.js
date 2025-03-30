// Ajustar tamanho da fonte
function aumentarFonte() {
    document.body.style.fontSize = "larger";
}

function diminuirFonte() {
    document.body.style.fontSize = "smaller";
}

// Alternar modo de alto contraste
function alternarContraste() {
    document.body.classList.toggle("alto-contraste");
}

// Criando um objeto para controlar a fala
let synth = window.speechSynthesis;
let vozAtual = null;

// Função para ler o texto
function lerTexto(id) {
    // Parar qualquer fala em andamento antes de iniciar uma nova
    if (synth.speaking) {
        synth.cancel();
    }

    let elemento = document.getElementById(id);
    
    if (!elemento) {
        console.error("Elemento não encontrado:", id);
        return;
    }

    let texto = elemento.innerText || elemento.textContent;

    if ('speechSynthesis' in window) {
        vozAtual = new SpeechSynthesisUtterance(texto);
        vozAtual.lang = "pt-BR"; // Definir idioma para português
        vozAtual.rate = 1; // Velocidade normal
        vozAtual.pitch = 1; // Tom da voz padrão
        synth.speak(vozAtual);
    } else {
        alert("Seu navegador não suporta a leitura de texto.");
    }
}

// Função para parar a leitura
function pararLeitura() {
    if (synth.speaking) {
        synth.cancel();
    }
}
