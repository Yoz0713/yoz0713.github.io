
function secondPageAnimation(){
    let box = document.querySelectorAll(".box1")
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top 80%",
        },
        
    });
    let delay = window.innerWidth > 1440 ? 1.2 : 0
    gg.fromTo(".second-page-left",{
        opacity:0,
        x:-50
    },{
        x:0,
        delay:delay,
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-bg",{
        opacity:0,
        x:50
    },{
        x:0,
        delay:0.8,
        opacity:1,
        duration:1.5
    })

    box.forEach((item,i)=>{
        let gg2 = gsap.timeline({
            scrollTrigger:{
                trigger:".second-page-right",
                start:"top 80%",
            },
            
        }); 

        gg2.fromTo(item,{
            opacity:0,
            x:-50
        },{
            x:0,
            delay:i/8+delay,
            opacity:1,
            duration:1.5
        })
    })
}
secondPageAnimation()