const dropdownValue = [...document.getElementsByClassName("dropdown__value")];
const dropdownList = [...document.getElementsByClassName("dropdown__list")];
const dropdownItems = [...document.getElementsByClassName("dropdown__link")];

for (let i = 0; i < dropdownValue.length; i++) {
  dropdownValue[i].addEventListener("click", () => {
    for (let list of dropdownList) {
      if (list !== dropdownList[i]) {
        list.className = "dropdown__list";
      }
    }
    if (dropdownList[i].className.includes("dropdown__list_active")) {
      dropdownList[i].className = "dropdown__list";
    } else {
      dropdownList[i].className = "dropdown__list dropdown__list_active";
    }
  });
}

for (let i = 0; i < dropdownItems.length; i++) {
  dropdownItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    this.closest(".dropdown").querySelector(".dropdown__value").textContent = this.textContent;
    this.closest(".dropdown").querySelector(".dropdown__list").className = "dropdown__list";
  });
}
