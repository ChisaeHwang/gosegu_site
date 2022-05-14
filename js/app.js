const strClick = document.querySelector(".STR_content > h3");
const strblock = document.querySelector(".STR_content");
const mainEven = document.querySelector(".book");
const cover = document.querySelector(".cover");
const pages = document.querySelectorAll(".page");
const nextPage = document.querySelectorAll(".nextPage");
const right = document.querySelector(".angle-right");
const left = document.querySelector(".angle-left");
const angle = document.querySelector(".angle");


function* countNum(i) {
    function* infinity(i = 0) {
         while (true) yield i++;
    }
    function* limit(i, num) {
         for (const a of num) {
           yield a;
           if (a == i) return;
         }
    }
    for (const a of limit(i.length - 1, infinity())) {
      yield a;
    }
} 

TweenMax.to( strClick , 1, {
    autoAlpha: 1,
    delay : Math.random()*.5,
    ease:Power3.easeInOut 
});

strClick.onclick = () => {
    TweenMax.to(strClick, .5, {
        opacity: 0,
        ease:Power3.easeInOut 
    })

    setTimeout(() => {
        strblock.remove();
    }, 1000);

    TweenMax.to(mainEven, .5, {
        autoAlpha: 1,
        delay : Math.random()*1,
        ease:Power3.easeInOut 
    })
}

mainEven.onclick = () => {
    cover.style.transform = "rotateX(0deg) rotateY(-180deg)";
    for(const i of countNum(pages)){
        pages[i].style.transform = "rotateX(0deg) rotateY(-180deg)";
        pages[i].style.zIndex = 3;
    }
    angle.style.opacity = 1;
}

let count = 0;
let Zcount = 0;

right.onclick = () => {
    count++
    Zcount = 10;
    nextPage[count].style.zIndex = Zcount;
    nextPage[count+1].style.zIndex = Zcount-1;
    nextPage[count-1].style.zIndex = 2;
    nextPage[count].style.transform = "rotateX(0deg) rotateY(-180deg)";
    console.log(count);
}
    
left.onclick = () => {
    Zcount = 10;
    nextPage[count].style.zIndex = Zcount;
    nextPage[count+1].style.zIndex = 2;
    nextPage[count-1].style.zIndex = Zcount-1;
    nextPage[count].style.transform = "rotateX(0deg) rotateY(0deg)";
    count--;
    console.log(count);
}