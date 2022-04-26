const strClick = document.querySelector(".STR_content > h3");
const strblock = document.querySelector(".STR_content")
const mainEven = document.querySelector(".main_content")

TweenMax.from( strClick , 1, {
    autoAlpha: 0,
    delay : Math.random()*.5,
    ease:Power3.easeInOut 
});

TweenMax.to(mainEven, 0, {
    autoAlpha: 0,
})

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