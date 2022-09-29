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
    gg.fromTo(".second-page-bottom-title",{
        opacity:0,
        y:50
    },{
        y:0,
        delay:delay,
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-bottom .imgBox1",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+1")

    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page .imgBox2",
            start:"top 80%",
        },
        
    });
    gg2.fromTo(".second-page .imgBox2",{
        opacity:0,
        y:50
    },{
        y:0,
 
        opacity:1,
        duration:1.5
    })
    let gg3 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-bottom-icon",
            start:"top bottom",
        },
        
    });
    gg3.fromTo(".second-page-bottom-icon > :nth-child(1)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<").fromTo(".second-page-bottom-icon > :nth-child(2)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.2").fromTo(".second-page-bottom-icon > :nth-child(3)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.1").fromTo(".second-page-bottom-icon > :nth-child(4)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.1").fromTo(".second-page-bottom-icon > :nth-child(5)",{
        opacity:0,
        x:30
    },{
        x:0,
        opacity:1,
        duration:1.5
    },"<+0.1")
    splitTextAnimationOpacity(".second-page-bottom-title p",delay+0.8,50,".second-page-bottom")
    splitTextAnimationOpacity(".second-page-bottom-title h3",delay+0.8,50,".second-page-bottom")
    splitTextAnimationOpacity(".second-page-bottom .para1 p",0,50,".second-page-bottom .para1")
    splitTextAnimationOpacity(".second-page-bottom .para2 p",0,50,".second-page-bottom .para2")
}
secondPageAnimation()