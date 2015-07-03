	
$("#start_button").click(function() {
	$(this).hide();
	document.getElementById("img1").className="show";
	$(function show_hide(){
		setTimeout(function(){ document.getElementById("img1").className="hide"; document.getElementById("stop_watch").className="show"; updateTime(0,0,0,0); }, 4000);
	});
    var hours = minutes = seconds = milliseconds = 0;
    var prev_hours = prev_minutes = prev_seconds = prev_milliseconds = undefined;
    var timeUpdate;
    
    // Start/Pause/Resume button onClick
    $("#option1_button").button().click(function(){
        $("#option1").html("Option1 - Time : "+seconds+" secs")
    });
    $("#option2_button").button().click(function(){
        $("#option2").html("Option2 - Time : "+seconds+" secs")      
    });

    // Update time in stopwatch periodically - every 25ms
    function updateTime(prev_hours, prev_minutes, prev_seconds, prev_milliseconds){
        var startTime = new Date();    // fetch current time

        timeUpdate = setInterval(function () {
            var timeElapsed = new Date().getTime() - startTime.getTime();    // calculate the time elapsed in milliseconds

            // calculate hours                
            hours = parseInt(timeElapsed / 1000 / 60 / 60) + prev_hours;

            // calculate minutes
            minutes = parseInt(timeElapsed / 1000 / 60) + prev_minutes;
            if (minutes > 60) minutes %= 60;

            // calculate seconds
            seconds = parseInt(timeElapsed / 1000) + prev_seconds;
            if (seconds > 60) seconds %= 60;

            // calculate milliseconds 
            milliseconds = timeElapsed + prev_milliseconds;
            if (milliseconds > 1000) milliseconds %= 1000;

            // set the stopwatch
            setStopwatch(hours, minutes, seconds, milliseconds);

        }, 25); // update time in stopwatch after every 25ms

    }

    // Set the time in stopwatch
    function setStopwatch(hours, minutes, seconds, milliseconds){
        $("#hours").html(prependZero(hours, 2));
        $("#minutes").html(prependZero(minutes, 2));
        $("#seconds").html(prependZero(seconds, 2));
        $("#milliseconds").html(prependZero(milliseconds, 3));
    }

    // Prepend zeros to the digits in stopwatch
    function prependZero(time, length) {
        time = new String(time);    // stringify time
        return new Array(Math.max(length - time.length + 1, 0)).join("0") + time;
    }
    i = 1 
    $("#next").click(function(){
    	document.getElementById("img"+i).className="hide";
    	i++
		if(timeUpdate) clearInterval(timeUpdate);
    	setStopwatch(0,0,0,0)
    	if (i>3) i = 3
    	document.getElementById("img"+i).className="show";
		document.getElementById("stop_watch").className="hide"; 
		$("#option1").html("");
		$("#option2").html("");
		setTimeout(function(){ document.getElementById("img"+i).className="hide"; document.getElementById("stop_watch").className="show"; updateTime(0,0,0,0); }, 4000);
	});
	
	$("#previous").click(function(){
		document.getElementById("img"+i).className="hide";
		i--
		if(timeUpdate) clearInterval(timeUpdate);
    	setStopwatch(0,0,0,0)
    	if(i<1) i = 1
    	document.getElementById("img"+i).className="show";
		document.getElementById("stop_watch").className="hide"; 
		$("#option1").html("");
		$("#option2").html("");
		setTimeout(function(){ document.getElementById("img"+i).className="hide"; document.getElementById("stop_watch").className="show"; updateTime(0,0,0,0); }, 4000);
	});
});