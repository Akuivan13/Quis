
    const questions = [
    {
        question: "Apa kepanjangan dari HTML?",
        choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language",
        score: 10
      },
      {
        question: "Tag apa yang digunakan untuk membuat paragraf dalam HTML?",
        choices: ["<p>", "<h1>", "<div>"],
        correctAnswer: "<p>",
        score: 10
      },
      {
        question: "Apa fungsi dari tag <a> dalam HTML?",
        choices: ["Membuat heading", "Membuat paragraf", "Membuat tautan atau hyperlink"],
        correctAnswer: "Membuat tautan atau hyperlink",
        score: 10
      },
      {
        question: "Tag apa yang digunakan untuk membuat judul utama dalam HTML?",
        choices: ["<h1>", "<p>", "<div>"],
        correctAnswer: "<h1>",
        score: 10
      },
      {
        question: "Apa fungsi dari tag <img> dalam HTML?",
        choices: ["Memasukan gambar", "Membuat teks tebal", "Membuat tautan"],
        correctAnswer: "Memasukan gambar",
        score: 10
      },
      {
        question: "Apa fungsi dari tag <ul> dalam HTML?",
        choices: ["Membuat daftar berurutan", "Membuat tabel", "Membuat daftar tak terurut"],
        correctAnswer: "Membuat daftar tak terurut",
        score: 10
      },
      {
        question: "Apa fungsi dari tag <table> dalam HTML?",
        choices: ["Membuat daftar berurutan", "Membuat tabel", "Membuat daftar tak terurut"],
        correctAnswer: "Membuat tabel",
        score: 10
      },
      {
        question: "Apa fungsi dari tag <form> dalam HTML?",
        choices: ["Membuat formulir", "Membuat gambar", "Membuat tautan"],
        correctAnswer: "Membuat formulir",
        score: 10
      },
      {
        question: "Apa fungsi dari tag <input> dalam HTML?",
        choices: ["Membuat gambar", "Membuat teks tebal", "Membuat inputan atau masukan"],
        correctAnswer: "Membuat inputan atau masukan",
        score: 10
      },
      {
        question: "Apa fungsi dari tag <div> dalam HTML?",
        choices: ["Membuat heading", "Membuat paragraf", "Membuat kotak konten"],
        correctAnswer: "Membuat kotak konten",
        score: 10
      },
      

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
    