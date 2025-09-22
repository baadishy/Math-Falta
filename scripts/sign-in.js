// import {createPopUp} from './sign-up.js'
let form = document.forms[0];
let username = form.username;
let password = form.password;
let invalid = document.createElement("span");
invalid.append(document.createTextNode("This is invalid"));
invalid.style.cssText = "color: red;";
let users = JSON.parse(localStorage.getItem("users")) || [];
let adminPageName = "nnqgx218wbrlkph";

window.onload = function () {
  username.focus();
};
function checkInputValidity() {
  function checkValidation(element) {
    if (element === username) {
      if (/\w{3,}/gi.test(element.value)) {
        console.log("username done");
        invalid.remove();
        return true;
      } else {
        element.after(invalid);
        return false;
      }
    } else if (element === password) {
      if (/\w{8,}/gi.test(element.value)) {
        console.log("password done");
        invalid.remove();
        return true;
      } else {
        element.after(invalid);
        return false;
      }
    }
  }
  [username, password].forEach(function (element) {
    element.onkeyup = function (event) {
      checkValidation(element);
    };
    // element.onblur = function () {
    //   if (!checkValidation(element)) {
    //     element.focus();
    //   }
    // };
  });
}

checkInputValidity();

function checkUser() {
  let user = users.filter(
    (element) =>
      element.username.trim() === username.value.trim() &&
      element.password === password.value
  );
  return user;
}


form.onsubmit = function (event) {
  let matchedUser = checkUser();
  if (matchedUser.length !== 0) {
    if (matchedUser[0].title === "admin") {
      event.preventDefault();
      location.href = `../html/admin/${adminPageName}.html`;
      return;
    }
    event.preventDefault();
    createPopUp();
    localStorage.setItem("theUser", JSON.stringify(matchedUser[0]));
    setTimeout(function () {
      location.assign("../html/landing.html");
    }, 3000);
  } else {
    event.preventDefault();
    alert("username or password not found");
  }
  // window.location.href = "../html/landing.html";
};
