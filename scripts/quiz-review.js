let theUser = JSON.parse(localStorage.theUser);
let theQuiz = theUser.quizzes.reduce((acc, current) => {
  return acc.topic === localStorage["quiz-type"] ? acc : current;
});
let questions = theQuiz.doneQuizzes;

document.querySelector(
  "#score"
).textContent = `${theQuiz.score} / ${theQuiz.doneQuizzes.length}`;

questions.forEach((ques, i) => {
  reviewQuestion(ques, i);
});

function reviewQuestion(ques, i) {
  // let questionContainer = document.createElement('div')
  // let questionElement = document.createElement('div')
  // let answerContainer = document.createElement('div')
  // let answerElement = document.createElement('span')
  let { question, userAnswer, answer, isCorrect } = ques;

  document.querySelector(
    ".review-list"
  ).innerHTML += `<div class="review-question">
          <div class="question">${i + 1}. ${question}</div>
          <div class="answer">
            Your answer: <span class="${isCorrect ? "correct" : "incorrect"}">${
    userAnswer || "No answer"
  }</span>
            <span class="result">${
              isCorrect ? "✔️ Correct" : "❌ Incorrect"
            }</span>
            <div class="correct-answer">Correct answer: <strong>${
              answer
            }</strong></div>
          </div>
        </div>
        <hr>
      `;
}
console.log(theQuiz.topic)
document.querySelector('topic').textContent = theQuiz.topic