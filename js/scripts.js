//Navigation itens
function changeProject(that,direction){
	var hash = that.attr('href').split('#')[1];
	that.addClass('active').siblings().removeClass('active');

	$('#' + hash).siblings('.active').addClass("fade-" + direction).removeClass("active");
	$('#' + hash).show().removeClass("fade-left fade-right").addClass('active');
	
}

$('.nav a').on('click', function(){
	var currentActiveIndex = $(this).siblings('.active').index();
	var clickedIndex = $(this).index();
	if(currentActiveIndex >= clickedIndex ){
		changeProject($(this),'right');
	} else{
		changeProject($(this),'left');
	}
	return false;
});
$('.nav-control').on('click', function(){
	var currentPort = $('.port-item.active');
	var currentPortFirst = currentPort.is(':first-child');
	var currentPortLast = currentPort.is(':last-child');
	if($(this).hasClass('nav-prev')){
		if(currentPortFirst === false){
			$(".nav a[href='#" + currentPort.prev().attr('id') + "']").trigger('click');
		} else {
			$(".portfolio .nav a").last().trigger('click');
		}
	} else {
		if(currentPortLast === false){
			$(".nav a[href='#" + currentPort.next().attr('id') + "']").trigger('click');
		} else {
			$(".portfolio .nav a").first().trigger('click');
		}
	}
});
$(document).ready(function($) {
    $('a[href^="#"]').not(".nav a").on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        if(target.length){
	        $('html, body').stop().animate({
	            'scrollTop' : $(target).offset().top - 60
	        }, 900, function() {
	            window.location.hash = target;
	        });
	    }
    });
});

$(document).scroll(function() {
	$("#intro").css({
		"background-position-y": (-$(this).scrollTop()/20)
	});
	$("#intro .container").css({
		"opacity": 1 - (parseInt($(this).scrollTop())/350)
	});
});

// //Instagram Photos
// var feed = new Instafeed({
// 	get: 'user',
// 	userId: 'fabiozc',
// 	tagName: 'awesome',
// 	clientId: '1a39f4d73eb747059dac9337d5397ea5',
// 	resolution: 'low_resolution',
// 	links: true,
// 	limit: 10,
// 	target: "#ig-fabiozc"
// });
// feed.run();