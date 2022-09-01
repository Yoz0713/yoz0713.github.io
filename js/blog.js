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

function secondPageAnimaiton(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top 60%",
      
        }
    })
    gg.fromTo(".second-page-top nav",{
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
    },"<0.5").fromTo(".lineBox polyline",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 300,
        duration:3,
    },"<+0.6").fromTo(".second-page-bottom img",{
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
    },"<+1")
}
secondPageAnimaiton()

function thirdPageAnimation(li){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:`${li}`,
            start:"top 60%",
      
        }
    })

    gg.fromTo(`${li} .third-page-box-left img`,{

        opacity:0,
        y:30
     
    },{
        opacity:1,
       y:0,
        duration:2,
    
    }).fromTo(`${li} .third-page-box-right `,{
   
        opacity:0,
        y:30
    },{
 
        opacity:1,
        y:0,
        duration:1.5
    },"<+0.5")
}
thirdPageAnimation(".third-page-box1")
thirdPageAnimation(".third-page-box2")
thirdPageAnimation(".third-page-box3")
   


    let readmore = document.querySelectorAll(".readmore");
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
