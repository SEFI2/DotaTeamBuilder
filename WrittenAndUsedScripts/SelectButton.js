
function selectButton () {		
	
	$(".mySelectButton").on("click" , function () {
			if (allies.length == 5){
				Warning("Fulled");
				return;
			}			
			
			var xx = parseInt($("#rectarrow").attr("x"));
			var name = changeToRev(heroes[xx / 86]);
			updateArrayAlly (name);	
			$("#myProgress" + allies.length).show();
			recalcAlgo();			
			$("#stackedbar").children().empty();
			createStackBar ();
			showAgainHeroes ();
			
	});	
	
}
