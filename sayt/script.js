const words = [
  "salom", "dunyo", "kod", "html", "css", "javascript", "test", "foydalanuvchi",
  "sayt", "tezlik", "klaviatura", "matn", "oyin", "raqam", "yashil", "qizil", "black"
];

const wordContainer = document.getElementById("wordContainer");
const inputBox = document.getElementById("inputBox");
const result = document.getElementById("result");

let currentWords = [];
let startTime;
let testFinished = false;

function generateWords(count = 25) {
  currentWords = [];
  for (let i = 0; i < count; i++) {
    const rand = words[Math.floor(Math.random() * words.length)];
    currentWords.push(rand);
  }
  displayWords();
}

function displayWords() {
  wordContainer.innerHTML = "";
  currentWords.forEach(word => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    wordContainer.appendChild(span);
  });
}

function checkInput() {
  const typed = inputBox.value.trim().split(" ");
  const spans = wordContainer.querySelectorAll("span");

  let correct = 0;
  spans.forEach((span, index) => {
    if (typed[index] === undefined) return;
    if (typed[index] === currentWords[index]) {
      span.classList.add("correct");
      span.classList.remove("incorrect");
      correct++;
    } else {
      span.classList.add("incorrect");
      span.classList.remove("correct");
    }
  });

  if (typed.length >= currentWords.length && !testFinished) {
    testFinished = true;
    const timeTaken = (Date.now() - startTime) / 1000;
    const wpm = Math.round((correct / timeTaken) * 60);
    result.innerHTML = `✅ To'g'ri so'zlar: ${correct}<br>🚀 WPM: ${wpm}`;
  }
}

inputBox.addEventListener("input", () => {
  if (!startTime) startTime = Date.now();
  checkInput();
});

generateWords();
