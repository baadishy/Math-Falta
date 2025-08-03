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
      }, 15000);
    }, 10);
  }
  return part
}

let homeText = `👋 Hi there! I'm Hamada, your fun AI buddy 🤖  
Need anything? Just click me! 🖱️  
🏡 This is the Home Page — from here, you can jump to quizzes 🧠, explore your groups 👨‍👩‍👧‍👦, or log out 🚪  
🎯 To go back to where we started anytime, click the logo at the top-left corner 🔙`;


let groupsText = `👋 Hello! Ready to join your friends?  
Pick your grade 🎓 to see your awesome groups 👯‍♂️👯‍♀️`;


let quizzezText = `🧠 Time to test your brain power!  
Please choose your grade 📚 to start the quizzes 🎉`;


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
  }; max-width: 300px; margin-left: 20px; padding: 20px; border-radius: 20px; transition: all 1s ease-out; overflow-y: auto; margin-bottom: 20px;`;
  text.style.transform = "scale(0)";
  return text;
}
