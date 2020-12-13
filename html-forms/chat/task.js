const chatWidget = document.querySelector(".chat-widget");
const widgetSide = document.querySelector(".chat-widget__side");
widgetSide.addEventListener("click", () => {
  chatWidget.classList.toggle("chat-widget_active");
});

const input = document.getElementById("chat-widget__input");

const messages = [
  "Кто здесь???",
  "По одному пожалуйста, я не справляюсь",
  "Что случилось? Где я? Что я здесь делаю?",
  "Abiens abi!",
  "Alea jacta est.",
  "С кем поведешься, так тебе и надо.",
  "Меня постоянно преследуют умные мысли, но я быстрее...",
  "Попозже отвечу, я сейчас не могу материться.",
  "万事开头难",
  "Делу время и потехе час",
];

const messageChat = document.getElementById("chat-widget__messages");

function answer() {
  const index = getRandom(0, messages.length - 1);
  return messages[index];
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getTime() {
  const time = new Date();
  return `${("0" + time.getHours()).slice(-2)}:${("0" + time.getMinutes()).slice(-2)}`;
}
const chatBlock = document.querySelector(".chat-widget__messages-container");
window.addEventListener("keyup", (e) => {
  if ((e.code === "Enter" || e.code === "NumpadEnter") && input.value) {
    messageChat.innerHTML += `<div class="message message_client">
      <div class="message__time">${getTime()}</div>
      <div class="message__text">
        ${input.value}
      </div>
    </div>`;
    input.value = "";
    messageChat.innerHTML += `<div class="message">
    <div class="message__time">${getTime()}</div>
    <div class="message__text">
      ${answer()}
    </div>
  </div>`;    
  }
});
