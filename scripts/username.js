window.onload = function() {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
let usernamePart = document.querySelector('.username')
usernamePart.textContent = JSON.parse(localStorage.getItem('theUser')).username