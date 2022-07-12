let amount = 225;
export const rain = document.querySelector('.rain')
let i =  0;
let windowWidth;

while(i < amount){
    let drop = document.createElement('i');

    let posX = Math.floor(Math.random() * 3000);
    let delay = Math.random() * -20;
    let duration = Math.random() * 50;

    drop.style.left = posX + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = 1 + duration + 's';
    
    rain.appendChild(drop);
    i++;
}

