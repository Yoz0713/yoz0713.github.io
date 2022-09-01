

function bannerGray(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top bottom",
            toggleActions:"play none none reverse"
        }
    })


    gg.fromTo(".first-page img",{
        filter:"brightness(1)",
    },{
        duration:0.8,
        filter:"brightness(0.3)",
    }).to(".about .first-page-title",{
        opacity:0,
        duration:0.8
     },"<").fromTo(".first-page-shadow",{
      
    },{
        duration:0.8,
        opacity:0,
        height:0
    },"<").to(".about",{
        duration:0.8,
        backgroundColor:"#170a05aa"
     },"<")
}
bannerGray()
function bannerTitleIn(){
    let gg =gsap.timeline()

    gg.fromTo(".first-page-title h2",{
        opacity:0,
      
        y:30
    },{
        delay:4,
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(".first-page-title p",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    })
}
bannerTitleIn()

function bannerBoxIn(){
    let gg =gsap.timeline()

    gg.fromTo(".first-page-box-2",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(".first-page-box-2 h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+0.3").fromTo(".first-page-box-2 h2",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+0.3").fromTo(".first-page-box-2 .text-decoration",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+0.3").fromTo(`.first-page-box-2 .text-decoration line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<+0.5")

    let gg2 = gsap.timeline();

    gg2.fromTo(".first-page .square1",{
        
    },{
        repeat:-1,
        duration:10,
        delay:3.5,
        transformOrigin:"50% 50%",
        rotate:"360deg",
        ease:"linear"
    }).fromTo(".first-page .square2",{
        
    },{
        repeat:-1,
        duration:10,
        transformOrigin:"50% 50%",
        rotate:"360deg",
        ease:"linear"
    },"<")
}
bannerBoxIn()


function secondPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top center"
        }
    })
    gg.fromTo(".second-page-top img",{
        y:30,
        opacity:0,
        filter:"blur(1)"
    },{
        y:0,
        opacity:1,
        duration:0.8,
        filter:"blur(0)"
    }).fromTo(".second-page-top svg",{
        opacity:0
    },{
        opacity:1,
        duration:0.8
    },"<+0.5").fromTo(".second-page-top h3",{
        x:30,
        opacity:0
    },{
        x:0,
        opacity:1,
        duration:0.8
    },"<+0.5").fromTo(".second-page-bottom-left .square1",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<").fromTo(".second-page-bottom-left .square2",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<+1").fromTo(".second-page-bottom h2",{
        x:30,
        opacity:0
    },{
        x:0,
        opacity:1,
        duration:0.8
    },"<").fromTo(".second-page-bottom-center",{
        x:30,
        opacity:0
    },{
        x:0,
        opacity:1,
        duration:0.8
    },"<+0.5").fromTo(".second-page-bottom-right",{
        x:30,
        opacity:0,
        filter:"blur(1)"
    },{
        x:0,
        opacity:1,
        duration:0.8,
        filter:"blur(0)"
    },"<+0.5")


    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top center"
        }
    })

    gg2.fromTo(".second-page .square",{
        
    },{
        repeat:-1,
        duration:10,
        delay:3.5,
        transformOrigin:"50% 50%",
        rotate:"360deg",
        ease:"linear"
    })
}
secondPageAnimation()

function thirdPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page",
            start:"top center"
        }
    })
    gg.fromTo(".third-page-left .square1",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<").fromTo(".third-page-left .square2",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<+1").fromTo(".third-page-left h2",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<").fromTo(".third-page-left-bottom .banner_box :nth-child(1)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.5").fromTo(".third-page-left-bottom .banner_box :nth-child(2)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.5").fromTo(".third-page-right .split1",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<+0.5").fromTo(".third-page-right-top-box",{
        y:30,
        opacity:0,
        filter:"blur(1)"
    },{
        y:0,
        opacity:1,
        filter:"blur(0)",
        duration:0.8
    },"<").fromTo(".third-page-right .split2",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<0.2").fromTo(".third-page-right-center > :nth-child(2)",{
        x:-30,
        opacity:0,
        filter:"blur(1)"
    },{
        x:0,
        filter:"blur(0)",
        opacity:1,
        duration:0.8
    },"<").fromTo(".third-page-right .split3",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<0.2").fromTo(".third-page-right-bottom-box",{
        y:-30,
        opacity:0,
        filter:"blur(1)"
    },{
        filter:"blur(0)",
        y:0,
        opacity:1,
        duration:0.8
    },"<").fromTo(".third-page-right .split4",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<0.2").fromTo(".third-page-right-center > :nth-child(1)",{
        x:30,
        filter:"blur(1)",
        opacity:0
    },{
        x:0,
        filter:"blur(0)",
        opacity:1,
        duration:0.8
    },"<").fromTo(".third-page-right .outerLine",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:8,
    },"<+0.9")

    // .fromTo(".third-page-right .outerLine",{
    //     opacity:0
    // },{
    //     opacity:1,
    //     duration:1
    // },"<+0.8")

    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page",
            start:"top center"
        }
    })

    gg2.fromTo(".third-page .square",{
        
    },{
        repeat:-1,
        duration:10,
        delay:2.5,
        transformOrigin:"50% 50%",
        rotate:"360deg",
        ease:"linear"
    })
}
thirdPageAnimation()


document.addEventListener("mousemove",(e)=>{

    let g1 = document.querySelectorAll(".parallax");
    let g2 = document.querySelectorAll(".g2");
 
    let mouseX = -(e.screenX - (e.screenX*2));
    let mouseY = -(e.screenY - (e.screenY*2));
    g1.forEach((item)=>{
        item.currentTranslate.x = mouseX/20;
     
        console.log(item.currentTranslate.y)
    })
    
    console.log(mouseX,mouseY,g1,g2)
   
    
})
