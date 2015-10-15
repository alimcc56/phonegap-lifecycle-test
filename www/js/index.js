var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
//here is an event listener (handler = onLoad)
    function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
		console.log("device ready");
    }
	
	function updateDisplay() {
		$("#launched").text("Application launched: " + launched_count);
		$("#resumed").text("Application paused: " + paused_count);
		$("#paused").text("Application resumed: " + resumed_count);
	}


    // device APIs are available
    function onDeviceReady() {
		alert("device ready"); //lifecycle
        
		document.addEventListener("resume", onResume, false); //here is an event listener (handler = OnResume)
		document.addEventListener("pause", onPause, false); //here is an event listener (handler = onPause)
		
		launched_count++;
		updateDisplay();
    }

    // Handle the pause event
    //
    function onPause() {
		alert("pause"); //lifecycle
		paused_count++;
		updateDisplay();
    }
	
	function onResume() {
		alert("resume"); //lifecycle
		resumed_count++;
		updateDisplay();
    }
