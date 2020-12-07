const reveal = document.getElementsByClassName("reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveal.length; i++) {
    if (reveal[i].getBoundingClientRect().top < window.innerHeight) {
      if (reveal[i].getBoundingClientRect().top > 0) {
        reveal[i].className = "reveal reveal_active";
      } else {
        reveal[i].className = "reveal";
      }
    }
  }
});
