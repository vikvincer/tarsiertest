/*!
 * Dependencies
 * Tarshier Records
 * 012318
 */
     
/* Scrolla js - for Animation scroll */
!function(i){jQuery.fn.scrolla=function(t){function a(){var t=i(window).height(),a=i(window).scrollTop(),n=a+t;i.each(s,function(){var t=i(this).data("animate"),s=i(this).data("duration"),e=i(this).data("delay"),o=i(this).outerHeight(),d=i(this).offset().top,r=d+o;i(this).css({"-webkit-animation-duration":s,"animation-duration":s}),i(this).css({"-webkit-animation-delay":e,"animation-delay":e}),r>=a&&d<=n?(i(this).css("visibility","visible"),i(this).addClass(t),i(this).addClass("animated")):(i(this).css("visibility","hidden"),i(this).removeClass(t),i(this).removeClass("animated"))})}if(t=i.extend({mobile:!1},t),t.mobile===!1&&/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return!1;var s=this;i(window).on("scroll",a),i(window).trigger("scroll")}}(jQuery);
//# sourceMappingURL=scrolla.jquery.min.js.map 