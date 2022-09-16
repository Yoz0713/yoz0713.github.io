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
                start:"top center",
                
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
function splitTextAnimationFlip(wrap,delay,speed,trigger){
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
                start:"top center",
                
            },
      
        });
      
            gg.fromTo(item.childNodes,{
            
                opacity:0,
                
            },{
                opacity:0,
                
                duration:delay,
             
            }).fromTo(item.childNodes,{
                transform:"rotateY(120deg)",
                opacity:0
            },{
                opacity:1,
                duration:0.6,
                transform:"rotateY(0deg)",
                delay:i/speed
            })
     
        
    })
   
}
function secondPageAnimation(){
    
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-left",
            start:"top center",
        },
        
    });
    gg.fromTo(".second-page-left",{
        opacity:0,
    },{
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-right-para-para1",{
        opacity:0,
        x:15
    },{
        x:0,
        opacity:1,
 
        duration:1.5
    },"<+0.5").fromTo(".second-page-right-para-para2",{
        opacity:0,
        x:15
    },{
        x:0,
        opacity:1,
 
        duration:1.5
    },"<")
    let trigger = ".second-page-right";
   

    splitTextAnimation(".second-page-right-para-para3 h3",1.4,7,trigger)
    splitTextAnimationFlip(".second-page-right-para-para3 p",1.6,30,trigger)
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-right",
            start:"top center",
        }
    });
    gg2.fromTo(".second-page-right .readmore",{
        opacity:0,
        x:15
    },{
        x:0,
        opacity:1,
        delay:3,
        duration:1.5
    }).fromTo(".second-page-bg",{
        opacity:0,
        x:15
    },{
        x:0,
        opacity:1,
 
        duration:1.5
    },"<")
}

secondPageAnimation()


function thirdPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page",
            start:"top center",
        }
    })

    gg.fromTo(".third-page-bottom-right",{
        opacity:0,
    },{
        opacity:1,
        duration:1.5
    }).fromTo(".third-page-top",{
        opacity:0,
    },{
        opacity:1,
        duration:0.5
    },"<+0.1")

    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page-bottom-left",
            start:"top center",
        }
    });
    gg2.fromTo(".third-page-bottom-left .readmore",{
        opacity:0,
        x:-15
    },{
        x:0,
        opacity:1,
        delay:3,
        duration:1.5
    })
    let gg3 = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page-bg",
            start:"top center",
        }
    })
    gg3.fromTo(".third-page-bg",{
        opacity:0,
        x:-15
    },{
        x:0,
        opacity:1,
 
        duration:1.5
    })
    splitTextAnimationFlip(".third-page-top-title p",0,15,".third-page-top")
    splitTextAnimationFlip(".third-page-top-title h3",0,15,".third-page-top")
    let trigger = ".third-page-bottom-left"
    let delay = 0.5
    splitTextAnimation(".third-page-bottom-left-para-para1 h3",delay,50,trigger)
    splitTextAnimationFlip(".third-page-bottom-left-para-para2 p",delay+0.2,30,trigger)
    splitTextAnimationFlip(".third-page-bottom-left-para-para3 p",delay+0.4,30,trigger)

}
thirdPageAnimation()

function forthPageAnimation(){

    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".forth-page",
            start:"top center",
        }
    })

    gg.fromTo(".forth-page-left",{
        opacity:0,
    },{
        opacity:1,
        duration:1.5
    }).fromTo(".forth-page-bg",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        delay:2,
        duration:1.5
    })
    splitTextAnimation(".forth-page-right-para h2 ",0.5,40,".forth-page")
    splitTextAnimationFlip(".forth-page-right-para p ",1,30,".forth-page")
}
forthPageAnimation()

function fifthPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".fifth-page",
            start:"top center",
        }
    })

    gg.fromTo(".fifth-page-right ",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    }).fromTo(".fifth-page-left-top-left .imgBox",{
        opacity:0,
        x:-30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.5").fromTo(".fifth-page-left-bottom-right .imgBox",{
        opacity:0,
        x:-30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.5").fromTo(".fifth-page .readmore",{
        opacity:0,
        x:-30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+2")
    splitTextAnimation(".fifth-page-left-top-right-para .para1 h3",0.5,40,".fifth-page-left-top-right-para")
    splitTextAnimationFlip(".fifth-page-left-top-right-para .para2 p",1,30,".fifth-page-left-top-right-para")
    splitTextAnimation(".fifth-page-left-bottom-left-para .para1 h3",0.5,40,".fifth-page")
    splitTextAnimationFlip(".fifth-page-left-bottom-left-para .para2 p",1,30,".fifth-page")

}
fifthPageAnimation()

function sixthPageAnimation(){
    splitTextAnimation(".sixth-page-bg-title p span ",1,7,".sixth-page")
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".sixth-page",
            start:"top center",
        }
    })
   
    gg.fromTo(".sixth-page-bg-title",{
        opacity:0,
        x:-30
    },{
        x:0,
        opacity:1,
        duration:1.5
    }).fromTo(".sixth-page-bottom :nth-child(1)",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3").fromTo(".sixth-page-bottom :nth-child(2)",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.6").fromTo(".sixth-page-bottom :nth-child(3)",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.6").fromTo(".sixth-page-bottom a",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+2.5")
    splitTextAnimationFlip(".sixth-page-bottom ul :nth-child(1) .para2 p",2,30,".sixth-page")
    splitTextAnimationFlip(".sixth-page-bottom ul :nth-child(2) .para2 p",2.5,30,".sixth-page")
    splitTextAnimationFlip(".sixth-page-bottom ul :nth-child(3) .para2 p",3,30,".sixth-page")
}
sixthPageAnimation()