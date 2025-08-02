let helper = document.querySelector(".helper");
window.onload = function () {
  setTimeout(function () {
    helper.style.cssText =
      "transform: translateX(0px); visibility: visible; opacity: 1; display: flex; align-items: center; justify-content: center";
    let text = addText();
    setTimeout(() => {
      text.style.cssText += "transform: scale(1)";
      setTimeout(() => {
        text.style.cssText += 'transform: scale(0)'
      }, 10000);
    }, 1000);
  }, 3000);
};

let helperText = `Hello, I am Hamada your AI assistant here.
If you want any thing just click me.`;

function addText() {
  let text = document.createElement("div");
  text.textContent = helperText;
  text.className = "helper-text";
  helper.append(text);
  text.style.cssText = `background-color: ${
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "#2c2c2c"
      : "#f3eaff"
  }; max-width: 300px; margin-left: 20px; padding: 20px; border-radius: 20px; transform: scale(0); transition: all 1s ease-out;`;
  return text;
}
