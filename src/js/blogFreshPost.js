export var freshPost = function(){
    $(".blog__recently1").click(function(){
        $(".blog__fresh-post").slideToggle();
        $(".blog__fresh-post").css("display","flex");
    });

    $(".blog__recently").click(function(){
        $(".blog__fresh-post").slideToggle();
    });
}    
