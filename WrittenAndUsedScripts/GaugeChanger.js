
function changeGauge(id) {
	if (hero_char[id]['games'] !== 0) 
	{	
		gauge1.update( 
						hero_char[id]['xp_per_min'] / hero_char[id]['games']
					);
		
		gauge2.update( 
						hero_char[id]['gold_per_min'] / hero_char[id]['games']
								
					);
		gauge3.update( 
					hero_char[id]['assists'] / hero_char[id]['games']
								
					);
		
		
	}	
	else {
		gauge1.update(0);
		gauge2.update(0);
		gauge3.update(0);
	}
}

function changeAccord (num , max) {
	return num * 100 / max;	
}