function changeProject(t,a){var i=t.attr("href").split("#")[1];t.addClass("active").siblings().removeClass("active"),$("#"+i).siblings(".active").addClass("fade-"+a).removeClass("active"),$("#"+i).show().removeClass("fade-left fade-right").addClass("active")}$(".nav a").on("click",function(){var t=$(this).siblings(".active").index(),a=$(this).index();return t>=a?changeProject($(this),"right"):changeProject($(this),"left"),!1}),$(".nav-control").on("click",function(){var t=$(".port-item.active"),a=t.is(":first-child"),i=t.is(":last-child");$(this).hasClass("nav-prev")?a===!1?$(".nav a[href='#"+t.prev().attr("id")+"']").trigger("click"):$(".portfolio .nav a").last().trigger("click"):i===!1?$(".nav a[href='#"+t.next().attr("id")+"']").trigger("click"):$(".portfolio .nav a").first().trigger("click")}),$(document).ready(function($){$('a[href^="#"]').not(".nav a").on("click",function(t){t.preventDefault();var a=this.hash;a.length&&$("html, body").stop().animate({scrollTop:$(a).offset().top-60},900,function(){window.location.hash=a})})});