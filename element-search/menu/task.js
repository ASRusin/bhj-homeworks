const menu = document.querySelectorAll(".menu__link");
const len = menu.length;
for (let i = 0; i < len; i++) {
  const menuItem = menu[i].closest(".menu__item");
  menu[i].onclick = function () {
    const menuActive = document.querySelector(".menu_active");

    if (menuItem.querySelector(".menu_active")) {
      menuItem.querySelector(".menu .menu_sub").className = "menu menu_sub";
      return false;
    } else if (menuItem.querySelector(".menu .menu_sub")) {
      menuItem.querySelector(".menu .menu_sub").className = "menu menu_sub menu_active";
      if (menuActive) {
        menuActive.className = "menu menu_sub";
      }
      return false;
    }
  };
}
