$(document).ready(function() {

    $('body').css('opacity', 1);

    //audio
	$('#moodmusic').mediaelementplayer({
        features: ['playpause'],
        // width of audio player
        audioWidth: 30,
        // height of audio player
        audioHeight: 30,
        enableKeyboard: false,
        loop: true,      
    });

    //start screen
    var audiolab = $("#moodmusic")[0];
    
    $('.btn-go').on('click', function(){
		audiolab.play();
		$('body').addClass( "enter-soundscape" );
		
	});
    
    
});
