
function CircleMouseEnter () {
	
	
	
	$("circle.Agility , circle.Intelligence , circle.Strength").on("mouseenter" , function () {
		var idThis = "#" + $(this).attr("id") + "rect";		
		var x = parseInt($(this).attr("cx"));		
		var y = parseInt($(this).attr("cy"));
	
	$(".SecondCircles").hide();
	
		
		
		//alert ((x + 300) + " " + x);
		
		
		
		var type = $(this).attr("class");
		var name = $(this).attr("id");						
		$("#heroType").text((type));
		$("#heroName").text(changeTo(name));
		
		
		if(type === "Agility"){												
			//$("#header").attr("fill" , "#18C610").text(type);
			$(idThis).attr("stroke" , "#106D0C");
		}
		else
		if(type === "Strength"){									
			//$("#header").attr("fill" , "red").text(type);
			$(idThis).attr("stroke" , "#771D0B");
		}
		else
		if(type === "Intelligence"){
			//$("#header").attr("fill" , "#00CDFF").text(type);
			$(idThis).attr("stroke" , "#066171");
		}								
				
		$("#button1")					
				.attr ("x" , resizer.checkerW(x - 187))
				.attr("y" ,  resizer.checkerH(y + 105));
				
		
		$("#button2")							
				.attr ("x" , resizer.checkerW(x + 80))
				.attr("y" ,  resizer.checkerH((y + 105)));
		
		$("#buttontext1")		
			.css ({"font-family" :"Courier New",
					"font-weight":"bold"})
			.attr("x" , resizer.checkerW(x - 120))	
			.attr("y" ,  resizer.checkerH(y + 165));
											
		$("#buttontext2")		
			.css ({"font-family" :"'Courier New'",
					"font-weight":"bold"})
			.attr("x" , resizer.checkerW(x + 130))	
			.attr("y" ,  resizer.checkerH(y + 165));
		


		
				
		$(idThis)
			.show();
			
		$(idThis)
				.attr("x" , resizer.checkerW(x - 200))
				.attr("y" , resizer.checkerH(y - 200));
		
		$("#button1").show();				
		$("#button2").show();			
		$("#buttontext1").show();		
		$("#buttontext2").show();
		
		/*
		setTimeout(function() {   
			$(idThis)
			.hide();
			$("#button1").hide();					
		$("#button2").hide();					
		$("#buttontext1").hide();		
		$("#buttontext1").hide();		
	
		}, 1000);
		*/
	
	} 
	);
	
	
	
		
	
}		