/**
 ##* active state for each li +class in container for themes
*function to store numbers in an array
function to show this array in the screen
if there is not any numer and pressed (opeartor) it shows 0 before it

* regular exp for screen(100,000,000,000)
 */
// active and themes
let links = document.querySelectorAll(".themes-switcher li");
let container = document.querySelector("main .container");

links.forEach((li) => {
  li.addEventListener("click", (e) => {
    links.forEach((list) => {
      list.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    container.dataset.theme = `${e.currentTarget.dataset.theme}`;
  });
});

let numBtns = document.querySelectorAll(".calculator-btns .btn");
let operators = document.querySelectorAll(".calculator-btns .operator");
let result = document.querySelector(".result-screen");

numBtns.forEach((num) => {
  num.addEventListener("click", (e) => {
    displayResult(e.currentTarget.value);
  });
});

function displayResult(input) {
  result.value += input;
}
let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", clearDisplay);
function clearDisplay() {
  result.value = "";
}
let equalBtn = document.querySelector(".equal-btn");
equalBtn.addEventListener("click", calculate);
function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}
let deleteBtn = document.querySelector(".del");
deleteBtn.addEventListener("click", deleteLast);
function deleteLast() {
  result.value = result.value.slice(0, -1);
}
