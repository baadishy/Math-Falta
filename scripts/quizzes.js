if (localStorage.theUser) {
  document.querySelector('.links a').remove()
}

let [first, second, third, fourth, fifth] = document.querySelectorAll('ul li a')

document.querySelectorAll('ul li').forEach(element => {
  element.onclick = function() {
    localStorage.setItem('quiz-type', element.querySelector('a').textContent)
    localStorage.setItem('grade', `${location.pathname.split('/').pop().split('.')[0]}`)
    location.href = './the-quizz.html'
  }
})

if (location.href.includes('grade-5.html')) {
  first.textContent = 'Whole Numbers'
  second.textContent = 'Fractions & Decimals'
  third.textContent = 'Factors & Multiples'
  fourth.textContent = 'Geometry'
  fifth.textContent = 'Data & Statistics'
}