require([
	    'jquery',
	    'spr/slick'
	], function($,slick){
			$(document).ready(function(){
				$(".regular").slick({
			        dots: false,
			        infinite: true,
			        slidesToShow: 4,
			        slidesToScroll:4,
					autoplay: true,
					speed: 2000,
					autoplaySpeed:3000,
					
					responsive:[
						{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 500,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
			  		]
			      });
			});
		}
	);
 