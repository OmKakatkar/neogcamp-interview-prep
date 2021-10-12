// Here's an API, it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'

// 401 : https://unitube-server.herokuapp.com/playlists
// 404 : https://jsonplaceholder.typicode.com/dummyUsers

const btn401 = document.querySelector("#btn401");
const btn404 = document.querySelector("#btn404");
const output = document.querySelector("#output");

btn401.addEventListener("click", function () {
  fetch("https://unitube-server.herokuapp.com/playlists")
    .then((res) => (output.innerText = "you are not logged in"))
    .catch("404 Error");
});

btn404.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/dummyUsers")
    .then((res) => (output.innerText = "page not found"))
    .catch("404 Error");
});
