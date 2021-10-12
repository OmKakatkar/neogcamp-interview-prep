// Create a web app with a button loaded. Show a text loading... on a web app. However, hide it if I click on the button loaded.

const loadedBtn = document.querySelector('#loaded')
const loadText = document.querySelector('#loadingText')

loadedBtn.addEventListener('click', loadClickHandler)

function loadClickHandler() {
    loadText.style.display = 'none'
}