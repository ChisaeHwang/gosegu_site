const strClick = document.querySelector(".STR_content > h3");
const strblock = document.querySelector(".STR_content");
const mainEven = document.querySelector(".main_content");
const mainCard = document.querySelector(".main_content > .card");
const right = document.querySelector(".angle-right");
const left = document.querySelector(".angle-left");
const angle = document.querySelector(".angle");
const Cards = document.querySelectorAll("#Card");
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

mainCard.addEventListener("click", function(){
    this.style.transform = "translateX(50%)";
    this.style.cursor = "auto";
    document.querySelector(".main_content > .card > .imgBox").style.transform = "rotateY(-180deg)";

    TweenMax.to(angle, .5, {
        autoAlpha: 1,
        ease:Power3.easeInOut 
    })
})

right.addEventListener("click", function(){
    document.querySelector(".details").style.transform = "rotateY(-180deg)";
    document.querySelector(".details").style.zIndex = 1;

})

left.addEventListener("click", function(){
    document.querySelector(".details").style.transform = "rotateY(0deg)";
    document.querySelector(".details").style.zIndex = 0;
})