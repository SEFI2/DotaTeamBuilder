var selectButtonPressed = false;

function showArrayBuilder () {
	var svg = d3.select ("#mysvg");
	
	for (var i = 0 ; i < 5 ; ++i){	
			var defs = svg.append("defs").attr("id" , "imgdefs");
			var patrect = defs.append("pattern")
				.attr("id" , "patally" + i)
			   	.attr("height" , "1")
				.attr("width" , "1");
								
			patrect											
				.append ("image")
				//.attr("xlink:href",  "ImageOfHeroes/125px-Axe_Large.png")
				.attr("id" , "ally" + i)
				.attr("width" , resizer.checkerW(300))
				.attr("height" , resizer.checkerH(185));
			var  svg = d3.select("#mysvg");
			
			var group = svg.append("g");
			
			group.append("rect").attr("class" , "showing")
				.attr("id" , "allyrect" + i)
				.attr("stroke" , "#277F09")
				.attr("fill" , "url(#patally" + i + ")")
				.attr("stroke-width" , "0")		
				.attr ("x" , resizer.checkerW(i * 330 + 50))
				.attr ("y" , resizer.checkerH(2300))	
				.attr("width" , 300)	
				.attr("height" , 180)
				.append("text")
				.text("HAHA")
				.attr("fill" , "white");
				
			$("#allyrect" + i).on("click" , function(){ 
				var lim = parseInt($(this).attr("id").replace('allyrect' , ''));
				var This = this;
				var name = $("#ally" + lim).attr ("class");
				$(This).attr("stroke" , "red").attr("stroke-width" , 20);
					
				setTimeout(function(){				
					for (var j =  lim ; j < allies.length - 1 ; ++j) {
							d3.select("#ally" + (j)).attr("xlink:href" , d3.select("#ally" + (j + 1)).attr("xlink:href"));
							d3.select("#ally" + (j)).attr("class" , d3.select("#ally" + (j + 1)).attr("class"));
					}			
					$("#ally" + (allies.length - 1)).hide();
					$(This).attr("stroke" , "red").attr("stroke-width" , 10);
					$("#" + name).attr("stroke-width" , 0);
					
					$("#myProgress" + allies.length).hide();
					allies.splice(lim , 1);
					
					if (selectButtonPressed === true){		
						recalcAlgo();						
						$("#stackedbar").children().empty();
						createStackBar ();
						showAgainHeroes ();
					}
					
					
					
				} , 200);
				
			});
			$("#allyrect" + i).on("mouseover" , function(){ 
				$(this).attr("stroke" , "red").attr("stroke-width" , 10);
			});
			
			$("#allyrect" + i).on("mouseout" , function(){ 
				$(this).attr("stroke-width" , 0);
			});
			
			
	}
	for (var i = 4 ; i >= 0 ; --i) {
		var defs = svg.append("defs").attr("id" , "imgdefs");
		var patrect = defs.append("pattern")
				.attr("id" , "patenemy" + i)
			   	.attr("height" , "1")
				.attr("width" , "1");	
		patrect
			.append ("image")
			//.attr("xlink:href",  "ImageOfHeroes/125px-Axe_Large.png")
			.attr("id" , "enemy" + i)
			.attr("width" , resizer.checkerW(300))
			.attr("height" , resizer.checkerH(180));
		var svg = d3.select("#mysvg");
		
		var group = svg.append("g");
			
			group.append("rect").attr("class" , "showing")
				.attr("id" , "enemyrect" + i)
				.attr("stroke" , "#800000")
				.attr("fill" , "url(#patenemy" + i + ")")
				.attr("stroke-width" , "0")		
			.attr ("x" , resizer.checkerW(((4 - i) * 330 + 3760)))
			.attr ("y" , resizer.checkerH(2300))
			
				.attr("width" , 300)	
				.attr("height" , 180);
			
			$("#enemyrect" + i).on("click" , function(){ 
			
				d3.select(this).attr ("xlink:href" , undefined);
			});
			$("#enemyrect" + i).on("click" , function(){ 
				$(this).attr("stroke" , "red").attr("stroke-width" , 20);
				var This = this;
				setTimeout(function(){
					var lim = parseInt($(This).attr("id").replace('enemyrect' , ''));
					var name = $("#enemy" + lim).attr ("class");
					
					for (var j =  lim ; j < enemies.length - 1 ; ++j) {
						//	alert (d3.select("#enemy" + j).attr("xlink:href") + " " + d3.select("#enemy" + (j + 1)).attr("xlink:href"));
							d3.select("#enemy" + (j)).attr("xlink:href" , d3.select("#enemy" + (j + 1)).attr("xlink:href"));
							d3.select("#enemy" + (j)).attr("class" , d3.select("#enemy" + (j + 1)).attr("class"));
					}			
					$("#enemy" + (enemies.length - 1)).hide();
					$(This).attr("stroke" , "red").attr("stroke-width" , 10);
					$("#" + name).attr("stroke-width" , 0);
					enemies.splice(lim , 1);
					$("#myProgress" + (6 + enemies.length)).hide();

					if (selectButtonPressed === true){		
						recalcAlgo();						
						$("#stackedbar").children().empty();
						createStackBar ();
						showAgainHeroes ();
					}

					
				} , 200);
				
				
				
			
			});
			$("#enemyrect" + i).on("mouseover" , function(){ 
					$(this).attr("stroke" , "red").attr("stroke-width" , 10);
				});
				
				$("#enemyrect" + i).on("mouseout" , function(){ 
					$(this).attr("stroke-width" , 0);
				});
				
						
			//$("#enemyrect" + i).hide();
			
			
	}
}




