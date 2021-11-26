$('.nav-item').on('click', function(){
    $(this).closest('.nav-item').toggleClass('active');
    $(this).closest('.nav-item').siblings().removeClass('active');
  });



  $(window).scroll(function() {
      
    if(isInView($("#about")) || isInView($("#products"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.about').addClass('active');
    }
    else{
        $('.nav-item').removeClass('active');
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
    if(!isInView($("#downloads")) && isInView($("#contact"))){
        $('.nav-item').removeClass('active');
        $('.nav-item.contact').addClass('active');
    }
    
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


var lang = "serbian";
var flag = "";
$(document).ready(function(){
    $(".text-content")
        .not("." + lang)
        .hide();
})

$(".btn-selected-flag").on("click", function (e) {
    e.preventDefault();
    $(".flags-con").toggleClass("show")
  });

// Language filter script
var selectedFlagImg = document.querySelector(".selected-flag-img")
$(".btn-lang").on("click", function (e) {
    e.preventDefault();
    lang = $(this).attr("data-filter");
    if (lang == "all") {
      $(".text-content").show();
    } else {
      $(".text-content")
        .not("." + lang)
        .hide();
      $(".text-content")
        .filter("." + lang)
        .show();
    }

    if (e.target.parentNode.querySelector(".flag-item")) {
        const selectedFlag = e.target.parentNode.querySelector(".flag-item");
        flag = selectedFlag.getAttribute("src");
        selectedFlagImg.src = flag ;
      }
      $(".flags-con").toggleClass("show")
  });

