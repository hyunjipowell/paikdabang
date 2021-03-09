$(function(){
      //nav hover시 sub 보이게
      const subHeight = $(".head__menu-sub").outerHeight;
      $(".sub-js").height(subHeight);
      $(".nav-item").mouseover(function(){
            $(".head__menu-sub").stop().slideDown(200);
            $(".sub-js").stop().slideDown(300);
      })
      $(".nav>li").mouseout(function(){
            $(".head__menu-sub").stop().slideUp(200);
            $(".sub-js").stop().slideUp(300);
      })

      //추천메뉴 클릭시 색상변경하기
      



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