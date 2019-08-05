export var serviceTab = function(){  
    $(".service__1tab").click(function(){
        var id = $(this).data('id') || 0; 
        let promise = new Promise((resolve, reject) => {
            $("#tab-service-rent__description").load("assets/ajax.php",{action:"getIntro", id:id}, function() {resolve("result");});
        });       
        promise.then(result => {
            $(".tab-service-rent").css("display","block"),
            $(".tab-service-dry-rent").css("display","none"),
            $(".tab-service-personal").css("display","none") 
        });   
    });

    $(".service__2tab").click(function(){        
        var id = $(this).data('id') || 0;	    	
        let promise = new Promise((resolve, reject) => {
            $("#tab-service-dry-rent__description").load("assets/ajax.php",{action:"getIntro", id:id}, function() {resolve("result");});
        });       
        promise.then(result => {
            $(".tab-service-rent").css("display","none"),
            $(".tab-service-dry-rent").css("display","block"),
            $(".tab-service-personal").css("display","none")
        });  
    });

    $(".service__3tab").click(function(){
        var id = $(this).data('id') || 0;	
        let promise = new Promise((resolve, reject) => {
            $("#tab-service-personal__description").load("assets/ajax.php",{action:"getIntro", id:id}, function() {resolve("result");});
        });       
        promise.then(result => {
            $(".tab-service-rent").css("display","none");
            $(".tab-service-dry-rent").css("display","none");
            $(".tab-service-personal").css("display","block");
        });     
    	
    });

    
    /*sound rent*/
    let sound_rent = 1;
    let sound_rentF = function(){
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(sound_rent===0){       
            $("#sound_rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            sound_rent++;               
        };	
        $(".sound_rent_tab").css("display","block");
        $(".light_rent_tab").css("display","none");
        $(".video_rent_tab").css("display","none");
        $(".hard_rent_tab").css("display","none");
        $(".energy_rent_tab").css("display","none");  
    };

    $("#sound_rent").click(sound_rentF);
    $("#sound_rent1").click(sound_rentF);


    let offset_sound_rent=9;
    $("#sound_rent_more").click(function(){  
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;
        $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_sound_rent}, success:onAjaxSuccess});
        function onAjaxSuccess(data){ 
            if(data.length<5){
                $("#sound_rent_more").css("opacity","0"); 
            }                     
            $("#sound_rent_tab").append(data);
        };         
        offset_sound_rent+=9;                                	
    });
    /*-------------*/
    /*light rent*/
    let light_rent = 0;
    let light_rentF = function(){
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(light_rent===0){       
            $("#light_rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            light_rent++;               
        };	
        $(".sound_rent_tab").css("display","none");
        $(".light_rent_tab").css("display","block");
        $(".video_rent_tab").css("display","none");
        $(".hard_rent_tab").css("display","none");
        $(".energy_rent_tab").css("display","none");          
    };

    $("#light_rent").click(light_rentF);
    $("#light_rent1").click(light_rentF);


    let offset_light_rent=9;
    $("#light_rent_more").click(function(){  
        console.log(offset_light_rent);
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;
        $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_light_rent}, success:onAjaxSuccess});
        function onAjaxSuccess(data){ 
            if(data.length<5){
                $("#light_rent_more").css("opacity","0"); 
            }                     
            $("#light_rent_tab").append(data);
        };         
        offset_light_rent+=9;                                	
    });
    /*-------------*/
    /*video rent*/
    let video_rent = 0;
    let video_rentF = function(){
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(video_rent===0){       
            $("#video_rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            video_rent++;               
        };	
        $(".sound_rent_tab").css("display","none");
        $(".light_rent_tab").css("display","none");
        $(".video_rent_tab").css("display","block");
        $(".hard_rent_tab").css("display","none");
        $(".energy_rent_tab").css("display","none");   
    };

    $("#video_rent").click(video_rentF);
    $("#video_rent1").click(video_rentF);


    let offset_video_rent=9;
    $("#video_rent_more").click(function(){  
        console.log(offset_video_rent);
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;
        $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_video_rent}, success:onAjaxSuccess});
        function onAjaxSuccess(data){ 
            if(data.length<5){
                $("#video_rent_more").css("opacity","0"); 
            }                     
            $("#video_rent_tab").append(data);
        };         
        offset_video_rent+=9;                                	
    });
    /*-------------*/
     /*hard rent*/
     let hard_rent = 0;
     let hard_rentF = function(){
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(hard_rent===0){       
            $("#hard_rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            hard_rent++;               
        };	
        $(".sound_rent_tab").css("display","none");
        $(".light_rent_tab").css("display","none");
        $(".video_rent_tab").css("display","none");
        $(".hard_rent_tab").css("display","block");
        $(".energy_rent_tab").css("display","none");  
     };

     $("#hard_rent").click(hard_rentF);
     $("#hard_rent1").click(hard_rentF);

 
     let offset_hard_rent=9;
     $("#hard_rent_more").click(function(){  
         console.log(offset_hard_rent);
         var id = $(this).data('id') || 0;
         var context = $(this).data('context') || 0;
         $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_hard_rent}, success:onAjaxSuccess});
         function onAjaxSuccess(data){ 
             if(data.length<5){
                 $("#hard_rent_more").css("opacity","0"); 
             }                     
             $("#hard_rent_tab").append(data);
         };         
         offset_hard_rent+=9;                                	
     });
     /*-------------*/
     /*energy rent*/
     let energy_rent = 0;
     let energy_rentF = function(){
          
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(energy_rent===0){       
            $("#energy_rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            energy_rent++;               
        };	
        $(".sound_rent_tab").css("display","none");
        $(".light_rent_tab").css("display","none");
        $(".video_rent_tab").css("display","none");
        $(".hard_rent_tab").css("display","none");
        $(".energy_rent_tab").css("display","block");   
     };

     $("#energy_rent").click(energy_rentF);
     $("#energy_rent1").click(energy_rentF);

 
     let offset_energy_rent=9;
     $("#energy_rent_more").click(function(){  
         console.log(offset_energy_rent);
         var id = $(this).data('id') || 0;
         var context = $(this).data('context') || 0;
         $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_energy_rent}, success:onAjaxSuccess});
         function onAjaxSuccess(data){ 
             if(data.length<5){
                 $("#energy_rent_more").css("opacity","0"); 
             }                     
             $("#energy_rent_tab").append(data);
         };         
         offset_energy_rent+=9;                                	
     });
     /*------------------------------------------------------------------------------------------------*/

     /*sound dry-rent*/
    let sound_dry_rent = 1;
    let sound_dry_rentF = function(){
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(sound_dry_rent===0){       
            $("#sound_dry-rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            sound_dry_rent++;               
        };	
        $(".sound_dry-rent_tab").css("display","block");
        $(".light_dry-rent_tab").css("display","none");
        $(".video_dry-rent_tab").css("display","none");
        $(".hard_dry-rent_tab").css("display","none");
        $(".energy_dry-rent_tab").css("display","none");  
    };

    $("#sound_dry-rent").click(sound_dry_rentF);
    $("#sound_dry-rent1").click(sound_dry_rentF);


    let offset_sound_dry_rent=9;
    $("#sound_dry-rent_more").click(function(){  
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;
        $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_sound_dry_rent}, success:onAjaxSuccess});
        function onAjaxSuccess(data){ 
            if(data.length<5){
                $("#sound_dry-rent_more").css("opacity","0"); 
            }                     
            $("#sound_dry-rent_tab").append(data);
        };         
        offset_sound_dry_rent+=9;                                	
    });
    /*-------------*/
    /*light dry-rent*/
    let light_dry_rent = 0;
    let light_dry_rentF = function(){
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(light_dry_rent===0){       
            $("#light_dry-rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            light_dry_rent++;               
        };	
        $(".sound_dry-rent_tab").css("display","none");
        $(".light_dry-rent_tab").css("display","block");
        $(".video_dry-rent_tab").css("display","none");
        $(".hard_dry-rent_tab").css("display","none");
        $(".energy_dry-rent_tab").css("display","none");          
    };

    $("#light_dry-rent").click(light_dry_rentF);
    $("#light_dry-rent1").click(light_dry_rentF);


    let offset_light_dry_rent=9;
    $("#light_dry-rent_more").click(function(){  
        console.log(offset_light_dry_rent);
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;
        $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_light_dry_rent}, success:onAjaxSuccess});
        function onAjaxSuccess(data){ 
            if(data.length<5){
                $("#light_dry-rent_more").css("opacity","0"); 
            }                     
            $("#light_dry-rent_tab").append(data);
        };         
        offset_light_dry_rent+=9;                                	
    });
    /*-------------*/
    /*video dry-rent*/
    let video_dry_rent = 0;
    let video_dry_rentF = function(){
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(video_dry_rent===0){       
            $("#video_dry-rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            video_dry_rent++;               
        };	
        $(".sound_dry-rent_tab").css("display","none");
        $(".light_dry-rent_tab").css("display","none");
        $(".video_dry-rent_tab").css("display","block");
        $(".hard_dry-rent_tab").css("display","none");
        $(".energy_dry-rent_tab").css("display","none");   
    };

    $("#video_dry-rent").click(video_dry_rentF);
    $("#video_dry-rent1").click(video_dry_rentF);


    let offset_video_dry_rent=9;
    $("#video_dry-rent_more").click(function(){  
        console.log(offset_video_dry_rent);
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;
        $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_video_dry_rent}, success:onAjaxSuccess});
        function onAjaxSuccess(data){ 
            if(data.length<5){
                $("#video_dry-rent_more").css("opacity","0"); 
            }                     
            $("#video_dry-rent_tab").append(data);
        };         
        offset_video_dry_rent+=9;                                	
    });
    /*-------------*/
     /*hard dry-rent*/
     let hard_dry_rent = 0;
     let hard_dry_rentF = function(){
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(hard_dry_rent===0){       
            $("#hard_dry-rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            hard_dry_rent++;               
        };	
        $(".sound_dry-rent_tab").css("display","none");
        $(".light_dry-rent_tab").css("display","none");
        $(".video_dry-rent_tab").css("display","none");
        $(".hard_dry-rent_tab").css("display","block");
        $(".energy_dry-rent_tab").css("display","none");  
     };

     $("#hard_dry-rent").click(hard_dry_rentF);
     $("#hard_dry-rent1").click(hard_dry_rentF);

 
     let offset_hard_dry_rent=9;
     $("#hard_dry-rent_more").click(function(){  
         console.log(offset_hard_dry_rent);
         var id = $(this).data('id') || 0;
         var context = $(this).data('context') || 0;
         $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_hard_dry_rent}, success:onAjaxSuccess});
         function onAjaxSuccess(data){ 
             if(data.length<5){
                 $("#hard_dry-rent_more").css("opacity","0"); 
             }                     
             $("#hard_dry-rent_tab").append(data);
         };         
         offset_hard_dry_rent+=9;                                	
     });
     /*-------------*/
     /*energy dry-rent*/
     let energy_dry_rent = 0;
     let energy_dry_rentF = function(){
          
        var id = $(this).data('id') || 0;
        var context = $(this).data('context') || 0;

        if(energy_dry_rent===0){       
            $("#energy_dry-rent_tab").load("assets/ajax.php",{action:"getCollection", context:context, id:id, offset:0});
            energy_dry_rent++;               
        };	
        $(".sound_dry-rent_tab").css("display","none");
        $(".light_dry-rent_tab").css("display","none");
        $(".video_dry-rent_tab").css("display","none");
        $(".hard_dry-rent_tab").css("display","none");
        $(".energy_dry-rent_tab").css("display","block");   
     };

     $("#energy_dry-rent").click(energy_dry_rentF);
     $("#energy_dry-rent1").click(energy_dry_rentF);

 
     let offset_energy_dry_rent=9;
     $("#energy_dry-rent_more").click(function(){  
         console.log(offset_energy_dry_rent);
         var id = $(this).data('id') || 0;
         var context = $(this).data('context') || 0;
         $.ajax({type:"POST", url:"assets/ajax.php", data:{action:"getCollection", context:context, id:id, offset:offset_energy_dry_rent}, success:onAjaxSuccess});
         function onAjaxSuccess(data){ 
             if(data.length<5){
                 $("#energy_dry-rent_more").css("opacity","0"); 
             }                     
             $("#energy_dry-rent_tab").append(data);
         };         
         offset_energy_dry_rent+=9;                                	
     });
     
     /*-------------*/     
     $(".personal_li_item").click(function(){  
        let idd = $(this).data('id') || 0; 
        console.log(idd);
        $(".personal__info").load("assets/ajax.php",{action:"getPersonal", idd:idd});
     });

     $(".categories__item").click(function(){  
        let idd = $(this).data('id') || 0; 
        console.log(idd);
        $(".personal__info").load("assets/ajax.php",{action:"getPersonal", idd:idd});
     });

     


};