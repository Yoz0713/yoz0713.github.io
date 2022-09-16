function splitTextAnimation(wrap,delay){
    wrap = document.querySelector(`${wrap}`);
    text = wrap.innerHTML
    let str=`${text}`;
    let arr = str.split("")
    let arrElement = arr.map((item)=>{
        if(item == "，" || item == "。"){
            item =`<span class="blind"><span>${item}</span></span><br>`
            return item
        }else{
            item = `<span class="blind"><span>${item}</span></span>`
            return item
        }
       
    })
    delay = delay
    let strElement = arrElement.join("")
    wrap.innerHTML = strElement;
    wrap.childNodes.forEach((item,i)=>{
        let gg2 = gsap.timeline({
            scrollTrigger:{
                trigger:".second-page-right",
                start:"top center",
            }
        });
        gg2.set(item.childNodes,{delay:delay})
            gg2.fromTo(item.childNodes,{
                y:50
            },{
                delay:i/10,
                y:0,
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
    splitTextAnimation(".second-page-right-para-para2 h2",1.1)
    splitTextAnimation(".second-page-right-para-para3 h3",1.2)
    
}

secondPageAnimation()