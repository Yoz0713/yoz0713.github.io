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
            start:"top 80%"
        }
    })
    gg.fromTo(".second-page-left",{
        opacity:0,
        y:50
    },{
        y:0,
        delay:1.5,
        opacity:1,
        duration:1.5,

    })
    splitTextAnimation(".second-page-right-para-para1 h3",2,40,".second-page-right-para-para1")
    splitTextAnimationOpacity(".second-page-right-para-para2 p",2.2,50,".second-page-right-para-para1")
    splitTextAnimationOpacity(".second-page-right-para-para3 p",2.4,50,".second-page-right-para-para1")
}
secondPageAnimation()
function thirdPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page",
            start:"top 80%"
        }
    })
    gg.fromTo(".third-page-right",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5,

    })
    splitTextAnimation(".third-page-left-para h2",0,40,".third-page-left-para")
    splitTextAnimationOpacity(".third-page-left-para p",0.3,50,".third-page-left-para")
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page-bg",
            start:"top 80%"
        }
    })

    gg2.fromTo(".third-page-bg",{
        opacity:0,

    },{
 
        opacity:1,
        duration:1.5,

    })
}
thirdPageAnimation()

function forthPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".forth-page-right",
            start:"top 80%"
        }
    })
    gg.fromTo(".forth-page-right ul > :nth-child(1)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5,

    }).fromTo(".forth-page-right ul > :nth-child(2)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5,

    },"<+0.5").fromTo(".forth-page-right ul > :nth-child(3)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5,

    },"<+0.5")
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".forth-page-left",
            start:"top 80%"
        }
    })
    gg2.fromTo(".forth-page-left-box h3",{
        opacity:0,
        x:8,
        y:-10
    },{
        delay:0.5,
        opacity:1,
        duration:1.5,
    }).fromTo(".forth-page-left-box .straight2",{
        strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
            strokeDashoffset: 800,
            duration:8,
    },"<+1").fromTo(".forth-page-left-box > :nth-child(2)",{
        opacity:0,
      
    },{
     
        opacity:1,
        duration:1.5,
    },"<+0.2").fromTo(".forth-page-left-box .left-bottom",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 800,
        duration:8,
    },"<+0.3").fromTo(".forth-page-left-box .right-bottom",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 800,
        duration:8,
    },"<").fromTo(".forth-page-left-box > :nth-child(3)",{
        opacity:0,
      
    },{
     
        opacity:1,
        duration:1.5,
    },"<+0.2").fromTo(".forth-page-left-box > :nth-child(4)",{
        opacity:0,
      
    },{
     
        opacity:1,
        duration:1.5,
    },"<").fromTo(".forth-page-left-box circle",{
        opacity:0
    },{
       opacity:1,
        duration:1.5,
    },"<+0.4").fromTo(".forth-page-left-box .path-right",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 800,
        duration:10,
    },"<+0.4").fromTo(".forth-page-left-box .path-left",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 800,
        duration:10,
    },"<").fromTo(".forth-page-left-box > :nth-child(5)",{
        opacity:0,
        y:"-3.5vw"
    },{
        y:0,
        opacity:1,
        duration:1.5,
    },"<+1").fromTo(".forth-page-left-box .straight",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 800,
        duration:45,
    },"<")
}
forthPageAnimation()
function fifthPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".fifth-page-top",
            start:"top 80%"
        }
    })
    gg.fromTo(".fifth-page-top .imgBox",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5,

    })
    splitTextAnimation(".fifth-page-bottom h2",0.5,40,".fifth-page-bottom")
    splitTextAnimationOpacity(".fifth-page-bottom p",0.7,50,".fifth-page-bottom")

}
fifthPageAnimation()