function arrayExist (name) {
	for (var i = 0 ; i < allies.length ; ++i) {
		if (name === allies[i]) {
			Warning ("This Hero already chosen as an ally!");
			return false;
		}
	}	
	for (var i = 0 ; i < enemies.length ; ++i) {
		if (name === enemies[i]) {
			Warning ("This Hero already chosen as an enemy!");
			return false;
		}
	}			
	return true;
}
function updateArrayAlly (name) {
	if (arrayExist(name) == false)return;
	if (allies.length == 5) {
		Warning ("Ally team is already fulled");
		return;
	}		
	
	$("#" + name).attr("stroke" , "#78FF00").attr ("stroke-width" , 8);
	
	d3.select("#ally" + allies.length)
			.attr("class"  , name)
			.attr("xlink:href",  "ImageOfHeroes/125px-" + name + "_Large.png");
	//d3.select("#allyrect" + allies.length).text("fdfdg");
	
	$("#ally" + allies.length).show();
	
	$("#allyrect" + allies.length).hide();
	$("#allyrect" + allies.length).fadeIn();
	
	allies.push(name);
	//$("#myProgress" + allies.length).show();
	
	$("#" + name + "rect").hide();
	$("#button1").hide();		
	$("#button2").hide();
	$("#buttontext1").hide();
	$("#buttontext2").hide();	
}

function updateArrayEnemy (name) {
	if (arrayExist(name) == false)return;
	if (enemies.length == 5) {
		Warning ("Enemy team is already fulled");
		return;	
	}						
	$("#" + name).attr("stroke" , "#FF2700").attr ("stroke-width" , 8);
	
	d3.select("#enemy" + enemies.length)
			.attr ("class" , name)
			.attr("xlink:href",  "ImageOfHeroes/125px-" + name + "_Large.png");
			
	$("#enemy" + enemies.length).show();
	$("#enemyrect" + enemies.length).hide();
	$("#enemyrect" + enemies.length).fadeIn();
	
	
	//alert("myProgress" + (10 - enemies.length));
	
	//$("#myProgress" + (10 - enemies.length)).show();
	enemies.push(name);	
	
	
	$("#" + name + "rect").hide();
	$("#button1").hide();		
	$("#button2").hide();
	$("#buttontext1").hide();
	$("#buttontext2").hide();	
}
