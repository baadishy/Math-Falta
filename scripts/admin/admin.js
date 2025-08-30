// let [viewUsers, viewQuizzes, viewGroups] = document.querySelectorAll(".view");
// let [addUsers, addQuizzes, addGroups] = document.querySelectorAll(".add");
// let [editUsers, editQuizzes, editGroups] = document.querySelectorAll(".edit");
// let [deleteUsers, deleteQuizzes, deleteGroups] =
//   document.querySelectorAll(".delete");

// document.querySelectorAll(".view").forEach((element) => {
//   element.onclick = function () {
//     localStorage.setItem("type", this.textContent.split(" ")[2]);
//   };
// });
// document.querySelectorAll(".add").forEach((element) => {
//   element.onclick = function () {
//     localStorage.setItem("type", this.textContent.split(" ")[2]);
//   };
// });
// document.querySelectorAll(".edit").forEach((element) => {
//   element.onclick = function () {
//     localStorage.setItem("type", this.textContent.split(" ")[1]);
//   };
// });
// document.querySelectorAll(".delete").forEach((element) => {
//   element.onclick = function () {
//     localStorage.setItem("type", this.textContent.split(" ")[1]);
//   };
// });

document.querySelector(".links a").onclick = function () {
  location.replace("/Math-Falta/html/home.html");
};
