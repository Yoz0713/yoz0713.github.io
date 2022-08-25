
function bannerTitleIn(){
    let gg =gsap.timeline()

    gg.fromTo(".first-page-title h3",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(".first-page-title h2",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(".first-page-title .text-decoration",{
        opacity:0,
        y:30
    },{
        opacity:1,
        duration:0.8,
        y:0
    }).fromTo(`.first-page-title .text-decoration line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    })
    
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
    gg.fromTo(".first-page img",{
        filter:"brightness(1)",
    },{
        duration:0.8,
        filter:"brightness(0.3)",
    }).to(".portfolioInner .first-page-title p",{
        opacity:0,
        duration:0.01
     },"<").fromTo(".first-page-shadow",{
      
    },{
        duration:0.8,
        opacity:0,
        height:1
    },"<").to(".portfolio",{
        duration:0.8,
        backgroundColor:"#170a05aa"
     },"<")
}
bannerGray()

function gcLogo (){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-top",
            toggleActions:"play none none reverse",
            start:"top center",
        
        }
    })
    gg.fromTo(".second-page-top .logo",{
        y:-150,
        opacity:0
    },{
        opacity:1,
        y:0,
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
    })
    


    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-bottom",
            toggleActions:"play none none reverse",
            start:"top center",
        
        }
    })
    gg2.fromTo(".second-page-bottom .logo",{
        y:-150,
        opacity:0
    },{
        opacity:1,
        y:0,
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

