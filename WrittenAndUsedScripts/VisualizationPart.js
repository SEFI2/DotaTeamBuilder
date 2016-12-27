
var heroName, heroName1, heroAttr, heroAttr1, heroPrior, heroPrior1;

var clickedName = "";
function makeRings (){
	var svg = d3.select("#mysvg");
	
	var killsPerDeath = new TextMaker ("PICK RATE" , 600 , 1100 , 80 , "#F9EBEA" , "Bold");
	var killsPerDeath = new TextMaker ("WIN RATE" , 1300 , 1100 , 80 , "#DD928B" , "Bold");
	var killsPerDeath = new TextMaker ("KILLS/DEATH" , 900 , 1200 , 80 , "#C0392B" , "Bold");
														
	var xpPerMin = new TextMaker ("XP/MIN" , 150 , 1850 , 70 , "#3B9508");
	var goldPerMin = new TextMaker ("GOLD/MIN" , 780 , 1850 , 70 , "#FFF700");
	var goldPerMin = new TextMaker ("ASSIST/GAME" , 1370 , 1850 , 70 , "#C83E25");
	$("#fillgauge3").show();
	$("#fillgauge2").show();
	$("#fillgauge1").show();
	
	var radius = 1;
	var exp2 = 0;	
	var w = $(window).width();
	var h = $(window).height();
	var cx =  w/2   + 50;
	var	cy = h / 2 - 400;
	var radHero = 200;
	var ppap = 0;
	var i = 0;
	for ( i = 0 ; i < heroes.length && radHero > 20 && ppap < 4; ++i) {
		var j = i;	
		var angle = 0;
		var cnt = Math.min (exp2 * 6 + 1  , heroes.length - i);	
		var step = (2 * Math.PI) / cnt;	
		svg.append ("g")
			.append ("circle")
			.attr ("cx" , w/2 + 50 )
			.attr ("cy" , h / 2 - 400)
			.attr ("fill" , "none")	
			.attr ("stroke" , "#F1CDA6")
			.attr ("stroke-width" , 40)
			.attr ("r" , radius);		
		while (j < i + cnt) {									
			angle += step;								
			j++;
		}
		ppap ++;			
		radHero -= 15 * (6 - ppap);
		radius += (6 - ppap) * 80;
		i = j - 1;
		exp2 ++;		
	}
	
		
}
var goodText;
var workText;
var badText;
var infoPairwiseAlly;
var infoPairwiseEnemy;

	

function RelationsConstruction() {
	var infoGamepedia = new TextMaker ("From dota2.gamepedia.com guides:" , 3950 , 900 , 90 , "#277F09");
	var goodAgainst = new TextMaker ("- Good against..." , 3950 , 1100 , 95 , "#F9EBEA" , "Bold");
	goodText = new TextMaker("" , 4000 , 1200 , 90 , "#D62B2B");		
	var workswellwith = new TextMaker ("- Works well with..." , 3950 , 1350 , 95 , "#F9EBEA" , "Bold");
	workText = new TextMaker("" , 4000 , 1450 , 90 , "#D62B2B" );
	var badAgainst = new TextMaker ("- Bad against..." , 3950 , 1600 , 95 , "#F9EBEA" , "Bold");
	badText = new TextMaker("" , 4000 , 1700 , 90 , "#D62B2B");
	
	
	infoPairwiseAlly = new TextMaker ("Pairwise win rate of current hero and each hero of ally team"  , 0 , 2580 , 65 , "#277F09" , "Bold");
	infoPairwiseEnemy = new TextMaker ("Win rate of current hero's team against enemy team"  , 3970 , 2580 , 65 , "#277F09" , "Bold");
	changeTexts(heroes[0]);
		
}

