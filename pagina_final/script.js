const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    totalCorrect++
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente"
      break
    case (performance >= 70):
      message = "Muito bom"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar"
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button
      onclick=window.location.reload() 
      class="button final-button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "Qual é a função principal do BIOS durante o processo de inicialização do computador?",
    answers: [
      { text: "Iniciar automaticamente o sistema operacional.", correct: false },
      { text: "Gerenciar a conexão de rede do computador.", correct: false },
      { text: "Verificar e inicializar hardware essencial.", correct: true },
      { text: "Executar uma análise de segurança do sistema.", correct: false }
    ]
  },
  {
    question: "Quando um computador é ligado, qual é a primeira etapa do processo de inicialização?",
    answers: [
      { text: "Emissão de sinal sonoro (beep)", correct: true },
      { text: "Carregamento do sistema operacional", correct: false },
      { text: "Verificação de hardware (POST)", correct: false },
      { text: "Execução de aplicativos em segundo plano", correct: false }
    ]
  },
  {
    question: 'Durante a etapa de POST, o que acontece se o sistema detectar um erro grave no hardware do computador?',
    answers: [
      { text: 'Exibe mensagem de erro e para a inicialização.', correct: true },
      { text: 'Ignora erro e continua a inicialização', correct: false },
      { text: 'Entra em "congelamento", sem resposta', correct: false },
      { text: "Não atualiza o BIOS automaticamente", correct: false }
    ]
  },
  {
    question: 'O POST (Power-On Self-Test) é um processo que ocorre após o sistema operacional ser carregado?',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Qual componente de hardware é responsável por armazenar permanentemente as instruções de inicialização do computador?',
    answers: [
      { text: 'SSD', correct: false },
      { text: 'Unidade de disco rígido (HDD)', correct: true },
      { text: 'Placa de Vídeo', correct: false },
      { text: 'Placa Mãe', correct: false }
    ]
  },
  {
    question: 'Qual é o primeiro passo crítico que o computador executa ao chamar o sistema operacional durante a inicialização?',
    answers: [
      { text: 'Carregar aplicativos em segundo plano', correct: false },
      { text: 'Executar BIOS/UEFI para identificar hardware e localizar o SO no disco', correct: true },
      { text: 'Exibir a tela de login', correct: false },
      { text: 'Verificar periféricos', correct: false }
    ]
  },
  {
    question: 'O que desencadeia o processo de inicialização do sistema operacional em um computador?',
    answers: [
      { text: 'Pressionar a tecla "Caps Lock" no teclado', correct: false },
      { text: 'A inserção de um novo dispositivo USB', correct: false },
      { text: 'O ajuste do brilho da tela do monitor', correct: false },
      { text: 'Pressionamento do botão de energia ou sinal de inicialização pela placa', correct: true },
    ]
  },
]

function sobreMim(){
  const experiencia = document.querySelectorAll('.experience_content div');
  const botao = document.querySelectorAll('.experience_content ul li')
  const education = document.querySelectorAll('.education_content div');
  const botaoEducation = document.querySelectorAll('.education_content ul li')


  experiencia[0].classList.add('ativo')
  botao[0].classList.add('ativo')
  education[0].classList.add('ativo')
  botaoEducation[0].classList.add('ativo')

  function slideShow(index){
      experiencia.forEach((divisao)=>{
          divisao.classList.remove('ativo');
      });
      botao.forEach((item)=>{
          item.classList.remove('ativo')
      });
      experiencia[index].classList.add('ativo')
      botao[index].classList.add('ativo')
  }

  function slideShow2(index){
      education.forEach((divisao)=>{
          divisao.classList.remove('ativo');
      });
      botaoEducation.forEach((item)=>{
          item.classList.remove('ativo')
      });
      education[index].classList.add('ativo')
      botaoEducation[index].classList.add('ativo')
  }


  botao.forEach((event,index)=>{
      event.addEventListener('click', ()=>{
          slideShow(index)
      });
  });

  botaoEducation.forEach((div, index)=>{
      div.addEventListener('click', ()=>{
          slideShow2(index)
      })
  })
}
sobreMim();




const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item)=>{
  item.classList.add('ativo');
})

function removeClick(index){
  buttonGeral.forEach((item)=>{
      item.classList.remove('ativo');
  })
  buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
  event.addEventListener('click', ()=>{
      removeClick(index)
  })
})

function showLista(lista, buttom = "all"){
  lista.forEach((item)=>{
      item.classList.remove('ativo');
  });
}

const scrollDownButton = document.getElementById('scrollDownButton');
const scrollToTopButton = document.getElementById('scrollToTopButton');

scrollDownButton.addEventListener('click', () => {
    const targetOffset = 900; // O destino da rolagem
    const scrollDuration = 1000; // Duração da animação em milissegundos

    const startTime = performance.now();
    
    function scrollStep(timestamp) {
        const currentTime = timestamp - startTime;
        const progress = Math.min(currentTime / scrollDuration, 1);
        window.scrollTo(0, easeInOutQuad(progress) * targetOffset);

        if (currentTime < scrollDuration) {
            requestAnimationFrame(scrollStep);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(scrollStep);
});

window.addEventListener('scroll', () => {
    const scrollThreshold = 400; // O ponto em que o botão deve desaparecer/reaparecer

    if (window.scrollY > scrollThreshold) {
        scrollDownButton.classList.add('hidden');
    } else {
        scrollDownButton.classList.remove('hidden');
    }
});









