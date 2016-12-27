
function ButtonMaker () {
	
	var svg = d3.select("#mysvg");
				
	var group1 = svg.append("g");
	var group2 = svg.append("g");
	
	var heroName = svg.append ("g").append("text").attr("id" , "heroName");
	var heroType = svg.append ("g").append("text").attr("id" , "heroType");
				
	var button1 = group1.append ("rect").attr("id" , "button1");
	var button2 = group2.append ("rect").attr("id" , "button2");
		/*
	heroName.attr("font-size" , 160)
			.attr("fill" , "#000000")
	//		.attr ("x" , resizer.checkerW(2400)) 
			.attr ("y" , resizer.checkerH(2000))
			.text("");
	
	
	heroType.attr("font-size" , 110)
			.attr("fill" , "#000000")
			.attr ("x" , resizer.checkerW(2400))
			.attr ("y" , resizer.checkerH(2200))
			.text("");
	
			*/
			
			
	button1.attr ("fill" , "#FEF3EC")
			.attr("width" , resizer.checkerW(259))
			.attr("height" , resizer.checkerH(83))
			.attr("stroke" , "#92A08E")
			.attr("stroke-width" , "10");
					
	group1.append("text")
			.attr("font-size" , resizer.checkerW(50))
			.attr("id" , "buttontext1")
			.attr("fill" , "black")
			.text("Ally");
							
		
	
	
	$("#button1 , #buttontext1").on ("mousedown", function() {
		var xb = parseInt($("#button1").attr("x"));
		var yb = parseInt($("#button1").attr("y"));
				
		var xt = parseInt($("#buttontext1").attr("x"));
		var yt = parseInt($("#buttontext1").attr("y"));
		
									
		$("#button1").attr ("stroke-width" , "10")
					.attr ("x" , xb - 5)			
					.attr ("y" , yb - 5);
							
		$("#buttontext1")
					.attr ("x" , xt - 5)			
					.attr ("y" , yt - 5);
								
		});
	
	$("#button1 , #buttontext1").on ("mouseup", function() {
		var xb = parseInt($("#button1").attr("x"));
		var yb = parseInt($("#button1").attr("y"));
				
		var xt = parseInt($("#buttontext1").attr("x"));
		var yt = parseInt($("#buttontext1").attr("y"));
		
									
			$("#button1").attr ("stroke-width" , "10")
					.attr ("x" , xb + 5)			
					.attr ("y" , yb + 5);
							
		$("#buttontext1")
					.attr ("x" , xt + 5)			
					.attr ("y" , yt + 5);
								
		
		
		var strName = changeToRev($("#heroName").text());
		updateArrayAlly(strName);
	});
		
	button2.attr ("fill" , "#FEF3EC")
			.attr("width" , "259")
			.attr("height" , "83")
			.attr("stroke" , "#92A08E")
			.attr("stroke-width" , "10");
	
		
	group2
			.attr("font-size" , 50)
			.append("text")
			.attr("id" , "buttontext2")
			.attr("fill" , "black")
			.text("Enemy");
										
										
	$("#button2 , #buttontext2").on ("mousedown", function() {
		var xb = parseInt($("#button2").attr("x"));
		var yb = parseInt($("#button2").attr("y"));
				
		var xt = parseInt($("#buttontext2").attr("x"));
		var yt = parseInt($("#buttontext2").attr("y"));
				
											
		$("#button2").attr ("stroke-width" , "10")
					.attr ("x" , xb - 5)			
					.attr ("y" , yb - 5);
							
		$("#buttontext2")
					.attr ("x" , xt - 5)			
					.attr ("y" , yt - 5);
								
	});
								
	$("#button2 , #buttontext2").on ("mouseup", function() {
		var xb = parseInt($("#button2").attr("x"));
		var yb = parseInt($("#button2").attr("y"));
				
		var xt = parseInt($("#buttontext2").attr("x"));
		var yt = parseInt($("#buttontext2").attr("y"));
		
										
		$("#button2")
					.attr ("stroke-width" , "6")
					.attr ("x" , xb + 5)			
					.attr ("y" , yb + 5);
						
		$("#buttontext2")
					.attr ("x" , xt + 5)			
					.attr ("y" , yt + 5);
		
		var strName = changeToRev($("#heroName").text());
		updateArrayEnemy(strName);
	});
	
	
		$("#button1").hide();					
		$("#button2").hide();					
		$("#buttontext1").hide();		
		$("#buttontext2").hide();		
			
				
}