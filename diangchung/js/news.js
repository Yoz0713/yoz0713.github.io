
    function secondPageAnimation(){
        let gg = gsap.timeline({
            scrollTrigger:{
                trigger:".second-page-bottom ",
                start:"top 80%"
            }
        })
        let delay = window.innerWidth > 1440 ? 1.2 : 0
        gg.fromTo(".second-page-bottom ul > :nth-child(1)",{
            opacity:0,
            y:50
        },{
            y:0,
            delay:delay,
            opacity:1,
            duration:1.5,
    
        }).fromTo(".second-page-bottom ul > :nth-child(3)",{
            opacity:0,
            y:50
        },{
            y:0,
          
            opacity:1,
            duration:1.5,
    
        },"<+0.5").fromTo(".second-page-bottom ul > :nth-child(5)",{
            opacity:0,
            y:50
        },{
            y:0,
          
            opacity:1,
            duration:1.5,
    
        },"<+0.5")
        let gg2 = gsap.timeline({
            scrollTrigger:{
                trigger:".second-page-bottom ul :nth-child(2)",
                start:"top 20%"
            }
        })
        gg2.fromTo(".second-page-bottom ul > :nth-child(2)",{
            opacity:0,
            y:50
        },{
            y:0,
           
            opacity:1,
            duration:1.5,
    
        }).fromTo(".second-page-bottom ul > :nth-child(4)",{
            opacity:0,
            y:50
        },{
            y:0,
          
            opacity:1,
            duration:1.5,
    
        },"<+0.5").fromTo(".second-page-bottom ul > :nth-child(6)",{
            opacity:0,
            y:50
        },{
            y:0,
          
            opacity:1,
            duration:1.5,
    
        },"<+0.5")
    }
    secondPageAnimation()
