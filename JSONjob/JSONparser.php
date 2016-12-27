<?php
	ini_set('max_execution_time', 1000000000);

	
	
	try{
		
	$key = "EA06C3534C0F296B4D84754791CE28D7";

	
	$urlstart = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?min_players=10&skill=3&key=" . $key . "&hero_id=";
	$urlnorm = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?min_players=10&skill=3&key=".$key."&start_at_match_id=";
	$details = "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?key=" .$key . "&match_id=";
										
	for ($heroid = 44 ; $heroid <= 44 ; $heroid ++){
						
		$f = "HeroGames2/GamesOfHero" . $heroid . ".js";

		$file_handle = fopen($f, "w");
		$out = "Hero[" . $heroid . "]=\r\n";
		$out .= "[\r\n";			
											
		
		$json = file_get_contents ($urlstart . $heroid);
		$ret = json_decode ($json , TRUE);
		$cntMatches = 0;			
		
		do 
		{																				  	
			$matches = $ret['result']['matches'];										
			for ($i = 0 ; $i < count ($matches); $i++)
			{																												
				$id = $matches[$i]['match_id'];
				$jsondetail = file_get_contents ($details . $id);
				$retdetail = json_decode ($jsondetail , TRUE);
				$whowin = $retdetail['result']['radiant_win'];
				if ($whowin == false)
					$whowin = "1";
				else
					$whowin = "2";
				
				$players = $retdetail['result']['players'];
				$out .=	"	{\r\n";							
			//	print ("whowin -- ".$whowin ."</br>");
				
				$out .=	"		\"wins\":" . $whowin . " ,\r\n";
				$out .= "		\"players\":[\r\n";
					
				for ($j = 0 ; $j < count ($players) ; $j ++) {
					$slot = $players[$j]['player_slot'];
					$player_id = $players[$j]['hero_id'];				
					$out .= "			{\r\n";
					$out .= "				\"hero_id\":" . $player_id . " ,\r\n";
					
					for ($it = 0 ; $it < 7 ; $it ++){
						$slot = intdiv ($slot , 2);
					}
					
					$out .= "				\"team\":" . ($slot + 1);
					
					if (count ($players) == $j + 1) {
						$out .=	"\r\n			}\r\n";
					}
					else{				
						$out .=	"\r\n			},\r\n";
					}							
				}		
				$out .= "			]\r\n";
						
				$out .= "	},\r\n";
			}								  
			$cntMatches += count ($matches);
			if (count($matches) === 0)break;
			if ($cntMatches >= 1000000) {
				$out = chop ($out , ",");
				break;
			}	
			$last_index = count ($matches) - 1;	
		//	print($urlnorm . ($matches[$last_index]['match_id'] - 1) . "&hero_id=" . $heroid);
			$json = file_get_contents ($urlnorm . ($matches[$last_index]['match_id'] - 1) . "&hero_id=" . $heroid);
			$ret = json_decode($json , TRUE);
		}
		while ($cntMatches < 1000000);	
		
		
		$out .= "]\r\n";
			
		fwrite ($file_handle , $out);
		
		
								
	}
	}catch (Exception $e) {
	 echo $e->getMessage(); 
	}
?>