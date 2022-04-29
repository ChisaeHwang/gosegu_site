const strClick = document.querySelector(".STR_content > h3");
const strblock = document.querySelector(".STR_content");
const mainEven = document.querySelector(".book");
const cover = document.querySelector(".cover");
const pages = document.querySelectorAll(".page");
const right = document.querySelector(".angle-right");
const left = document.querySelector(".angle-left");
const angle = document.querySelector(".angle");
let count = -1;

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

strClick.addEventListener("click", function(){
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
})

mainEven.addEventListener("click", function(){
    cover.style.transform = "rotateX(20deg) rotateY(-180deg)";
    for(const i of countNum(pages)){
        pages[i].style.transform = "rotateX(20deg) rotateY(-180deg)";
        pages[i].style.zIndex = 3;
    }
    angle.style.opacity = 1;
})



right.addEventListener("click", function(){
    document.querySelector(".details").style.transform = "rotateY(-180deg)";
    document.querySelector(".details").style.zIndex = 1;

})

left.addEventListener("click", function(){
    document.querySelector(".details").style.transform = "rotateY(0deg)";
    document.querySelector(".details").style.zIndex = 0;
})