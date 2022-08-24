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
        filter:"brightness(0.15)",
    }).fromTo(".first-page img",{
      
    },{
        duration:0.8,
        backgroundImage:"none"
    },"<")
}
bannerGray()