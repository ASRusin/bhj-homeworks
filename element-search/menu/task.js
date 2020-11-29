const menu = document.querySelectorAll('.menu__link');
const len = menu.length;
for(let i = 0; i < len; i++) {   
    menu[i].onclick = function() { 
        const menuActive = document.querySelector('.menu_active');
        if (menuActive) menuActive.className = 'menu menu_sub';
        const menuItem = menu[i].closest('.menu__item');        
        if (menuItem.querySelector('.menu .menu_sub')) {
            menuItem.querySelector('.menu .menu_sub').className = 'menu menu_sub menu_active';
            return false;
        }
    }
}