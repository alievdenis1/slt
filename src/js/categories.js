export var categories = function(){  
    //выпадающее меню
    let c = 0; 
    $(".categories__item").click(function(){ 
        let item= $(this).html();
        $(this).parent(".catigories__list").parent(".categories").children(".categories__span").html(item);
        $(this).parent(".catigories__list").css("display", "none");
        c=0;
    });   
    
    $(".categories__span").click(function(){    
        if(c===0){
            $(this).parent(".categories").children(".catigories__list").slideToggle();
            c=1;
        }
        else{
            $(this).parent(".categories").children(".catigories__list").slideToggle();
            c=0;
        }
    });
    //навигация по персоналу
    $(".personal_li_item").click(function(){
        $(this).parent(".personal__ul").children().removeClass("personal_li-active");
        $(this).addClass("personal_li-active");
    });
    //навигация по категориям    
    $(".tab__item").click(function(){
        $(this).parent(".service__tabs_products").children().removeClass("label-checked");
        $(this).addClass("label-checked");
    });

};