let str;
const bannerTitle = document.querySelector(".first-page .ch_text_xl")

switch (location.pathname){
    case "/index.html":{
        str = `優雅是一種態度，從一而終的追求至美，永恆在時代中綻放。`
    }
}

let arr = str.split("")

let arrElement = arr.map((item)=>{
    if(item == "，" || item == "。"){
        item =`<span>${item}<br></span>`
        return item
    }else{
        item = `<span>${item}</span>`
        return item
    }
   
})
let strElement = arrElement.join("")

bannerTitle.innerHTML = strElement
bannerTitle.childNodes.forEach((item,i)=>{
    let titleAnimation = gsap.timeline();
    if(i/2 == 0){
        titleAnimation.fromTo(item,{
            textShadow:" 0px 0px 40px whitesmoke",
            transform:
            "translate3d(15rem,-8rem,0) skewX(70deg) scale(1.5)",
             rotation:40,
             textShadow: "0 0 20px whitesmoke",
             opacity: 0,
        },{
            duration:1,
            transform:"none",
            textShadow:"0 0 0 transparent",
            opacity:1,
            delay:i/10
        })
    }else{
        
    }
    console.log(item,"@"+i)
  
})
