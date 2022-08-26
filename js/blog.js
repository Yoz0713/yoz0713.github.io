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
        height:0
    },"<").to(".blog",{
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

function secondPageAnimaiton(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top center",
      
        }
    })
    gg.fromTo(".second-page-top nav",{
        opacity:0,
        height:0
    },{
        height:"100%",
        opacity:1,
        duration:1.5
    }).fromTo(".lineBox polyline",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 500,
        duration:3,
    },).fromTo(".second-page-top nav ul",{
        opacity:0,
      
    },{
       
        opacity:1,
        duration:0.8
    },"<").fromTo(".second-page-top .news_blog",{
        opacity:0,
        height:0
    },{
    
        opacity:1,
        duration:1.5
    },"<").fromTo(".second-page-bottom img",{
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
    },"<+2.5")
}
secondPageAnimaiton()

function thirdPageAnimation(li){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:`${li}`,
            start:"top center",
      
        }
    })

    gg.fromTo(`${li} .third-page-box-left img`,{

        opacity:0,
        clipPath:"circle(0% at 0% 0%)"
    },{
        opacity:1,
        clipPath:"circle(150% at 0% 0%)",
        duration:1.5
    }).fromTo(`${li} .third-page-box-right `,{
       
        opacity:0,
        clipPath:"circle(0% at 0% 0%)"
    },{
        
        opacity:1,
        clipPath:"circle(150% at 0% 0%)",
        duration:2.2
    },"<+1.2")
}
thirdPageAnimation(".third-page-box1")
thirdPageAnimation(".third-page-box2")
thirdPageAnimation(".third-page-box3")
    if(window.innerWidth <= 1920 && window.innerWidth >= 1650){
        let widthGap = 1920 - innerWidth
        widthGap = widthGap/1.5
        let vbWidth = 1070 + widthGap
        let viewBox = document.querySelector(".lineBox")
        console.log(1)
        console.log(window.innerWidth)
        viewBox.setAttribute("viewBox",`0 0 ${vbWidth} ${vbWidth/10*6}`)
    }else if(window.innerWidth < 1650){
        let widthGap = 1920 - innerWidth
        widthGap = widthGap/1.2
        let vbWidth = 1070 + widthGap
        let viewBox = document.querySelector(".lineBox")
        console.log(2)
        viewBox.setAttribute("viewBox",`0 0 ${vbWidth} ${vbWidth/10*6}`)
     
    }



