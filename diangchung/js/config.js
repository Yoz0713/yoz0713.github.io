function splitTextAnimationLeftIn(wrap,delay,speed,trigger){
    if(typeof wrap == String){
        wrap = document.querySelector(`${wrap}`);
    }
 
    let text = wrap.innerHTML
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
                start:"top bottom",
                
            },
      
        });
      
            gg.fromTo(item.childNodes,{
            
                opacity:0,
                
            },{
                opacity:0,
                
                duration:delay,
             
            }).fromTo(item.childNodes,{
                x:-50,
                opacity:0
            },{
                opacity:1,
                x:0,
                duration:0.6,
        
                delay:i/speed
            })
     
        
    })
   
}

function menuAnimation(){
        let li = document.querySelectorAll(".menu .menu-box a")
        let gg = gsap.timeline({
            scrollTrigger:{
                trigger:".menu",
                start:"top bottom"
            }
        })
        gg.fromTo(".menu-box h3",{
            opacity:0,
            y:30
        },{
            y:0,
            opacity:1,
            duration:0.8
        }).fromTo(".menu-logo",{
            opacity:0,
            y:30
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<").fromTo(".menu-logo .star",{
            opacity:0,
            y:-20,
            x:-70,
            rotation:0
        },{
            y:0,
            x:0,
            rotation:180,
            opacity:1,
            duration:1,
           
        })
        li.forEach((item)=>{
            
            splitTextAnimationLeftIn(item.lastElementChild,0.5,25,".menu")
        })
}

function bannerTitleIn(){
    let str;
    const bannerTitle = document.querySelector(".first-page .ch_text_xl")
    const pathname = location.pathname
   
    let a = /(\/[a-zA-Z]{0,25}.html)$/.exec(pathname)

  
    switch (a[0]){
        case  "/index.html":{
            str = `優雅是一種態度，從一而終的追求至美，永恆在時代中綻放。`
            break
        }
        case "/about.html":{
            str = `為城市種下美的種子，為你築起一輩子的好宅。`
            break
        }
        case "/blog.html":{
            str=`一起敞遊 時代趨勢，分享建築、心靈與生活的美好。`
            break;
        }
        case "/blogInner.html":{
            str=`一起敞遊 時代趨勢，分享建築、心靈與生活的美好。`
            break;
        }
        case "/contact.html":{
            str=`為城市種下美的種子，為你築起一輩子的好宅。`
            break;
        }
        case "/news.html":{
            str=`分享是一種喜悅。`
            break;
        }
        case "/newsInner.html":{
            str=`分享是一種喜悅。`
            break;
        }
        case "/portfolio.html":{
            str=`為城市種下美的種子，為你築起一輩子的好宅。`
            break;
        }
        case "/service.html":{
            str=`愛您懂我們的你，為您，我們持續更好!`
            break;
        }
    }
    
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
   
    bannerTitle.innerHTML = strElement
    bannerTitle.childNodes.forEach((item,i)=>{
       
        let titleAnimation = gsap.timeline();
        
    
            titleAnimation.fromTo(item.childNodes,{
          
                opacity:0
            },{
                opacity:1,
                duration:2,
             
                delay:i/10
            })
    
           
    
    })
  
    let gg = gsap.timeline()
    gg.fromTo(".first-page-title .imgBox",{
        opacity:0,
        x:-30,
   
    },{
        x:0,
        delay:2,
        rotation:0,
        opacity:1,
        duration:1.5
    }).fromTo(".first-page-title .imgBox .para",{
        opacity:0,
     
    },{
      
        opacity:1,
        duration:1.5
    },"<+0.7")
}

function safariHacks() {
    let windowsVH = window.innerHeight / 100;
    document.querySelector('.first-page').style.setProperty('--vh', windowsVH + 'px');
    window.addEventListener('resize', function() {
        document.querySelector('.first-page').style.setProperty('--vh', windowsVH + 'px');
    });
}


function gsapStopWarning(){
    gsap.config({ nullTargetWarn: false });
}

// hamburger

let burger = document.querySelector(".hamburger")
let burgerSpan = document.querySelector(".hamburger span")
let menuMobile = document.querySelector(".menu")
let menuMobileUl = document.querySelector(".menu ul")
function bugerActive(){
    burger.classList.toggle("is-active")
    menuMobile.classList.toggle("is-active2")

}
burgerSpan.addEventListener("click",()=>{
    bugerActive()
})
// hamburger
menuAnimation()
gsapStopWarning()
bannerTitleIn()

safariHacks();
