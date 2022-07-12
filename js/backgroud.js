let amount = 250;
const Cross = document.querySelector('.main_background')
let i =  0;
let windowWidth;

while(i < amount){
    let drop = document.createElement('i');

    let posX = Math.floor(Math.random() * 4000);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';
    
    Cross.appendChild(drop);
    i++;
}


