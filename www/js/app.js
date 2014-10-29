$(document).ready(function() {

    $('body').css('opacity', 1);
    //
    

    var mySound = new buzz.sound("http://stage-apps.npr.org/bats/assets/bats-soundscape.mp3", {
    preload: true,
    autoplay: false,
    loop: true
    });
    


	$('.audio-controls').on('click', function(){
		mySound.togglePlay();
		$(this).toggleClass( "audio-paused" );
	});

    //start screen
    
    $('.btn-go').on('click', function(){
		mySound.play();
		$('body').addClass( "enter-soundscape" );
		
	});
    
    
});
