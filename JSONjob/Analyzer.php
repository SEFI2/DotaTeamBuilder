<?php
	ini_set('max_execution_time', 1000000000);

	
	
	$num_of_games = 15000;
	
	
	$json = file_get_contents ("newworld.json");
	$heroes_data = json_decode($json , TRUE);
	/*
	for ($j = 0 ; $j <= 113 ; $j++) {
			$heroes_data[$j]['kills'] = 0;
			$heroes_data[$j]['deaths'] = 0;
			$heroes_data[$j]['assists'] = 0;
			$heroes_data[$j]['xp_per_min'] = 0;
			$heroes_data[$j]['gold_per_min'] = 0;
			$heroes_data[$j]['games'] = 0;
			$heroes_data[$j]['won_games'] = 0;
	}
	*/
		
	for ($i = 1 ; $i <= $num_of_games ; ++$i) {
		try{
			$path = "NewData/Match" . $i . ".json";
			$json = @file_get_contents ($path);
			if ($json === FALSE)continue;
			$ret = json_decode($json , TRUE);
		}catch(Exception $e) {
			continue;
		}
		
		$players = $ret['result']['players'];
		$radiant_win = $ret['result']['radiant_win'];
															
		for ($j = 0 ; $j < count($players) ; $j++) {
			$hero_id = $players[$j]['hero_id'];
			$kills = $players[$j]['kills'];
			$deaths = $players[$j]['deaths'];
			$assists = $players[$j]['assists'];
			$xp = $players[$j]['xp_per_min'];
			$gold = $players[$j]['gold_per_min'];
			$win = 0;
			if ($j < 5){
				// radiant
				if ($radiant_win === true) {
					$win = 1;
				}
			}
			else {
				// dire
				if ($radiant_win === false) {
					$win = 1;
				}
			}
			
			$heroes_data[$hero_id]['kills'] += $kills;
			$heroes_data[$hero_id]['deaths'] += $deaths;
			$heroes_data[$hero_id]['assists'] += $assists;
			$heroes_data[$hero_id]['xp_per_min'] += $xp;
			$heroes_data[$hero_id]['gold_per_min'] += $gold;
			$heroes_data[$hero_id]['games'] += 1;
			$heroes_data[$hero_id]['won_games'] += $win;
		}
			
	}	

	$out = json_encode($heroes_data);
	
	$file_handle = fopen("newworld.json", "w");
	fwrite ($file_handle , $out);
?>