function changeTexts(hero) {
	
	
	badText.change("");
	goodText.change("");
	workText.change("");
	
	for (var i = 0 ; i < hierarchyHeroes.length ; ++i)
	{
		if (hierarchyHeroes[i].name === hero) 
		{
				  var first = true;
					
				   for (var j = 0 ; j < hierarchyHeroes[i].Bad.length ; ++j) {
						var child = hierarchyHeroes[i].Bad[j];
						for (var k = 0 ; k < enemies.length ; ++k) {
							if (child.name === enemies[k]) {
								if (first === true)
								badText.change(changeTo(child.name)) , first = false;
								else
								badText.change(badText.get() + ", " + changeTo(child.name));
							}						
						}				
					}
					
					first = true;
					for (var j = 0 ; j < hierarchyHeroes[i].Good.length ; ++j) {
						var child = hierarchyHeroes[i].Good[j];
						for (var k = 0 ; k < enemies.length ; ++k) {
							if (child.name === enemies[k]) {
								if (first === true)
								goodText.change(changeTo(child.name)) , first = false;
								else
								goodText.change(goodText.get() + ", " + changeTo(child.name));
							}
						}				
					}
					first = true;
					
					for (var j = 0 ; j < hierarchyHeroes[i].Works.length ; ++j) {
						var child = hierarchyHeroes[i].Works[j];
						for (var k = 0 ; k < allies.length ; ++k) {
							if (child.name === allies[k]) {
								if (first === true)
									workText.change(changeTo(child.name)) , first = false;
								else
									workText.change(workText.get() + ", " + changeTo(child.name));
							}
						}				
					}
		}
	}
}

function changeRates(name) {
	for (var i = 0 ; i < allies.length ; ++i) {
		var fi = nametoid[name];
		var se = nametoid[allies[i]];
		if (fi > se) {
			var tmp = fi;
			fi = se;
			se = tmp;
		}			
		changeIndicator((1 + i) , rate_with[fi][se] , rate_with[se][fi]);
	}
	
	for (var i = 0 ; i < enemies.length ; ++i) {
		var fi = nametoid[name];
		var se = nametoid[enemies[i]];
		changeIndicator((i + 6) , rate_against[fi][se] , (rate_against[se][fi] + rate_against[fi][se]));
	}
	
}

