const strClick = document.querySelector(".STR_content > h3");
const strblock = document.querySelector(".STR_content");
const mainEven = document.querySelector(".book");
const cover = document.querySelector(".cover");
const backCover = document.querySelector(".back-cover")
const pages = document.querySelectorAll(".page");
const nextPage = document.querySelectorAll(".nextPage");
const right = document.querySelector(".angle-right");
const left = document.querySelector(".angle-left");
const angle = document.querySelector(".angle");
const Subtitle = document.querySelector(".Subtitle");
const Subtitle_h3 = document.querySelector(".Subtitle > h3");
const Subtitle_first = document.querySelector(".first");
const Subtitle_second = document.querySelector(".second");
const Subtitle_last = document.querySelector(".last");
const iframe = document.querySelector('iframe');
let button = true;
 
import { rain } from "./rain.js";

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

strClick.onclick = () => {
    TweenMax.to(strClick, .5, {
        opacity: 0,
        ease:Power3.easeInOut 
    })

    TweenMax.to(strblock, .5, {
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
    setTimeout(() => cover.style.zIndex = -3, 1000);
    for(const i of countNum(pages)){
        pages[i].style.transform = "rotateX(0deg) rotateY(-180deg)"
        pages[i].style.zIndex = 3;
    }
    setTimeout(() => 
    angle.style.opacity = 1,
    angle.style.pointerEvents = "auto"
    , 1000);
   
    mainEven.style.cursor = "auto";

    rain.style.trasition = '2s';
    rain.style.opacity = "1"
}

const outro = () => {
    Subtitle.style.opacity = 1;
    Subtitle_first.style.opacity = 1;
    Subtitle.style.pointerEvents = "auto";
    setTimeout(() => {
        Subtitle.style.cursor = "pointer";
    }, 1500);
}

function button_click() {
    const node = document.querySelector('#audio_play');
    node.volume = 1;
    node.play();
}

let title_count = 1;
Subtitle.onclick = () => {
    
    if(title_count == 1){
        Subtitle_second.style.opacity = 1;
        Subtitle_first.style.opacity = 0;
    }

    if(title_count == 2){
        button_click();
        Subtitle_last.style.opacity = 1;
        Subtitle.style.cursor = "auto";
        setTimeout(() => {
            iframe.style.pointerEvents = "auto";
            iframe.style.opacity = 1;
        }, 1500);
    }

    title_count++;
}



let count = 0;
let Zcount = 0;

    right.onclick = () => {
        if(count < 7){
            if(button){
                button = false
                count++
                Zcount = 10;
                nextPage[count].style.zIndex = Zcount;
                nextPage[count+1].style.zIndex = Zcount-1;
                nextPage[count-1].style.zIndex = 2;
                nextPage[count].style.transform = "rotateX(0deg) rotateY(-180deg)";
                console.log(count);
                setTimeout(() => button = true, 1000);
                
                if (count == 7){
                    backCover.style.zIndex = 20;
                }
            }

        } else if (count == 7){
            count++
            backCover.style.zIndex = 20;
            backCover.style.transform = "rotateX(0deg) rotateY(-180deg)";

            setTimeout(() => {
                TweenMax.to(mainEven, 1.5, {
                    opacity: 0,
                    ease:Power3.easeInOut 
                })
            }, 1500);

            TweenMax.to(angle, 1.5, {
                opacity: 0,
                ease:Power3.easeInOut 
            })
 
            setTimeout(() => {
                outro();
            }, 2500);

            setTimeout(() => {
                angle.remove();
            }, 2000);
        }
    }

        
    left.onclick = () => {
        if(count > 0){
            if(button){
                button = false
                Zcount = 10;
                nextPage[count].style.zIndex = Zcount;
                nextPage[count+1].style.zIndex = 2;
                nextPage[count-1].style.zIndex = Zcount-1;
                nextPage[count].style.transform = "rotateX(0deg) rotateY(0deg)";
                count--;
                console.log(count);
                setTimeout(() => button = true, 1000);
                if(count < 7){
                    backCover.style.zIndex = -10;
                }
            }
        }
    }

