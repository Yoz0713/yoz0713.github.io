function splitText(wrap,text){
    wrap = document.querySelector(`${wrap}`);
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
    let strElement = arrElement.join("")
    wrap.innerHTML = strElement;
    return wrap
}

splitText(".second-page-right-para-para2 h2","典長成美")
splitText(".second-page-right-para-para3 h3","收藏一家人的幸福時光")
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
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-right",
            start:"top center",
        }
    });
    gg2.fromTo(`.second-page-right-para-para2 h2 :nth-child(${i})`,{
        opacity:0,
    },{
        delay:1,
        opacity:1,
        duration:1.5
    })
    // .fromTo(".second-page-right-para-para3 h3",{
    //     opacity:0,
    // },{
    //     opacity:1,
    //     duration:1.5
    // },"<+0.2").fromTo(".second-page-right-para-para2 p",{
    //     opacity:0,
    // },{

    //     opacity:1,
    //     duration:1.5
    // },"<+0.5")
}

secondPageAnimation()