function visualize () {	
	for (var i = 0 ; i < allies.length ; ++i) {
		$("#myProgress" + (i + 1)).show();
	}
	
	for (var i = 0 ; i < enemies.length ; ++i) {
		$("#myProgress" + (6 + i)).show();
	}		
	
	RelationsConstruction();
	
	createStackBar();
	
	var svg = d3.select("#mysvg");
	var defs = svg.append("defs").attr("id" , "imgdefs");
	var patrect = defs.append("pattern").attr("id" , "arrow").attr("height" , "1").attr("width" , "1");
	patrect.append("image").attr("id" , "imagearrow").attr("height" , 200).attr("width" , 200).attr("xlink:href" , "WrittenAndUsedScripts/arrow.png")
	var group = svg.append("g");
	group.append("rect").attr("class" , "SecondCircles").attr("id" ,  "rectarrow").attr("stroke" , "#800000")
	.attr("fill" , "url(#arrow)").attr("stroke-width" , "0").attr("x","0").attr("y","800").attr("width" , 200).attr("height" , 200);	
	
	
	
	var radius = 1;
	var exp2 = 0;	

	var w = $(window).width();
	var h = $(window).height();
	
								
	
	
			
	var cx =  w/2   + 50;
	var	cy = h / 2 - 400;
	var radHero = 200;
	var ppap = 0;
	
	
	var name = heroes[0];						
	var type = typeOfHero[name];
	changeGauge(nametoid[heroes[0]]);
	changeRates(name);
	
	
		heroName = new TextMaker ("Hero: ", 3950 , 200 , 70 , "#FFFFFF");
		heroName1 = new TextMaker (heroes[0] , 4300 , 200 , 110 , "red");
	
		heroAttr = new TextMaker ("Attribute: " , 3950 , 400 , 70 , "#FFFFFF");
		heroAttr1 = new TextMaker (type, 4300 , 400 , 110 , "red");
				
	
		heroPrior = new TextMaker ("Priority: " , 3950 , 600 , 70 , "#FFFFFF");
		heroPrior1 = new TextMaker (priorities[0], 4300 , 600 , 110 , "red");
	
	
	var i = 0;
	makeRings ();
	
	for ( i = 0 ; i < heroes.length && radHero > 20 && ppap < 4; ++i) {
		var j = i;	
		var angle = 0;
		
		var cnt = Math.min (exp2 * 6 + 1  , heroes.length - i);	
		var step = (2 * Math.PI) / cnt;	
		
		while (j < i + cnt) {							
			var x = radius * Math.cos(angle) + cx;		
			var y = radius * Math.sin(angle) + cy;	
			
			var defs = svg.append("defs").attr("id" , "imgdefs");
								
			var pat = defs.append("pattern")
				.attr("id" , "patnew"+heroes[j])
			   	.attr("height" , "1")
				.attr("width" , "1");
								
			pat.append("image")
				.attr("id" , heroes[j]+"image")
				.attr("height" , resizer.checkerH(2 * (radHero + 20)))
				.attr("width" , resizer.checkerW(2 * (radHero + 20)))
				.attr("xlink:href" , "VideoAndGifOfHeroes/" + heroes[j]+".gif")
			
			//trans = 
			var circle = svg.append ("g")
				.append("circle")
				.attr("stroke" ,"#090404")
				.attr("stroke-width" , 1)
				.attr("stroke" ,"#87ED75")
				.attr("fill" , "url(#patnew" + heroes[j] + ")")
				.attr("id" , "hehehe"+heroes[j])
				.attr("cx",resizer.checkerW(x))
				.attr("cy",resizer.checkerW(y))
				.attr ("r" , resizer.checkerW(radHero + 20));
			
			circle.on("mouseover" , function() {
					if (clickedName !== "")return;
					
					var name = $(this).attr("id");
					name = name.replace('hehehe' , '');
					
					var type = typeOfHero[name];
					heroName1.change(changeTo(name));
					heroAttr1.change(type);
					
					changeTexts(name);
					changeRates(name);
					
					for (var t = 0 ; t < heroes.length ; ++t)
						if (heroes[t] === name){		
							heroPrior1.change(priorities[t]);
							//$("#rectarrow").transition("x" , t * 86);
							
							d3.select("#mysvg").selectAll("#rectarrow").transition().duration(500).attr("x" , t*86);
							changeGauge(nametoid[ heroes[t]  ]);
							break;
						}
					for (var t = 0 ; t < heroes.length ; ++t)
					{					
						$("#hehehe" + heroes[t]).attr("stroke-width" , 0);
					}
					$(this).attr("stroke" , "#48DB19").attr("stroke-width" , 10);
										
			});
			
			circle.on("click" , function() {
					var name = $(this).attr("id");
					name = name.replace('hehehe' , '');
					if (clickedName === ""){
						clickedName = name;			
						$(this).attr("stroke" , "#48DB19").attr("stroke-width" , 20);
						
					
					}
					else if (clickedName === name){
						clickedName = "";						
						$(this).attr("stroke-width" , 10);
					}
			});
			
			
			
			
			angle += step;								
			j++;
		}
		
		ppap ++;			
		radHero -= 15 * (6 - ppap);
		
		radius += (6 - ppap) * 80;
	
		i = j - 1;
		exp2 ++;		
	}
	for (var j= i ; j < heroes.length ; ++j) {
								
			var pat = defs.append("pattern")
				.attr("id" , "patnew"+heroes[j])
			   	.attr("height" , "1")
				.attr("width" , "1");
								
			pat.append("image")
				.attr("id" , heroes[j]+"image")
				.attr("xlink:href" , "VideoAndGifOfHeroes/" + heroes[j]+".gif")
			
			//trans = 
			var circle = svg.append ("g")
				.append("circle")										
				.attr("fill" , "url(#patnew" + heroes[j] + ")")
				.attr("id" , "hehehe"+heroes[j]);
																	
				
			circle.on("mouseover" , function() {
					if (clickedName !== "")return;
					
					var name = $(this).attr("id");
					name = name.replace('hehehe' , '');
					
					var type = typeOfHero[name];
					heroName1.change(changeTo(name));
					heroAttr1.change(type);
				changeTexts(name);
					changeRates(name);
	
					for (var t = 0 ; t < heroes.length ; ++t)
						if (heroes[t] === name){		
							heroPrior1.change(priorities[t]);
							//$("#rectarrow").transition("x" , t * 86);
							
							changeGauge(nametoid[ heroes[t]  ]);
							d3.select("#mysvg").selectAll("#rectarrow").transition().duration(500).attr("x" , t*86);
							
							break;
						}
					for (var t = 0 ; t < heroes.length ; ++t)
					{					
						$("#hehehe" + heroes[t]).attr("stroke-width" , 0);
					}
					$(this).attr("stroke" , "#48DB19").attr("stroke-width" , 10);
					
						
			});
			
			circle.on("click" , function() {
					var name = $(this).attr("id");
					name = name.replace('hehehe' , '');
					if (clickedName === ""){
						clickedName = name;			
						$(this).attr("stroke" , "#48DB19").attr("stroke-width" , 20);
						
					
					}
					else if (clickedName === name){
						clickedName = "";						
						$(this).attr("stroke-width" , 10);
					}
			});
			
	}
	
	$("#hehehe" + heroes[0]).attr("stroke" , "#48DB19").attr("stroke-width" , 10);
	
	$(".mySelectButton").show();
	$(".myBackButton").show();
	$("#stackedbar").show();		
	$(".stackedbarrect").show();
	$(".forumDiv").show();
	$(".showing").show();
	
	
	
}

