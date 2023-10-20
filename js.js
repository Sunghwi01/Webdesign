document.write('<link rel="preconnect" href="https://fonts.gstatic.com">'
		+		'<link rel= "stylesheet" type="text/css" href="css.css">'
		+		'<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"><'+'/script>'
		+		'<script type="text/javascript" src="https://unpkg.com/swiper/swiper-bundle.js"><'+'/script>'
		+		'<script type="text/javascript" src="https://unpkg.com/swiper/swiper-bundle.min.js"><'+'/script>'
		+		'<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.css">'
		+		'<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">'
		+		'<button id="top"onclick="hdMove()"></button>'
		+		'<script type="text/javascript" src="snow.js"></script>'
		);

	if(screen.width <= 768){	//가로크기가 태블릿을가야 적용.
		document.write('<script>$( "#topmenu" ).addClass( "swiper-container" );</script>');
			document.write('<script>$("#topmenu>ul").addClass(" swiper-wrapper");</script>');
			document.write('<script>$("#topmenu>ul>li").addClass(" swiper-slide");</script>');
			document.write(
				"<script>var mySwiper = new Swiper('.swiper-container', {loop: true,pagination: {el: '.swiper-pagination',},})</script>"
				);
	}
	window.onresize = function(){
		location.reload();
}
function hdMove(){
	var hdoffset = $('header').offset();
	$('html, body').animate({scrollTop : hdoffset.top}, 400);
}
