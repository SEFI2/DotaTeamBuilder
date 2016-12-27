
function startButton () {		
	
	$(".myButton").on("click" , function () {
		if (enemies.length + allies.length == 0)
		{
			Warning ("No one selected!");
			return;
		}	
selectButtonPressed = true;
					
		$("rect").hide();
		$("#heroName").hide();
		$("#heroType").hide();
		$("#buttontext1").hide();
		$("#buttontext2").hide();

		move();					
		$(".myButton").hide();
		$(".myResetButton").hide();
		startAlgorithm ();
		
	});
}





function move (){
		var sz = $(window).width();
		d3.select("#mysvg").selectAll("circle.Agility").transition().duration(500).attr("cx" , sz +200);
		d3.select("#mysvg").selectAll("circle.Intelligence").transition().duration(500).attr("cy" , -200);
		d3.select("#mysvg").selectAll("circle.Strength").transition().duration(500).attr("cx" ,  - 200);
}

