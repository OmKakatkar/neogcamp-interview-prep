// Here's an API. (https://lessonfourapi.a29omom.repl.co/translate/yoda.json)
// Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc.

const inputText = document.querySelector("#inputText");
const btnFetch = document.querySelector("#btnFetch");
const outputValue = document.querySelector("#outputValue");

btnFetch.addEventListener("click", fetchData);

function getFetchUrl(str) {
  return `https://lessonfourapi.a29omom.repl.co/translate/yoda.json?text=${str}`;
}

function fetchData() {
  fetch(getFetchUrl(inputText.value))
    .then((res) => res.json())
    .then((json) => (outputValue.innerText = json.contents.translated))
    .catch("Error Occured");
}
