
    

function bannerGray(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top bottom",
            toggleActions:"play none none reverse",
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
    },"<").fromTo(".first-page-bg",{
      opacity:1
    },{
        opacity:0,
        duration:0.8
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
        rotate:"43deg",
        svgOrigin:"125 175",
    },{
        repeat:-1,
        duration:10,
        delay:2,
        svgOrigin:"125 175",
        rotate:"403deg",
        ease:"linear"
    }).fromTo(".first-page .square2",{
        rotate:"56deg",
        svgOrigin:"125 175",
    },{
        repeat:-1,
        duration:10,
        svgOrigin:"125 175",
        rotate:"416deg",
        ease:"linear"
    },"<")
}



function secondPageAnimation(){
    let status = 0;
    let status2 = 0
    if(window.innerWidth < 920 && window.innerWidth > 480){
        status = 250
        status2 = 280
    }else if(window.innerWidth < 480){
        status = 330
        status2 = 230
  
    }
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
    }).fromTo(".second-page-top svg :nth-child(1)",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: status,
        duration:2.5,
    },"<+0.5").fromTo(".second-page-top svg :nth-child(2)",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: status2,
        duration:2.5,
    },"<").fromTo(".second-page-top h3",{
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

    gg2.fromTo(".second-page .square1",{
        transformOrigin:"50% 50%",
        rotate:"43deg",
    },{
        repeat:-1,
        duration:10,
        
        transformOrigin:"50% 50%",
        rotate:"403deg",
        ease:"linear"
    }).fromTo(".second-page .square2",{
        transformOrigin:"50% 50%",
        rotate:"56deg",
    },{
        repeat:-1,
        duration:10,
        
        transformOrigin:"50% 50%",
        rotate:"416deg",
        ease:"linear"
    },"<")
}
secondPageAnimation()

if(window.innerWidth > 920){
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
            duration:15,
        },"<+0.5").fromTo(".third-page-right .split2",{
            strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
            strokeDashoffset: 0,
            duration:15,
        },"<+0.5").fromTo(".third-page-right-top-box",{
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
            duration:15,
        },"<+0.5").fromTo(".third-page-right-center > :nth-child(2)",{
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
            duration:15,
        },"<+0.5").fromTo(".third-page-right-bottom-box",{
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
            duration:15,
        },"<+0.5").fromTo(".third-page-right-center > :nth-child(1)",{
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
    
        gg2.fromTo(".third-page .square1",{
            transformOrigin:"50% 50%",
            rotate:"43deg",
        },{
            repeat:-1,
            duration:10,
            
            transformOrigin:"50% 50%",
            rotate:"403deg",
            ease:"linear"
        }).fromTo(".third-page .square2",{
            transformOrigin:"50% 50%",
            rotate:"56deg",
        },{
            repeat:-1,
            duration:10,
            transformOrigin:"50% 50%",
            rotate:"416deg",
            ease:"linear"
        },"<")
    }
    thirdPageAnimation()
}else{
    function thirdMobileAnimation(){
        let gg2 = gsap.timeline({
            scrollTrigger:{
                trigger:".third-page",
                start:"top center"
            }
        })
    
        gg2.fromTo(".third-page .square1",{
            transformOrigin:"50% 50%",
            rotate:"43deg",
        },{
            repeat:-1,
            duration:10,
            
            transformOrigin:"50% 50%",
            rotate:"403deg",
            ease:"linear"
        }).fromTo(".third-page .square2",{
            transformOrigin:"50% 50%",
            rotate:"56deg",
        },{
            repeat:-1,
            duration:10,
            transformOrigin:"50% 50%",
            rotate:"416deg",
            ease:"linear"
        },"<")
        let gg1 = gsap.timeline({
            scrollTrigger:{
                trigger:".third-page",
                start:"top center"
            }
        })
        gg1.fromTo(".third-page-left .square1",{
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
        },"<+0.5")
        let gg = gsap.timeline({
            scrollTrigger:{
                trigger:".third-page-right-bottom",
                start:"top bottom"
            }
        })
        gg.fromTo(".third-page-right .split1",{
            strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
            strokeDashoffset: 0,
            duration:15,
        },"<+0.5").fromTo(".third-page-right .split2",{
            strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
            strokeDashoffset: 0,
            duration:15,
        },"<+0.5").fromTo(".third-page-right-top-box",{
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
            duration:15,
        },"<+0.5").fromTo(".third-page-right-center > :nth-child(2)",{
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
            duration:15,
        },"<+0.5").fromTo(".third-page-right-bottom-box",{
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
            duration:15,
        },"<+0.5").fromTo(".third-page-right-center > :nth-child(1)",{
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
    }
    thirdMobileAnimation()
}





       
 

// make first-page of mobile device 100vh without screen shaking 
function safariHacks() {
    let windowsVH = window.innerHeight / 100;
    document.querySelector('.first-page').style.setProperty('--vh', windowsVH + 'px');
    window.addEventListener('resize', function() {
        document.querySelector('.first-page').style.setProperty('--vh', windowsVH + 'px');
    });
}

safariHacks();
// make first-page of mobile device 100vh without screen shaking


 if(window.innerWidth > 1440){
      let g1 = document.querySelectorAll(".parallax");
  for(let i = 0 ; i < g1.length ; i++){
      g1[i].addEventListener("mouseenter",(e)=>{
           let mousex = e.clientX;
          let gg3 = gsap.timeline();

          gg3.to(g1[i],{
              x:-(mousex/10),
              y:-(mousex/200)
          })
      })
      g1[i].addEventListener("mouseleave",()=>{
          let gg3 = gsap.timeline();
          gg3.to(g1[i],{
              x:0,
              y:0,
          })
      })
  }


 }
