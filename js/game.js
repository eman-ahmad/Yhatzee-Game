// Declare a variable for the roll number (i.e., rollNumber), initialized to 0
let rollNumber = 0;

// Declare a variable for the round number (i.e., roundNumber), initialized to 1
let roundNumber = 1;

// Declare an array for all dice currently in play array (i.e., diceAnywhere), initialized to an empty array
let diceAnywhere = [];

// Declare an array for the dice on the table (i.e., diceOnTable), initialized to an empty array
let diceOnTable = [];

// Declare an array for the selected dice (i.e., diceSelected), initialized to an empty array
let diceSelected = [];

// Declare a variable  (i.e., currentDieIndex) to store the current die index value for selection/deselection
let currentDieIndex;

// Declare an array  (i.e., dieIndexHolder) that stores the indexes for the dice, initialized to values 0,1,2,3,4
let dieIndexHolder = [0, 1, 2, 3, 4];

// Declare a variable  (i.e., selectedDiceElements) to reference the selected dice elements
let selectedDiceElements;

// DOM elements

// Declare a constant (i.e., diceArea) set equal to document, getElementById, passing argument diceArea
const diceArea = document.getElementById('diceArea');

// Declare a constant (i.e., selectedDiceArea) set equal to document, getElementById, passing argument selectedDiceArea
const selectedDiceArea = document.getElementById('selectedDiceArea');

// Declare a constant (i.e., rollButton) set equal to document, getElementById, passing argument rollButton
const rollButton = document.getElementById('rollDiceButton');

// Declare a constant (i.e., roundNumberElement) set equal to document, getElementById, passing argument round-number
const roundNumberElement = document.getElementById('round-number');

// Declare a constant (i.e., siteWrapper) set equal to document, getElementById, passing argument site-wrapper
const siteWrapper = document.getElementById('site-wrapper');

// Declare a constant (i.e., siteCanvas) set equal to document, getElementById, passing argument site-canvas
const siteCanvas = document.getElementById('site-canvas');

// Declare a constant (i.e., speculativeScoreTab) set equal to document, getElementById, passing argument speculative-score
const speculativeScoreTab =
  document.getElementsByClassName("speculative-score");

// Add an event listener to button rollButton, passing arguments
// 1.  explicit text 'click'
// 2.  function rollDie
// 3.  boolean false

rollButton.addEventListener('click', rollDie, false);

// Write function randomizeDie, empty parameter list, to return a randomized number between 1 - 6

// return a randomized number between 1 - 6
function randomizeDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Write function checkRollNumber, empty parameter list, to update the dice roll button status based on current roll number
// Write decision making logic to evaluate the value of variable rollNumber.  For each of the roll values, set the appropriate variable values
function checkRollNumber() {
  // Roll 0
  // Update variable rollButton to set the className equal to an empty character
  // Update variable rollNumber to add 1
  if (rollNumber === 0) {
    rollButton.className = "";
    rollNumber += 1;
  }
  // Roll 1
  // Update variable rollButton to set the className equal to roll-1
  // Update variable rollNumber to add 1
  else if (rollNumber === 1) {
    rollButton.className = "roll-1";
    rollNumber += 1;
  } // Roll 2
  // Update variable rollButton to set the className equal to roll-2
  // Update variable rollNumber to add 1
  else if (rollNumber === 2) {
    rollButton.className = "roll-2";
    rollNumber += 1;
  } // Roll 3
  // Update variable rollButton to set the className equal to roll-3
  // Update variable rollNumber remove the event listener, passing arguments
  // 1.  explicit text 'click'
  // 2.  function rollDie
  // 3.  boolean false
  // Update variable rollNumber to add 1
  // Call function setTimeout, passing two arguments
  //     1. Define an anonymous function that updates variable rollButton to set the className equal to roll-3 and disabled
  //     2. 500 milliseconds
  else if (rollNumber === 3) {
    rollButton.className = "roll-3";
    rollButton.removeEventListener("click", rollDie, false);
    
    setTimeout(() => {
      rollButton.className = "roll-3";
      rollButton.disabled = true;
    }, 500);
 
   console.log("in checkrollnumber")
    rollNumber += 1;
  }
  // The else or default should log to the console the error message "Roll number error"  
  else {
  console.error("Roll number error");
}
}

// Write function rollDie, empty parameter list to roll the dice
function rollDie() {
  // Call function checkRollNumber to update roll number indicator on the roll button
  checkRollNumber();

  // If variable roundNumber is identical to 1
  if (roundNumber === 1) {
    
  // Update the round number indicator visibility to visible; set document, getElementById, passing argument round-number-wrapper, className equal to visible
    document.getElementById("round-number-wrapper").className = "visible";
  }


  // Clear the dice table; set document, getElementById, passing argument variable diceArea, innerHTML equal to an empty string
  document.getElementById('diceArea').innerHTML = "";
  // Update array diceOnTable, set equal to an empty array

  diceOnTable = [];
  // Declare variable amountToRoll, to store the number of dice to roll, set equal to (5 - array diceSelected, propety length
  let amountToRoll = 5 - diceSelected.length;
 

  // Write a looping construct to iterate through number of dice to roll (i.e., amountToRoll)
  for (let i = 0; i < amountToRoll; i++) {
    // Declare variable diceRoll set equal to function call randomizeDie
    let diceRoll = randomizeDie();
    // Update array diceOnTable, using function push, passing argument variable diceRoll
    diceOnTable.push(diceRoll);
  }
  
  // Call function drawDiceOnTable to display the dice
  drawDiceOnTable();

  // Call function updateDiceAnywhere to reset dice in play array
  updateDiceAnywhere();

  // Call function updateScoreTable to update score table to show correct values on scores
  updateScoreTable();
}

