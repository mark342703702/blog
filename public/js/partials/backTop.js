exports.toTheTop = function(){
     var win = $(window);
     var sc = $(document);
     $('.toolbar .backTopIcon').fadeOut();
     $('.toolbar .backTopIcon').on('click', function(){
        $('body').animate({ scrollTop: 0 }, 800);
        
     });

     win.scroll(function(){
       if(sc.scrollTop() > 400){
        $('.toolbar .backTopIcon').fadeIn();

       }else {
        $('.toolbar .backTopIcon').fadeOut();
       }

     });
    
    };
