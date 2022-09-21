function splitTextAnimation(wrap,delay,speed,trigger){
    wrap = document.querySelector(`${wrap}`);
    text = wrap.innerHTML
    wrap.innerHTML = null
    let str=`${text}`;
    let arr = str.split("")
    let arrElement = arr.map((item)=>{
        if(item == "<"){
            
            item =`<br>`
            return item
        }else if(item == "b" || item == "r" || item == ">" ){
            item = null
          
        }else{
            item = `<span class="blind"><span>${item}</span></span>`
            return item
        }
     
    })
    
    let strElement = arrElement.join("")
    wrap.innerHTML = strElement;
    wrap.childNodes.forEach((item,i)=>{
        let gg = gsap.timeline({
            scrollTrigger:{
                trigger:`${trigger}`,
                start:"top 80%",
                
            },
      
        });
      
            gg.fromTo(item.childNodes,{
            
                opacity:0,
                
            },{
                opacity:0,
                
                duration:delay,
             
            }).fromTo(item.childNodes,{
                y:50,
                opacity:0,
             
            },{
                opacity:1,
                
                duration:0.6,
                y:0,
                delay:i/speed
            })
     
        
    })
   
}
function splitTextAnimationOpacity(wrap,delay,speed,trigger){
    wrap = document.querySelector(`${wrap}`);
    text = wrap.innerHTML
    wrap.innerHTML = null
    let str=`${text}`;
    let arr = str.split("")
    let arrElement = arr.map((item)=>{
        if(item == "<"){
            
            item =`<br>`
            return item
        }else if(item == "b" || item == "r" || item == ">" ){
            item = null
          
        }else{
            item = `<span class="blind"><span>${item}</span></span>`
            return item
        }
     
    })
    
    let strElement = arrElement.join("")
    wrap.innerHTML = strElement;
    wrap.childNodes.forEach((item,i)=>{
        let gg = gsap.timeline({
            scrollTrigger:{
                trigger:`${trigger}`,
                start:"top 80%",
                
            },
      
        });
      
            gg.fromTo(item.childNodes,{
            
                opacity:0,
                
            },{
                opacity:0,
                
                duration:delay,
             
            }).fromTo(item.childNodes,{
             
                opacity:0
            },{
               
                opacity:1,
                duration:1.5,
          
                delay:i/speed/1.3
            })
     
        
    })
   
}

function secondPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top 80%",
        },
        
    });
    let delay = window.innerWidth > 1440 ? 1.2 : 0
    gg.fromTo(".second-page-top-top-title",{
        opacity:0,
        y:50
    },{
        y:0,
        delay:delay,
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-top-top-icon > :nth-child(1)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<").fromTo(".second-page-top-top-icon > :nth-child(2)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.2").fromTo(".second-page-top-top-icon > :nth-child(3)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.1").fromTo(".second-page-top-top-icon > :nth-child(4)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.1").fromTo(".second-page-top-top-icon > :nth-child(5)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.1").fromTo(".second-page-top-bottom ul > :nth-child(1)",{
        opacity:0,
   
        y:30
    },{
   
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.5").fromTo(".second-page-top-bottom ul > :nth-child(2)",{
        opacity:0,
   
        y:30
    },{
   
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.2").fromTo(".second-page-top-bottom ul > :nth-child(3)",{
        opacity:0,
   
        y:30
    },{
   
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.2").fromTo(".second-page-bottom-para h2",{
        opacity:0,
   
        y:30
    },{
   
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.5")

    splitTextAnimationOpacity(".second-page-bottom-para p",3.6,60,".second-page")
}
secondPageAnimation()

function thirdPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page",
            start:"top 80%",
        },
        
    });
    gg.fromTo(".third-page-top",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".third-page-bottom-para h2",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+1")

    
    splitTextAnimationOpacity(".third-page-bottom-para p",1.5,50,".third-page")
}
thirdPageAnimation()

function forthPageAnimation(){

    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".forth-page",
            start:"top 80%",
        }
    })

    gg.fromTo(".forth-page",{
        opacity:0,
        y:100
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
            start:"top 80%",
        }
    })

    gg.fromTo(".fifth-page-left",{
        opacity:0,
        y:100
    },{
        y:0,
        opacity:1,
        duration:1.5
    })
    splitTextAnimation(".fifth-page-right-para h2",1,40,".fifth-page")
    splitTextAnimationOpacity(".fifth-page-right-para p",1.3,50,".fifth-page")
}
fifthPageAnimation()
function sixthPageAnimation(){

    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".sixth-page",
            start:"top 80%",
        }
    })

    gg.fromTo(".sixth-page-bottom-right",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    })
    splitTextAnimation(".sixth-page-bottom-left-para-para1 h3",1,40,".sixth-page")
    splitTextAnimationOpacity(".sixth-page-bottom-left-para-para2 p",1.3,50,".sixth-page")
    splitTextAnimationOpacity(".sixth-page-bottom-left-para-para3 p",1.4,50,".sixth-page")
}
sixthPageAnimation()
function seventhPageAnimation(){

    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".seventh-page",
            start:"top 80%",
        }
    })

    gg.fromTo(".seventh-page-left",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".seventh-page-right .form :nth-child(2)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+1.2").fromTo(".seventh-page-right .form :nth-child(3)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3").fromTo(".seventh-page-right .form :nth-child(4)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3").fromTo(".seventh-page-right .form :nth-child(5)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3").fromTo(".seventh-page-right .form :nth-child(6)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3")
    splitTextAnimation(".seventh-page-right-titel h3",1,40,".seventh-page")
    
}
seventhPageAnimation()
