// Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.

const myText = document.querySelector("#my-text");
const submitBtn = document.querySelector("#sub-txt");
const redBtn = document.querySelector("#red");
const greenBtn = document.querySelector("#green");
const blueBtn = document.querySelector("#blue");

const outputDiv = document.querySelector("#output");

outputDiv.style.fontSize = "32px"

submitBtn.addEventListener("click", function () {
outputDiv.innerText = myText.value;
changeColor("black")
});

redBtn.addEventListener("click", function () {
  changeColor("red");
});

blueBtn.addEventListener("click", function () {
  changeColor("blue");
});

greenBtn.addEventListener("click", function () {
  changeColor("green");
});

function changeColor(clr) {
  outputDiv.style.color = clr;
}
