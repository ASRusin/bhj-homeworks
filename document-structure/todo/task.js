const input = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
const form = document.getElementById("tasks__form");
const button = document.getElementById("tasks__add");

function addTask(e) {
  e.preventDefault();
  tasksList.innerHTML += `<div class="task"><div class="task__title">${input.value} </div><a href="#" class="task__remove">&times;</a></div>`;
  input.value = "";
  const remove = [...tasksList.getElementsByClassName("task__remove")];
  remove.forEach((x) => {
    x.addEventListener("click", () => {
      tasksList.querySelector(".task").remove();
    });
  });
}
window.addEventListener("keyup", (e) => {
  if ((e.code === "Enter" || e.code === "NumpadEnter") && input.value) {
    addTask(e);
  }
});

button.addEventListener("click", (e) => {
  addTask(e);
});
