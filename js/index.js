
// banner 輪播及進場動畫
let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0]
let swiper1 = new Swiper(".swiper1",{
    speed:2000,
    loop:true,
    autoplay:{
        delay:3500
    },
 
    effect : 'fade',
    fadeEffect: {
      crossFade: true,
    },
    on: {
        slideChangeTransitionStart: function(){
            if(this.realIndex == 0){
                next.classList.remove("navigate")
                banner1In()
                prev.classList.add("navigate")
                
            }else if(this.realIndex == 1){
                prev.classList.remove("navigate")
                banner2In()
                next.classList.add("navigate")
            }
           
     
        }, touchMove: function(){
            if(this.realIndex == 0){
                next.classList.remove("navigate")
                banner1In()
                prev.classList.add("navigate")
                
            }else if(this.realIndex == 1){
                prev.classList.remove("navigate")
                banner2In()
                next.classList.add("navigate")
            }
      },
    
    }
})



function banner1In(){
    let gg = gsap.timeline();

    gg.fromTo(".swiper1 .home-img1",{
        scale:1.3,
    },{
        scale:1,
        duration:6,
    })

   
}
function banner2In(){
    let gg = gsap.timeline();
    gg.fromTo(".swiper1 .home-img2",{
        scale:1.3,
    },{
        scale:1,
        duration:6,
    })
}
prev.onclick = function(){
    swiper1.slideTo(1);

}
next.onclick = function(){
    swiper1.slideTo(2);

}

// second-page line-grow animation
let li = document.querySelectorAll(".switchImg li");
let p = document.querySelectorAll(".switchImg .phone");
let switchImg = document.querySelectorAll(".home-second-page-bottom-left-img a")
let x = 0
for(let i = 0 ; i <li.length ; i++){
    li[i].onclick = function(e){
        x=i
        let lineSwitch = document.getElementsByClassName("lineSwitch")[0]
        lineSwitch.classList.remove("lineSwitch")
        this.classList.add("lineSwitch")
        switchImg.forEach((i)=>{
            i.style.opacity="0"
        })
        switchImg[i].style.opacity="1"
    }
}

p[0].onclick = function(e){
    let lineSwitch = document.getElementsByClassName("lineSwitch")[0]
    x--
    switchImg.forEach((i)=>{
        i.style.opacity="0"
    })
    if(lineSwitch.previousElementSibling == p[0]){
        x = switchImg.length-1
        switchImg[switchImg.length-1].style.opacity="1";
        li[li.length-1].classList.add("lineSwitch")
    }else{
        switchImg[x].style.opacity="1";
        lineSwitch.previousElementSibling.classList.add("lineSwitch")
    }
    lineSwitch.classList.remove("lineSwitch")    
}

p[1].onclick = function(e){
    let lineSwitch = document.getElementsByClassName("lineSwitch")[0]
 
    x++
    switchImg.forEach((i)=>{
        i.style.opacity="0"
    })
    if(lineSwitch.nextElementSibling == p[1]){
        x = 0
        switchImg[0].style.opacity="1";
        li[0].classList.add("lineSwitch")
    }else{
        switchImg[x].style.opacity="1";
        lineSwitch.nextElementSibling.classList.add("lineSwitch")
    }
    lineSwitch.classList.remove("lineSwitch")
  
}
// second-page line-grow animation
// banner title in
function bannerTitleIn(){
    let gg =gsap.timeline();
    gg.fromTo(".home-first-page-title .square1",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:12,
    }).fromTo(".home-first-page-title .square2",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:12,
    },"<+1").fromTo(".home-first-page-title h1",{
        opacity:0
    },{
        opacity:1,
        duration:1,
    },"<+1.5").fromTo(".home-first-page-title p",{
        opacity:0
    },{
        opacity:1,
        duration:1,
      
    },"<+0.5")
    let gg2 = gsap.timeline();

    gg2.fromTo(".home-first-page .g1",{
        
    },{
        repeat:-1,
        duration:10,
        delay:2,
        transformOrigin:"center",
        rotate:"360deg",
        ease:"linear"
    }).fromTo(".home-first-page .g2",{
        
    },{
        repeat:-1,
        duration:10,
        transformOrigin:"center",
        rotate:"360deg",
        ease:"linear"
    },"<")
}


 
 




