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
      $(".recommend__text-sub>li").click(function (e) {
              e.preventDefault();

        var recomNumber = $(this).index();
        $(this).addClass("active").siblings("li").removeClass("active");
        $(".recomend__box>div").eq(recomNumber).css("display", "block").siblings().css("display", "none");
    })

  
//     var showMenu = 0;
//     //배너 한개의 너비값
//   var menuWidth = $(".menu>li").width();
//   //복사하기 전 배너 개수
//   var menuCount = $(".menu>li").length;

//   var copyFirst = $(".menu>li:first").clone();
//   var copyNext = $(".menu>li").eq(1).clone();

//   $(".menu").prepend(copyNext);
//   $(".menu").append(copyFirst);

//   var count = $(".menu>li").length;
//   console.log(`복사후 배너개수 : ${count}`);
//   $(".recomend__box ").width(count * menuWidth);
//   $(".menu>li").width(menuWidth);

//   function move() {
//     $(".menu").stop().animate({
//         "margin-left": -showMenu * menuWidth - 300
//     }, 500);

//     $(".menu>li").eq(showMenu + 1).stop().fadeIn(500);
// }
//  $(".rightBtn").click(function () {
//   move();
//       });

  //   $(".recomend__box>div").each(function () {
  //   //배너가 몇번째 배너인지 보여줄 변수 만들기

  // // $(".recomend__list").width(Mcount * menuCount);
  // $(".menu>li").width(menuCount);

  //   })
  //   function moveMenu(){
  //       sNum = $(".menu>li").index();
  //      console.log(sNum);
        // if (showMenu === 4) {
        //     sNum = 0;
        //     $(".recomend__list").css("margin-left", 0);
        //   }
        //   showMenu++;
        //   $(".recomend__list")
        //     .stop()
        //     .animate(
        //       {
        //         marginLeft: -showMenu * 30 + "%",
        //       },
        //       1000
        //     );
    // }
    // $(".rightBtn").click(function () {
    //     moveMenu();
    //   });



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