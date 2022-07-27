import profile from "../../db.json" assert { type: "json" };
let email = document.querySelector("#login-email");
let password = document.querySelector("#login-pass");
const errorEmail = document.querySelector(".invalid-email-message");
const emailMessage = document.querySelector(".empty-email-message");
const buttonToRecord = document.querySelector("#login-button-record");
let buttonEntry = document.querySelector("#login-button-entry");
let buttonRecuperate = document.querySelector("#login-button-recuperate");
let passwordCheck = false;
let emailCheck = false;
let check = false
let login = document.querySelector("#login-button");

email.addEventListener("input", () => {
  email.classList.remove("error-input");
  for (let i = 0; i < profile.profile.length; i++) {
    if (email.value === profile.profile[i].email) {
      password.addEventListener("input", () => {
        password.classList.remove("error-input");
        if (password.value === profile.profile[i].password) {
            passwordCheck = true;
            check=true;
        } else passwordCheck = false;
      });

      emailCheck = true;
    } else emailCheck = false;
  }
});

buttonEntry.addEventListener("click", (e) => {
  e.preventDefault();
    if (check== true) {
    login.textContent = "Logout";
    login.classList.add("logout");
    // window.open("index.html", "_self");
  }else if (emailCheck === false) {
    email.classList.add("error-input");
    console.log("mail " + email.value);
  } else if (passwordCheck === false) {
    password.classList.add("error-input");
    console.log("mail " + email.value);
  }
});
buttonToRecord.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "../screens/record-client.html";
});
buttonRecuperate.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "../screens/recuperate-account.html";
  console.log("123");
});
