$(document).ready(function(){

	$(".collapse").hide();

	$(".panel a").click(function() {
		$(this).next(".collapse").slideToggle();
	});

	$(".group-content").hide();

	$(".group-item a").click(function() {
	        $(this).next(".group-content").slideToggle();
	});

});
