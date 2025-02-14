function confirmarUsuario(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const nome = document.getElementById('nome').value.trim(); // Remove espaços em branco
    const idade = document.getElementById('idade').value;
    const dataNamoro = document.getElementById('data-namoro').value;

    // Verifica se os dados estão corretos
    if (nome === "Jullia" && idade === "21" && dataNamoro === "2023-04-24") {
        // Armazena os dados do usuário (opcional)
        localStorage.setItem('usuario', JSON.stringify({ nome, idade, dataNamoro }));

        // Inicia o site
        iniciarSite();
    } else {
        alert('Dados incorretos. Por favor, verifique o nome, idade e data de namoro.');
    }
}

function iniciarSite() {
    const audio = document.getElementById('background-music');
    audio.muted = false; // Ativa o som
    audio.play(); // Inicia a reprodução

    const abertura = document.getElementById('abertura');
    const conteudoPrincipal = document.getElementById('conteudo-principal');

    // Animação de fade-out na abertura
    abertura.style.opacity = '0';
    abertura.style.transition = 'opacity 1s ease-in-out';

    // Mostrar conteúdo principal após a animação
    setTimeout(() => {
        abertura.style.display = 'none';
        conteudoPrincipal.style.display = 'block';
        conteudoPrincipal.style.opacity = '1';
    }, 1000);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

let indiceAtual = 0;

function moverCarrossel(direcao) {
    const container = document.querySelector('.carrossel-container');
    const totalItens = document.querySelectorAll('.carrossel-item').length;
    const itensPorVez = window.innerWidth <= 480 ? 1 : window.innerWidth <= 768 ? 2 : 3;

    indiceAtual += direcao;

    // Verifica se o índice atual está fora dos limites
    if (indiceAtual < 0) {
        indiceAtual = totalItens - itensPorVez; // Vai para o último conjunto de fotos
    } else if (indiceAtual >= totalItens - (itensPorVez - 1)) {
        indiceAtual = 0; // Volta para o primeiro conjunto de fotos
    }

    // Move o carrossel
    const offset = -indiceAtual * (100 / itensPorVez);
    container.style.transform = `translateX(${offset}%)`;
}

// Configuração do Relógio
const dataInicial = new Date("2023-04-24T00:53:00");

function atualizarRelogio() {
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // Inicializa o relógio imediatamente