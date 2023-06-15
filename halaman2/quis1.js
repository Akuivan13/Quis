const questions = [
    {
      question: "Apa singkatan dari CSS?",
      choices: ["Cascading Style Sheets", "Cascading Sheet Style", "Creative Style Sheets"],
      correctAnswer: "Cascading Style Sheets",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk mengubah warna latar belakang?",
      choices: ["background-color", "color", "text-color"],
      correctAnswer: "background-color",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk mengubah ukuran font?",
      choices: ["font-size", "text-size", "font-style"],
      correctAnswer: "font-size",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk membuat tampilan teks menjadi tebal (bold)?",
      choices: ["font-weight", "text-style", "font-bold"],
      correctAnswer: "font-weight",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk mengatur jarak antara teks dengan batas luar elemen?",
      choices: ["margin", "padding", "border-spacing"],
      correctAnswer: "padding",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk mengatur lebar elemen?",
      choices: ["width", "height", "size"],
      correctAnswer: "width",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk mengatur jenis huruf (font family)?",
      choices: ["font-family", "text-font", "font-type"],
      correctAnswer: "font-family",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk mengatur jarak antara huruf dalam teks?",
      choices: ["letter-spacing", "word-spacing", "text-spacing"],
      correctAnswer: "letter-spacing",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk mengatur jarak antara elemen-elemen di dalam elemen tersebut?",
      choices: ["margin", "padding", "border-spacing"],
      correctAnswer: "margin",
      score: 10
    },
    {
      question: "Apa properti CSS yang digunakan untuk mengatur tampilan garis bawah teks?",
      choices: ["text-decoration", "underline", "text-line"],
      correctAnswer: "text-decoration",
      score: 10
    }
  ];
  
  
  const questionElement = document.getElementById('question');
  const choicesElement = document.getElementById('choices');
  const resultElement = document.getElementById('result');
  const submitButton = document.getElementById('submitBtn');
  const scoreContainer = document.getElementById('score-container');
  const scoreElement = document.getElementById('score');
  
  let currentQuestion = 0;
  let selectedChoice = null;
  let score = 0;
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
  
    choicesElement.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
      const choice = document.createElement('button');
      choice.textContent = question.choices[i];
      choice.classList.add('choice-animation');
      choice.addEventListener('click', () => {
        selectChoice(choice, question.choices[i]);
      });
      choicesElement.appendChild(choice);
    }
  }
  
  function selectChoice(choiceElement, choice) {
    if (selectedChoice) {
      const prevChoiceElement = choicesElement.querySelector(`button[data-choice="${selectedChoice}"]`);
      prevChoiceElement.classList.remove('selected');
    }
  
    selectedChoice = choice;
    choiceElement.classList.add('selected');
  }
  
  function checkAnswer() {
    const question = questions[currentQuestion];
  
    if (selectedChoice === null) {
      resultElement.textContent = "Silakan pilih jawaban sebelum menekan tombol Submit.";
      return;
    }
  
    if (selectedChoice === question.correctAnswer) {
      resultElement.textContent = "Jawaban benar! Lanjut ke pertanyaan berikutnya.";
      score += question.score;
    } else {
      resultElement.textContent = "Jawaban salah. Lanjut ke pertanyaan berikutnya.";
      score -= question.score;
      if (score < 0) {
        score = 0; // Jangan biarkan skor menjadi negatif
      }
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      selectedChoice = null;
      setTimeout(showQuestion, 1000);
    } else {
      resultElement.textContent = "Selamat! Anda telah menyelesaikan kuis.";
      choicesElement.innerHTML = "";
      submitButton.disabled = true;
      scoreContainer.style.display = "block";
      scoreElement.textContent = "Skor: " + score;
    }
  }
  
  submitButton.addEventListener('click', checkAnswer);
  
  showQuestion();
  