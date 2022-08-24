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
    }).fromTo(".first-page-title p",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    })
}

function bannerGray(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top 85%",
            toggleActions:"play none none reverse"
        }
    })
    gg.fromTo(".first-page img",{
        filter:"brightness(1)",
    },{
        duration:0.8,
        filter:"brightness(0.3)",
    }).to(".portfolioInner .first-page-title",{
        opacity:0,
        duration:0.01
     },"<").fromTo(".first-page-shadow",{
      
    },{
        duration:0.8,
        opacity:0,
        height:1
    },"<").to(".portfolioInner",{
        duration:0.8,
        backgroundColor:"#170a05aa"
     },"<")
}
bannerGray()
bannerTitleIn()