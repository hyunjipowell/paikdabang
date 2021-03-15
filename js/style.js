$(function(){
      $("head__menu-btn>a").click(function(){
                  $(".head__menu-btn").toggleClass("active");
                  $(this).toggleClass("active");
                });
               
      })




      //nav hover시 sub 보이게
      var subHeight = $(".head__menu-sub").outerHeight;
      $(".sub-js").height(subHeight);
      $(".nav-item").mouseover(function(){
            $(".head__menu-sub").stop().slideDown(200);
            $(".sub-js").stop().slideDown(300);
      })
      $(".nav>li").mouseout(function(){
            $(".head__menu-sub").stop().slideUp(200);
            $(".sub-js").stop().slideUp(300);
      })



      //추천메뉴
      //클릭하면 다른메뉴 보여지도록
      $(".recommend__text-sub>li").click(function (e) {
              e.preventDefault();

        var recomNumber = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".recomend__box>div").eq(recomNumber).css("display", "block").siblings().css("display", "none");
    })

    //버튼 누르면 옆으로 페이지 넘어가도록
    var mImg1 = 0;
    var mImg2 = 0;
    var mImg3 = 0;
    var mImg4 = 0;
    
    var winSize;
    var menuWidth;
    // var btnNum;
    
    function mMove(target, sNum) {
          
        // console.log(target,sNum);
        if (winSize >= 767) {
            $(target).find(".menu").stop().animate({
                marginLeft: -sNum * menuWidth * 2  + "px"
            }, 500)
        } else {
            $(target).find(".menu").stop().animate({
                marginLeft: -sNum * menuWidth * 2 + "px"
            }, 500)
        }
    }
    
    $(".recomend__box>div").each(function (i) {
        winSize = $(window).outerWidth();
        menuWidth = $(".menu>li").outerWidth();
    
        // console.log(menuWidth);
        if (winSize >= 767) {
            btnNum = 1;
            listMore = 2;
        } else {
            btnNum = 3;
            listMore = 3;        
        }
        $(this).find(".rightBtn").click(function (e) {
          e.preventDefault();
          
            if (i == 0 && mImg1 < btnNum) {
                mImg1++;
                mMove($(this).parents(".recomend__list"), mImg1);
            }
            if (i == 1 && mImg2 < btnNum) {
                mImg2++;
                mMove($(this).parents(".recomend__list"), mImg2);
            }
            if (i == 2 && mImg3 < listMore) {
                mImg3++;
                mMove($(this).parents(".recomend__list"), mImg3);
            }
            if (i == 3 && mImg4 < listMore) {
                mImg4++;
                mMove($(this).parents(".recomend__list"), mImg4);
            }
        })
        $(this).find(".leftBtn").click(function (e) {
          e.preventDefault();
            if (i == 0 && mImg1 > 0) {
                mImg1--;
                mMove($(this).parents(".recomend__list"), mImg1);
            }
            if (i == 1 && mImg2 > 0) {
                mImg2--;
                mMove($(this).parents(".recomend__list"), mImg2);
            }
            if (i == 2 && mImg3 > 0) {
                mImg3--;
                mMove($(this).parents(".recomend__list"), mImg3);
            }
            if (i == 3 && mImg4 > 0) {
                mImg4--;
                mMove($(this).parents(".recomend__list"), mImg4);
            }
        })
    })
    
    
    



      //family site클릭하면 sub보이게
      $(".foot__family").click(function(){
            $(this).find(".foot__family-sub").slideToggle(300);
            $(this).parent()
                    .toggleClass("active")
                    .siblings()
                    .removeClass("active")
                    .children(".mapSub")
                    .slideUp(300);
      })

})