function showAgainHeroes () {
	clickedName = "";
	$("#rectarrow").attr("x" , 0);
	var svg = d3.select("#mysvg");
	for (var i = 21 ; i < heroes.length; ++i){			
		$("#hehehe" + heroes[i]).fadeOut(200);
		svg.selectAll("#hehehe" + heroes[i]).attr("stroke-width" , 0);
	}
	$("#hehehe" + heroes[0]).attr("stroke" , "#48DB19").attr("stroke-width" , 10);
	
	changeTexts(heroes[0]);
	changeGauge(nametoid[heroes[0]]);
	changeRates(heroes[0]);
	
	var radius = 1;
	var exp2 = 0;	

	var w = $(window).width();
	var h = $(window).height();
	
	heroName1.change(heroes[0]);
	heroAttr1.change(typeOfHero[heroes[0]]);			
	heroPrior1.change(priorities[0]);
	
					
	var cx =  w/2   + 50;
	var	cy = h / 2 - 400;
	var radHero = 200;
	var ppap = 0;
	for (var i = 0 ; i < heroes.length && radHero > 20 && ppap < 4; ++i) {
		var j = i;	
		var angle = 0;
		var cnt = Math.min (exp2 * 6 + 1  , heroes.length - i);	
		var step = (2 * Math.PI) / cnt;	
		while (j < i + cnt) {							
			var x = radius * Math.cos(angle) + cx;		
			var y = radius * Math.sin(angle) + cy;
			
			if (!($("#hehehe" + heroes[j]).is(":visible")))
				$("#hehehe" + heroes[j]).fadeIn(200);
			
			
			//alert(heroes[j]);
			
			//$("#" + heroes[j] + "image").show();
			
			svg.selectAll("#hehehe" + heroes[j]).transition().duration(1000).attr("cx" , resizer.checkerW(x)).attr("cy" , resizer.checkerH(y)).
			attr("r" , resizer.checkerW(radHero + 20)); 
					svg.selectAll("#" + heroes[j] + "image").attr("height" , resizer.checkerH(2 * (radHero + 20)))
					.attr("width" , resizer.checkerW(2 * (radHero + 20)));
			$("#hehehe" + heroes[j]).show();
					
			
			
			angle += step;								
			j++;
		}	
			
		ppap ++;			
		radHero -= 15 * (6 - ppap);
		
		radius += (6 - ppap) * 80;
		i = j - 1;
		exp2 ++;		
	}
	
	
	
}