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

// $(window).resize(function () {
//     winSize = $(window).outerWidth();
//     menuWidth = $(".menu>li").outerWidth();
//     mImg1 = 0;
//     mImg2 = 0;
//     mImg3 = 0;
//     mImg4 = 0;
//     $(".menuList>div").find(".menu").css("margin-left", 0);
//     if (winSize >= 767) {
//         btnNum = 1;
//     } else {
//         btnNum = 3;
//     }
// })

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


