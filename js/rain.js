let amount = 150;
export const rain = document.querySelector('.rain')
let i =  0;
let windowWidth;

while(i < amount){
    let drop = document.createElement('i');

    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * 3000);
    let delay = Math.random() * -20;
    let duration = Math.random() * 100;

    drop.style.width = 0.2 + size + 'px';
    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';
    
    rain.appendChild(drop);
    i++;
}


