const tab = [...document.getElementsByClassName("tab")];
const tabContent = [...document.getElementsByClassName("tab__content")];

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", () => {
    const thisTab = [...tab[i].closest(".tab__navigation").querySelectorAll(".tab")];
    const thisTabContent = [...tabContent[i].closest(".tab__contents").querySelectorAll(".tab__content")];
    for (let i = 0; i < thisTab.length; i++) {
      thisTab[i].className = "tab";
      thisTabContent[i].className = "tab__content";
    }
    tab[i].className = "tab tab_active";
    tabContent[i].className = "tab__content tab__content_active";
  });
}
