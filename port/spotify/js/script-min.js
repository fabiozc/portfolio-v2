var miniplayer=$(".miniplayer");miniplayer.drags(),$(".star").on("click",function(){$(this).toggleClass("selected")}),$(".play-pause").on("click",function(){$(this).toggleClass("playing paused")}),$(document).on("click",function(i){miniplayer.is(i.target)||0!==miniplayer.has(i.target).length?miniplayer.addClass("on"):miniplayer.removeClass("on")});var mpHeight=miniplayer.css("height"),top=$(".playlist").position().top;$(".prev").on("click",function(){$(".playlist").animate({top:top+mpHeight},"slow")}),$(".next").on("click",function(){$(".playlist").animate({top:top-mpHeight},"slow")});