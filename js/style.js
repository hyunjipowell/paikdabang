$(function(){
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
      
})