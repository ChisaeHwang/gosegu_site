let amount = 10;
let rain = document.querySelector('.rain');
let i =  0;

while(i < amount){
    let drop = document.createElement('i');
    rain.appendChild(drop);
    i++;
}