function RectMaker(id , items , type) {
	var svg = d3.select(id);
	
	
	for (var i = 0 ; i < items.length ; ++i) {
			var j = i;
			items[j].name = items[j].name.trim();			
			
			var defs = svg.append("defs").attr("id" , "imgdefs");
			var patrect = defs.append("pattern")
				.attr("id" , "pat"+items[j].name + "rect")
			   	.attr("height" , "1")
				.attr("width" , "1");
			
			
			patrect.append("image")
				.attr("id" , items[j].name+"imagerect")
				.attr("height" , 300)
				.attr("width" , 550)
				.attr("xlink:href" , "ImageOfHeroes/125px-" +items[j].name+"_Large.png")
			var group = svg.append("g");
			/*
			svg.append ("g")
				.append("circle")
				.attr("stroke" ,"#5B1B11")
				.attr("fill" , "url(#pat" + items[j].name + ")")
				.attr("id" , items[j].name)
				.attr ("class" , type)
				.attr("cx",x)
				.attr("cy",y)
				.attr("r" , 100);
			*/
			group.append("rect").attr("class" , "SecondCircles")
				.attr("id" , items[j].name + "rect")
				.attr("stroke" , "#800000")
				.attr("fill" , "url(#pat" + items[j].name + "rect)")
				.attr("stroke-width" , "15")
				.attr("x","0")
				.attr("y","0")			
				.attr("width" , 550)	
				.attr("height" , 400);
				
			/*
			$("#"+items[j].name + "rect").on("click" , function(){
				window.location.href= 'http://dota2.gamepedia.com/' + $(this).attr("id").replace ('rect' , '') + '/Counters';
			});
			*/
				
			$("#" + items[j].name + "rect").hide();
		
		
			
	}
	
}
