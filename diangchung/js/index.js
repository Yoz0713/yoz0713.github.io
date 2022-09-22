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
            
                autoAlpha:0,
                
            },{
                autoAlpha:0,
                
                duration:delay,
             
            }).fromTo(item.childNodes,{
                y:50,
                autoAlpha:0,
             
            },{
                autoAlpha:1,
                
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
            
                autoAlpha:0,
                
            },{
                autoAlpha:0,
                
                duration:delay,
             
            }).fromTo(item.childNodes,{
             
                autoAlpha:0
            },{
               
                autoAlpha:1,
                duration:1.5,
          
                delay:i/speed/1.3
            })
     
        
    })
   
}

let banner1 = document.querySelector(".banner1")
let banner2 = document.querySelector(".banner2")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let swiper1 = new Swiper(".swiper",{
    speed:2000,
    loop:true,
    autoplay:{
        delay:5000
    },
 
    effect : 'fade',
    fadeEffect: {
      crossFade: true,
    },
    mousewheel:false,
    on: {
        
        slideChange: function(){
            if(this.realIndex == 0){
                prev.classList.add("current")
                next.classList.remove("current")
                indexBanner1In()
             }else if(this.realIndex == 1){
                 prev.classList.remove("current")
                 next.classList.add("current")
                 indexBanner2In()
             }
      },
    
    }
})
if(window.innerWidth > 920){
    let swiper = document.querySelector(".swiper")
    swiper.classList.add("swiper-no-swiping")
}
prev.addEventListener("click",()=>{
    swiper1.slidePrev()
})
next.addEventListener("click",()=>{
    swiper1.slideNext()
})


function indexBanner1In(){
    let gg = gsap.timeline()

    gg.fromTo(".banner1",{
        transform:"scale(1)",
      
    },{
        transform:"scale(1.09)",
        duration:7,
      
        
    })
}
function indexBanner2In(){
    let gg2 = gsap.timeline()

    gg2.fromTo(".banner2",{
        transform:"scale(1)",
        filter:"brightness(0.3)"
    },{
        transform:"scale(1.09)",
        duration:7,
        filter:"brightness(1)"
        
    })
}


function secondPageAnimation(){
    
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-left",
            start:"top 80%",
        },
        
    });
    let delay = window.innerWidth > 1440 ? 1.2 : 0
    gg.fromTo(".second-page-left",{
        autoAlpha:0,
   
        y:50
    },{
        delay:delay,
        y:0,
        autoAlpha:1,
        duration:1.5
    }).fromTo(".second-page-right-para-para1",{
        autoAlpha:0,
        x:15
    },{
        x:0,
        autoAlpha:1,
 
        duration:1.5
    },"<+0.5").fromTo(".second-page-right-para-para2",{
        autoAlpha:0,
        x:15
    },{
        x:0,
        autoAlpha:1,
 
        duration:1.5
    },"<")
    let trigger = ".second-page";
   

    splitTextAnimation(".second-page-right-para-para3 h3",delay+1.2,40,trigger)
    splitTextAnimationOpacity(".second-page-right-para-para3 p",delay+1.4,40,trigger)
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-page-right",
            start:"top 80%",
        }
    });
    gg2.fromTo(".second-page-right .readmore",{
        autoAlpha:0,
        x:15
    },{
        x:0,
        autoAlpha:1,
        delay:3,
        duration:1.5
    }).fromTo(".second-page-bg img",{
        autoAlpha:0,
    },{
        autoAlpha:1,
        duration:1.5
    },"<")
}

secondPageAnimation()


function thirdPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page-bottom-right",
            start:"top 80%",
        }
    })

    gg.fromTo(".third-page-top",{
        autoAlpha:0,
    },{
        autoAlpha:1,
        duration:0.5
    }).fromTo(".third-page-bottom-right",{
        autoAlpha:0,
        y:50
    },{
        y:0,
        autoAlpha:1,
        duration:1.5
    },"<+0.5")

    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page-bottom-left",
            start:"top 80%",
        }
    });
    gg2.fromTo(".third-page-bottom-left .readmore",{
        autoAlpha:0,
        x:-15
    },{
        x:0,
        autoAlpha:1,
        delay:2,
        duration:1.5
    })
    let gg3 = gsap.timeline({
        scrollTrigger:{
            trigger:".third-page-bg",
            start:"top 80%",
        }
    })
    gg3.fromTo(".third-page-bg",{
        autoAlpha:0,
     
    },{
       
        autoAlpha:1,
 
        duration:1.5
    })
    splitTextAnimationOpacity(".third-page-top-title p",0,10,".third-page-top")
    splitTextAnimationOpacity(".third-page-top-title h3",0,15,".third-page-top")
    let trigger = ".third-page-bottom-left"
    let delay = 0.5
    splitTextAnimation(".third-page-bottom-left-para-para1 h3",delay,50,trigger)
    splitTextAnimationOpacity(".third-page-bottom-left-para-para2 p",delay+0.2,50,trigger)
    splitTextAnimationOpacity(".third-page-bottom-left-para-para3 p",delay+0.4,50,trigger)

}
thirdPageAnimation()

