$(function(){function a(){o()}function o(){if($(".modal").is(":visible")){var a=$(".modal:visible .modal-block"),o=parseInt(a.width()),i=parseInt(a.height());$(window).height()>i+20?a.addClass("modal-top").removeClass("margin-t-b").css("margin-top",-1*(i/2)):a.addClass("margin-t-b").removeClass("modal-top"),$(window).width()>o?a.addClass("modal-left").removeClass("margin-l").css("margin-left",-1*(o/2)):a.addClass("margin-l").removeClass("modal-left")}}function i(){$(".modal:visible").fadeOut("fast",function(){$("body").removeClass("modal-show")})}$(window).resize(function(){a()}),a(),$(document).on("click","a[modal]",function(){var a=$("div#"+$(this).attr("modal"));return a.length?(a.fadeIn("fast"),$("body").addClass("modal-show"),o(),!1):void 0}),$(document).on("click",".icon-close, .modal",function(a){return a.target!=this?!1:void i()}).on("keydown",function(a){27==a.keyCode&&i()}).on("click",".modal > *",function(a){return a.stopPropagation(),!0}).on("submit","#kmacb-form form",function(){var a=$("#kmacb-form form input[name=name]").val(),o=$("#kmacb-form form input[name=phone]").val();return $("form:first input[name=name]").val(a),$("form:first input[name=phone]").val(o),$("form:first").submit(),$("form:first input[name=name]").val(""),$("form:first input[name=phone]").val(""),!1});try{setTimeout(function(){$("body").append('<div id="kmacb"><a title="Перезвонить Вам" href="#" modal="kmacb-form"><div class="kmacb-circle"></div><div class="kmacb-circle-fill"></div><div class="kmacb-img-circle"></div></a></div>')},4e4)}catch(n){}});