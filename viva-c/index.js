$(document).ready(()=>{
    $('.index1-menu ul li, .index1-booking a, .index1-scroll, hamburger-menu ul > nth-child(2) a, hamburger-menu ul > nth-child(3) a').click(function (e) { 
        var anchor_id=$(this).attr('anchor');
        $('html,body').animate({
            scrollTop: $('#'+anchor_id).offset().top
        },1000);
    });

    
    
    $('.toTopFix, hamburger-menu ul > nth-child(1) a').click(function (e) { 
        var anchor_id=$(this).attr('anchor');
        $('html,body').animate({
            scrollTop:  0
        },1000);
    });
    var img_width = $('.index9 > img').width();
    //console.log(img_width);
    var img_avg = 1.9;
    if(window.innerWidth < 500){
        let flag = false
        document.addEventListener("scroll",((e)=>{
         
            
           
    
        }),{once:true})
        
    }
    
  


    function firstPageAniamtion(){
        let gg = gsap.timeline({
            scrollTrigger:{
                trigger:".index1",
                start:"bottom 95%",
                scrub:3,
                end:"+=500"
            }
        })
        gg.fromTo(".index1-para .line-round",{
            opacity:1,
        },{
            opacity:window.innerWidth > 850 ? 1 : 0,
        
        }).fromTo(".index1-booking img",{
            opacity:1
        },{
            opacity:1,
            duration:0.001
        },"<")
        let gg2 = gsap.timeline()
        gg2.fromTo(".index1-bg img",{
            opacity:0,
        },{
            opacity:1,
            stagger:0.2,
        
        }).fromTo(".index1-para .para",{
            opacity:0,
          
        },{
          
            opacity:1,
           duration:4
        },"<+1.5").fromTo(".index1-para .line-round :nth-child(1)",{
        
            strokeDashoffset: 2000,
            strokeDasharray: 2000
        },{
        
            strokeDashoffset:0,
          
           duration:10
        },"<+0.8").fromTo(".index1-para .line-round img",{
            opacity:0,
            filter:"blur(1.8)"
        },{
            filter:"blur(1)",
            opacity:1,
           duration:1
        },"<+0.8").fromTo(".index1-scroll",{
            opacity:0,
         
        },{
         
            opacity:1,
           duration:1
        },"<-0.8")

        let gg3 = gsap.timeline()
        gg3.fromTo(".index1-menu img",{
            x:-30,
            opacity:0
        },{
            x:0,
            opacity:1,
            stagger:0.15,
            delay:1.5
        })
    }
    firstPageAniamtion()
    
   
    function secondPageAniamtion(){
        let gg = gsap.timeline({
            scrollTrigger:{
                trigger:".index2",
                start:"top center",
         
            }
        })

        gg.fromTo(".index2-para h2",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8
        }).fromTo(".index2-para h1",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+0.5").fromTo(".index2-para-imgBox img",{
            opacity:0,
            filter:"blur(2)",
            scale:1.2
        },{
            filter:"blur(1)",
            scale:1,
            opacity:1,
            duration:0.8,
            stagger:0.3
        },"<+0.5").fromTo(".index2-para p",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+1.8")
    }
    secondPageAniamtion()
    function thirdPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index3",
                start:"top 80%"
            }
        })
        gg.fromTo(".index3-bg .third-page-round",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8
        }).fromTo(".index3-para",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+0.5").fromTo(".index3-para .line-round :nth-child(1)",{
        
        strokeDashoffset: 2000,
        strokeDasharray: 2000
        },{
        
            strokeDashoffset:0,
        
        duration:10
        },"<+0.8").fromTo(".index3-para .line-round img",{
            opacity:0,
            filter:"blur(1.8)"
        },{
            filter:"blur(1)",
            opacity:1,
        duration:1
        },"<+0.8")
    }
    thirdPageAnimation()
    function forthPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index4",
                start:"top center"
            }
        })
        gg.fromTo(".index4 .forth-page-round",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        }).fromTo(".index4-para",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        },"<+0.8").fromTo(".index4 .line-round img",{
            opacity:0,
            x:-50
        },{
            x:0,
            opacity:1,
            duration:0.6
        },"<+0.6")

        let gg2 = gsap.timeline({
            scrollTrigger:{
                trigger:".index4 .line-round",
                start:"top center",
                toggleClass:"active"
            }
        })
    }
    forthPageAnimation()
    function fifthPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index5",
                start:"top center"
            }
        })
        gg.fromTo(".index5",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        }).fromTo(".index5 .swiper-pagination",{
            opacity:0,
        
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.6,
            stagger:0.2
        },"<+0.5")
    }
    function fifthPageAnimationPh(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index5",
                start:"top center"
            }
        })
        gg.fromTo(".index5 .swiper2 .swiper-wrapper",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1
        }).fromTo(".index5 .swiper2 .swiper-button-white",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1
        },"<").fromTo(".index5 .situation",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8
        },"<+0.5").fromTo(".index5 .swiper2 .swiper-pagination",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1
        },"<+0.5").fromTo(".index5 .swiper2 .para img",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1
        },"<+0.5").fromTo(".index5 .viva",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1
        },"<+0.5").fromTo(".index5 .round",{
            opacity:0,
            y:30
        },{
            y:0,
            opacity:1,
         
        },"<").fromTo(".index5 .half-round",{
            opacity:0,
            y:30
        },{
            y:0,
            opacity:1,
         
        },"<+0.6")
        
      
        
    }
    function sixthPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index6",
                start:"top center"
            }
        })
        gg.fromTo(".index6",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        })
    }

    function sixthPageAnimationPh(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index6",
                start:"top center"
            }
        })
        gg.fromTo(".index6-title",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.8
        }).fromTo(".index6 .swiper",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        },"<+0.7").fromTo(".index6-bg .round1",{
           
        },{
        
    
            duration:0.5
        },"<+0.65").fromTo(".index6-bg .round2",{
           
        },{
        
    
            duration:0.5
        },"<+0.65")
        $(".index6 .imgBox").each((i,item)=>{
            let gg =gsap.timeline({
            scrollTrigger:{
                trigger:item,
                start:"top center"
            }
        })
            gg.fromTo(item,{
                y:30,
                opacity:0
            },{
                y:0,
                opacity:1,
                duration:0.8,

            })
        })
        $(".index6 .round").each((i,item)=>{
            let gg2 =gsap.timeline({
            scrollTrigger:{
                trigger:item,
                start:"top center"
            }
        })
            if(i==0){
                gg2.to(item,{
                x:"-8vw",
                y:"2.5vw",
                duration:0.8,
                opacity:1,
                delay:1,
            })
            }else if(i==1){
                gg2.to(item,{
                x:"5vw",
                y:"2.5vw",
                duration:0.8,
                delay:1,
                opacity:1,
                
            })
            }else if(i==2){
                gg2.to(item,{
                x:"-3vw",
                y:"2.5vw",
                duration:0.8,
                delay:1,
                opacity:1,
            })
            }else if(i==3){
                gg2.to(item,{
                x:"6vw",
                y:"4vw",
                duration:0.8,
                delay:1,
                opacity:1,
            })
            }else if(i==4){
                gg2.to(item,{
                x:"-9vw",
                y:"-8vw",
                duration:0.8,
                delay:1,
                opacity:1,
            })
            }
            
        })
        $(".index6 .para").each((i,item)=>{
            let gg3 =gsap.timeline({
            scrollTrigger:{
                trigger:item,
                start:"top center"
            }
        })
            gg3.fromTo(item,{
                    y:30,
                    opacity:0
                },{
                    y:0,
                    opacity:1,
                    duration:1.2,

                })
        })
    }
    if(window.innerWidth > 500){
        sixthPageAnimation()
        fifthPageAnimation()
    }else{
        sixthPageAnimationPh()
        fifthPageAnimationPh()
    }


    function seventhPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index7",
                start:"top center"
            }
        })
        gg.fromTo(".index7",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        })
    }
    seventhPageAnimation()
    function eighthPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index8",
                start:"top center"
            }
        })
        gg.fromTo(".index8",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        })
    }
    eighthPageAnimation()
    function ninthPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index9",
                start:"top center"
            }
        })
        gg.fromTo(".index9-bg",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        }).fromTo(".index9 > img",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        },"<+0.8").fromTo(".index9-dot",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        },"<+0.5").fromTo(".index9-hand img",{
            opacity:0,
      
        },{
         
            opacity:1,
            duration:1.5
        },"<")

        let gg2 =gsap.timeline({
            scrollTrigger:{
                trigger:".index9",
                start:"top center"
            }
        })

        gg2.to(".index9-hand img",{
            opacity:0,
            delay:12,
        })
    }
    ninthPageAnimation()
    function tenthPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index10",
                start:"top center"
            }
        })
        gg.to(".index10-para :nth-child(2)",{
          duration:0.001,
          x:"5vw"
        }).fromTo(".index10 img",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5,
            stagger:0.3
        })
    }
    tenthPageAnimation()
    function elethPageAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:".index11",
                start:"top center"
            }
        })
        gg.fromTo(".index11",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        })
    }
    elethPageAnimation()
    function formAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:"form",
                start:"top center"
            }
        })
        let gg2 =gsap.timeline({
            scrollTrigger:{
                trigger:"form",
                start:"top center",
                toggleActions:"play none none reverse"
            }
        })
        gg2.fromTo(".index1-booking",{
            opacity:1,
            
        },{
            opacity:0,
            duration:0.5,
        })

        gg.fromTo("form .form-box",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8,
            stagger:0.25
        },"<").fromTo("form .form-para p",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8,
            stagger:0.25
        },"<+1.7").fromTo("form .form-para input",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8,
            stagger:0.25
        },"<+0.5").fromTo("form > input",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:0.8,
            stagger:0.25
        },"<+0.5")
    }
    formAnimation()
    function footerAnimation(){
        let gg =gsap.timeline({
            scrollTrigger:{
                trigger:"footer",
                start:"top bottom"
            }
        })
        gg.fromTo("footer img",{
            opacity:0,
            y:15
        },{
            y:0,
            opacity:1,
            duration:1.5
        })
    }
    footerAnimation()
    // swiper1
    const swiper = new Swiper('.index5 .swiper1', {
        speed: 1000,
        effect : 'fade',
        loop:true,
        pagination: {
        el: '.index5 .swiper-pagination',
        navigation: {
        nextEl: '.index5 .swiper1 .swiper-button-next',
        prevEl: '.index5 .swiper1 .swiper-button-prev',
   
        },
    },
    });
    $(".index5 .swiper-button-next").click(()=>{
        swiper.slideNext()
    })
    $(".index5 .swiper-button-prev").click(()=>{
        swiper.slidePrev()
    })

    const swiperPh = new Swiper('.index5 .swiper2', {
        speed: 1000,
        effect : 'fade',
    
        pagination: {
        el: '.index5 .swiper-pagination',
        navigation: {
        nextEl: '.index5 .swiper2 .swiper-button-next',
        prevEl: '.index5 .swiper2 .swiper-button-prev',
   
        },
    },
    });
    $(".index5 .swiper1 .swiper-button-next").click(()=>{
        swiper.slideNext()
    })
    $(".index5 .swiper1 .swiper-button-prev").click(()=>{
        swiper.slidePrev()
    })
    $(".index5 .swiper2 .swiper-button-next").click(()=>{
        swiperPh.slideNext()
    })
    $(".index5 .swiper2 .swiper-button-prev").click(()=>{
        swiperPh.slidePrev()
    })
    //swiper1

    //swiper2
    const swiper2 = new Swiper('.index7 .swiper', {
        speed: 1000,
        effect : 'fade',
        loop:true,
        pagination: {
        el: '.index7 .swiper-pagination',
     
    },
    navigation: {
        nextEl: '.index7 .swiper-button-next',
        prevEl: '.index7 .swiper-button-prev',
   
        },
    });
    $(".index7 .swiper-button-next").click(()=>{
        swiper.slideNext()
    })
    $(".index7 .swiper-button-prev").click(()=>{
        swiper.slidePrev()
    })
    //swiper2

    //hambuger
    $(".hamburger").click((e)=>{
        e.target.classList.toggle("is-active")
        $(".hamburger-menu").toggleClass("menu-active")
        $(".hamburger-menu li a").click(()=>{
            $(".hamburger").removeClass("is-active")
            $(".hamburger-menu").removeClass("menu-active")
        })
    })
    
    //hamburger
  })


  $(document).load(()=>{
    $(".index9").scrollLeft(img_width / img_avg)
          
  })