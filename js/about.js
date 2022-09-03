

function bannerGray(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top bottom",
            toggleActions:"play none none reverse"
        }
    })


    gg.to(".about .first-page-title",{
        opacity:0,
        duration:0.8
     },"<").fromTo(".first-page-shadow",{
      
    },{
        duration:0.8,
        opacity:0,
        height:0
    },"<").fromTo(".hover-light",{
       
    },{
        duration:0.8,
        background:"radial-gradient(circle at var(--x) var(--y),#1b0f0950 0.01%, #1b0f08e1 30%",
       
     },"<")
}
bannerGray()
function bannerTitleIn(){
    let gg =gsap.timeline()

    gg.fromTo(".first-page-title .square1",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:12,
    }).fromTo(".first-page-title .square2",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:12,
    },"<+1").fromTo(".first-page-title h2",{
        opacity:0,
      
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+1.5").fromTo(".first-page-title p",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+0.5")
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

    gg2.fromTo(".first-page .g1",{
        
    },{
        repeat:-1,
        duration:10,
        delay:2,
        transformOrigin:"center",
        rotate:"360deg",
        ease:"linear"
    }).fromTo(".first-page .g2",{
        
    },{
        repeat:-1,
        duration:10,
        transformOrigin:"center",
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
        opacity:0,
        filter:"blur(0)",
        y:45
    },{
        opacity:1,
        filter:"blur(1)",
        duration:1,
        y:0
    },"<").fromTo(".second-page-bottom-left .square2",{
        opacity:0,
        filter:"blur(0)",
        y:-45
    },{
        opacity:1,
        filter:"blur(1)",
        duration:1,
        y:0
    },"<").fromTo(".second-page-bottom h2",{
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

    gg2.fromTo(".second-page .g1",{
        
    },{
        repeat:-1,
        duration:10,
        delay:2,
        transformOrigin:"center",
        rotate:"360deg",
        ease:"linear"
    }).fromTo(".second-page .g2",{
        
    },{
        repeat:-1,
        duration:10,
        transformOrigin:"center",
        rotate:"360deg",
        ease:"linear"
    },"<")
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
        opacity:0,
        filter:"blur(0)",
        y:45
    },{
        opacity:1,
        filter:"blur(1)",
        duration:1,
        y:0
    },"<").fromTo(".third-page-left .square2",{
        opacity:0,
        filter:"blur(0)",
        y:-45
    },{
        opacity:1,
        filter:"blur(1)",
        duration:1,
        y:0
    },"<").fromTo(".third-page-left h2",{
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
        duration:30,
    },"<+0.5").fromTo(".third-page-right .split2",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:30,
    },"<").fromTo(".third-page-right-top-box",{
        y:30,
        opacity:0,
        filter:"blur(1)"
    },{
        y:0,
        opacity:1,
        filter:"blur(0)",
        duration:0.8
    },"<").fromTo(".third-page-right .split3",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:30,
    },"<").fromTo(".third-page-right-center > :nth-child(2)",{
        x:-30,
        opacity:0,
        filter:"blur(1)"
    },{
        x:0,
        filter:"blur(0)",
        opacity:1,
        duration:0.8
    },"<").fromTo(".third-page-right .split4",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:30,
    },"<").fromTo(".third-page-right-bottom-box",{
        y:-30,
        opacity:0,
        filter:"blur(1)"
    },{
        filter:"blur(0)",
        y:0,
        opacity:1,
        duration:0.8
    },"<").fromTo(".third-page-right .split5",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:30,
    },"<+1").fromTo(".third-page-right-center > :nth-child(1)",{
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
    },"<+0.5")

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

    gg2.fromTo(".third-page .g1",{
        
    },{
        repeat:-1,
        duration:10,
        delay:1,
        transformOrigin:"center",
        rotate:"360deg",
        ease:"linear"
    }).fromTo(".third-page .g2",{
        
    },{
        repeat:-1,
        duration:10,
        transformOrigin:"center",
        rotate:"360deg",
        ease:"linear"
    },"<")
}
thirdPageAnimation()



let pointer = document.documentElement;        
    pointer.addEventListener('mousemove', m => {
    pointer.style.setProperty('--x', m.clientX + 'px');
    pointer.style.setProperty('--y', m.clientY + 'px');
  
})
if(window.innerWidth < 1440){
    let pointer = document.documentElement;        
    pointer.style.setProperty('--x', 30 + 'px');
    pointer.style.setProperty('--y', 100 + 'px');
   
}
if(window.innerWidth > 1440){
    let g1 = document.querySelectorAll(".parallax");
    for(let i = 0 ; i < g1.length ; i++){
   
        g1[i].addEventListener("mouseenter",(e)=>{
   
      
   
      
       
             let mousex = e.clientX;
   //         // g1.forEach((item)=>{
   //         //     item.currentTranslate.x = mouseX/20;
            
   //         //     console.log(item.currentTranslate.x)
   //         // })
           
   //         // console.log(mouseX,mousex,g1,g2)
            let gg3 = gsap.timeline();
         
            gg3.to(g1[i].children[0].children[0],{
                x:-(mousex/40),
                y:-(mousex/200)
            }).to(g1[i].children[1].children[0],{
                y:(mousex/200),
                x:(mousex/40)
            },"<+0.1")
           
       })
        g1[i].addEventListener("mouseleave",()=>{
   
      
            let gg3 = gsap.timeline();
            gg3.to(g1[i].children[0].children[0],{
                x:0,
                y:0,
            }).to(g1[i].children[1].children[0],{
                y:0,
                x:0,
            },"<")
           
        })
    }
}