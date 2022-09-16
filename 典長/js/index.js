function splitTextAnimation(wrap,delay,speed,direct){
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
        let gg2 = gsap.timeline({
            scrollTrigger:{
                trigger:".second-page-right",
                start:"top center",
               
            }
        });
        
            gg2.fromTo(item.childNodes,{
                y:50
            },{
                y:0,
                delay:i/speed,
                opacity:1,
                duration:1.5
            })
     
        
    })
   
}

function secondPageAnimation(){
    
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-left",
            start:"top center",
        }
    });
    gg.fromTo(".second-page-left",{
        opacity:0,
    },{
        opacity:1,
        duration:1.5
    })
   
    splitTextAnimation(".second-page-right-para-para1 p",0.7,15)
    splitTextAnimation(".second-page-right-para-para1 .ch_text_m",1,15)
    splitTextAnimation(".second-page-right-para-para2 h2",1,15)
    splitTextAnimation(".second-page-right-para-para2 p",1,15)
    splitTextAnimation(".second-page-right-para-para3 h3",1,15)
    splitTextAnimation(".second-page-right-para-para3 p",1,40)
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-right",
            start:"top center",
        }
    });
    gg.fromTo(".second-page-right .readmore",{
        opacity:0,
    },{
        opacity:1,
        delay:1,
        duration:1.5
    })
}

secondPageAnimation()