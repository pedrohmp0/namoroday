// Função para rolar suavemente para uma seção
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Lógica do Quiz
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

const questions = [
    {
        question: "Qual é a minha cor preferida?",
        answers: ["Preto", "Vermelho", "Amarelo", "Verde"],
        correctAnswer: "Amarelo"
    },
    {
        question: "Qual é a minha comida preferida?",
        answers: ["Pizza", "Strogonoff", "Lasanha", "Churrasco"],
        correctAnswer: "Strogonoff"
    },
    {
        question: "Qual é o meu lanche preferido?",
        answers: ["Pizza", "Hamburguer", "Batata Frita", "Cachorro Quente"],
        correctAnswer: "Hamburguer"
    },
    {
        question: "Qual é o meu filme de ficção preferido?",
        answers: ["Interestelar", "Matrix", "Inception", "Blade Runner"],
        correctAnswer: "Interestelar"
    },
    {
        question: "Qual é o meu filme de terror preferido?",
        answers: ["Autópsia", "Jogos Mortais", "O Exorcista do Papa", "Invocação do Mal"],
        correctAnswer: "Autópsia"
    },
    {
        question: "Qual é o meu filme de animação preferido?",
        answers: ["Ratatouille", "Como Treinar Seu Dragão", "Por água a baixo", "Toy Story"],
        correctAnswer: "Ratatouille"
    },
    {
        question: "Qual é a minha altura?",
        answers: ["1,76", "1,75", "1,77", "1,80"],
        correctAnswer: "1,75"
    },
    {
        question: "Qual é o meu peso?",
        answers: ["65 kg", "67 kg", "70 kg", "72 kg"],
        correctAnswer: "67 kg"
    },
    {
        question: "Onde nos encontramos pela primeira vez?",
        answers: ["Calçadão", "Shopping", "Mercado", "Praia"],
        correctAnswer: "Mercado"
    },
    {
        question: "Onde foi o nosso primeiro beijo?",
        answers: ["Calçadão", "Shopping", "Mercado", "Cinema"],
        correctAnswer: "Cinema"
    },
    {
        question: "Qual foi o primeiro filme que assistimos juntos?",
        answers: ["John Wick", "Jogos Mortais", "Creed", "Interestelar"],
        correctAnswer: "John Wick"
    },
    {
        question: "Qual foi o primeiro museu que visitamos juntos?",
        answers: ["Museu do Rio", "Museu do Amanhã", "Museu de Arte", "Museu do Negro"],
        correctAnswer: "Museu do Rio"
    },
    {
        question: "Qual meu filme preferido de comédia?",
        answers: ["Superbad", "Projeto X", "American Pie", "Todo mundo em Pânico"],
        correctAnswer: "Superbad"
    },
    {
        question: "Quem é o homem mais gostoso do mundo?",
        answers: ["Michael B. Jordan", "The Rock", "Eu (Pedro)", "Vin Diesel"],
        correctAnswer: "Michael B. Jordan"
    },
    {
        question: "Quem é a pessoa que mais ama você no mundo?",
        answers: ["Seu pai", "Sua mãe", "Eu (Pedro)", "Seu irmão"],
        correctAnswer: "Eu (Pedro)"
    }
];

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionCard = document.createElement('div');
        questionCard.classList.add('question-card');
        questionCard.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.answers.map(answer => `
                <label>
                    <input type="radio" name="question${index}" value="${answer}">
                    ${answer}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionCard);
    });
}

function checkAnswers() {
    let correctCount = 0;
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.correctAnswer) {
            correctCount++;
        }
    });
    return correctCount;
}

submitButton.addEventListener('click', () => {
    const correctCount = checkAnswers();
    if (correctCount === questions.length) {
        resultContainer.textContent = "Parabéns! Você acertou tudo! 💖";
        setTimeout(() => {
            window.location.href = "parabens.html"; // Redireciona para a página de parabéns
        }, 2000);
    } else {
        resultContainer.textContent = `Você acertou ${correctCount} de ${questions.length}. Tente novamente!`;
    }
});

buildQuiz();