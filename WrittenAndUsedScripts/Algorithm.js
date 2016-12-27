/*
	by @SEFI&PSIX
*/

var priorities = [];
var heroes = [];
var howmany = 0;


function startAlgorithm() {
	
	for (var i = 0 ; i < hierarchyHeroes.length ; ++i) {
		priorities.push(0);						
		heroes.push(hierarchyHeroes[i].name); 
		hierarchyHeroes[i].name = hierarchyHeroes[i].name.trim();
		var bad = false;
		
		for (var k = 0 ; k < enemies.length ; ++k) 
			if (enemies[k] === hierarchyHeroes[i].name) {
					bad = true;
			}
							
		for (var k = 0 ; k < allies.length ; ++k) 
			if (allies[k] === hierarchyHeroes[i].name) {
					bad = true;
			}
						
		if (bad === true) {
			
			priorities[i] = -100;
			continue;			
		}
		
		var partial = 0;
		for (var k = 0 ; k < enemies.length ; ++k) 
		{
			var hero_id = nametoid[hierarchyHeroes[i].name];
			var enemy_id = nametoid[enemies[k]];
			var against_win_rate = rate_against[hero_id][enemy_id];
			var against_loose_rate = rate_against[enemy_id][hero_id];
			if (against_loose_rate === 0 && against_win_rate === 0)continue;
			partial += against_win_rate / (against_win_rate + against_loose_rate);
		}
		
		for (var k = 0 ; k < allies.length ; ++k) 
		{
			var hero_id = nametoid[hierarchyHeroes[i].name];
			var enemy_id = nametoid[allies[k]];
			if (hero_id > enemy_id) {
				var tmp = hero_id;
				hero_id = enemy_id;
				enemy_id = tmp;
			}
			
			var together_win_rate = rate_with[hero_id][enemy_id];
			var together_all_games = rate_with[enemy_id][hero_id];
			if (together_all_games === 0 && together_win_rate === 0)continue;
			partial += together_win_rate / (together_all_games + together_win_rate);
		}
		priorities[i] = partial;
		
		
			
		
		
		
															
		for (var j = 0 ; j < hierarchyHeroes[i].Bad.length ; ++j) {
			var child = hierarchyHeroes[i].Bad[j];
			for (var k = 0 ; k < enemies.length ; ++k) {
				if (child.name === enemies[k]) {				
					priorities[i] --;
					break;
				}
			}				
		}
		
		for (var j = 0 ; j < hierarchyHeroes[i].Good.length ; ++j) {
			var child = hierarchyHeroes[i].Good[j];
			for (var k = 0 ; k < enemies.length ; ++k) {
				if (child.name === enemies[k]) {
					priorities[i] ++;
					break;
				}
			}				
		}
		for (var j = 0 ; j < hierarchyHeroes[i].Works.length ; ++j) {
			var child = hierarchyHeroes[i].Works[j];
			for (var k = 0 ; k < allies.length ; ++k) {
				if (child.name === allies[k]) {
					priorities[i] ++;
					break;
				}
			}				
		}
		//if (priorities[i] != 0)alert (heroes[i]);
	}
	
	for (var i = 0 ; i < heroes.length ; ++i) {
		for (var j = i + 1 ; j < heroes.length ; ++j) {																	
			if (priorities[i] < priorities[j])
			{
				priorities[i] = [priorities[j] , priorities[j] = priorities[i]][0];
				heroes[i] = [heroes[j] , heroes[j] = heroes[i]][0];
			}
		}
			priorities[i] = priorities[i].toFixed(3);
	
	}
	
	setTimeout(function(){
			var svg = d3.select ("#mysvg");
			svg.append("g")											
				.append ("image")			
				.attr("id" , "loadimage")						
				.attr("height" , resizer.checkerH(400))
				.attr("width" , resizer.checkerW(400))
				.attr ("x" , resizer.checkerW(5464/2 - 300))
				.attr ("y" , resizer.checkerH(2648/2 - 300))
				.attr("xlink:href" , "Gifs/loader.gif")
			setTimeout(function(){$("#loadimage").hide();howmany ++; if (howmany > 1){justshow()} else{visualize();}} , 600);
	}, 500);
}	

function recalcAlgo () {
	
	for (var i = 0 ; i < hierarchyHeroes.length ; ++i) {
		priorities[i] = 0;						
		heroes[i] = hierarchyHeroes[i].name;
		var bad = false;
		
		for (var k = 0 ; k < enemies.length ; ++k) 
			if (enemies[k] === hierarchyHeroes[i].name) {
					bad = true;
			}
							
		for (var k = 0 ; k < allies.length ; ++k) 
			if (allies[k] === hierarchyHeroes[i].name) {
					bad = true;
			}
						
		if (bad === true) {
			priorities[i] = -100;
			continue;			
		}
				
		var partial = 0;
		for (var k = 0 ; k < enemies.length ; ++k) 
		{
			var hero_id = nametoid[hierarchyHeroes[i].name];
			var enemy_id = nametoid[enemies[k]];
			var against_win_rate = rate_against[hero_id][enemy_id];
			var against_loose_rate = rate_against[enemy_id][hero_id];
			if (against_loose_rate === 0 && against_win_rate === 0)continue;
			partial += against_win_rate / (against_win_rate + against_loose_rate);
		}
		
		for (var k = 0 ; k < allies.length ; ++k) 
		{
			var hero_id = nametoid[hierarchyHeroes[i].name];
			var enemy_id = nametoid[allies[k]];
			if (hero_id > enemy_id) {
				var tmp = hero_id;
				hero_id = enemy_id;
				enemy_id = tmp;
			}
			
			var together_win_rate = rate_with[hero_id][enemy_id];
			var together_all_games = rate_with[enemy_id][hero_id];
			if (together_all_games === 0 && together_win_rate === 0)continue;
			partial += together_win_rate / (together_all_games + together_win_rate);
		}
		priorities[i] = partial;
		
						
		for (var j = 0 ; j < hierarchyHeroes[i].Bad.length ; ++j) {
			var child = hierarchyHeroes[i].Bad[j];
			for (var k = 0 ; k < enemies.length ; ++k) {
				if (child.name === enemies[k]) {				
					priorities[i] --;
					break;
				}
			}				
		}
		
		for (var j = 0 ; j < hierarchyHeroes[i].Good.length ; ++j) {
			var child = hierarchyHeroes[i].Good[j];
			for (var k = 0 ; k < enemies.length ; ++k) {
				if (child.name === enemies[k]) {
					priorities[i] ++;
					break;
				}
			}				
		}
		for (var j = 0 ; j < hierarchyHeroes[i].Works.length ; ++j) {
			var child = hierarchyHeroes[i].Works[j];
			for (var k = 0 ; k < allies.length ; ++k) {
				if (child.name === allies[k]) {
					priorities[i] ++;
					break;
				}
			}				
		}
	}
	
	for (var i = 0 ; i < heroes.length ; ++i) {
		for (var j = i + 1 ; j < heroes.length ; ++j) {																	
			if (priorities[i] < priorities[j])
			{
				priorities[i] = [priorities[j] , priorities[j] = priorities[i]][0];
				heroes[i] = [heroes[j] , heroes[j] = heroes[i]][0];
			}
		}
		priorities[i] = priorities[i].toFixed(3);
	}
	
			
			
	
}
