/*!
 * Tarsier 2018
 * ABS-CBN Corporation 2018
 */

var ABSCBN = (function() {
	'use strict';
 
	function init() {

		// Your code here
		$('.main-carousel').slick({
            slide: 'article',
            speed: 500,
            slidesToShow: 1, 
            slidesToScroll: 1, 
            autoplay: true,
            arrows: true
        });

        //Modal target
        $(document).on('click', '[data-toggle="lightbox"], [data-toggle="modal"]', function(e) {
            e.preventDefault();
            var target = $(this).data("target");
            $(target).fadeIn('fast');
            $('body').addClass('lightbox-open'); //used to disable scroll outside
        });

        //Modal Close [button]
        $(document).on('click', '.btn-close', function(e) {
            $('.lightbox').fadeOut();
            $('body').removeClass("lightbox-open");
            e.preventDefault();
        });

        //Close the Modal
        $(document).on('click', '.modal .close', function(e) {
            e.preventDefault();
            $(this).closest('.modal').fadeOut();
            $('body').removeClass('modal-open');
        }); 


        //Play youtube video
        $(document).on('click', '.video-embed.youtube', function(e) {
		    var url = $(this).attr('data-video-id');
		    player.cueVideoById(url);
		});

		if($(".section-home2").length > 0) {
			$.scrollify({
				section: ".section-home",
			    sectionName: false,
			    interstitialSection: "footer.main",
			    before: function(index)
	            {
	                var section_blocks = $('.section-home');
	                var section_block = $($('.section-home').get(index));

	                section_blocks.removeClass('active');
	                section_block.addClass('active');
	            },
	            afterRender:function(index) {
			    	$(".main-content .section-home:nth-child(1)").addClass("active");
			    }
		  	});
			//Home Section
			//checkVisibility($(this));
		}  

	 	if($(".block-artists2").length > 0) { 
			$.scrollify({
				section: ".block-artists",
			    scrollbars: false,
			    easing: "easeOutExpo",
			    before: function(index) {
	                var artist_blocks = $('.block-artists');
	                var artist_block = $($('.block-artists').get(index));
	                var pagination_content = $('.artists-content .pagination li');
	                var pagination_content_item = $($('.artists-content .pagination li').get(index));

	                artist_blocks.removeClass('selected');
	                artist_block.addClass('selected');
	                pagination_content.removeClass('selected');
	                pagination_content_item.addClass('selected');
	            },
			    afterRender:function(index) {
			      var pagination = "<ul class=\"pagination floated-left\">";
			      var activeClass = "";

			      var a = $('.block-artists').length;
			      $(".block-artists").each(function(i) {
			        activeClass = "";
			        console.log(i); 
			        var opacity = a;

			        if(i===0) {
			          activeClass = "active";
			        }
			        pagination += "<li style='opacity:0."+opacity+"'><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-artist-name").charAt(0).toUpperCase() + $(this).attr("data-artist-name").slice(1) + "</span></a></li>";
			      	--a;
			      });

			      pagination += "</ul>";

			      $(".artists-content").append(pagination);

			      /*

			      Tip: The two click events below are the same:

			      $(".pagination a").on("click",function() {
			        $.scrollify.move($(this).attr("href"));
			      });

			      */
			      $(".pagination a").on("click",$.scrollify.move);

			      $(".artists-content .block-artists:nth-child(1)").addClass("selected");

			    }
		  	});
		}
        
		var $window = $(window),
		shrinkHeader = 200;

		//To check if an element is in the viewport
		$.fn.isInViewport = function() {
		  var elementTop = $(this).offset().top;
		  var elementBottom = elementTop + $(this).outerHeight();
		  var viewportTop = $(window).scrollTop();
		  var viewportBottom = viewportTop + $(window).height();
		  return elementBottom > viewportTop && elementTop < viewportBottom;
		};

	  	//$(window).scroll(function() {
	  	$(window).on('resize scroll', function() {	

		    var scroll = getCurrentScroll();

			if (scroll >= shrinkHeader ) {
				$('.wrapper').addClass('nav-sticky');
				$('.header-relative').addClass('nav-sticky');
			} else { 
				$('.wrapper').removeClass('nav-sticky');
				$('.header-relative').removeClass('nav-sticky');
			}

			if($(".aside-releases").length > 0) {
				var aside_releases = $(".aside-releases");
	            var position = aside_releases.position().top - $(window).scrollTop();
	            
	            if (position <= 10) {
	                aside_releases.addClass('sticky');
	            } else {
	                aside_releases.removeClass('sticky');
	            }
	        }

            //Home Section
            $('.section-home').each(function() {
            	checkVisibility($(this));
		  	});

	  	}); 
	}

	function getCurrentScroll() {
    	return window.pageYOffset || document.documentElement.scrollTop;
    }

    function checkVisibility(elem) {
    	if (elem.isInViewport()) {
	    	elem.addClass('active'); 
	    	console.log("active");
	    } else {
	    	elem.removeClass('active');
	    	console.log("not active");	
	    }
    }

	return {
		init: init
	};
}());

jQuery(document).ready(function($) { ABSCBN.init(); });
