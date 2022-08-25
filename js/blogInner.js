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
    }).to(".blog .first-page-title",{
        opacity:0,
        duration:0.8
     },"<").fromTo(".first-page-shadow",{
      
    },{
        duration:0.8,
        opacity:0,
        height:1
    },"<").to(".blogInner",{
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

    gg.fromTo(".first-page-box-2 h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(".first-page-box-2 h2",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(".first-page-box-2 .text-decoration",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(`.first-page-box-2 .text-decoration line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    })
    
}
bannerBoxIn()

function svgIn(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top bottom",
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
    }).fromTo(`.second-page-title svg line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    })
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".fifth-page",
            start:"top bottom",
        }
    })
    gg2.fromTo(".fifth-page-box-bottom h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    }).fromTo(".fifth-page-box-bottom svg",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    }).fromTo(`.fifth-page-box-bottom svg line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 1800,
        duration:1.2,
    }).fromTo(".fifth-page-box-bottom > p",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<+0.8").fromTo(".fifth-page-box-bottom .readmore",{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8
    },"<")
}
svgIn()
