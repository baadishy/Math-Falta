let helper = document.querySelector(".helper");
window.onload = function () {
  let part = 0;
  setTimeout(function () {
    helper.style.cssText =
      "transform: translateX(0px); visibility: visible; opacity: 1; display: flex; align-items: center; justify-content: center";
    setTimeout(() => {
      part = showText(part);
      helper.querySelector('img').onclick = function() {
        part = showText(part)
      }
    }, 1000);
  }, 3000);
};
function showText(part) {
  if (!helper.querySelector(".helper-text")) {
    part++
    if (helperText.split('.').length < part) return part
    console.log(part)
    let text = addText(part);
    setTimeout(() => {
      text.style.transform = "scale(1)";
      setTimeout(() => {
        text.style.transform = "scale(0)";
        setTimeout(() => {
          text.remove();
        }, 1000);
      }, 10000);
    }, 10);
  }
  return part
}

let homeText = `Hello, I am Hamada your AI assistant here,
If you want any thing just click me. This is the Home page, From here you can go to the quizzez or the groups or you can log out, If you want to go back to main page just click the logo at the topleft corner`;
let quizzezText = `Hello, Please choose your grade to start the quizzez.`;
let groupsText = `Hello, Please choose your grade to see your grade groups`;
let helperText = location.href.includes("landing")
  ? homeText
  : location.href.includes("groups")
  ? groupsText
  : quizzezText;

function addText(part) {
  let text = document.createElement("div");
  text.textContent = helperText.split(".")[part - 1];
  text.className = "helper-text";
  helper.append(text);
  text.style.cssText = `background-color: ${
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "#2c2c2c"
      : "#f3eaff"
  }; max-width: 300px; margin-left: 20px; padding: 20px; border-radius: 20px; transition: all 1s ease-out;`;
  text.style.transform = "scale(0)";
  return text;
}
