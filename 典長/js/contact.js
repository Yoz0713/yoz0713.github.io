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
function secondPageAnimation(){

    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page",
            start:"top 80%",
        }
    })

    gg.fromTo(".second-page-left",{
        opacity:0,
        y:50
    },{
        delay:1.2,
        y:0,
        opacity:1,
        duration:1.5
    }).fromTo(".second-page-right .form :nth-child(2)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.8").fromTo(".second-page-right .form :nth-child(3)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3").fromTo(".second-page-right .form :nth-child(4)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3").fromTo(".second-page-right .form :nth-child(5)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3").fromTo(".second-page-right .form :nth-child(6)",{
        opacity:0,
        y:50
    },{
        y:0,
        opacity:1,
        duration:1.5
    },"<+0.3")
    splitTextAnimation(".second-page-right-titel h3",1.5,35,".second-page")
    
}
secondPageAnimation()