$(document).ready(function() {

  $(".accordion-title").on('click', function() {
    
    let current = $(this).siblings("p");
    let plusIcon = $(this).children(".accordion-icon").children(".plus-icon")
    let minusIcon = $(this).children(".accordion-icon").children(".minus-icon")
    
    if(current.hasClass("active")) {
        $("p").removeClass("active");
        $(".plus-icon").show()
        $(".minus-icon").hide()
    } else {
        $("p").removeClass("active");
        $(".plus-icon").show()
        $(".minus-icon").hide()
        current.addClass("active");
        minusIcon.show()
        plusIcon.hide()
    }
    
  });
});
