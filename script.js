const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function checkUsername(){
  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }
}

function checkPassword(){
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
}

function checkConfirmPassword(){
  if (password2.value === "") {
    showError(password2, "Please confirm the password");
  } else {
    showSuccess(password2);
  }
}

function checkPasswordsMatch() {
  if (password.value !== password2.value) {
    showError(password2, "Passwords do not match");
  }
}

const form= document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); //when we click on submit, it just submits, but we don't want that, we want to hold for a while
  checkUsername();
  checkPassword();
  checkConfirmPassword();
  checkPasswordsMatch();
});