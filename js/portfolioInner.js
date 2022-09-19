let swiper1 = new Swiper(".swiper1",{
    speed:650,
    loop:true,
    effect : 'fade',
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
})

function bannerTitleIn(){
    let gg =gsap.timeline()

    gg.fromTo(".first-page-title img",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    },"<+0.5").fromTo(".first-page-title p",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
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
    gg.to(".portfolioInner .first-page-title",{
        opacity:0,
        duration:0.8
     },"<").fromTo(".first-page-shadow",{
      
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



function secondPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top center",
            toggleActions:"play none none reverse"
            
        }
    })

    gg.fromTo(".second-page-left img",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-right > :nth-child(1)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.5").fromTo(".second-page-right > :nth-child(2)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.15").fromTo(".second-page-right > :nth-child(3)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.15").fromTo(".second-page-right > :nth-child(4)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.15").fromTo(".second-page-right > :nth-child(5)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.15").fromTo(".second-page-right > :nth-child(6)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.15").fromTo(".second-page-right > :nth-child(7)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.15")
}
secondPageAnimation()

function thirdPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page",
            start:"top center",
            toggleActions:"play none none reverse"
            
        }
    })
    gg.fromTo(".third-page video",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1.5
    })
}
thirdPageAnimation()
function forthPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".forth-page",
            start:"top center",
            toggleActions:"play none none reverse"
            
        }
    })
    gg.fromTo(".forth-page img",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1.5
    })
}
forthPageAnimation()

function fifthPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".fifth-page",
            start:"top center",
            toggleActions:"play none none reverse"
            
        }
    })
    gg.fromTo(".fifth-page .swiper1",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".fifth-page h3",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.6").fromTo(".fifth-page p",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2")
}
fifthPageAnimation()

function sixthPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".sixth-page",
            start:"top center",
            toggleActions:"play none none reverse"
            
        }
    })
    gg.fromTo(".sixth-page .swiper1",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".sixth-page h3",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.6").fromTo(".sixth-page p",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2")
}
sixthPageAnimation()

function seventhPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".seventh-page",
            start:"top center",
       
            
        }
    })
    gg.fromTo(".seventh-page iframe",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".seventh-page-right :nth-child(1)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.6").fromTo(".seventh-page-right :nth-child(2)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2").fromTo(".seventh-page-right :nth-child(3)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2").fromTo(".seventh-page-right :nth-child(4)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2").fromTo(".seventh-page-right :nth-child(5)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2").fromTo(".seventh-page-right :nth-child(6)",{
        y:30,
        opacity:0
    },{
        y:0,
        opacity:1,
        duration:0.8
    },"<+0.2")
}
seventhPageAnimation()

