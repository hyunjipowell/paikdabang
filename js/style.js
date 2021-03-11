$(function(){
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
      $(".recommend__text-sub>li").click(function () {
        var recomNumber = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".recomend__box>div").eq(recomNumber).css("display", "block").siblings().css("display", "none");
    })



    var showMenu = 0;
  var menuCount = $(".menu>li").length;
  var copyPhoto = $(".menu>li:first").clone();
  var copyPhoto1 = $(".menu>li").eq(1).clone();

  $(".menu").append(copyPhoto);
  $(".menu").append(copyPhoto1);

  var Mcount = $(".menu>li").length;
  console.log(`복사후 배너개수 : ${Mcount}`);

  $(".recomend__list").width(Mcount * menuCount);
  $(".menu>li").width(menuCount);

    $(".recomend__box>div").each(function () {

    })
    function moveMenu(){
        sNum = $(".menu>li").index();
        s = sNum-2; 
        if (showMenu === --sNum) {
            sNum = 0;
            $(".recomend__list").css("margin-left", 0);
          }
          showMenu++;
          $(".recomend__list")
            .stop()
            .animate(
              {
                marginLeft: -showMenu * 30 + "%",
              },
              1000
            );
    }
    $(".rightBtn").click(function () {
        moveMenu();
      });



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