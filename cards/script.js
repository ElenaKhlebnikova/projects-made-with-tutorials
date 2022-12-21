const add = document.querySelector(".btn-add");
const containerAdd = document.querySelector(".container-add");
const flip = document.querySelectorAll(".btn-flip");
const deleteCard = document.querySelector(".btn-delete-card");
const close = document.querySelector(".btn-close");
const next = document.querySelector(".btn-next");
const prev = document.querySelector(".btn-prev");
const deleteAll = document.querySelector(".btn-delete");
const addCard = document.querySelector(".btn-add-card");
const back = document.querySelector(".card-back");
const front = document.querySelector(".card-front");
const inputQ = document.querySelector(".form-question");
const inputA = document.querySelector(".form-answer");
const questionPlace = document.querySelector(".question");
const answerPlace = document.querySelector(".answer");
const number = document.querySelector(".number");
const wordsData = JSON.parse(localStorage.getItem("words"));
let i = 0;
let words = [];
console.log(localStorage);
console.log(wordsData);
//
//
// Rendering the cards

function addCardF() {
  const question = inputQ.value;
  const answer = inputA.value;
  const newWord = { question: question, answer: answer };
  questionPlace.innerHTML = `${newWord.question}`;
  answerPlace.innerHTML = `${newWord.answer}`;
  words.push(newWord);
  localStorage.setItem("words", JSON.stringify(words));
  number.innerHTML = `0 of ${words.length}`;
}

flip.forEach((f) =>
  f.addEventListener("click", () => back.classList.toggle("hidden"))
);

function nextCard() {
  localStorage.setItem("words", JSON.stringify(words));
  if (i <= wordsData.length - 1 && i >= 0) {
    i++;
    questionPlace.innerHTML = `${wordsData[i].question}`;
    answerPlace.innerHTML = `${wordsData[i].answer}`;
  } else {
    questionPlace.innerHTML = `${wordsData[i].question}`;
    answerPlace.innerHTML = `${wordsData[i].answer}`;
  }

  number.innerHTML = `${i} of ${wordsData.length - 1}`;
}

function prevCard() {
  localStorage.setItem("words", JSON.stringify(words));
  if (i <= wordsData.length - 1 && i >= 0) {
    i--;
    questionPlace.innerHTML = `${wordsData[i].question}`;
    answerPlace.innerHTML = `${wordsData[i].answer}`;
  } else {
    questionPlace.innerHTML = `${wordsData[i].question}`;
    answerPlace.innerHTML = `${wordsData[i].answer}`;
  }
  number.innerHTML = `${i} of ${wordsData.length - 1}`;
}

function deleteCardF() {
  let currentIndex = i;
  wordsDataNew = wordsData.splice(currentIndex, 1);
  if (i < wordsDataNew.length - 1) {
    questionPlace.innerHTML = `${wordsDataNew[i + 1].question}`;
    answerPlace.innerHTML = `${wordsDataNew[i + 1].answer}`;
  } else if ((i = wordsDataNew.length - 1)) {
    questionPlace.innerHTML = "Enter your question...";
    answerPlace.innerHTML = "...";
  }
  number.innerHTML = `${i} of ${wordsDataNew.length}`;
}

add.addEventListener("click", () => containerAdd.classList.remove("hidden"));
close.addEventListener("click", () => {
  containerAdd.classList.add("hidden");
  location.reload();
});
addCard.addEventListener("click", addCardF);
next.addEventListener("click", nextCard);
prev.addEventListener("click", prevCard);
deleteAll.addEventListener("click", () => {
  window.localStorage.clear();
  location.reload();
});
deleteCard.addEventListener("click", deleteCardF);
