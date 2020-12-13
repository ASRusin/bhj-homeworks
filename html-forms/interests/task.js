const interests = [...document.getElementsByClassName("interest")];
for (let i = 0; i < interests.length; i++) {
  const firstCheck = interests[i].querySelectorAll(".interest__check");
  firstCheck[0].addEventListener("change", () => {
    if (firstCheck[0].checked === true) {
      firstCheck.forEach((x) => (x.checked = true));
    } else {
      firstCheck.forEach((x) => (x.checked = false));
    }
  });
}
