let pointer = document.documentElement;        
    pointer.addEventListener('mousemove', m => {
    pointer.style.setProperty('--x', m.clientX + 'px');
    pointer.style.setProperty('--y', m.clientY + 'px');
  
})
function bannerGray(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top bottom",
            toggleActions:"play none none reverse"
        }
    })
    gg.to(".blogInner .first-page-title",{
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
        background:"radial-gradient(circle at var(--x) var(--y),#1b0f0995 0.01%, #1b0f08e1 30%",
       
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
    
}
bannerBoxIn()

function svgIn(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top center",
        }
    })
    gg.fromTo(".second-page-title h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    }).fromTo(".second-page-title svg",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3").fromTo(`.second-page-title svg line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<+0.5").fromTo(`.second-page img`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3")
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".fifth-page",
            start:"top center",
        }
    })
    gg2.fromTo(".fifth-page-box",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    }).fromTo(".fifth-page-box img",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<").fromTo(".fifth-page-box-bottom h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3").fromTo(".fifth-page-box-bottom svg",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.5").fromTo(`.fifth-page-box-bottom svg line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 1800,
        duration:1.2,
    },"<+0.5").fromTo(".fifth-page-box-bottom > p",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3").fromTo(".fifth-page-box-bottom .readmore",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<")
}
svgIn()

function thirdPageAnimation (){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page",
            start:"top center",
        }
    })
    gg.fromTo(".third-page img",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    }).fromTo(".third-page-left h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3").fromTo(`.third-page-left p`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3")
}
thirdPageAnimation()

function forthPageAnimation (){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".forth-page",
            start:"top center",
        }
    })
    gg.fromTo(".forth-page img",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    }).fromTo(".forth-page-right h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3").fromTo(`.forth-page-right p`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3").fromTo(`.forth-page-bottom `,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.3")
}
forthPageAnimation()


let readmore = document.querySelectorAll(".a");
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