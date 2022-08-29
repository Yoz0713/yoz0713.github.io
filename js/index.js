// banner 輪播及進場動畫
let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0]
let swiper1 = new Swiper(".swiper1",{
    speed:2000,
    loop:true,
    autoplay:{
        delay:6000
    },
    autoplayDisableOnInteraction: false,
    effect : 'fade',
    fadeEffect: {
      crossFade: true,
    },
    on: {
        slideChangeTransitionStart: function(){
            if(this.realIndex == 0){
                next.classList.remove("navigate")
                banner1In()
                prev.classList.add("navigate")
                
            }else if(this.realIndex == 1){
                prev.classList.remove("navigate")
                banner2In()
                next.classList.add("navigate")
            }
           
     
        },
      },
   
})

function banner1In(){
    let gg = gsap.timeline();

    gg.fromTo(".swiper1 .home-img1",{
        scale:1.3,
    },{
        scale:1,
        duration:6,
    })

   
}
function banner2In(){
    let gg = gsap.timeline();
    gg.fromTo(".swiper1 .home-img2",{
        scale:1.3,
    },{
        scale:1,
        duration:6,
    })
}
prev.onclick = function(){
    swiper1.slideTo(1);

}
next.onclick = function(){
    swiper1.slideTo(2);

}

// second-page line-grow animation
let li = document.querySelectorAll(".switchImg li");
let switchImg = document.querySelectorAll(".home-second-page-bottom-left-img img")
for(let i = 0 ; i <li.length ; i++){
    li[i].onclick = function(e){
        let lineSwitch = document.getElementsByClassName("lineSwitch")[0]
        lineSwitch.classList.remove("lineSwitch")
        this.classList.add("lineSwitch")
        switchImg.forEach((i)=>{
            i.style.opacity="0"
        })
        switchImg[i].style.opacity="1"
    }
   
}

// second-page line-grow animation
// banner title in
function bannerTitleIn(){
    let gg =gsap.timeline();
    gg.fromTo(".home-first-page-title h1",{
        opacity:0
    },{
        opacity:1,
        duration:1,
        delay:4
    }).fromTo(".home-first-page-title p",{
        opacity:0
    },{
        opacity:1,
        duration:1,
      
    })
}
bannerTitleIn()

// banner title in

//page title in 
function pageTitleIn(page,gap){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-${page}-page-top`,
            start:"top center"
        }
    })
    gg.fromTo(`.home-${page}-page-top h3`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    }).fromTo(`.home-${page}-page-top h2`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    },`${gap}`).fromTo(`.home-${page}-page-top .text-decoration`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    },`${gap}`).fromTo(`.home-${page}-page-top .text-decoration .line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<+0.5")
}
pageTitleIn("second","<+0.3")
pageTitleIn("third","<+0.3")
// page title in

// second-page-right in

function seondPageRight(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-second-page-top`,
            start:"top bottom"
        }
    })
    gg.fromTo(".home-second-page-bottom-right > svg polyline",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 500,
        duration:3,
    }).fromTo(".home-second-page-bottom-right-para > h3",{
        opacity:0,
        y:30,
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<+1").fromTo(".home-second-page-bottom-right-para > svg",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<+0.5").fromTo(".home-second-page-bottom-right-para > svg line",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 1800,
        duration:1.2,
      
    },"<+0.5").fromTo(".home-second-page-bottom-right-para p",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<").fromTo(".home-second-page-bottom-right-para .readmore",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<")
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-second-page-top`,
            start:"top bottom",
            toggleActions:"play none none reverse"
        }
    })
    gg2.fromTo(".home-first-page-shadow",{
      
    },{
 
        duration:0.8,
        opacity:0,
        height:0
    },"<").fromTo(".home-first-page .home-img1",{
        filter:"brightness(1)",
    },{
        filter:"brightness(0.3)",
        duration:0.8,
    },"<").fromTo(".home-first-page .home-img2",{
        filter:"brightness(1)",
    },{
        filter:"brightness(0.3)",
        duration:0.8,
    },"<")

    let gg3 = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-second-page-top`,
            start:"top bottom"
        }
    })

    gg3.fromTo(".switchImg :nth-child(1)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    }).fromTo(".switchImg :nth-child(2)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.3").fromTo(".switchImg :nth-child(3)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.3").fromTo(".switchImg :nth-child(4)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.3").fromTo(".switchImg :nth-child(5)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.3")
}
seondPageRight()

// third-page
function thirdPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".home-third-page",
            start:"top center",
          
       
        }
    })

    gg.fromTo(".home-third-page .li1",{
        y:30,
        opacity:0
    },{
        delay:1,
        duration:0.8,
        opacity:1,
        y:0
    }).fromTo(".home-third-page .li2",{
        y:30,
        opacity:0
    },{
        duration:0.8,
        opacity:1,
        y:0
    },"<+0.3").fromTo(".home-third-page .li3",{
        y:30,
        opacity:0
    },{
        duration:0.8,
        opacity:1,
        y:0
    },"<+0.3").fromTo(".home-third-page .readmore",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    },"<+0.3").fromTo(".path1",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 800,
        duration:2,
    },"<+0.3").fromTo(".path2",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 800,
        duration:2,
    },"<+0.3").fromTo(".path3",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 800,
        duration:2,
    },"<+0.3")
}
thirdPageAnimation()

let readmore = document.querySelectorAll(".readmore");
let arrow = document.querySelectorAll(".arrow");
let ggArrow ;
let timer1;
for(let i = 0 ; i<readmore.length ; i++){
    readmore[i].addEventListener("mouseenter",()=>{

        ggArrow = gsap.timeline();
        timer1 = setInterval(()=>{
            ggArrow.fromTo(arrow[i],{
                x:0,
                opacity:1
            },{
                x:30,
                opacity:0,
                duration:0.8,
            
            }).fromTo(arrow[i],{
                x:-45,
                opacity:0
            },{
                x:0,
                opacity:1,
                duration:0.8,
                
            })
           
        },100)
    })
    readmore[i].addEventListener("mouseleave",()=>{
        clearInterval(timer1)
        ggArrow.reverse(1);
       
      })
    
}





  


if(window.innerWidth <= 1920 && window.innerWidth >= 1650){
    let widthGap = 1920 - innerWidth
    widthGap = widthGap/5
    let vbWidth = 1000 + widthGap
    let viewBox = document.querySelector(".lineBox")
    console.log(1)
    viewBox.setAttribute("viewBox",`0 0 ${vbWidth} ${vbWidth/9*6}`)
 
}else if(window.innerWidth < 1650){
    let widthGap = 1920 - innerWidth
    widthGap = widthGap/1.5
    let vbWidth = 1070 + widthGap
    let viewBox = document.querySelector(".lineBox")

    viewBox.setAttribute("viewBox",`0 0 ${vbWidth} ${vbWidth/9*6}`)
 
}


   

   