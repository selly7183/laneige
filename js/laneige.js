$(document).ready(function(){
    $(".gnb01").on("mouseover",function(){
        $(".sub-menu01").stop().show();  
        $(".sub-menu-inner").stop().hide(); 
        $(".sub-menu-inner2").stop().hide();
        $(".sub-menu-inner3").stop().hide();
    });
    $(".gnb01").on("mouseover",function(){
        $(".header-bottom").stop().show();                 
    });
    $(".gnb01").on("mouseout",function(){
        $(".sub-menu01").stop().hide();               
    });
    $(".gnb01").on("mouseout",function(){
        $(".header-bottom").stop().hide();                  
    });
    
    $(".gnb02").on("mouseover",function(){
        $(".sub-menu02").stop().show();  
        $(".sub-menu-inner").stop().hide(); 
        $(".sub-menu-inner2").stop().hide();
        $(".sub-menu-inner3").stop().hide();
    });
    $(".gnb02").on("mouseover",function(){
        $(".header-bottom").stop().show();                  
    });
    $(".gnb02").on("mouseout",function(){
        $(".sub-menu02").stop().hide();               
    });
    $(".gnb02").on("mouseout",function(){
        $(".header-bottom").stop().hide();                  
    });

    $(".gnb03").on("mouseover",function(){
        $(".sub-menu-inner").stop().show(); 
        $(".sub-menu-inner2").stop().hide();
        $(".sub-menu-inner3").stop().hide();
    });
    $(".gnb03").on("mouseover",function(){
        $(".header-bottom2").stop().show();                  
    });
    
    $(".gnb04").on("mouseover",function(){
        $(".sub-menu-inner2").stop().show();
        $(".sub-menu-inner").stop().hide(); 
        $(".sub-menu-inner3").stop().hide();
    });
    $(".gnb04").on("mouseover",function(){
        $(".header-bottom3").stop().show();                  
    });
    
    $(".gnb05").on("mouseover",function(){
        $(".sub-menu-inner3").stop().show(); 
        $(".sub-menu-inner").stop().hide(); 
        $(".sub-menu-inner2").stop().hide();
    });
    $(".gnb05").on("mouseover",function(){
        $(".header-bottom3").stop().show();                  
    });
   
     $(".gnb06").on("mouseover",function(){ 
        $(".sub-menu-inner").stop().hide(); 
        $(".sub-menu-inner2").stop().hide();
        $(".sub-menu-inner3").stop().hide();
    });
    
    $(".slide-group").slick({		//슬릭 초기화 구문
		dots:true,			//컨트롤 버튼여부
		autoplay:true,		//자동전환여부
		autoplaySpeed:2500,	//전환되는 속도
		speed:500,			//이동하는 속도
		infinite:true		//무한반복여부

	});

});
                  
