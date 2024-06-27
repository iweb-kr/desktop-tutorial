$(function(){
  //desktop용 메뉴
  $(".gnb > li").mouseenter(function(e){
    e.preventDefault();
    
    $(".depth2").stop().slideUp();
    $(".gnb > li").removeClass("on");
    $(this).addClass("on");
    $(this).children(".depth2").stop().slideDown();

  });

  $(".gnb > li").mouseleave(function(e){
    e.preventDefault();
    
    $(this).removeClass("on");
    $(this).children(".depth2").stop().slideUp();

  });
  

  //1024이하 노출 모바일 메뉴
  $(".menu-btn").click(function(event){

    event.preventDefault();

    $(".m-navWrap").css({"width":"100%"});
    $(".bBg").stop().fadeIn();
    $(".m-navbox").stop().addClass("on");
    $("html, body").css("overflow","hidden");
  });

  $(".closeBtn").click(function(event){

    event.preventDefault();

    $(".bBg").stop().fadeOut();
    $(".m-navWrap").css({"width":"0"});
    $(".m-navbox").stop().removeClass("on");
    $(".m-depth2").stop().slideUp();
    $(".m-nav > li").removeClass("on");
    $("html, body").css("overflow","auto");
  });

  $(".m-nav > li.m-depth1 > a, .m-navWrap .m-navbox .m-nav > li i").on("click",function(event){

    event.preventDefault();
    
    $(this).parent().siblings().children(".m-depth2").stop().slideUp();
    $(this).siblings(".m-depth2").stop().slideToggle();
    $(this).parent().siblings().removeClass("on");
    $(this).parent().toggleClass("on");
  });
});