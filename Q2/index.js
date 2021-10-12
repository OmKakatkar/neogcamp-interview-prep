// Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice.

const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#subtract");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const output = document.querySelector("#output");

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function add() {
  let a = Number(num1.value);
  let b = Number(num2.value);
  output.innerText = a + b;
}
function subtract() {
  let a = Number(num1.value);
  let b = Number(num2.value);
  output.innerText = a - b;
}
function multiply() {
  let a = Number(num1.value);
  let b = Number(num2.value);
  output.innerText = a * b;
}

function divide() {
  let a = Number(num1.value);
  let b = Number(num2.value);
  output.innerText = a / b;
}
