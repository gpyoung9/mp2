// Write any custom javascript functions here
$(window).ready(function() {
	$('#home-link').addClass('active');
})

$(window).scroll(function() {
  if ($(document).scrollTop() > 875) {
    $('#nav-bar').addClass('shrink');
    $('#menu-button').addClass('dark')
  } else {
    $('#nav-bar').removeClass('shrink');
    $('#menu-button').removeClass('dark')
  }
});

$('a[href^="#"]').on('click', function(e) {
   e.preventDefault();
   $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 64
     }, 900);
});

$(window).scroll(function() {
	var scrolled_val = $(document).scrollTop();
    var nav_val = $('#nav-bar').height();
    var curr_val = scrolled_val + nav_val;

    var sections = document.getElementsByTagName('section');
    // var contact = document.getElementsByTagName('footer');
    // sections.push(contact);
    for (var i = 0; i < sections.length; i++){
    	var position = $(sections[i]).position();
    	var height = $(sections[i]).height();
    	if (curr_val >= position.top && curr_val <= position.top + height){
    		var id = '#' + $(sections[i]).attr('id') + "-link";
    		$(id).addClass('active');
    		for (var j = 0; j < sections.length; j++){
    			var other_id = '#' + $(sections[j]).attr('id') + '-link';
    			if (other_id === id){
    				continue;
    			}	
    			$(other_id).removeClass('active');
    		}
    		$('#contact-link').removeClass('active');
    	}
    }
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
	    // var id = '#' + $(sections[sections.length - 1]).attr('id') + "-link";
	    var id = '#contact-link'
	    $(id).addClass('active');
	    for (var j = 0; j < sections.length; j++){
	    	var other_id = '#' + $(sections[j]).attr('id') + '-link';
	    	if (other_id === id){
	    		continue;
	    	}	
	    	$(other_id).removeClass('active');
	    }
	}
});

$(document).ready(function(){
  $('.music-carousel').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.experience-carousel').slick({
    // dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});