// banner title in

//page title in 
function pageTitleIn(page,gap){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-${page}-page-top`,
            start:"top center"
        }
    })
    gg.fromTo(`.home-${page}-page-top h3`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    }).fromTo(`.home-${page}-page-top h2`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    },`${gap}`).fromTo(`.home-${page}-page-top .text-decoration`,{
        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:0.8,
    },`${gap}`).fromTo(`.home-${page}-page-top .text-decoration .line`,{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 0,
        duration:25,
    },"<+0.5")
}
pageTitleIn("second","<+0.3")
pageTitleIn("third","<+0.3")
// page title in

// second-page-right in

function seondPageRight(){
    let gg = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-second-page-top`,
            start:"top center"
        }
    })
    gg.fromTo(".home-second-page-bottom-right svg polyline",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 300,
        duration:3,
    },"<").fromTo(".home-second-page-bottom-left",{

        opacity:0,
        y:30
    },{
        opacity:1,
        y:0,
        duration:2
    },"<").fromTo(".home-second-page-bottom-right-para > h3",{
        opacity:0,
        y:30,
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<+1").fromTo(".home-second-page-bottom-right-para > svg",{
        opacity:0,
        y:30,
        x:-5
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<+0.5").fromTo(".home-second-page-bottom-right-para > svg line",{
        strokeDashoffset: 2000,
        strokeDasharray: 2000
    },{
        strokeDashoffset: 1800,
        duration:1.2,
      
    },"<+0.5").fromTo(".home-second-page-bottom-right-para p",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<").fromTo(".home-second-page-bottom-right-para .readmore",{
        opacity:0,
        y:30
    },{
        y:0,
        opacity:1,
        duration:1.2
    },"<")
    let gg2 = gsap.timeline({
        scrollTrigger:{
            trigger:`.home-second-page-top`,
            start:"top bottom",
            toggleActions:"play none none reverse"
        }
    })
    gg2.fromTo(".home-first-page-shadow",{
      
    },{
 
        duration:0.8,
        opacity:0,
        height:0
    },"<").fromTo(".home-first-page .home-img1",{
        filter:"brightness(1)",
    },{
        filter:"brightness(0.3)",
        duration:0.8,
    },"<").fromTo(".home-first-page .home-img2",{
        filter:"brightness(1)",
    },{
        filter:"brightness(0.3)",
        duration:0.8,
    },"<")
  
        let gg4 = gsap.timeline({
            scrollTrigger:{
                trigger:`.switchImg`,
                start:"top bottom"
            }
        })
    
        gg4.fromTo(".switchImg :nth-child(1)",{
            y:30,
            opacity:0,
       
        },{
            y:0,
        
            opacity:1,
            duration:0.1
        }).fromTo(".switchImg :nth-child(2)",{
            y:30,
            opacity:0,
    
        },{
            y:0,
          
            opacity:1,
            duration:0.1
        },"<+0.3").fromTo(".switchImg :nth-child(3)",{
            y:30,
     
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+0.3").fromTo(".switchImg :nth-child(4)",{
            y:30,
      
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+0.3").fromTo(".switchImg :nth-child(5)",{
            y:30,
       
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+0.3").fromTo(".switchImg :nth-child(6)",{
            y:30,

            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+0.3").fromTo(".switchImg :nth-child(7)",{
            y:30,
    
            opacity:0
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+0.3")

    
}
seondPageRight()

// third-page



let readmore = document.querySelectorAll(".readmore");
let arrow = document.querySelectorAll(".arrow");
let ggArrow ;
let timer1;
if(window.innerWidth >1440){
    for(let i = 0 ; i<readmore.length ; i++){
        readmore[i].addEventListener("mouseenter",()=>{
    
            ggArrow = gsap.timeline();
            timer1 = setInterval(()=>{
                ggArrow.fromTo(arrow[i],{
                    x:0,
                    opacity:1
                },{
                    x:30,
                    opacity:0,
                    duration:0.8,
                
                }).fromTo(arrow[i],{
                    x:-45,
                    opacity:0
                },{
                    x:0,
                    opacity:1,
                    duration:0.8,
                    
                })
               
            },100)
        })
        readmore[i].addEventListener("mouseleave",()=>{
            clearInterval(timer1)
            ggArrow.reverse(1);
           
          })
        
    }
}else{
    for(let i = 0 ; i<readmore.length ; i++){
    
            ggArrow = gsap.timeline();
           
                ggArrow.to(arrow[i],{
                    keyframes:[
                        {
                            x:30,
                            duartion:0.75,
                            opacity:0
                        },{
                            x:-45,
                            duartion:0.1,
                            opacity:0
                        },{
                            x:0,
                            duartion:0.75,
                            opacity:1
                        }
                        ,{
                            x:0,
                            duartion:0.75,
                            opacity:1
                        }
                    ],
                    repeat:-1
                    
                })
     
        
    }
}







       
  


// make first-page of mobile device 100vh without screen shaking 
function safariHacks() {
    let windowsVH = window.innerHeight / 100;
    document.querySelector('.home-first-page').style.setProperty('--vh', windowsVH + 'px');
    window.addEventListener('resize', function() {
        document.querySelector('.home-first-page').style.setProperty('--vh', windowsVH + 'px');
    });
}

safariHacks();
// make first-page of mobile device 100vh without screen shaking
if(window.innerWidth > 1440){
    function thirdPageAnimation(){
        let gg = gsap.timeline({
            scrollTrigger:{
                trigger:".home-third-page",
                start:"top center",
              
           
            }
        })
    
        gg.fromTo(".home-third-page .li1",{
            y:30,
            opacity:0
        },{
            delay:0.6,
            duration:0.8,
            opacity:1,
            y:0
        }).fromTo(".home-third-page .li2",{
            y:30,
            opacity:0
        },{
            duration:0.8,
            opacity:1,
            y:0
        },"<+0.2").fromTo(".home-third-page .li3",{
            y:30,
            opacity:0
        },{
            duration:0.8,
            opacity:1,
            y:0
        },"<+0.2").fromTo(".home-third-page .readmore",{
            opacity:0,
            y:30
        },{
            opacity:1,
            y:0,
            duration:0.8,
        },"<+0.2").fromTo(".path1",{
            strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
            strokeDashoffset: 800,
            duration:1.5,
        },"<").fromTo(".path2",{
            strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
            strokeDashoffset: 800,
            duration:1.5,
        },"<+0.1").fromTo(".path3",{
            strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
            strokeDashoffset: 800,
            duration:1.5,
        },"<+0.1")
    }
    thirdPageAnimation()
}



if(window.innerWidth <= 920){
    function thirdMobileAnimation(){
        let li = document.querySelectorAll(".home-third-page-bottom li")
        for(let i = 0 ; i<li.length ; i++){
            let gg = gsap.timeline({
                scrollTrigger:{
                    trigger:`.li${i+1}`,
                    start:"top 70%",
                }
            })
            gg.fromTo(`.home-third-page .li${i+1}`,{
                y:30,
                opacity:0
            },{
                delay:0.6,
                duration:0.8,
                opacity:1,
                y:0
            }).fromTo(`.path${i+1}`,{
                strokeDashoffset: 2000,
                strokeDasharray: 2000
            },{
                strokeDashoffset: 800,
                duration:3.5,
            },"<+0.5")
            if(i == 2){
                gg.fromTo(`.home-third-page ul .readmore`,{
                    y:30,
                    opacity:0
                },{
                
                    duration:0.8,
                    opacity:1,
                    y:0
                },"<+0.5")
            }
            

        }
     
    
    }
    thirdMobileAnimation()
}
