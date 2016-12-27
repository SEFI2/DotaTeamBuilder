var nametoid = {};
var idtoname = {};


function IDmanager () {
	var abr = heroIDS['result']['heroes'];
	for (var i = 0 ; i < abr.length ; ++i) {
		var name = abr[i]['name'];
		var id = abr[i]['id'];
		name = name.replace ('npc_dota_hero_' , '');
		var new_name = "";
		if (name === "queenofpain")
			new_name = "Queen_of_Pain";
		else
		if (name === "keeper_of_the_light")
			new_name = "Keeper_of_the_Light";
		else
		if (name==="antimage")		
			new_name = "Anti-Mage";
		else
		if (name ==="zuus")
			new_name = "Zeus";
		else {				
			
			for (var j = 0 ; j < name.length ; ++j) {
				if (j === 0 || name.charAt(j - 1) === '_')
						new_name += name.charAt(j).toUpperCase();
				else
					new_name += name.charAt(j);
			}
		}
		 
		nametoid[new_name] = id;	
		idtoname[id] = new_name;	
		
	}
	
}