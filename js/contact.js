let pointer = document.documentElement;     
    pointer.style.setProperty('--x', 30 + 'px');
    pointer.style.setProperty('--y', 100 + 'px');   
    pointer.addEventListener('mousemove', m => {
        setTimeout(()=>{
            pointer.style.setProperty('--x', m.clientX + 'px');
            pointer.style.setProperty('--y', m.clientY + 'px');
        },100)
  
})

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
bannerTitleIn()

function bannerGray(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top 85%",
            toggleActions:"play none none reverse"
        }
    })
    gg.to(".contact .first-page-title p",{
        opacity:0,
        duration:0.01
     },"<").fromTo(".first-page-shadow",{
      
    },{
        duration:0.8,
        opacity:0,
        height:1
    },"<").fromTo(".hover-light",{
       
    },{
        duration:0.8,
        background:"radial-gradient(circle at var(--x) var(--y),#1b0f0995 0.01%, #1b0f08e1 30%",
       
     },"<")
}

bannerGray()

function secondPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top center",
       
            
        }
    })
    gg.fromTo(".second-page iframe",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-right :nth-child(1)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.6").fromTo(".second-page-right :nth-child(2)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2").fromTo(".second-page-right :nth-child(3)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2").fromTo(".second-page-right :nth-child(4)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2").fromTo(".second-page-right :nth-child(5)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2").fromTo(".second-page-right :nth-child(6)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2")
}
secondPageAnimation()