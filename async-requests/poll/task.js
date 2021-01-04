const title = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.setRequestHeader("Content-type", "application/json");
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const response = JSON.parse(xhr.responseText);
    title.innerHTML = response.data.title;

    response.data.answers.forEach((e) => {
      let button = document.createElement("button");
      button.className = "poll__answer";
      button.textContent = e;
      answers.appendChild(button);
      button.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Спасибо, ваш голос засчитан!");
      });
    });
  }
});
