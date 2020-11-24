const timer = document.getElementById('timer');
const timerID = setInterval(() =>{
    if (Number(timer.textContent) > 10) {
        timer.textContent = Number(timer.textContent) - 1;
    } else if (Number(timer.textContent) === 0) {
        clearInterval(timerID)
        alert('Вы победили в конкурсе!!!')         
    } else {
        timer.textContent = `0${Number(timer.textContent) - 1}`;        
    }
    
}, 1000)