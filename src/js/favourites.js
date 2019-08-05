export var favourites = function(){  
    var a;
    var delItem = function(t){
        a.parent().parent(".favourites__product").remove();
      };  

    $(".favourites_del-favour").click(function(){
        a =$(this);
        setTimeout(delItem, 200);
    });

    $(".products_add-favour").click(function(){
        $(this).css("opacity", "0.3");     
       
    });
    
}
