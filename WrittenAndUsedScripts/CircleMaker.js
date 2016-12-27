
var enemies = [];
var allies = [];
var typeOfHero = {};
function CircleMaker (id , items , type) {
	var svg = d3.select(id);
	
	var width = $(id).width();
	var height = $(id).height();
	
	var cx =  + CircleMaker.counter * 1700 + width / 5.5;
	var	cy = height / 2 + (CircleMaker.counter == 1 ? -300 : 0) - 100;
	
	CircleMaker.counter ++;
	
	var radius = 1;
	var exp2 = 0;	
	for (var i = 0 ; i < items.length ; ++i) {
		var j = i;	
		var angle = 0;
		
		var cnt = Math.min (exp2 * 6 + 1  , items.length - i);	
		var step = (2 * Math.PI) / cnt;	
		
		while (j < i + cnt) {
			items[j].name = items[j].name.trim();			
			var x = radius * Math.cos(angle) + cx;
			var y = radius * Math.sin(angle) + cy;	
			var defs = svg.append("defs").attr("id" , "imgdefs");
			typeOfHero[items[j].name] = type;
			var pat = defs.append("pattern")
				.attr("id" , "pat"+items[j].name)
			   	.attr("height" , "1")
				.attr("width" , "1");
								
			pat.append("image")
				.attr("id" , items[j].name+"image")
				.attr("height" , resizer.checkerH(200))
				.attr("width" , resizer.checkerW(200))
				.attr("xlink:href" , "ImageOfHeroes/125px-" +items[j].name+"_Large.png")
			
			//trans = 
			svg.append ("g")
				.append("circle")
				.attr("stroke" ,"#5B1B11")
				.attr("stroke-width" , 0)
				.attr("fill" , "url(#pat" + items[j].name + ")")
				.attr("id" , items[j].name)
				.attr ("class" , type)
				.attr("cx",resizer.checkerW(x))
				.attr("cy",resizer.checkerH(y))
				.attr("r" , 100);
				
			angle += step;
			j++;
		}
		
		if (i == 0)	
			radius += 240;
		else			
			radius += 220;
		i = j - 1;
		exp2 ++;		
	}
	
}
function circleShow (items) {
	var id = "#mysvg";
	
	var svg = d3.select("#mysvg");
	
	var width = $(id).width();
	var height = $(id).height();
	if (circleShow.counter === undefined)
		circleShow.counter = 0;
	
	var cx =  + circleShow.counter * 1700 + width / 5.5;
	var	cy = height / 2 + (CircleMaker.counter == 1 ? -300 : 0) - 100;
	circleShow.counter ++;
	
	
	var radius = 1;
	var exp2 = 0;	
	for (var i = 0 ; i < items.length ; ++i) {
		var j = i;	
		var angle = 0;
		var cnt = Math.min (exp2 * 6 + 1  , items.length - i);	
		var step = (2 * Math.PI) / cnt;	
		while (j < i + cnt) {
			items[j].name = items[j].name.trim();			
			var x = radius * Math.cos(angle) + cx;
			var y = radius * Math.sin(angle) + cy;	
			svg.selectAll("#" + items[j].name).transition().duration(600).attr("cx" , resizer.checkerW(x)).attr("cy" , resizer.checkerH(y));
			angle += step;
			j++;
		}
		if (i == 0)	
			radius += 240;
		else			
			radius += 220;
		i = j - 1;
		exp2 ++;		
	}
}
	

		
	
	
	
	

