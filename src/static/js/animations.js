$(document).ready(function(){

	$('.logo').css('opacity', 0);
  
	$('.logo').waypoint(function() {
		 $('.logo').addClass('animated fadeInDown');
		$('.logo').css('opacity', 1);
	}, { offset: '95%' });

	$('.btn').css('opacity', 0);

	$('.btn').waypoint(function() {
	$('.btn').addClass('animated fadeInLeft');
	$('.btn').css('opacity', 1);
  }, { offset: '95%' });

	  $('.forgot, .reglink').css('opacity', 0);

		$('.forgot, .reglink').waypoint(function() {
		$('.forgot, .reglink').addClass('animated fadeInLeft');
		$('.forgot, .reglink').css('opacity', 1);
	  }, { offset: '95%' });

		$('.autonext').keyup(function (e) {
			if ($(this).val().length == $(this).attr('maxlength')) {
				 $(this).closest('div').next().find('.autonext').first().focus();
			}
	  })
	
  
 });

 particlesJS.load('background', 'js/particles.json', function() {});
