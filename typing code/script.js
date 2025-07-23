const quoteDisplay = document.getElementById("quote");
const inputField = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const mistakesDisplay = document.getElementById("mistakes");

let quote = "Typing is not about speed. It's about rhythm and flow.";
let startTime;
let interval;
let mistakes = 0;

function displayQuote() {
    quoteDisplay.innerHTML = "";
    quote.split("").forEach(char => {
        const span = document.createElement("span");
        span.innerText = char;
        quoteDisplay.appendChild(span);
    });
}

function startGame() {
    inputField.value = "";
    mistakes = 0;
    mistakesDisplay.innerText = 0;
    wpmDisplay.innerText = 0;
    timeDisplay.innerText = 0;
    displayQuote();
    clearInterval(interval);
    startTime = null;
}

inputField.addEventListener("input", () => {
    const arrayQuote = quote.split("");
    const arrayValue = inputField.value.split("");

    let correct = true;
    mistakes = 0;

    const spans = quoteDisplay.querySelectorAll("span");

    arrayQuote.forEach((char, index) => {
        if (arrayValue[index] == null) {
            spans[index].classList.remove("correct", "incorrect");
            correct = false;
        } else if (arrayValue[index] === char) {
            spans[index].classList.add("correct");
            spans[index].classList.remove("incorrect");
        } else {
            spans[index].classList.add("incorrect");
            spans[index].classList.remove("correct");
            correct = false;
            mistakes++;
        }
    });

    mistakesDisplay.innerText = mistakes;

    if (!startTime) {
        startTime = new Date();
        interval = setInterval(updateTime, 1000);
    }

    if (arrayValue.length === arrayQuote.length && correct) {
        clearInterval(interval);
    }
});

function updateTime() {
    const currentTime = Math.floor((new Date() - startTime) / 1000);
    timeDisplay.innerText = currentTime;

    const wordsTyped = inputField.value.trim().split(" ").length;
    const wpm = Math.round((wordsTyped / currentTime) * 60);
    if (currentTime > 0) wpmDisplay.innerText = wpm;
}

startGame();
