<!doctype html>

<html>

<head>
					
	<style type="text/css">
	html{
		background: url(ImageOfHeroes/dota_background.jpg) no-repeat center center;
		-webkit-background-size:cover;
		-moz-background-size:cover;
		-o-background-size:cover;
		background-size:cover;
		
	}
	</style>
	<script src="ImportantFiles/d3.js"> </script>
	<script src="ImportantFiles/jquery.js"> </script>
	<script src="ImportantFiles/EntranceListOfHeroes.js"> </script>
	<script src="ImportantFiles/graphClass.js"> </script>
	<script src="ImportantFiles/graphClassForEntrance.js"> </script>
	
</head>
	
<body>
	<div id="forGraph"> </div>
	<script type="text/javascript"> 
								
		var graph = new graphClassForEntrance ("#forGraph");
		var cnt = 0;
		
		function rec (g , depth) {	
			if (depth == 2)	cnt ++;
			graph.addNode(g.name , depth , cnt);
														
			if (g.children != undefined)
			for (var i = 0 ; i < g.children.length ; ++i) {
				rec (g.children[i] , depth + 1 + i / 10);	
				
				graph.addLink(g.name,g.children[i].name);
			}													
		}
			
		
		rec (listHeroes , 1);
		
		
		
		
	</script>
</body>

</html>