function forthPageAnimation(){

    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".forth-page",
            start:"top 80%",
        }
    })

    gg.fromTo(".forth-page-left",{
        autoAlpha:0,
        y:50
    },{
        y:0,
        autoAlpha:1,
        duration:1.5
    }).fromTo(".forth-page-bg",{
        autoAlpha:0,
     
    },{
     
        autoAlpha:1,
        delay:1,
        duration:1.5
    })
    splitTextAnimation(".forth-page-right-para h2 ",0.5,40,".forth-page")
    splitTextAnimationOpacity(".forth-page-right-para p ",1,50,".forth-page")
}
forthPageAnimation()

function fifthPageAnimation(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".fifth-page-right",
            start:"top 80%",
        }
    })
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:".fifth-page-left",
            start:"top 80%",
        }
    })
    gg.fromTo(".fifth-page-right",{
        autoAlpha:0,
        x:30
    },{
        x:0,
        autoAlpha:1,
        duration:1.5
    })
    
    gg2.fromTo(".fifth-page-left-top-left .imgBox",{
        autoAlpha:0,
        x:-15
    },{
        delay:0.5,
        x:0,
        autoAlpha:1,
        duration:1.5
    }).fromTo(".fifth-page-left-bottom-right .imgBox",{
        autoAlpha:0,
        x:-15
    },{
        x:0,
        autoAlpha:1,
        duration:1.5
    },"<+0.5").fromTo(".fifth-page .readmore",{
        autoAlpha:0,
        x:-15
    },{
        x:0,
        autoAlpha:1,
        duration:1.5
    },"<+1")
    splitTextAnimation(".fifth-page-left-top-right-para .para1 h3",0.5,40,".fifth-page-left-top-right-para")
    splitTextAnimationOpacity(".fifth-page-left-top-right-para .para2 p",1,50,".fifth-page-left-top-right-para")
    splitTextAnimation(".fifth-page-left-bottom-left-para .para1 h3",0.5,40,".fifth-page")
    splitTextAnimationOpacity(".fifth-page-left-bottom-left-para .para2 p",1,50,".fifth-page")

}
fifthPageAnimation()

function sixthPageAnimation(){
    splitTextAnimation(".sixth-page-bg-title p span ",1,7,".sixth-page")
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:".sixth-page",
            start:"top 80%",
        }
    })
   
    gg.fromTo(".sixth-page-top-title",{
        autoAlpha:0,
       
    },{
     
        autoAlpha:1,
        duration:1
    }).fromTo(".sixth-page-bg-title",{
        autoAlpha:0,
    
    },{
   
        autoAlpha:1,
        duration:1.5
    },"<").fromTo(".sixth-page-bottom :nth-child(1)",{
        autoAlpha:0,
        y:50
    },{
        y:0,
        autoAlpha:1,
        duration:1.5
    },"<+0.3").fromTo(".sixth-page-bottom :nth-child(2)",{
        autoAlpha:0,
        y:50
    },{
        y:0,
        autoAlpha:1,
        duration:1.5
    },"<+0.6").fromTo(".sixth-page-bottom :nth-child(3)",{
        autoAlpha:0,
        y:50
    },{
        y:0,
        autoAlpha:1,
        duration:1.5
    },"<+0.6").fromTo(".sixth-page-bottom a",{
        autoAlpha:0,
        y:50
    },{
        y:0,
        autoAlpha:1,
        duration:1.5
    },"<+1.5")
    splitTextAnimationOpacity(".sixth-page-top-title p",0,50,".sixth-page")
    splitTextAnimationOpacity(".sixth-page-top-title h3",0,50,".sixth-page")
    splitTextAnimationOpacity(".sixth-page-bottom ul :nth-child(1) .para2 p",2,50,".sixth-page")
    splitTextAnimationOpacity(".sixth-page-bottom ul :nth-child(2) .para2 p",2.5,50,".sixth-page")
    splitTextAnimationOpacity(".sixth-page-bottom ul :nth-child(3) .para2 p",3,50,".sixth-page")
}
sixthPageAnimation()