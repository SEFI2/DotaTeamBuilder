<!doctype html>

<html>

<head>
	<style src="styleOfMainView"> </style>	
	<script src="ImportantFiles/EntranceListOfHeroes.js"> </script>
	<script src="ImportantFiles/d3.js"> </script>
	<script src="ImportantFiles/jquery.js"> </script>
	<title> Main View </title>							

</head>

<body>
	<script>	
		var svg = d3.select("body")
					.append ("svg")
					.attr("width" , 200)
					.attr("hegiht" , 200);
					
		var group = svg
					.append("g")		
					.attr("id" , "imagesOfHeroes");
		//alert (listHeroes.children[0].children.length);
		
		group.append ("g")
			.attr("id" , "Agility")
			.selectAll("image")
			.data(listHeroes.children[0].children)
				.enter()
					.append ("image")
					.attr("id" , function (d) {return d.name;})
					.attr("xlink:href",  function(d) { return "ImageOfHeroes/125px-" + d.name + "_Large.png";})
					.attr("width" , "100px")
					.attr("height" , "100px")
					.attr("x" , -8)
					.attr("y" , -8)
					.attr ("transformt" , "translate(1000,1000)");
					
					
			
			
	</script>
</body>	

</html>	