// Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.

const myText = document.querySelector("#myText");
const submitBtn = document.querySelector("#submit");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");

const output = document.querySelector("#output");

submitBtn.addEventListener("click", function () {
  output.innerText = myText.value;
});

h1.addEventListener("click", displayH1);
h2.addEventListener("click", displayH2);
h3.addEventListener("click", displayH3);

function displayH1() {
  output.innerHTML = `<h1>${output.textContent}</h1>`;
}
function displayH2() {
  output.innerHTML = `<h2>${output.textContent}</h2>`;
}
function displayH3() {
  output.innerHTML = `<h3>${output.textContent}</h3>`;
}
