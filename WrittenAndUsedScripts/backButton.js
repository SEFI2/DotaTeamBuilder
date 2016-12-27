
function backButton () {		
	
	$(".myBackButton").on("click" , function () {
		
		localStorage.setItem("allies", JSON.stringify(allies));										
		localStorage.setItem("enemies", JSON.stringify(enemies));				
		$("#mysvg").children().children().hide();
		$("rect").hide();
		$("circle").hide();
		$("text").hide();
		
		for (var i = 1 ; i <= 10 ; ++i) {
			$("#myProgress" + i).hide();
		}
		$(".mySelectButton").hide();
		$(".myBackButton").hide();
		$(".myForum").hide();
		
		$("#fillgauge1").hide();
		$("#fillgauge2").hide();
		$("#fillgauge3").hide();
		$("#loadimage").show();
		
		setTimeout(function(){location.reload();} , 500);
		
	});
}
