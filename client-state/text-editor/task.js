const editor = document.getElementById("editor");

editor.addEventListener("input", () => {
  localStorage.text = editor.value;
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.text) {
    editor.value = localStorage.text;
  }
});

const button = document.getElementById("button");

button.addEventListener("click", () => {
  editor.value = "";
  localStorage.clear();
});
