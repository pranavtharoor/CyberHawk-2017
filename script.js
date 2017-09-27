$(() => {
	$('.nav-toggle').click(() => {
	})
	$('#burger-container').on('click', function(){
		$('nav').toggleClass('active')
		$('#layout-nested').toggleClass('nav-active')
		$(this).toggleClass('open');
	})
})