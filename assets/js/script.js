$(document).ready(function(){

	//product-carousel
	if ($('.product-carousel').length) {
		$('.product-carousel').owlCarousel({
            loop:true,
			margin:0,
            dots: false,
			smartSpeed: 1000,
			autoplay: 500,
			navText: [ '<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:3
				}
			}
        })		
	} 
});