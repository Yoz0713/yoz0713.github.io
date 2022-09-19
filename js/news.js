

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

function bannerGray(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top bottom",
            toggleActions:"play none none reverse"
        }
    })


    gg.to(".news .first-page-title",{
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

    gg2.fromTo(".first-page .g1",{
        
    },{
        repeat:-1,
        duration:10,
        delay:2,
        transformOrigin:"50% 50%",
        rotate:"360deg",
        ease:"linear"
    }).fromTo(".first-page .g2",{
        
    },{
        repeat:-1,
        duration:10,
        transformOrigin:"50% 50%",
        rotate:"360deg",
        ease:"linear"
    },"<")
}


function secondPageAnimaiton(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top bottom",
      
        }
    })
    gg.fromTo(".lineBox polyline",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 300,
        duration:3,
    },"<+0.6").fromTo(".second-page-bottom .imgBox",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<").fromTo(".second-page-bottom-right-para",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<")
    let gg3 = gsap.timeline({
        scrollTrigger:{
            trigger:`.second-page-top nav`,
            start:"top 60%",
        }
    })
    gg3.fromTo(".second-page-top nav",{
        opacity:0,
        height:0
    },{
        height:"100%",
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-top nav ul",{
        opacity:0,
      
    },{
       
        opacity:1,
        duration:0.8
    },"<0.5")
    
}
secondPageAnimaiton()

function thirdPageAnimaiton(){
    let fpb = document.querySelectorAll(".third-page-box")
    for(let i = 0 ; i <fpb.length ; i++){
        let gg2 = gsap.timeline({
            scrollTrigger:{
                trigger:".third-page",
                start:"top center",
            }
        })
        gg2.fromTo(`.third-page-box${i}`,{
            opacity:0,
            y:30,
           
        },{
            delay:i/1.3,
            opacity:1,
            y:0,
            duration:0.8
        }).fromTo(`.third-page-box${i}-bottom svg line`,{
            strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
            strokeDashoffset: 1800,
            duration:1.2,
        },"<+0.2")
    }
    
}
thirdPageAnimaiton()



let readmore = document.querySelectorAll(".readmore");
let arrow = document.querySelectorAll(".arrow");
let ggArrow ;
let timer1;
if(window.innerWidth >1440){
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
}else{
    for(let i = 0 ; i<readmore.length ; i++){
    
            ggArrow = gsap.timeline();
           
                ggArrow.to(arrow[i],{
                    keyframes:[
                        {
                            x:30,
                            duartion:0.75,
                            opacity:0
                        },{
                            x:-45,
                            duartion:0.1,
                            opacity:0
                        },{
                            x:0,
                            duartion:0.75,
                            opacity:1
                        }
                        ,{
                            x:0,
                            duartion:0.75,
                            opacity:1
                        }
                    ],
                    repeat:-1
                    
                })
     
        
    }
}