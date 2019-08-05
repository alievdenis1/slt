export var docsSlider = function(){    
    let countImg=$(".docs__img").parent(".docs__wrapper").children().length;
    let nomberActive= 1;
    $(".docs__slider__img ").children(".sl_img").eq(nomberActive-1).addClass("sl_active");
    
    $(".docs__img").click(function(){
        nomberActive = $(this).index()+1;
        $(".docs__slider").css("display","flex");
        $(".docs__slider__img ").children(".sl_img").eq(0).removeClass("sl_active");
        $(".docs__slider__img ").children(".sl_img").eq(nomberActive-1).addClass("sl_active"); 
    });


    $(".docs__slider-close").click(function(){
        $(".docs__slider__img ").children(".sl_img").eq(nomberActive-1).removeClass("sl_active"); 
        $(this).parent(".docs__slider").css("display","none");
    }); 

    $(".docs__slider-right").click(function(){
        $(".docs__slider__img ").children(".sl_img").eq(nomberActive-1).removeClass("sl_active");
        if(nomberActive===countImg)
        {nomberActive =1;}
        else{nomberActive++;}
        $(".docs__slider__img ").children(".sl_img").eq(nomberActive-1).addClass("sl_active");                
    });  

    $(".docs__slider-left").click(function(){
        $(".docs__slider__img ").children(".sl_img").eq(nomberActive-1).removeClass("sl_active");
        if(nomberActive===1)
        {nomberActive = countImg;}
        else{nomberActive--;}
        $(".docs__slider__img ").children(".sl_img").eq(nomberActive-1).addClass("sl_active");                
    });  
  };