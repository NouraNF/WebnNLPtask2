const up = document.getElementById('up');
const leftb = document.getElementById('left');
const startb= document.getElementById('start');
const rightb = document.getElementById('right');
const down = document.getElementById('down');
const stopb = document.getElementById('stop');
const controllerarm = document.querySelector('.control');

up.addEventListener('click', () => {
    controllerarm.style.transform = 'rotate(-45deg)';
});

leftb.addEventListener('click', () => {
    controllerarm.style.transform = 'rotate(-90deg)';
});

startb.addEventListener('click', () => {
    controllerarm.style.transform = 'rotate(0deg)';
});

rightb.addEventListener('click', () => {
    controllerarm.style.transform = 'rotate(90deg)';
});

down.addEventListener('click', () => {
    controllerarm.style.transform = 'rotate(45deg)';
});

stopb.addEventListener('click', () => {
    controllerarm.style.transform = 'rotate(0deg)';
});