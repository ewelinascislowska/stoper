const btnTimer = document.querySelector('.timer');
const btnReset = document.querySelector('.reset');
const div = document.querySelector('div.time div');

let time = 0;
let active = false;
let idI;
const timer = () => {
    if (!active) {
        active = !active;
        btnTimer.textContent = 'Pauza';
        idI = setInterval(start, 10);
    } else {
        active = !active;
        btnTimer.textContent = 'Start';
        clearInterval(idI);
    }
}

const start = () => {
    time++;
    div.textContent = (time / 100).toFixed(2);
}

const resetTime = () => {
    time = 0;
    div.textContent = "---";
    active = false;
    btnTimer.textContent = 'Start';
    clearInterval(idI);

}
btnReset.addEventListener("click", resetTime);
btnTimer.addEventListener('click', timer);