//데스크탑 메뉴 js 더러움 주의.....
jQuery(function(jQuery){
	jQuery.fn.gnb = function(options) {
		var opts = jQuery.extend(options);
		var gnb = jQuery(this);
		var gnbList = gnb.find('>ul>li');
		var submenu = gnb.find('.submenu');
		var submenuList = submenu.find('>ul>li');
		var submenuBg = jQuery('.submenu-bg');

		function showMenu() {
			t = jQuery(this).parent('li');
			if (!t.hasClass('active')) {
				gnbList.removeClass('current');
				gnbList.removeClass('active');
				gnbList.bind("focus mouseover",function(){
					jQuery(this).addClass("active");
				});
				gnbList.bind("mouseleave",function(){
					jQuery(this).removeClass("active");
				});
				
			}
			submenuBg.show();
			submenuBg.stop(true, false).animate({height:350},200, 'swing',function(){
				submenu.fadeIn(200);
			});
		}

		function showMenu2() {
			t = jQuery(this).parent('li');
			if (!t.hasClass('active')) {
				gnbList.removeClass('current');
				gnbList.removeClass('active');
				t.addClass('active');
			}
			
			submenuBg.show();
			submenuBg.stop(true, false).animate({height:350},200, 'swing',function(){
				submenu.fadeIn(200);
			});
			return false;
		}

		function hideMenu() {
			gnbList.removeClass('current');
			gnbList.removeClass('active');
			submenu.fadeOut(100);
			submenuBg.stop(true, false).delay(100).animate({height:'0'},200, 'swing', function(){
				submenuBg.hide();			
			});
			activeMenu();
		}

		function activeMenu() {
			if(opts.d1) {
				t = gnbList.eq(opts.d1-1); 
				t.addClass('current');
			}
		}

		return this.each(function() {
			activeMenu();
			var isTablet = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
			if( !isTablet ){
				gnbList.find('>a').mouseover(showMenu).focus(showMenu);
			}else{
				gnbList.find('>a').click(showMenu2);
			}
			jQuery("#header").mouseleave(hideMenu);
		});
	}
});

$(function(){
	//서브메뉴 내려옴
	jQuery('#gnb').gnb({ d1: 0 });
});


//모바일 메뉴 js 더러움 주의.....
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector(".all-menu-mo").addEventListener("click", function(e){
        if ( document.querySelector('.mo-menuWrap').classList.contains('on') ){
            //메뉴닫힘
            document.querySelector('.mo-menuWrap').classList.remove('on');


            //페이지 스크롤 락 해제
            document.querySelector('#dimmed').remove();
			$('html, body').css({'overflow': 'auto'}); //scroll hidden 해제
			$('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능


        } else {
            //메뉴펼침
            document.querySelector('.mo-menuWrap').classList.add('on');
			$(".mo-menuClose").css("display","block");

            //페이지 스크롤 락 레이어 추가
            let div = document.createElement('div');
            div.id = 'dimmed';
            document.body.append(div);

            

			//페이지 스크롤 락  모바일 이벤트 차단
			$('html, body').css({'overflow': 'hidden'}); // 모달팝업 중 html,body의 scroll을 hidden시킴 
			$('#element').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
				event.preventDefault();     
				event.stopPropagation();     
				return false; 
			});


			//페이지 스크롤 락  모바일 이벤트 차단
            document.querySelector('#dimmed').addEventListener('scroll touchmove mousewheel', function(e){
                e.preventDefault();
                e.stopPropagation();
                return false;
            });             
            
            
            document.querySelector('#dimmed').addEventListener("click", function(){
                //메뉴닫힘
                document.querySelector('.mo-menuWrap').classList.remove('on');
				$(".mo-menuClose").css("display","none");

                //페이지 스크롤 락 해제
                document.querySelector('#dimmed').remove();

				$('html, body').css({'overflow': 'auto'}); //scroll hidden 해제
				$('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
            });


			document.querySelector('.mo-menuClose').addEventListener("click", function(){
                //메뉴닫힘
                document.querySelector('.mo-menuWrap').classList.remove('on');
				$(".mo-menuClose").css("display","none");

                //페이지 스크롤 락 해제
                document.querySelector('#dimmed').remove();

				$('html, body').css({'overflow': 'auto'}); //scroll hidden 해제
				$('#element').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
            });
        }
        
    });
});
    
//모바일 하위메뉴 클릭시 플러스 마이너스 버튼
$(".moGnb li a").click(function(){
	item = $(this).children(".menu-arr");
	$(".menu-arr").html("<i class='xi-plus-min'></i>").css("color","var(--black)");

	$(".mo-submenu").stop().slideUp();
	$(this).next(".mo-submenu").stop().slideToggle(500, function(){
		if(!$(this).is(":hidden")){
			item.html("<i class='xi-minus-min'></i>").css("color","var(--black)");
		}
	});
});