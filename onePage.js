var $nav = $(".menu");
var $distance = $nav.offset().top;
var $div = $("div[id]");

$(window).scroll(function(){
    var $scrollTop = $(this).scrollTop();
    var $scrollEnd = $scrollTop + $(window).innerHeight();
    if ($(window).scrollTop() > $distance){
        $nav.addClass("fixed");
/*        $(window).offset("top", $nav.height());*/
    }
    else {
        $nav.removeClass("fixed");
    }    
    
    $div.each(function(){
        if($scrollTop > $(this).offset().top){
            $("a.selected").removeClass("selected");
            $("a[href='#" + $(this).attr("id") +"']").addClass("selected");
            console.log("a[href='#" + $(this).attr("id") +"']");
        }
    if ($scrollEnd == $("html").height()) {
      $("a[href='#" + $(this).attr("id") + "']").removeClass("selected");
      console.log("a[href='#" + $(this).attr("id") + "']");
      $(".menu a[href='#aboutMe']").addClass("selected");
    }
        
    });

});

$(".menu a").click(function(){    
    var chapterSelector = $(this).attr("href");
    var toTop = $(chapterSelector).offset();
    $("html, body").animate({
       scrollTop: toTop.top 
    }, 1000);
});


