<?php
	ini_set('max_execution_time', 1000000000);

	
	
	try{
		
		$key = "EA06C3534C0F296B4D84754791CE28D7";
		
		$urlstart = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?game_mode=1&min_players=10&skill=3&key=" . $key;
		$urlnorm = "https://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/V001/?game_mode=1&min_players=10&skill=3&key=".$key."&start_at_match_id=";
		$details = "https://api.steampowered.com/IDOTA2Match_570/GetMatchDetails/V001/?key=" .$key . "&match_id=";
		
				
		
		$json = file_get_contents ($urlstart);
		$ret = json_decode ($json , TRUE);
		
		$prev = -1;			
		$num_of_json = 14292; 
		$gg = 0;	
		
		while ($num_of_json < 80000) {
				if ($ret['result']['status'] == 1){
						////////////////////////////////////////////// Match Details /////////////////////////////////////////////////////////////////////////////
						
						$matches = $ret['result']['matches'];	
						if(count($matches) === 0)break;
						
						for ($i = 0 ; $i < count ($matches); $i++)
						{																												
							$id = $matches[$i]['match_id'];
							$prev = $id;
							$jsondetail = file_get_contents ($details . $id);
							$retdetail = json_decode ($jsondetail , TRUE);
							$ok = true;		
							if ($retdetail['result']['duration'] <= 900)
									$ok = false;
								
							///////////////////////// Checking Player //////////////////////////////////////////
							$players = $retdetail['result']['players'];		
							for ($j = 0 ; $ok == true && $j < count ($players) ; $j ++) {
									if ($players[$j]['leaver_status'] != 0)
									{
										$ok = false;
									}
							}		
							
							/////////////////////////////////////////////////////////////////////////////////
							
							if ($ok == true) {
								$file_handle = fopen("NewData/Match" . $num_of_json . ".json", "w");
								fwrite ($file_handle , $jsondetail);
								$num_of_json ++;
							}
						}
						
						$prev --;
						$json = file_get_contents ($urlnorm . $prev);
						$ret = json_decode ($json , TRUE);
						//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			}
			$gg++;				
		}
		
								
	
	}catch (Exception $e) {
	 echo $e->getMessage(); 
	}
?>