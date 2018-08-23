$(document).ready(function() {


var vid = document.getElementById("myVideo");
    isSupp = vid.canPlayType("video/mp4");
    if (screen.width <= 600 && screen.width >= 321) {
        // vid.src = "VIDEO_320x320.mp4";
        document.getElementById("myVideo").src = "VIDEO_600x600.mp4";

    } else if (screen.width <= 320){
    	document.getElementById("myVideo").src = "VIDEO_320x320.mp4";

	} else {
		  location.href = 'not_found.html';
	}
        // vid.src = "VIDEO_600x600.mp4"​​​​;
    // }
    // vid.load();



});

setTimeout("location.href = 'registro.html';",10000);