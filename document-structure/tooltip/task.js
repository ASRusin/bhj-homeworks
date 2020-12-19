const tooltips = [...document.getElementsByClassName("has-tooltip")];

let hasTooltip = document.createElement("div");
hasTooltip.className = "tooltip";
tooltips[0].appendChild(hasTooltip);

for (let i = 0; i < tooltips.length; i++) {
  tooltips[i].addEventListener("click", (e) => {
    e.preventDefault();
    const left = tooltips[i].getBoundingClientRect().left;
    const top = tooltips[i].getBoundingClientRect().bottom;
    if (hasTooltip.textContent === tooltips[i].getAttribute("title")) {
      hasTooltip.className = "tooltip";
    } else {
      hasTooltip.className = "tooltip tooltip_active";
    }
    hasTooltip.textContent = `${tooltips[i].getAttribute("title")}`;
    hasTooltip.style.left = left + "px";
    hasTooltip.style.top = top + "px";
  });
}
