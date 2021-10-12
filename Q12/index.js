// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.

const userPassword = document.querySelector("#userPassword");
const output = document.querySelector("#output");
const btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.disabled = true;
// userPassword.addEventListener('change', function () {
//     if(userPassword.value.length < 10) {
//         output.innerText = 'Error'
//     } else {
//         output.innerText = 'Success'
//     }
// })

// userPassword.addEventListener("change", function () {
//   if (userPassword.value.length < 10) {
//     userPassword.style.color = "red";
//   } else {
//     userPassword.style.color = "green";
//   }
// });

userPassword.addEventListener("change", function () {
  if (userPassword.value.length < 10) {
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
  }
});

btnSubmit.addEventListener("click", function () {
  console.log("Submitted");
});
