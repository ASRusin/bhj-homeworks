const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
function reset() {
    dead.textContent = '0';
    lost.textContent = '0';
}
function getHole(index) {
   return document.getElementById(`hole${index}`)
};
function isWin() {
    if (this.className.includes('hole_has-mole') === true) {
        if (dead.textContent === '10') {
            alert('Вы победили!!!')
            reset();
        } else {
            dead.textContent = Number(dead.textContent) + 1;
        };
                
    } else {
        if (lost.textContent === '5') {
            alert('Вы проиграли!!!')
            reset();
        } else {
            lost.textContent = Number(lost.textContent) + 1;
        };
    };
};
for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = isWin;
}