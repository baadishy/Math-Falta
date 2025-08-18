let logOutBtn = document.querySelector('.links a:last-of-type')
logOutBtn.onclick = function() {
  replaceUser()
  localStorage.removeItem('theUser')
}

document.querySelector('.links a:first-of-type').onclick = function() {
  if (localStorage.theUser) {
    location.assign(`./grades-quizzez/grade-${JSON.parse(localStorage.theUser).grade}.html`)
  } else location.assign('./quizzes.html')
}

function replaceUser() {
  let users = JSON.parse(localStorage.users)
  let theUser = JSON.parse(localStorage.theUser)
  let updatedUsers = users.map(user => {
    return user.id === theUser.id ? theUser : user
  })
  localStorage.setItem('users', JSON.stringify(updatedUsers))
}

