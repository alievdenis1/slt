export var burger = function(){    

  let k = 0;


  $(".mobile-nav-menu__item0").click(function(){
    $(".mobile-nav-menu__item0").addClass("mobile-nav-menu__item-active0");   

    setTimeout(function() {window.location = $(".mobile-nav-menu__item0").attr('href')}, 300);
        return false;
  });

  $(".mobile-nav-menu__item1").click(function(){
    $(".mobile-nav-menu__item1").addClass("mobile-nav-menu__item-active1"); 
    setTimeout(function() {window.location = $(".mobile-nav-menu__item1").attr('href')}, 300);
        return false;  
  });

  $(".mobile-nav-menu__item2").click(function(){
    $(".mobile-nav-menu__item2").addClass("mobile-nav-menu__item-active2");  
    setTimeout(function() {window.location = $(".mobile-nav-menu__item2").attr('href')}, 300);
        return false; 
  });

  $(".mobile-nav-menu__item3").click(function(){
    $(".mobile-nav-menu__item3").addClass("mobile-nav-menu__item-active3");  
    setTimeout(function() {window.location = $(".mobile-nav-menu__item3").attr('href')}, 300);
        return false; 
  });


  $(".mobile-nav__burger").click(function(){
    if(k === 0){
        $(".mobile-nav-menu").slideToggle();
        $(".mobile-nav-menu").css("display", "flex");

        

        k=1;       
    }
    else{
      $(".mobile-nav-menu").slideToggle();    

        k=0;
    }
  });

  var toggles = document.querySelectorAll(".c-hamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

}
