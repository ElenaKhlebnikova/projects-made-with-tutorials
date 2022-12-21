const difficulty = document.querySelector(".difficulty");
const time = document.querySelector(".time");
const score = document.querySelector(".score");
const word = document.querySelector(".word");
const wordIn = document.getElementById("word-input");
const form = document.querySelector(".form");
const btn = document.getElementById("btn");
const option = document.querySelector(".option");
const start = document.querySelector(".btn-start");

let words = [
  "liquates",
  "soave",
  "intermittent",
  "birdlike",
  "unbred",
  "duckpins",
  "gabies",
  "paradisiac",
  "beekeepers",
  "godless",
  "divesture",
  "emceed",
  "dollops",
  "helleries",
  "chickees",
  "aeronomies",
  "oxheart",
  "garment",
  "harder",
  "nonbrand",
  "discriminate",
  "scalloped",
  "impracticably",
  "bytes",
  "genua",
  "wildling",
  "augmenter",
  "immixture",
  "avalanche",
  "cotyledonary",
  "pokers",
  "maizes",
  "wallabies",
  "subtonic",
  "spaders",
  "glibbest",
  "populists",
  "crucible",
  "giantesses",
  "ankush",
  "juggernaut",
  "pulverising",
  "facsimiled",
  "nondance",
  "twaddling",
  "sloyd",
  "stridulation",
  "bigos",
  "grunted",
  "tsores",
  "precomputes",
  "balloted",
  "max",
  "sailboatings",
  "swanskin",
  "programme",
  "selfdoms",
  "deflowered",
  "evanesces",
  "hint",
  "disdaining",
  "seltzers",
  "perviousnesses",
  "quadrennium",
  "shiplaps",
  "chomper",
  "wackily",
  "westernisation",
  "relaxed",
  "cultishnesses",
  "insuperably",
  "indagate",
  "slugabed",
  "byname",
  "clicking",
  "criterions",
  "ornithological",
  "valences",
  "enantiomorphism",
  "boned",
  "oldster",
  "removable",
  "tympano",
  "pseudoalleles",
  "flatcars",
  "partnered",
  "sovereign",
  "unweighed",
  "amobarbital",
  "statisms",
  "wahine",
  "aloins",
  "technetium",
  "lysing",
  "unifying",
  "nonperformers",
  "windburns",
  "diadem",
  "hellers",
  "ligroins",
];

let i = 0;
let scoreNumb = 0;
let timeS = 0;
word.innerHTML = `<p>${words[i]}</p>`;

function init() {
  start.classList.add("hidden");
  wordIn.classList.remove("hidden");
  word.classList.remove("hidden");
  difficulty.options.selectedIndex = localStorage.option;
  setTimer();
  timeS = 15;
}

function gameOver() {
  difficulty.options.selectedIndex = localStorage.option;
  wordIn.classList.add("hidden");
  word.classList.add("hidden");
  start.classList.remove("hidden");
  timeS = 0;
}

function timer() {
  difficulty.options.selectedIndex = localStorage.option;
  if (timeS > 0) {
    timeS = timeS - 1;
    time.innerHTML = `Time left:${timeS}`;
  } else {
    clearInterval(setIntervalId);
    gameOver();
  }
}

function setTimer() {
  difficulty.options.selectedIndex = localStorage.option;
  setIntervalId = setInterval(timer, 1000);
}

//////

function displayWord() {
  difficulty.options.selectedIndex = localStorage.option;
  if (i < words.length - 1) {
    i++;
    word.innerHTML = `<p>${words[i]}</p>`;
  } else {
    gameOver();
  }
  clearInput();
  addScore();
  addTime();
}

function addScore() {
  difficulty.options.selectedIndex = localStorage.option;
  scoreNumb++;
  score.innerHTML = `Score: ${scoreNumb}`;
}

function clearInput() {
  difficulty.options.selectedIndex = localStorage.option;
  wordIn.value = "";
}

function changeWord() {
  difficulty.options.selectedIndex = localStorage.option;
  if (wordIn.value === words[i]) {
    if (difficulty.options.selectedIndex === 0) {
      timeS = timeS + 10;
    }
    if (difficulty.options.selectedIndex === 1) {
      timeS = timeS + 5;
    }
    if (difficulty.options.selectedIndex === 2) {
      timeS = timeS + 2;
    }
    displayWord();
  } else {
    return;
  }
}

// btn.addEventListener("click", displayWord);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  changeWord();
  difficulty.options.selectedIndex = localStorage.option;
});

difficulty.addEventListener("change", function () {
  localStorage.setItem("option", difficulty.options.selectedIndex);
});
difficulty.options.selectedIndex = localStorage.option;

start.addEventListener("click", init);
