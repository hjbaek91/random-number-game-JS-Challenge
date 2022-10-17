const generateNumInput = document.querySelector(".generate-num__input");
const guessNumInput = document.querySelector(".guess-num__input");
const guessNumBtn = document.querySelector(".guess-num__btn");
const guessNumResult = document.querySelector(".guess-num__result");
const guessNumResultWinLoss = document.querySelector(
  ".guess-num__result-win-loss"
);
const img = document.createElement("div");
document.body.appendChild(img);
// const resultImgWin = document.querySelector("result-img__win");
// const resultImgLose = document.querySelector("result-img__lose");

function playGuessTheNum(e) {
  e.preventDefault();
  const machineChoice = Math.ceil(Math.random() * generateNumInput.value);
  guessNumResult.innerHTML = `You chose ${guessNumInput.value}, the machine chose: ${machineChoice}.`;

  if (parseInt(guessNumInput.value) === parseInt(machineChoice)) {
    guessNumResultWinLoss.innerHTML = `You Won!`;
  } else {
    guessNumResultWinLoss.innerHTML = `You Lose!`;
  }
}

guessNumBtn.addEventListener("click", playGuessTheNum);
