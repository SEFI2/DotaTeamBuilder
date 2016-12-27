<?php
	ini_set('max_execution_time', 1000000000);

	function swap(&$x,&$y) {
			$tmp=$x;
			$x=$y;
			$y=$tmp;
		}
		
	
	$num_of_games = 15000;
	
	
	$json = file_get_contents ("inoneteam.json");
	$heroes_data = json_decode($json , TRUE);
		
	
	for ($i = 0 ; $i <= 113 ; $i++){
			for ($j = 0 ; $j <= 113 ; $j++){
				$heroes_data[$i][$j] = 0;
			}
	}
	
	
	
		
	
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
		$rad = array();
		$dir = array();
		for ($j = 0 ; $j < count($players) ; $j++) {
			$hero_id = $players[$j]['hero_id'];
			$win = 0;										
			if ($j < 5){
				array_push($rad , $hero_id);
			}
			else {
				array_push($dir , $hero_id);
			}
		}
		
		
	
		for ($f = 0 ; $f < count($rad) ; $f ++) {
			for ($s = $f + 1 ; $s < count($rad) ; $s ++) {
				$first_id = $rad[$f];
				$second_id = $rad[$s];
				if ($first_id > $second_id) {
					swap($first_id , $second_id);
				}
				//	$message = $first_id . " " . $second_id;
				//	echo "<script type='text/javascript'>alert('$message');</script>";
					
				if ($radiant_win === true) {
					$heroes_data[$first_id][$second_id] ++;
					$heroes_data[$second_id][$first_id] ++;
				} else {
					$heroes_data[$second_id][$first_id] ++;
				}
			}
		}
		
		for ($f = 0 ; $f < count($dir) ; $f ++) {
			for ($s = $f + 1 ; $s < count($dir) ; $s ++) {
				$first_id = $dir[$f];
				$second_id = $dir[$s];
				if ($first_id > $second_id) {
					swap($first_id , $second_id);
				}
				//	$message = $first_id . " " . $second_id;
				//	echo "<script type='text/javascript'>alert('$message');</script>";
				
				if ($radiant_win === false) {
					$heroes_data[$first_id][$second_id] ++;
					$heroes_data[$second_id][$first_id] ++;
				} else {
					$heroes_data[$second_id][$first_id] ++;
				}
			}
		}
		
		
			
	}
	/*
	for ($i = 0 ; $i <= 113 ; $i++){
			for ($j = $i + 1 ; $j <= 113 ; $j++){
					$message = $i . " " . $j . " ---> " .$heroes_data[$i][$j] . " " . $heroes_data[$j][$i];
					echo "<script type='text/javascript'>alert('$message');</script>";
						
			}
	}*/
	
	$out = array();
			
	for ($i = 0 ; $i <= 113 ; $i++) {
		$out[] = array_values($heroes_data[$i]);
	}
		
	
	$file_handle = fopen("inoneteam.json", "w");
	fwrite ($file_handle , json_encode($out));
?>