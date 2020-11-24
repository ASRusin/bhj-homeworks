const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const speed = document.getElementById('clicker__speed');
let firstClick = 0;
cookie.onclick = function cookieClick() {
    counter.textContent = Number(counter.textContent) + 1;
    if (Number(counter.textContent) % 2 === 0){
        cookie.width = 200
    } else {
        cookie.width = 300
    }
    let secondClick = new Date().getSeconds() + ((new Date().getMilliseconds()) / 1000).toFixed(1);
    const speedClick = 1 / (secondClick - firstClick);
    speed.textContent = speedClick.toFixed(2);
    firstClick = secondClick; 
}
