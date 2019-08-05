export var noise = function(){
    let mas = [1, 2, 3, 4 ,1];
    let i = 0;

    function loadImageAsync(url) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
      });
    }
    
    Promise.all([
      loadImageAsync("./img/noise1.png"),
      loadImageAsync("./img/noise2.png"),
      loadImageAsync("./img/noise3.png"),
      loadImageAsync("./img/noise4.png")
    ])
      .then(images => {        
        setInterval(function() {
          if (i === 4) {
            i = 0;
          };    
          $(".noise").addClass('noise'+mas[i+1]);
          $(".noise").removeClass('noise'+mas[i]);
          $(".slider__noise").addClass('noise'+mas[i+1]);
          $(".slider__noise").removeClass('noise'+mas[i]);   
    
    
          i++;
          }, 60);

      });      
    
  };