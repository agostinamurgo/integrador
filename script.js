// Base de preguntas para el juego
const questions = [
    { question: "¿Cuál es la capital de Francia?", answer: "París" },
    { question: "¿En qué año se descubrió América?", answer: "1492" },
    { question: "¿Quién pintó la Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "¿Qué es la inteligencia artificial?", answer: "Máquinas que imitan la inteligencia humana" },
    { question: "¿Cuál es el río más largo del mundo?", answer: "Amazonas" },
    { question: "¿Qué elemento químico tiene el símbolo H?", answer: "Hidrógeno" },
    { question: "¿Qué continente tiene el país más grande del mundo?", answer: "Asia" },
    { question: "¿En qué país se encuentra la Torre Eiffel?", answer: "Francia" },
    { question: "¿Cuál es el océano más grande?", answer: "Pacífico" },
    { question: "¿En qué año llegó el hombre a la luna?", answer: "1969" },
    // 20 más preguntas...
  ];
  
  // Variables
  let currentQuestionIndex = 0;
  let score = 0;
  let questionsToAsk = [];
  
  // Seleccionar 10 preguntas al azar
  function getRandomQuestions() {
    let selectedQuestions = [];
    let indexes = [];
    while (selectedQuestions.length < 10) {
      let randomIndex = Math.floor(Math.random() * questions.length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
        selectedQuestions.push(questions[randomIndex]);
      }
    }
    return selectedQuestions;
  }
  
  // Mostrar una pregunta
  function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const nextBtn = document.getElementById("next-btn");
  
    if (currentQuestionIndex < questionsToAsk.length) {
      questionContainer.innerHTML = `
        <p>${questionsToAsk[currentQuestionIndex].question}</p>
        <input type="text" id="answer" placeholder="Escribe tu respuesta" />
      `;
      nextBtn.style.display = "none"; // Ocultar el botón de siguiente hasta que se conteste
  
      // Escuchar el evento para comprobar la respuesta
      document.getElementById("answer").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
          const userAnswer = event.target.value.trim();
          const correctAnswer = questionsToAsk[currentQuestionIndex].answer;
          if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
          }
          currentQuestionIndex++;
          displayQuestion();
        }
      });
    } else {
      let message = "";
      if (score / 10 >= 0.7) {
        message = "<h2>¡Felicidades! Has contestado correctamente más del 70% de las preguntas.</h2>";
      } else {
        message = "<h2>¡Buen intento! Inténtalo nuevamente.</h2>";
      }
      resultContainer.innerHTML = message;
      nextBtn.style.display = "none"; // Ocultar el botón
    }
  }
  
  // Inicializar el juego
  function startQuiz() {
    questionsToAsk = getRandomQuestions();
    displayQuestion();
  }
  
  document.getElementById("next-btn").addEventListener("click", function () {
    displayQuestion();
  });
  
  // Comienza el juego cuando se carga la página
  window.onload = startQuiz;
  