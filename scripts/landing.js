let logOutBtn = document.querySelector('.links a:last-of-type')
logOutBtn.onclick = function() {
  localStorage.removeItem('theUser')
}

document.querySelector('.links a:first-of-type').onclick = function() {
  if (localStorage.theUser) {
    location.assign(`./grades-quizzez/grade-${JSON.parse(localStorage.theUser).grade}.html`)
  } else location.assign('./quizzes.html')
}