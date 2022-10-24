
$(document).ready(function () {

    let loading_tl=gsap.timeline({delay:0.4});
        loading_tl.to('.loading_div .logo_div img', 0.5, {y: 0});

        $(window).on("load",function () {
            let gg = gsap.timeline()
            gg.to(".loading_div2",{
                opacity:0,
                duration:0.3,
                pointerEvents:"none"
            })
        });
           
    



    //-- 滾動監聽 --
    let menu_top =$('.menu').offset().top;
    //## 右上角粉專按鈕 ##
    let shear_top =$('.top_logo_div .share_box').offset().top;

    $(window).bind('scroll resize', function() {

        let beforeTop=parseInt($(this).scrollTop());
        if(menu_top<=beforeTop){
            $('.menu').addClass('fixed_menu');
        }
        else{
            $('.menu').removeClass('fixed_menu');
        }

        if(shear_top<=beforeTop){
            $('.top_logo_div .share_box').addClass('fixed_share_box');
        }
        else{
            $('.top_logo_div .share_box').removeClass('fixed_share_box');
        }
    });



    //-- menu --
    if(window.innerWidth <= 850){
        $('.btn_box .hamburger').removeClass("is-active")
        $('.menu .list_box').css('transform', 'translateX(-40px)')
        $('.menu .list_box').css('opacity', '0')
        $('.menu .list_box').css('pointer-events', 'none')
    }
    $('.btn_box .hamburger').click(function (e) { 

        var tl = gsap.timeline();

        if($(this).hasClass('is-active')){

            let menu_obj;
            //-- 電腦 --
            if($(window).width()>768){
                menu_obj={
                   'width': '8%',
                   'opacity': 0,
                   'x':-40,
                   'visibility':'hidden'
                };
            }
            //-- 手機 --
            else{
                menu_obj={
                    'width': '12%',
                    'opacity': 1,
                    'x':'-100%',
                    'visibility':'visible'
                };
            }

            $(this).removeClass('is-active');
            tl.to($('.menu .list_box'), 0.5, {opacity: menu_obj.opacity, x: menu_obj.x});
            tl.to($('.menu .list_box'), 0.1, {visibility: menu_obj.visibility}, '<0.2');
            tl.to($('.menu '), 1, { width: menu_obj.width}, '-=0.3');
        }
        else{

            let menu_obj;
            //-- 電腦 --
            $('.menu .list_box').css('pointer-events', 'all')
            if($(window).width()>768){
                menu_obj={
                   'width': '83%',
                   'opacity': 1,
                   'x':0,
                   'visibility':'visible'
                };
            }
            //-- 手機 --
            else{
                menu_obj={
                    'width': '12%',
                    'opacity': 1,
                    'x':0,
                    'visibility':'visible'
                };
            }

            
            $(this).addClass('is-active');
            tl.to($('.menu '), 1, { width: menu_obj.width});
            tl.to($('.menu .list_box'), 0.5, {opacity: menu_obj.opacity, x: menu_obj.x, visibility: menu_obj.visibility}, '<0.4');
        }
    });
  
   

    

    //---------------- Footer 動態 ---------------------
    let footer_tl=gsap.timeline({
    
        scrollTrigger: {
            trigger: "footer",
            //once:true, // 執行1次
            //pin: true,   // 固定畫面
            start: "top bottom", // 開始位置
            end: "top bottom", // 結束位移距離
            //scrub: 3, // 延遲動態進程(滑順效果)
            //markers:true, // 標註開始，結束位置
        }
    });

    footer_tl.from('footer .logo_item .logo_box img', 1.5, {y:'100%'});

    $.each($('footer .logo_item .item_box a'), function (index, valueOfElement) { 
        footer_tl.from($(this), 1.5, {y:'100%'}, '<0.1');
    });

    $.each($('footer .share_box a'), function (index, valueOfElement) { 
        footer_tl.from($(this), 1.5, {y:'100%'}, '<0.1');
    });
    $.each($('footer .item_box a'), function (index, valueOfElement) { 
        let _this=$(this);
        let txt=$(this).html();
        let txt_arr= txt.split(''); 
        $(this).html('');
        $.each(txt_arr, function (index, valueOfElement) { 
          _this.append(`<span class="footer_txt">${this}</span>`);
        });
     });
    $('footer a').mouseenter(function (e) { 
       
        if(e.target == this){
            let a = this.childNodes
            a.forEach((item,i) => {
                let gg =gsap.timeline()
                gg.to(item,{
                    y:-20,
                    duration:0.4,
                    delay:i/15,
                    opacity:0
                }).to(item,{
                    y:20,
                    duration:0
                }).to(item,{
                    y:0,
                    opacity:1,
                    duration:0.4
                })
            });
        }
  
        // tl_mu.to($(this).find('.a_line'), 0.3, {width: '50%'}, 'start');
    });


    //markMenu
    function markMenu(){
        let pathname = window.location.pathname
        let fileName = pathname.split(".")
      
        let reg = new RegExp(`([a-zA-Z]{0,25}.${fileName[fileName.length-1]})$`)
        let path = reg.exec(pathname)
        switch (path[0]){
            case `about.${fileName[fileName.length-1]}`:{
               
                $($($(`.list_box a`)[0])).html(`<p>ABOUT\xa0 US</p>`)
                $($(`.list_box a`)[0]).css("pointer-events","none")
                $($(`.list_box a`)[0].childNodes).css("border-bottom","2px solid #fff")
              
                break
            }
            case `buyIt.${fileName[fileName.length-1]}`:{
              
                break;
            }
            case `stock.${fileName[fileName.length-1]}`:{
                $($($(`.list_box a`)[1])).html(`<p>CAR\xa0IN\xa0STOCK</p>`)
                $($(`.list_box a`)[1]).css("pointer-events","none")
                $($(`.list_box a`)[1].childNodes).css("border-bottom","2px solid #fff")
                break;
            }
            case `stockInner.${fileName[fileName.length-1]}`:{
                $($($(`.list_box a`)[1])).html(`<p>CAR\xa0IN\xa0STOCK</p>`)
                $($(`.list_box a`)[1].childNodes).css("border-bottom","2px solid #fff")
                break;
            }
            case `purchase.${fileName[fileName.length-1]}`:{
                $($($(`.list_box a`)[2]).find("span").eq(0)).text("PURCHASING")
                $($(`.list_box a`)[2]).css("pointer-events","none")
                $($(`.list_box a`)[2].childNodes).css("border-bottom","2px solid #fff")
                break;
            }
            case `rent.${fileName[fileName.length-1]}`:{
                $($($(`.list_box a`)[3])).html(`<p>RENTAL\xa0CAR</p>`)
                $($(`.list_box a`)[3]).css("pointer-events","none")
                $($(`.list_box a`)[3].childNodes).css("border-bottom","2px solid #fff")
                break;
            }
            case `news.${fileName[fileName.length-1]}`:{
                $($($(`.list_box a`)[4]).find("span").eq(0)).text("NEWS")
                $($(`.list_box a`)[4]).css("pointer-events","none")
                $($(`.list_box a`)[4].childNodes).css("border-bottom","2px solid #fff")
                break;
            }
            case `newsInner.${fileName[fileName.length-1]}`:{
                $($($(`.list_box a`)[4]).find("span").eq(0)).text("NEWS")
                $($(`.list_box a`)[4].childNodes).css("border-bottom","2px solid #fff")
                break;
            }
            case `contact.${fileName[fileName.length-1]}`:{
                $($($(`.list_box a`)[5]).find("span").eq(0)).text("APPOINTMENT")
                $($(`.list_box a`)[5]).css("pointer-events","none")
                $($(`.list_box a`)[5].childNodes).css("border-bottom","2px solid #fff")
                break;
            }
           
         
         
            
           
          
           
        }

          //-- menu拆字 --
      

    }
    markMenu()
    //markMenu
    setTimeout(() => {
        menuAnimation()
    },500);
    function menuAnimation(){
        $.each($('.menu .list_box a>span'), function (index, valueOfElement) { 
            let _this=$(this);
            let txt=$(this).html();
            let txt_arr= txt.split(''); 
            $(this).html('');
            $.each(txt_arr, function (index, valueOfElement) { 
              _this.append(`<span class="s_txt">${this}</span>`);
            });
         });
         let menu_en = ['ABOUT US','CAR IN STOCK','PURCHASING','RENTAL CAR','NEWS','APPOINTMENT','APPOINTMENT']
         let menu_ch = ['關於我們','現有車款','代購專區','租賃專區','新聞資訊','預約試乘','高價收購電動車']
         let flag = true;
       
         $('.menu .list_box a').mouseenter(function (e) { 
              if(flag){
                flag=false
                var tl_mu = gsap.timeline();
           
                $.each($(this).find('.s_txt'), function (index, valueOfElement) { 
                    tl_mu.to($(this), 0.3, {y:-24}, '<0.03');
                });
                    setTimeout(() => {
                        $(e.target).find(".s_txt").remove()
                        
                    for( i = 0 ; i < menu_en.length ; i++){
                        if(e.target == $('.menu .list_box a')[i]){
                            let en = menu_en[i].split("")
                            
                            en.forEach((item)=>{
                                if(item == " "){
                                    $(e.target).find(".s_txt_box").append(`<span class=s_txt>\xa0</span>`)
                                }else {
                                    $(e.target).find(".s_txt_box").append(`<span class=s_txt>${item}</span>`)
                                }
            
                            })
                        
                        }
                    }
                   
              
               
              
               
                 $.each($(this).find('.s_txt'), function (index, valueOfElement) { 
                     let display_num=index==0 ? '<0.2':'<0.05';
                     tl_mu.fromTo($(this), 0.3, {y:20,
                        opacity:0
                    },
                    {y:0,
                        opacity:1
                    }, display_num);
                 });
         
                    }, 300);
              
                 
            }
           
         });
     
                 $(".menu .list_box a").mouseleave((e)=>{
                    if(!flag){
                        flag = true;
                        let gg = gsap.timeline({paused:true})
                        let a = $(e.target).find(".s_txt")
        
                        gg.fromTo(a,{
                            y:0,
                            opacity:1
                        },{
                            opacity:0,
                            y:45,
                            duration:0.8,
                            stagger:0.03,
                            overwrite:true
                        })
                        gg.play()
                        setTimeout(()=>{
                            $(e.target).find(".s_txt").remove()
                            for( i = 0 ; i < menu_ch.length ; i++){
                                if(e.target == $('.menu .list_box a')[i]){
                                    let ch = menu_ch[i].split("")
                                    
                                    ch.forEach((item)=>{
                                        if(item == " "){
                                            $(e.target).find(".s_txt_box").append(`<span class=s_txt>\xa0</span>`)
                                        }else {
                                            $(e.target).find(".s_txt_box").append(`<span class=s_txt>${item}</span>`)
                                        }
                    
                                    })
                                    let a = $(e.target).find(".s_txt")
                                   
                                   gg.fromTo(a,{
                                       y:-45,
                                       opacity:0
                                   },{
                                       opacity:1,
                                       y:0,
                                       duration:0.3,
                                       stagger:0.03,
                                  
                                   })
                                }
                            }
                  
                        },800)
               
                    
                    
                    }
                      
                      
                       
                 })
      }
});

// $(window).on('load', function () {
//     $('.loading_div').addClass('close');
// });