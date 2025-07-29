let logOutBtn = document.querySelector('.links a:last-of-type')
logOutBtn.onclick = function() {
  localStorage.removeItem('theUser')
}

