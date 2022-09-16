function bannerTitleIn(){
    let str;
    const bannerTitle = document.querySelector(".first-page .ch_text_xl")
    console.log("abc" == /c/)
    switch (location.pathname){
        case "/index.html":{
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
    let num;
    bannerTitle.innerHTML = strElement
    bannerTitle.childNodes.forEach((item,i)=>{
       
        let titleAnimation = gsap.timeline();
        
    
            titleAnimation.fromTo(item.childNodes,{
                transform:"rotateY(120deg)",
                opacity:0
            },{
                opacity:1,
                duration:0.6,
                transform:"rotateY(0deg)",
                delay:i/10
            })
    
           
    
    })
  
    let gg = gsap.timeline()
    gg.fromTo(".first-page-title .imgBox",{
        opacity:0,
        x:-30,
   
    },{
        x:0,
        delay:1.5,
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
bannerTitleIn()

function bannerRoundAnimation(){
 
}
bannerRoundAnimation()