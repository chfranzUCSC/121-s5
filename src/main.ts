// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter_number = 0;

// These constants are for button IDs and heading text
const a = "increment", b = "counter", h = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;
  // this seems hard to update later

  // these probably should be const, but these variable names are dire
  // Get the increment button element from the document
  const increment_button = document.getElementById(a);
  // Get the decrement button element from the document
  const decrement_button = document.getElementById("dec");
  // Get the reset button element from the document
  const reset_button = document.getElementById("reset");
  // Get the counter span element from the document
  const counter_element = document.getElementById(b);

  // what!!!!!!!!
  // Check if any element is missing, then exit the function
  if (
    !increment_button || !decrement_button || !reset_button || !counter_element
  ) return;

  // Add click event to the increment button
  increment_button.addEventListener("click", () => {
    // Increase the counter by 1
    counter_number++;
    counter_element.innerHTML = `${counter_number}`;
    document.title = "Clicked " + counter_number;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter_number % 2
      ? "pink"
      : "lightblue";
  });

  // Add click event to the decrement button
  decrement_button.addEventListener("click", () => {
    // Decrease the counter by 1
    counter_number--;
    // Update the counter display
    counter_element.innerHTML = `${counter_number}`;
    // Update the document title
    document.title = "Clicked " + counter_number;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter_number % 2
      ? "pink"
      : "lightblue";
  });

  // Add click event to the reset button
  reset_button.addEventListener("click", () => {
    // Reset the counter to 0
    counter_number = 0;
    // Update the counter display
    counter_element.innerHTML = `${counter_number}`;
    // Update the document title
    document.title = "Clicked " + counter_number;
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter_number % 2
      ? "pink"
      : "lightblue";
  });
}

setup();
