// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter_number = 0;

const increment = "increment";
const decrement = "decrement";
const counter = "counter";
const reset = "reset";
const header = "CMPM 121 Project";

document.body.innerHTML = `
    <h1>${header}</h1>
    <p>Counter: <span id=${counter}>0</span></p>
    <button id=${increment}>Click Me!</button>
    <button id=${decrement}>Decrement</button>
    <button id=${reset}>Reset</button>
  `;

const increment_button = document.getElementById(increment);
const decrement_button = document.getElementById(decrement);
const reset_button = document.getElementById(reset);
const counter_element = document.getElementById(counter);

function updateDocument() {
  if (!counter_element) return;
  counter_element.innerHTML = `${counter_number}`;
  // Update the document title
  document.title = "Clicked " + counter_number;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = counter_number % 2
    ? "pink"
    : "lightblue";
}

function setup() {
  // Check if any element is missing, then exit the function
  if (
    !increment_button || !decrement_button || !reset_button || !counter_element
  ) return;

  // Add click event to the increment button
  increment_button.addEventListener("click", () => {
    // Increase the counter by 1
    counter_number++;
    updateDocument();
  });

  // Add click event to the decrement button
  decrement_button.addEventListener("click", () => {
    // Decrease the counter by 1
    counter_number--;
    updateDocument();
  });

  // Add click event to the reset button
  reset_button.addEventListener("click", () => {
    // Reset the counter to 0
    counter_number = 0;
    updateDocument();
  });
}

setup();
