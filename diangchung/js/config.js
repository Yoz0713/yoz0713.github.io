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
            
                autoAlpha:0,
                
            },{
                autoAlpha:0,
                
                duration:delay,
             
            }).fromTo(item.childNodes,{
                transform:"skew(-60deg)",
                autoAlpha:0
            },{
                autoAlpha:1,
                transform:"skew(0)",
                duration:1.5,
        
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
            autoAlpha:0,
            y:30
        },{
            y:0,
            autoAlpha:1,
            duration:0.8
        }).fromTo(".menu-logo",{
            autoAlpha:0,
            y:30
        },{
            y:0,
            autoAlpha:1,
            duration:0.8
        },"<").fromTo(".menu-logo .star",{
            autoAlpha:0,
            y:-20,
            x:-70,
            rotation:0
        },{
            y:0,
            x:0,
            rotation:180,
            autoAlpha:1,
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
          
                autoAlpha:0
            },{
                autoAlpha:1,
                duration:2,
             
                delay:i/10
            })
    
           
    
    })
  
    let gg = gsap.timeline()
    gg.fromTo(".first-page",{
      
  
    },{
       
        duration:1.5
    }).fromTo(".first-page-title .imgBox",{
        autoAlpha:0,
        x:-30,
   
    },{
        x:0,
        delay:2,
        rotation:0,
        autoAlpha:1,
        duration:1.5
    }).fromTo(".first-page-title .imgBox .para",{
        autoAlpha:0,
     
    },{
      
        autoAlpha:1,
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
function markMenu(){
    let a = document.querySelectorAll(".menu-box a")
    let arr = ["/index.html","/about.html","/portfolio.html","/portfolioInner.html","/service.html","/blog.html","/blogInner.html","/news.html","/newsInner.html","/contact.html"]
    let path = /(\/[a-zA-Z]{0,25}.html)$/.exec(location.pathname)
   
    if(window.innerWidth > 920){
        switch(path[0]){
            case arr[0]:
                a.forEach((i)=>{
                    i.classList.remove("a")
                
                })
              
            break;
            case arr[1]:
            a[0].classList.add("a");
            a[0].parentElement.style.pointerEvents = "none"
          
            break;
            case arr[2]:
            a[1].classList.add("a");
            a[1].parentElement.style.pointerEvents = "none"
            break;
            case arr[3]:
            a[1].classList.add("a");
            a[1].parentElement.style.pointerEvents = "none"
            
            break;
            case arr[4]:
            a[2].classList.add("a");
            a[2].parentElement.style.pointerEvents = "none"
            break;
            case arr[5]:
            a[3].classList.add("a");
            a[3].parentElement.style.pointerEvents = "none"
           
            break;
            case arr[6]:
            a[3].classList.add("a");
            a[3].parentElement.style.pointerEvents = "none"
            break;
            case arr[7]:
            a[4].classList.add("a");
            a[4].parentElement.style.pointerEvents = "none"
           
            break;
            case arr[8]:
            a[4].classList.add("a");
            a[4].parentElement.style.pointerEvents = "none"
            break;
            case arr[9]:
            a[5].classList.add("a");
            a[5].parentElement.style.pointerEvents = "none"
            break;
         
        }
    }else{
        switch(path[0]){
            case arr[0]:
                a.forEach((i)=>{
                    i.classList.remove("a")
                })
              
            break;
            case arr[1]:
            a[0].classList.add("a");
     
        
            break;
            case arr[2]:
            a[1].classList.add("a");
            
            break;
            case arr[3]:
            a[1].classList.add("a");
            
            
            break;
            case arr[4]:
            a[2].classList.add("a");
           
            break;
            case arr[5]:
            a[3].classList.add("a");
           
           
            break;
            case arr[6]:
            a[3].classList.add("a");
           
            break;
            case arr[7]:
            a[4].classList.add("a");
          
           
            break;
            case arr[8]:
            a[4].classList.add("a");
            
            break;
            case arr[9]:
            a[5].classList.add("a");
            
            break;
         
        }
    }
  
}
function addMouseHover(){
    let imgBox = document.querySelectorAll(".imgBox")
    imgBox.forEach((item)=>{
        item.classList.add("magic-hover")
        item.classList.add("magic-hover__square")

    })
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

function loadingPageAnimation(){
    let gg =gsap.timeline();
    gg.fromTo(".loading svg circle",{
        strokeDasharray:'20 2000'
    },{
        strokeDasharray:'320 2000',
        duration:5
      
    },"<").fromTo(".loading .imgBox",{
        autoAlpha:0,
    
    },{
        autoAlpha:1,
        duration:3
      
    },"<+0.5").fromTo(".loading .star",{
        rotation:0
       
    },{
        rotation:1800,
        repeat:-1,
        duration:23,
  
      
    },"<")
    
}
loadingPageAnimation()



markMenu()
menuAnimation()
addMouseHover()
gsapStopWarning()
safariHacks();



  document.body.onload = function(){

      setTimeout(()=>{
      
          let gg = gsap.timeline();
          gg.fromTo(".loading .imgBox",{
            autoAlpha:1,
        
        },{
 
            autoAlpha:0,
            duration:1.5
        }).fromTo(".loading svg",{
            autoAlpha:1,
      
        },{
            autoAlpha:0,
            duration:1.5
        },"<").fromTo(".loading .imgBox",{
            y:0
        
        },{
            y:"-200vw",
            
            duration:0.0001
        }).fromTo(".loading",{
            autoAlpha:1,
            pointerEvents:"none"
        },{
            
            autoAlpha:0,
            duration:4.5
        })
      },1900)
      
    
     setTimeout(()=>{
   
         bannerTitleIn()
     },4000)
  }
 
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//   var raf = requestAnimationFrame;
//   var caf = cancelAnimationFrame;
  
//   var W, H;
//   var TAU = Math.PI*2;
  
//   function resize() {
//     W = canvas.width = innerWidth;
//     H = canvas.height = innerHeight;
//   }
  
//   var Len = 50;
//   var xs = new Array(Len);
//   var ys = new Array(Len);
  
//   function dist(x1, y1, x2, y2) {
//     var dx = x1 - x2;
//     var dy = y1 - y2;
//     return Math.sqrt(dx*dx + dy*dy);
//   }
  
//   function ease(n) {
//     return 3*n*n - 2*n*n*n;
//   }
  
//   function Goo(opts) {
//     var len = opts.len;
//     var xs = new Array(len);
//     var ys = new Array(len);
//     var rs = new Array(len);
//     var radius = opts.radius
//     var hr = radius/2;
//     var border = opts.border;
//     var bg = opts.bg;
//     var fg = opts.fg;
    
//     var animating = null;
//     var Threshold = 0.1;
//     var i;
    
//     for (i = 0; i < len; i++) {
//       rs[i] = hr + hr*(1 - i/len);
//     }
    
//     function update(x0, y0) {
//       var same = 0;
//       xs[0] = x0;
//       ys[0] = y0;
  
//       for (i = 1; i < len; i++) {
//         if (!(x = xs[i])) x = xs[i] = x0;
//         if (!(y = ys[i])) y = ys[i] = y0;
//         var dx = x0 - x;
//         var dy = y0 - y;
//         var d = Math.sqrt(dx*dx + dy*dy);
        
//         if (d < Threshold) {
//           xs[i] = x0;
//           ys[i] = y0;
//           same++;
//         } else {
//           xs[i] += dx * 0.7;
//           ys[i] += dy * 0.7;
//         }
        
//         x0 = x;
//         y0 = y;
//       }
      
//       draw(len);
//       if (same < len - 1) {
//         raf(function() {
//           update(xs[0], ys[0]);
//         });
//       }
//     }
  
//     function draw(n) {
//       ctx.clearRect(0, 0, W, H);
      
//       for (i = n-1; i >= 0; i--) {
//         x = xs[i];
//         y = ys[i];
//         ctx.beginPath();
//         ctx.arc(x, y, border + rs[i], 0, TAU);
//         ctx.fillStyle = bg;
//         ctx.fill();
//       }
//       for (i = n-1; i >= 0; i--) {
//         x = xs[i];
//         y = ys[i];
//         ctx.beginPath();
//         ctx.arc(x, y, rs[i], 0, TAU);
//         ctx.fillStyle = fg;
//         ctx.fill();
//       }
//     }
    
//     return {
//       update: update
//     };
//   }
  
//   var goo = Goo({
//     len: 100,
//     radius: 6,
//     border: 1.5,
//     bg: '#1B2A4E',
//     fg: '#FEFEFE'
//   });
  
//   resize();
//   document.onmousemove = function(e) {
//     goo.update(e.clientX, e.clientY);
//   };
//   goo.update(W/2, H/2, 0, 0);