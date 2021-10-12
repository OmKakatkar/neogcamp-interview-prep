// Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.

const myText = document.querySelector("#myText");
const submitBtn = document.querySelector("#submit");
const output = document.querySelector("#output");

const increaseButton = document.querySelector("#plus");
const decreaseButton = document.querySelector("#minus");

submitBtn.addEventListener("click", function gerInput() {
  output.innerText = myText.value;
});

increaseButton.addEventListener("click", increaseFontSize);
decreaseButton.addEventListener("click", decreaseFontSize);

function increaseFontSize() {
  let currentSize = parseFloat(
    window.getComputedStyle(output, null).getPropertyValue("font-size")
  );
  output.style.fontSize = `${currentSize + 2}px`;
}

function decreaseFontSize() {
  let currentSize = parseFloat(
    window.getComputedStyle(output, null).getPropertyValue("font-size")
  );
  output.style.fontSize = `${currentSize - 2}px`;
}