// Write function drawDiceOnTable to draw the dice on table after a new roll, empty parameter list
function drawDiceOnTable() {
  // Update array dieIndexHolder intitalized to values 0,1,2,3,4
  let dieIndexHolder = [0, 1, 2, 3, 4];

  document.getElementById("diceArea").innerHTML = "";

  // Write a looping construct to iterate through the array diceOnTable
  for (let i = 0; i < diceOnTable.length; i++) {
    // Call function drawDieOnTable, passing arguments
    drawDieOnTable(diceOnTable[i], dieIndexHolder[i]);
    // 1.  current index of array diceOnTable
    // 2.  current index of array dieIndexHolder
  }

  // Call function updateSelectedDiceElements
  updateSelectedDiceElements();

  // Assign new indexes for left over dice from the previous roll
  // If array selectedDiceElements is true
  if (selectedDiceElements && selectedDiceElements.length > 0) {
    // Write a looping construct to iterate through the length of array selectedDiceElements
    for (let j = 0; j < selectedDiceElements.length; j++) {
      // Update the current index in array selectedDiceElements, using function setAttribute, passing arguments
      // 1.  explicit text die-index
      // 2.  array diceOnTable, property length, + the loop control variable
      selectedDiceElements[j].setAttribute("die-index", diceOnTable.length + j);
    }
  }
}

// Write function selectDieFromTable, empty parameter list, to pick a die from table
function selectDieFromTable() {
  // Declare variable diceValue set equal to function call parseInt, passing as arguments
  //   1.  keyword this, function getAttribute, passing 'die-value' as an argument
  //   2.  Radix 10
  let diceValue = parseInt(this.getAttribute("die-value"), 10);

  // Update variable currentDieIndex set equal to function call parseInt, passing as arguments
  //   1.  keyword this, function getAttribute, passing 'die-index' as an argument
  //   2.  Radix 10
  let currentDieIndex = parseInt(this.getAttribute("die-index"), 10);

  // Declare variable position set equal to array diceOnTable, function indexOf, passing as an argument variable diceValue
  let position = diceOnTable.indexOf(diceValue);

  // Update array diceOnTable using function splice, passing arguments
  // 1.  variable position
  // 2.  value 1
  diceOnTable.splice(position, 1);

  // Remove the selected die from the DOM by referencing keyword this, object parentNode, function removeChild, passing argument keyword this
  this.parentNode.removeChild(this);

  // Update array diceSelected using function push, passing argument variable diceValue
  diceSelected.push(diceValue);

  // Call function drawSelectedDice, passing arguments
  // 1.  variable diceValue
  // 2.  variable currentDieIndex
  drawSelectedDice(diceValue, currentDieIndex);

  // Call function updateDiceAnywhere
  updateDiceAnywhere();

  // Call function updateScoreTable
  updateScoreTable();
}

// Write function drawSelectedDice to draw the selected die on selected dice tray, parameter list includes
// 1.  value
// 2.  index
function drawSelectedDice(value, index) {
  // Declare variable dieDiv set equal to document, createElement, passing argument div
  let dieDiv = document.createElement("div");

  // Add to dieDiv attribute className += class die-selected
  dieDiv.className = "die-selected";

  // Append to variable selectedDiceArea, using function appendChild, passing argument dieDiv
  selectedDiceArea.appendChild(dieDiv);

  // For variable dieDiv, call function setAttribute, passing arguments
  // 1.  'die-value'
  // 2.  parameter value
  dieDiv.setAttribute("die-value", value);

  // For variable dieDiv, call function setAttribute, passing arguments
  // 1.  'die-index'
  // 2.  parameter index
  dieDiv.setAttribute("die-index", index);

  // For variable dieDiv, add an event listener, passing arguments
  //  1.  explicit text 'click'
  //  2.  function removeDieSelection
  //  3.  boolean false
  dieDiv.addEventListener("click", removeDieSelection, false);
}

