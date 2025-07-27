// Calc. sum of entred number, when btn is clicked, in the new paragraph which will be hidden till then.
const btnCalcSum = document.querySelector("#calculator button");

function calcSum() {
  const inputElement = document.getElementById("user-number");
  const entredNumber = inputElement.value;
  const finalSum = document.getElementById("calculated-sum");
  let mainNumber = 0;
  for (let i = 0; i <= entredNumber; i++) {
    mainNumber = mainNumber + i;
  }
  finalSum.textContent = mainNumber;
  finalSum.style.display = "block";
}
btnCalcSum.addEventListener("click", calcSum);

// Highlight the link.
const highlightBtn = document.querySelector("#highlight-links button");
function highlightFunction() {
  const anchorElements = document.querySelectorAll("#highlight-links a");
  for (const anchorElement of anchorElements) {
    console.log(anchorElement);
    anchorElement.classList.add("highlight");
  }
}
highlightBtn.addEventListener("click", highlightFunction);

// Display dummy data.

let dummyData = {
  Name: "Saad",
  Goal: "WebDev",
  Priority: "Max",
};
const userDataBtn = document.querySelector("#user-data button");
function generateDummyData() {
  const userDataList = document.getElementById("output-user-data");
  userDataList.innerHTML = "";
  for (let key in dummyData) {
    const createNewElement = document.createElement("li");
    const outputText = key.toUpperCase() + ": " + dummyData[key];
    createNewElement.textContent = outputText;
    userDataList.append(createNewElement);
  }
}
userDataBtn.addEventListener("click", generateDummyData);

// Roll dice.
const rollDicebtn = document.querySelector("#statistics button");
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function mainDiceFunction() {
  const diceInputNumber = document.getElementById("user-target-number");
  const diceOLList = document.getElementById("dice-rolls");
  const entredNumber = diceInputNumber.value;
  diceOLList.innerHTML = "";
  let hasRolledDice = false;
  let numberOfRolls = 0;
  while (!hasRolledDice) {
    const rolledNumber = rollDice();
    numberOfRolls++;
    const newRollListItem = document.createElement("li");
    const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
    newRollListItem.textContent = outputText;
    diceOLList.append(newRollListItem);
    hasRolledDice = rolledNumber == entredNumber;
  }
}

rollDicebtn.addEventListener("click", mainDiceFunction);
