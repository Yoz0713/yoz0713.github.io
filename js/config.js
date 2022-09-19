
    function markMenu(){
        let li = document.querySelectorAll(".list_box > a")
        let li2 = document.querySelectorAll(".list_box .en_text")
        let arr = ["/index.html","/about.html","/portfolio.html","/portfolioInner.html","/blog.html","/blogInner.html","/news.html","/news.htmlInner","/contact.html"]
        console.log(location.pathname)
        if(window.innerWidth > 920){
            switch(location.pathname){
                case arr[0]:
                    li.forEach((i)=>{
                        i.style.color="#fff"
                    })
                    li2.forEach((i)=>{
                        i.style.color="#fff"
                    })
                break;
                case arr[1]:
                li[0].style.borderRight="1px solid #fff";
                li[0].style.pointerEvents = "none"
            
                break;
                case arr[2]:
                li[1].style.borderRight="1px solid #fff";
                li[1].style.pointerEvents = "none"
                
                break;
                case arr[3]:
                li[1].style.borderRight="1px solid #fff";
                
                
                break;
                case arr[4]:
                li[2].style.borderRight="1px solid #fff";
                li[2].style.pointerEvents = "none"
               
                break;
                case arr[5]:
                li[2].style.borderRight="1px solid #fff";
               
               
                break;
                case arr[6]:
                li[3].style.borderRight="1px solid #fff";
                li[3].style.pointerEvents = "none"
               
                break;
                case arr[7]:
                li[3].style.borderRight="1px solid #fff";
              
               
                break;
                case arr[8]:
                li[4].style.borderRight="1px solid #fff";
                li[4].style.pointerEvents = "none"
                
                break;
            }
        }else{
            switch(location.pathname){
                case arr[0]:
                    li.forEach((i)=>{
                        i.style.color="#fff"
                    })
                    li2.forEach((i)=>{
                        i.style.color="#fff"
                    })
                break;
                case arr[1]:
                li[0].style.borderLeft="1px solid #fff";
                li[0].style.pointerEvents = "none"
            
                break;
                case arr[2]:
                li[1].style.borderLeft="1px solid #fff";
                li[1].style.pointerEvents = "none"
                
                break;
                case arr[3]:
                li[1].style.borderLeft="1px solid #fff";
                
                
                break;
                case arr[4]:
                li[2].style.borderLeft="1px solid #fff";
                li[2].style.pointerEvents = "none"
               
                break;
                case arr[5]:
                li[2].style.borderLeft="1px solid #fff";
                
               
                break;
                case arr[6]:
                li[3].style.borderLeft="1px solid #fff";
                li[3].style.pointerEvents = "none"
               
                break;
                case arr[7]:
                li[3].style.borderLeft="1px solid #fff";
              
               
                break;
                case arr[8]:
                li[4].style.borderLeft="1px solid #fff";
                li[4].style.pointerEvents = "none"
                
                break;
            }
        }
      
    }
    markMenu()

    function loadingPageAnimation(){
        let gg =gsap.timeline();
        gg.fromTo(".loading .square1",{
            opacity:0
        },{
            opacity:1,
            duration:2
          
        }).fromTo(".loading .square2",{
            opacity:0
        },{
            opacity:1,
            duration:2
          
        },"<").fromTo(".loading .imgBox",{
        
            opacity:0
        },{
            opacity:1,
            duration:4
        },"<+0.5")

        let gg2 = gsap.timeline();
        gg2.fromTo(".loading .square1",{
            transformOrigin:"50% 50%",
            rotation:35,
        },{
           
            rotation:395,

            duration:20,
        }).fromTo(".loading .square2",{
            transformOrigin:"50% 50%",
            rotation:55,
        },{

            rotation:415,
            repeat:-1,
            duration:20,
        },"<")
    }
    loadingPageAnimation()

  
     document.body.onload = function(){
         setTimeout(()=>{
             let gg = gsap.timeline();
             gg.to(".loading",{
                 opacity:0,
                 duration:1,
                 pointerEvents:"none"
             })
         },2100)
         
        setTimeout(()=>{
            bannerTitleIn()
            bannerBoxIn()
        },2200)
     }

let pointer = document.documentElement;
 
var mousex;
var mousey;
let gg = gsap.timeline({
    scrollTrigger:{
        trigger:".first-page",
        start:"top top",
        toggleActions:"play none none reverse",
      
    }
})

 pointer.addEventListener('mousemove', m => {

        mousex = m.clientX
        mousey = m.clientY
        setTimeout(()=>{
         
            console.log(mousex,mousey)
            let gg2 = gsap.timeline({
                scrollTrigger:{
                    trigger:".second-page",
                    start:"top bottom",
                    toggleActions:"play none none reverse",
               
                }
            })
            gg2.fromTo(".hover-light",{
                background:`radial-gradient(circle at ${mousex}px ${mousey}px,#1b0f0995 0.01%, #1b0f08e1 30%`
            },{
          
                duration:0.001,
                background:`radial-gradient(circle at ${mousex}px ${mousey}px,#1b0f0995 0.01%, #1b0f08e1 30%`,
               
             },"<")
        },5)
           
    })