// Write function removeDieSelection to remove die from selected dice tray, empty parameter list
function removeDieSelection() {
  // Declare variable diceValue set equal to function call parseInt, passing as arguments
  //   1.  keyword this, function getAttribute, passing 'die-value' as an argument
  //   2.  Radix 10

  let diceValue = parseInt(this.getAttribute("die-value"), 10);

  // Update variable currentDieIndex set equal to function call parseInt, passing as arguments
  //   1.  keyword this, function getAttribute, passing 'die-index' as an argument
  //   2.  Radix 10

  let currentDieIndex = parseInt(this.getAttribute("die-index"), 10);
  // Declare variable position set equal to array diceSelected, function indexOf, passing as an argument variable diceValue

  let position = diceSelected.indexOf(diceValue);
  // Update array diceSelected using function splice, passing arguments
  // 1.  variable position
  // 2.  value 1

  diceSelected.splice(position, 1);
  // Update array diceOnTable using function push, passing argument variable diceValue

  diceOnTable.push(diceValue);
  // Call function drawDieOnTable, passing arguments
  // 1.  variable diceValue
  // 2.  variable currentDieIndex
  drawDieOnTable(diceValue, currentDieIndex);

  // Remove the selected die from the DOM by referencing keyword this, object parentNode, function removeChild, passing argument keyword this

  this.parentNode.removeChild(this);
  // Call function updateDiceAnywhere

  updateDiceAnywhere();
  // Call function updateScoreTable
  updateScoreTable();
}

// Write function drawDieOnTable, parameter list includes
// 1.  value
// 2.  index
function drawDieOnTable(value, index) {
  // Declare variable dieDiv set equal to document, createElement, passing argument div

  let dieDiv = document.createElement("div");
  // Add to dieDiv attribute className += class die

  dieDiv.className = "die";
  // Append to variable diceArea, using function appendChild, passing argument dieDiv

  document.getElementById("diceArea").appendChild(dieDiv);
  // For variable dieDiv, call function setAttribute, passing arguments
  // 1.  'die-value'
  // 2.  parameter value

  dieDiv.setAttribute("die-value",value);
  // For variable dieDiv, call function setAttribute, passing arguments
  // 1.  'die-index'
  // 2.  parameter index

  dieDiv.setAttribute("die-index", index);
  // For variable dieDiv, add an event listener, passing arguments
  //  1.  explicit text 'click'
  //  2.  function selectDieFromTable
  //  3.  boolean false
  dieDiv.addEventListener("click", selectDieFromTable, false);
}

// Write function hideSpeculativeScores, empty parameter list
function hideSpeculativeScores() {
  // Write a looping construct to iterate through the length of the speculativeScoreTab array
  function hideSpeculativeScores() {
    for (let i = 0; i < speculativeScoreTab.length; i++) {
      speculativeScoreTab[i].style.display = "none";
    }
  }
  // In the speculativeScoreTab array, at the current index, set the attribute style.display equal to none
}

// Write function updateRoundNumber, empty parameter list
function updateRoundNumber() {
  // Update variable roundNumberElement, innerHTML, set equal to Math.min function, passing arguments
  // 1. variable roundNumber
  // 2. 13
  roundNumberElement.innerHTML = roundNumber;
  roundNumberElement.innerHTML = Math.min(roundNumber, 13);
  if (roundNumber > 13) {
    countFinalScore();
   
  } else {
    roundNumber += 1;
  }
}

// Write function resetTable, empty parameter list
function resetTable() {
  // Update array diceOnTable, set equal to an empty array

  diceOnTable = [];

  // Update array diceSelected, set equal to an empty array

  diceSelected = [];

  // Update array dieIndexHolder intitalized to values 0,1,2,3,4

  dieIndexHolder = [0, 1, 2, 3, 4];
  // Call function updateDiceAnywhere to reset dice in play array

  updateDiceAnywhere();

  // Update variable rollNumber, set equal to 0
  rollNumber = 0;

  // Call function checkRollNumber
  checkRollNumber();

  // Call function hideSpeculativeScores
  hideSpeculativeScores();

  // Call function updateRoundNumber to reset dice in play array
  updateRoundNumber();

  // Add an event listener to button rollButton, passing arguments
  // 1.  explicit text 'click'
  // 2.  function rollDie
  // 3.  boolean false
  rollButton.addEventListener("click", rollDie, false);

  // Update variable selectedDiceArea, innerHTML, set equal to an empty string
  selectedDiceArea.innerHTML = "";

  // Update variable diceArea, innerHTML, set equal to an empty string
  diceArea.innerHTML = "";
}

// Write function resetGame, empty parameter list
function resetGame() {
  // For object window.location call function reload, passing argument false
  window.location.reload(false);
}

// Write function updateSelectedDiceElements, empty parameter list
function updateSelectedDiceElements() {
  // If variable selectedDiceArea, innerHTML is not identical to an empty string
  if (selectedDiceArea.innerHTML !== "") {
    // Set variable selectedDiceElements equal to document, getElementsByClassName, passing argument die-selected
    selectedDiceElements = document.getElementsByClassName("die-selected");
  }
}

// Write function updateDiceAnywhere, empty parameter list
function updateDiceAnywhere() {
  // If array diceSelected is true
  // Set array diceAnywhere equal to array diceOnTable concatenated with array diceSelected
  if (diceSelected.length > 0) {
    diceAnywhere = diceOnTable.concat(diceSelected);
  } // Else

  // Set array diceAnywhere equal to array diceOnTable
  else {
    diceAnywhere = diceOnTable;
  }
}
