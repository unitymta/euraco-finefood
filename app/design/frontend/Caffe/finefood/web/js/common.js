if (typeof require != "undefined" && typeof define != "undefined") {
	require([
	    'jquery',
	    'spr/bxslider'
	], function($,bxSlider){
			var sprF = varFunctions($,bxSlider);
			$(document).ready(function(){
				sprF.searchCategory();
				sprF.mobileSearch();
				sprF.mobileNav();
				sprF.homeSlider();
				sprF.homeArrivalSlider();
				//sprF.homeFeaturedSlider();
				sprF.brandsSlider();
				sprF.sidebarNav();
				sprF.mobileFilter();
				sprF.sidebarCheck();
				sprF.sidebarMobile();
				//sprF.toTopButton();
				sprF.productTab();
				//sprF.relatedSlider();
				sprF.productQty();
				sprF.menufix();
			});
			$(window).on("load",function(){
			});
			$(window).on("resize",function(){
				sprF.homeSlider();
				sprF.homeArrivalSlider();
				//sprF.homeFeaturedSlider();
				sprF.brandsSlider();
				//sprF.relatedSlider();
			});
		}
	);
	
} else {
	var sprF = varFunctions(jQuery,jQuery.fn.bxSlider);
	jQuery(document).ready(function(){
		sprF.searchCategory();
		sprF.mobileSearch();
		sprF.mobileNav();
		sprF.homeSlider();
		sprF.homeArrivalSlider();
		//sprF.homeFeaturedSlider();
		sprF.brandsSlider();
		sprF.sidebarNav();
		sprF.mobileFilter();
		sprF.sidebarCheck();
		sprF.sidebarMobile();
		//sprF.toTopButton();
		sprF.productTab();
		//sprF.relatedSlider();
		sprF.productQty();
		sprF.menufix();
	});
	jQuery(window).on("load",function(){
	});
	jQuery(window).on("resize",function(){
		sprF.homeSlider();
		sprF.homeArrivalSlider();
		//sprF.homeFeaturedSlider();
		sprF.brandsSlider();
		//sprF.relatedSlider();
	});
}
function varFunctions($,bxSlider) {
	var $spr = {
		productQty: function(){
			$("body").on("click",".btn-plus",function(e){
				e.preventDefault();
				var $self = $(this);
				var $input = $self.closest(".input-wrap").find("input.qty");
				var $currentVal = Number($input.val());
				$input.val($currentVal+1);
			});
			$("body").on("click",".btn-minus",function(e){
				e.preventDefault();
				var $self = $(this);
				var $input = $self.closest(".input-wrap").find("input.qty");
				var $currentVal = Number($input.val());
				if ($currentVal-1 >= 1) {
					$input.val($currentVal-1);
				}
			});
		},
		productTab: function(){
			$("body").on("click",".info-block-title a",function(e){
				e.preventDefault();
				var $self = $(this);
				if (!$self.hasClass("active")){
					var $section = $(".detail-" + $self.data("nav"));
					$(".detail-tab, .info-block-title a").removeClass("active");
					$self.addClass("active");
					$section.addClass("active");
				}
			});
		},
		toTopButton: function(){
			$(window).scroll(function(){
				var scrollTop = $(this).scrollTop();
				if (scrollTop >= $(".header").height()) {
					if(!$(".btn-top").hasClass("active") && !$(".btn-top").is(":animated")) {
						$(".btn-top").addClass("active");
					}
				} else {
					$(".btn-top").fadeOut(400,function(){
						$(".btn-top").removeClass("active").attr("style","");
					});
				}
				$(".btn-top").on("click",function(e){
					e.preventDefault();
					if (!$("body,html").is(":animated")){
						$("body,html").animate({
							scrollTop: 0
						},600);
					}
				});
			});
		},
		sidebarMobile: function(){
			$("body").on("click",".sidebar-block h4, .sidebar-block .title",function(e){
				if ($(window).width() < 768) {
					e.preventDefault();
					var $parent = $(this).closest(".sidebar-block");
					$parent.toggleClass("expanded");
				}
			});
		},
		sidebarCheck: function(){
			if ($(".sidebar").length > 0) {
				var minHeight = $(".sidebar").height();
				$(".main-container > .primary").css("minHeight",minHeight);
			} else {
				$("body").addClass("noSidebar");
			}
			$(".main-container").addClass("loaded");
		},
		mobileFilter: function(){
			$("body").on("click",".filter-choice h4",function(e){
				e.preventDefault();
				$(this).closest(".filter-choice").toggleClass("expanded");
			});
			$("body").on("click",".ais-header",function(e){
				e.preventDefault();
				$(this).closest(".ais-root").toggleClass("expanded");
			});
		},
		sidebarNav: function(){
			if ($(".sidebar-nav").length > 0 && $("body.account").length === 0) {
				$(".sidebar-nav a").each(function(){
					var $self = $(this);
					if ($self.attr("href").indexOf(window.location.href) === 0) {
						$self.addClass("current");
					}
				});
			}
		},
		searchCategory: function(){
			$("#search-cat").on("change",function(){
				$("#search-cat-holder").text($("#search-cat option:selected").text());
			});
		},
		mobileSearch: function(){
			if ($(window).width() < 768) {
				$(".header").on("click",".search form",function(e){
					if (!$(".header").hasClass("searchActive")) {
						e.preventDefault();
						$(".header").addClass("searchActive");
					} else {

					}
				});
				$(".header").on("click",".search .btn-close",function(e){
					e.preventDefault();
					$(".header").removeClass("searchActive");
				});
			}
		},
		mobileNav: function(){
			$(".btn-menu, #mainOverlay, .navigation a").on("click",function(e){
				//e.preventDefault();
				$("body").toggleClass("navActive");
			});
		},
		homeSlider: function(){
			var $el = $("#home-slider");
			var $settings = {
				maxLength: 1,
				options: {
					auto: true,
					pager: false,
					controls: true,
					autoDelay: 5000,
					pause: 6000,
					speed: 1000,
					mode: 'fade'
				},
				sliderName: 'homeSlider'
			}
			$spr.sliderInit($el,$settings);
		},
		homeArrivalSlider: function(){
			var $el = $(".products-arrivals");
			var n = ($(window).width() > 767) ? 1000 : 1 ;
			var $settings = {
				maxLength: n,
				options: {
					auto: false,
					pager: false,
					controls: true,
					oneToOneTouch: false,
					minSlides: n,
					maxSlides: n,
					moveSlides: n,
					slideWidth: $el.width() / n,
					nextSelector: $el.find(".btn-next"),
					prevSelector: $el.find(".btn-prev"),
					nextText: '<i class="arrow arrow-right"></i>',
					prevText: '<i class="arrow arrow-left"></i>'
				},
				sliderName: 'homeArrivalSlider'
			}
			$spr.sliderInit($el,$settings);
		},
		homeFeaturedSlider: function(){
			var $el = $(".products-featured");
			var n = ($(window).width() > 767) ? 1000 : 1 ;
			var $settings = {
				maxLength: n,
				options: {
					auto: false,
					pager: false,
					controls: true,
					oneToOneTouch: false,
					minSlides: n,
					maxSlides: n,
					moveSlides: n,
					slideWidth: $el.width() / n,
					nextSelector: $el.find(".btn-next"),
					prevSelector: $el.find(".btn-prev"),
					nextText: '<i class="arrow arrow-right"></i>',
					prevText: '<i class="arrow arrow-left"></i>'
				},
				sliderName: 'homeFeaturedSlider'
			}
			$spr.sliderInit($el,$settings);
		},
		brandsSlider: function(){
			var $el = $(".block-brands");
			var n = ($(window).width() >= 992) ? 9 : ($(window).width() >= 768) ? 7 : ($(window).width() >= 568) ? 4 : 3 ;
			var $settings = {
				maxLength: n,
				options: {
					auto: true,
					pager: false,
					controls: true,
					oneToOneTouch: false,
					minSlides: n,
					maxSlides: n,
					moveSlides: n,
					slideWidth: $el.width() / n
				},
				sliderName: 'topBrands'
			}
			$spr.sliderInit($el,$settings);
		},
		relatedSlider: function(){
			var $el = $(".product-related");
			var n = ($(window).width() >= 1024) ? 4 : ($(window).width() >= 768) ? 3 : 1 ;
			var $settings = {
				maxLength: n,
				options: {
					auto: false,
					pager: false,
					controls: true,
					oneToOneTouch: false,
					minSlides: n,
					maxSlides: n,
					moveSlides: n,
					slideWidth: $el.width() / n,
					nextSelector: $el.find(".btn-next"),
					prevSelector: $el.find(".btn-prev"),
					nextText: '<i class="arrow arrow-right"></i>',
					prevText: '<i class="arrow arrow-left"></i>'
				},
				sliderName: 'relatedProducts'
			}
			$spr.sliderInit($el,$settings);
		},
		sliderInit: function($el,$settings){
			if ($el.length > 0) {
				if ($el.find("li").not(".bx-clone").length > $settings.maxLength) {
					if (typeof window[$settings.sliderName] == "undefined") {
						window[$settings.sliderName] = $el.find(".slider").bxSlider($settings.options);
					} else {
						window[$settings.sliderName].reloadSlider($settings.options);
					} 
				} else {
					if (typeof window[$settings.sliderName] != "undefined") {
						window[$settings.sliderName].destroySlider();
						setTimeout(function(){
							$el.find(".slider").attr("style","");
							$el.find("li").attr("style","");
						},300);
						delete window[$settings.sliderName];
					}
				}
			}
		},
		menufix: function(){
            // Create a clone of the menu, right next to original.
			$(document).ready(function() {
			scrollIntervalID = setInterval(stickIt, 10);
				$('.navigation .wrap > ul > li.parent > .sub-menu').css('width',$('.navigation .wrap').width());
				$('.navigation .wrap > ul > li.parent .icon-sub').click(function(){
					$(this).parent('li.parent').toggleClass('active');
					$(this).parent('li.parent').children('.sub-menu').slideToggle();
				});
			});

			function stickIt() {

			  var orgElementPos = $('.page-header .navigation').offset();
			  var orgElementPos2 = $('.page-header').offset();
			  orgElementTop = orgElementPos.top;               
			  orgElementTop2 = orgElementPos2.top; 

			  if ($(window).scrollTop() >= (orgElementTop)) {
			    // scrolled past the original position; now only show the cloned, sticky element.
			    // Cloned element should always have same left position and width as original element.     
			    $('.page-header .navigation').addClass('sticky');
			  } 
			  if ($(window).scrollTop() < $('.page-header').height()) {
			    // not scrolled past the menu; only show the original menu.
			    $('.page-header .navigation').removeClass('sticky');
			  }
			}
		},
	}
	return $spr;
}