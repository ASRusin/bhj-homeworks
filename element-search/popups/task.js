const main = document.getElementById("modal_main");
main.className = "modal modal_active";
main.querySelector("div.modal__close").onclick = () => (main.className = "modal");
const success = document.getElementById("modal_success");
main.querySelector("a.show-success").onclick = () => {
  main.className = "modal";
  success.className = "modal modal_active";
};
success.querySelector("div.modal__close").onclick = () => (success.className = "modal");
