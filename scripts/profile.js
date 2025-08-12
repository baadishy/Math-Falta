let user = JSON.parse(localStorage.getItem('theUser'));

let fields = document.getElementsByClassName('value')

fields[0].textContent = user.username
fields[1].textContent = user.grade
fields[2].textContent = user.parentNumber
fields[3].textContent = user.email
fields[4].textContent = user.password

