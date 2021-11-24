$('.nav-item').on('click', function(){
    $(this).closest('.nav-item').toggleClass('active');
    $(this).closest('.nav-item').siblings().removeClass('active');
  });



  $(window).scroll(function() {
      
    if(isInView($("#about"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.about').addClass('active');
    }
    if(isInView($("#products"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.products').addClass('active');
    }
    if(isInView($("#services"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.services').addClass('active');
    }
    if(isInView($("#downloads"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.downloads').addClass('active');
    }
    if(isInView($("#contact"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.contact').addClass('active');
    }
    // isInView($("#products"));
    // 
    // isInView($("#downloads"));
    // isInView($("#contact"));
});

function isInView(el){
    var top_of_element = $(el).offset().top;
    var bottom_of_element = $(el).offset().top + $(el).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        return true;
    } else {
        return false;
    }
}