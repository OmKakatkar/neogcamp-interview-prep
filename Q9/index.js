// Here's an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message.
// https://unitube-server.herokuapp.com/playlists

const btnFetch = document.querySelector("#btnFetch");
const output = document.querySelector("#output");

btnFetch.addEventListener("click", fetchApi);

function fetchApi() {
  fetch("https://unitube-server.herokuapp.com/playlists")
    .then((res) => res.json())
    .then((json) => (output.innerText = json.message));
}
