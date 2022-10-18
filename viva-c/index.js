let newSrt1;
let newSrt2;
let newSrt3;
let arr = [$(".index2-para h2").text(),$(".index2-para h1").text(),$(".index2-para p").text()]
arr.forEach((item,i)=>{
    if(i == 0){
    
       newSrt1 = item.split("");
       item.text("")
       newSrt1.forEach((item2)=>{
        $(".index2-para h2").append(`<span>${item2}</span>`)
       })
    }else if(i == 1){
         newSrt2 = item.split("");
         item.text("")
         newSrt2.forEach((item2)=>{
            $(".index2-para h1").append(`<span>${item2}</span>`)
         })

    }else{
    
        newSrt3 = item.split("");
        item.text("")
        newSrt3.forEach((item2)=>{
            $(".index2-para p").append(`<span>${item2}</span>`)
        })
      
    }
    
})
console.log(newSrt1,newSrt2,newSrt3)