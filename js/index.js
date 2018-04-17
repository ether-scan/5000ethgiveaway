
// target icon
// when clicked
// toggle between show nav menu and hide nav

$(".fa").on("click", function() {
     event.preventDefault();
     $(".header_nav").toggle();
});

// if screen size <= 768px show burger hide nav tab
$(window).resize(function() {
	if ($(window).width() < 650) {
		$(".header_nav").hide();
	} else {
		$(".header_nav").show();
	}
})
