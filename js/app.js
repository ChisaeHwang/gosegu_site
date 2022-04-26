const strClick = document.querySelector(".STR_content");

TweenMax.from( strClick , 1, {
    autoAlpha:0,
    // scale:4,
    // rotate: Math.random()*360,
    delay : Math.random()*1,
    ease:Power3.easeInOut 
});

strClick.addEventListener("click", function(){
    TweenMax.to(strClick, .5, {
        opacity: 0,
        ease:Power3.easeInOut 
    })

    setTimeout(() => {
        strClick.remove();
    }, 1000);
})