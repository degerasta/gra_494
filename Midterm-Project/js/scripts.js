jQuery('.lightbox-close').on('click', function() {
	jQuery('iframe')[0].pause();
 });

 $('.menu-button').click(function(){
    $('nav').toggleClass('open');
});