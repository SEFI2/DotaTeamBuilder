function warnBuilder(){
	var svg = d3.select("#mysvg");
	svg.append("g")
		.append ("text")
		.attr ("id" , "warnBox")
		.attr ("font-size" , 100)
		.attr ("fill" , "white")
		.attr ("y" , 100)
		.attr ("x" , 2000)
		.text("Warning!");		
		
	$("#warnBox").hide();
}

function Warning (message){	
	$("#warnBox").text(message).fadeIn("slow" , function () {
		$(this).fadeOut("slow");
	});
}