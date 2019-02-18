   
/* -------- Header 3 Nav -------- */
$(window).load(function() {
	
	/* -------- Header 3 Nav -------- */
	$('.nav-slide-btn').click(function() {
		$('.pull').slideToggle();
	});

});

document.querySelector("#nav-toggle").addEventListener("click", function() {
	this.classList.toggle("active");
});

