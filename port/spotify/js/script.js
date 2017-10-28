//@cokedit-prepend "lib/drag.js";
//@cokedit-prepend "lib/rangeslider.min.js";

var miniplayer = $('.miniplayer');

miniplayer.drags();

$(".star").on("click", function(){
    $(this).toggleClass("selected");
});
$(".play-pause").on("click", function(){
    $(this).toggleClass("playing paused");
});

$(document).on("click", function(e){
    if (!miniplayer.is(e.target) && miniplayer.has(e.target).length === 0){
        miniplayer.removeClass("on");
    } else{
        miniplayer.addClass("on");
    }
});

var mpHeight = miniplayer.css("height");
var top = $(".playlist").position().top;

$(".prev").on("click", function(){
    $(".playlist").animate({
      top: top + mpHeight
    }, 'slow');
});
$(".next").on("click", function(){
    $(".playlist").animate({
      top: top - mpHeight
    }, 'slow');
});