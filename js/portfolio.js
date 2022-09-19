
function bannerTitleIn(){
    let gg =gsap.timeline()

    gg.fromTo(".first-page-title",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(".first-page-title h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+0.3").fromTo(".first-page-title h2",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+0.3").fromTo(".first-page-title .text-decoration",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+0.3").fromTo(`.first-page-title .text-decoration line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<+0.5")
    
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

function bannerGray(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top 85%",
            toggleActions:"play none none reverse"
        }
    })
    gg.fromTo(".first-page-shadow",{
      
    },{
        duration:0.8,
        opacity:0,
        height:1
    },"<").fromTo(".first-page-bg",{
        opacity:1
      },{
          opacity:0,
          duration:0.8
      },"<")
}
bannerGray()

function gcLogo (){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-top",
      
            start:"top center",
        
        }
    })
    gg.fromTo(".second-page-top .logo",{
     
   
    },{
   
      
        duration:1.5
    }).fromTo(".second-page-top-right",{
    y:100,
    opacity:0
},{
    y:0,
    opacity:1,
    duration:1.5
},"<").fromTo(".second-page-top svg line",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 1700,
        duration:3,
    },"<+1")
    


    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-bottom",

            start:"top center",
        
        }
    })
    gg2.fromTo(".second-page-bottom .logo",{
     
    
    },{
       
   
        duration:1.5
    }).fromTo(".second-page-bottom-right",{
    y:100,
    opacity:0
},{
    y:0,
    opacity:1,
    duration:1.5
},"<").fromTo(".second-page-bottom svg line",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 1700,
        duration:3,
    })
    // gg.fromTo(".second-page-top .logo",{
    //     y:-150,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1.5
    // }).fromTo(".second-page-top  .title_font",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // },"<+1").fromTo(".second-page-top svg",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // }).fromTo(".second-page-top svg line",{
    //     strokeDashoffset: 2000,
    //     strokeDasharray: 2000
    // },{
    //     strokeDashoffset: 1700,
    //     duration:2,
    // }).fromTo(".second-page-top .p_font",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // },"<+0.8").fromTo(".second-page-top .icon",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // },"<+0.8").fromTo(".second-page-top .readmore",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // },"<")

    





   
    // gg2.fromTo(".second-page-bottom .logo",{
    //     y:-150,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1.5
    // }).fromTo(".second-page-bottom  .title_font",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // },"<+1").fromTo(".second-page-bottom svg",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // }).fromTo(".second-page-bottom svg line",{
    //     strokeDashoffset: 2000,
    //     strokeDasharray: 2000
    // },{
    //     strokeDashoffset: 1700,
    //     duration:2,
    // }).fromTo(".second-page-bottom .p_font",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // },"<+0.8").fromTo(".second-page-bottom .icon",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // },"<+0.8").fromTo(".second-page-bottom .readmore",{
    //     y:30,
    //     opacity:0
    // },{
    //     opacity:1,
    //     y:0,
    //     duration:1
    // },"<")

}
gcLogo()

let readmore = document.querySelectorAll(".a");
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
