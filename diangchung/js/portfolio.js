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
    gg.fromTo(".second-page-left",{
        opacity:0,
        y:50
    },{
        y:0,
        delay:delay,
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-right-para-para1",{
        opacity:0,
    },{
        opacity:1,
        duration:1.5
    },"<+0.3").fromTo(".second-page-right .readmore",{
        opacity:0,
   
        x:-15
    },{
   
        x:0,
        opacity:1,
        duration:1.5
    },"<+1.7")

    splitTextAnimation(".second-page-right-para-para2 h3",1.5,40,".second-page")
    splitTextAnimationOpacity(".second-page-right-para-para2 p",1.7,50,".second-page")
}
secondPageAnimation()

function thirdPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page",
            start:"top 80%",
        },
        
    });
    gg.fromTo(".third-page-right",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".third-page-left-para-para1",{
        opacity:0,
    },{
        opacity:1,
        duration:1.5
    },"<+1").fromTo(".third-page-left .readmore",{
        opacity:0,
   
        x:-15
    },{
   
        x:0,
        opacity:1,
        duration:1.5
    },"<+1.2")

    splitTextAnimation(".third-page-left-para-para2 h3",1,40,".third-page-left")
    splitTextAnimationOpacity(".third-page-left-para-para2 p",1.3,50,".third-page-left")
}
thirdPageAnimation()