function fitui(){
	var winWid = $(window).width();
	var winHei = $(window).height();
	var jumbotron = $("#jumbotron .container");


	jumbotron.height(winHei-150);

}
$(document).ready(function(){
	fitui();
	$('body').scrollspy({ 
		target: '#navbar',
		offset: 100
	});




});
$(window).resize(function(){
	fitui();
});




$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100 // navbar height
        }, 1000);
        return false;
      }
    }
  });
});