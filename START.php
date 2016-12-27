
<!doctype html>

<html>
	
	<head>		
	
		<title> Team Builder  </title>
		<style>
		
		
		#stackedbar{
		  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
		  margin: auto;
		  position: relative;
		  width: 960px;
		  font: 10px sans-serif;
		  position:absolute;
		  top:0;
		  left:400;
		  color:white;
		  font-size: 100px;
		  
		}
		
		#stacksvg {
		  position:absolute;
		  top:0;
		  left:400;
		}
		
		
		.axis path,
		.axis line {
		  fill: none;
		  stroke: #000;
		  shape-rendering: crispEdges;
		}
		
		form {
		  position: absolute;
		  right: 10px;
		  top: 10px;
		}

		body { 
			  background: url(ImageOfHeroes/dd.jpg) no-repeat center center fixed; 
			  -webkit-background-size: cover;
			  -moz-background-size: cover;
			  -o-background-size: cover;
			  background-size: cover;
			  position:relative;
		}
		
		.myBackButton {
			-moz-box-shadow: 6px 4px 40px 5px #1564ad;
			-webkit-box-shadow: 6px 4px 40px 5px #1564ad;
			box-shadow: 6px 4px 40px 5px #1564ad;
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #79bbff), color-stop(1, #378de5));
			background:-moz-linear-gradient(top, #79bbff 5%, #378de5 100%);
			background:-webkit-linear-gradient(top, #79bbff 5%, #378de5 100%);
			background:-o-linear-gradient(top, #79bbff 5%, #378de5 100%);
			background:-ms-linear-gradient(top, #79bbff 5%, #378de5 100%);
			background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);
			background-color:#79bbff;
			-moz-border-radius:17px;
			-webkit-border-radius:17px;
			border-radius:17px;
			border:1px solid #337bc4;
			display:inline-block;
			cursor:pointer;
			color:#ffffff;
			font-family:Arial;
			font-size:40px;
			font-weight:bold;
			padding:12px 44px;
			text-decoration:none;
			text-shadow:0px 1px 0px #528ecc;
			position:absolute;
			top:2350px;
			left:2680px;
		}
		.myBackButton:hover {
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #378de5), color-stop(1, #79bbff));
			background:-moz-linear-gradient(top, #378de5 5%, #79bbff 100%);
			background:-webkit-linear-gradient(top, #378de5 5%, #79bbff 100%);
			background:-o-linear-gradient(top, #378de5 5%, #79bbff 100%);
			background:-ms-linear-gradient(top, #378de5 5%, #79bbff 100%);
			background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);
			background-color:#378de5;
		}
		.myBackButton:active {
			position:absolute;
			top:2370px;
			left:2680px;
		}
		
		.mySelectButton {
			-moz-box-shadow: 1px 2px 38px 4px #3dc21b;
			-webkit-box-shadow: 1px 2px 38px 4px #3dc21b;
			box-shadow: 1px 2px 38px 4px #3dc21b;
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #44c767), color-stop(1, #5cbf2a));
			background:-moz-linear-gradient(top, #44c767 5%, #5cbf2a 100%);
			background:-webkit-linear-gradient(top, #44c767 5%, #5cbf2a 100%);
			background:-o-linear-gradient(top, #44c767 5%, #5cbf2a 100%);
			background:-ms-linear-gradient(top, #44c767 5%, #5cbf2a 100%);
			background:linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#44c767', endColorstr='#5cbf2a',GradientType=0);
			background-color:#44c767;
			-moz-border-radius:16px;
			-webkit-border-radius:16px;
			border-radius:16px;
			border:2px solid #18ab29;
			display:inline-block;
			cursor:pointer;
			color:#ffffff;
			font-family:Arial;
			font-size:120px;
			padding:4px 48px;
			text-decoration:none;
			text-shadow:0px 1px 0px #2f6627;
			position:absolute;
			top:2100px;
			left:2500px;
		}
		
		.mySelectButton:hover {
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #5cbf2a), color-stop(1, #44c767));
			background:-moz-linear-gradient(top, #5cbf2a 5%, #44c767 100%);
			background:-webkit-linear-gradient(top, #5cbf2a 5%, #44c767 100%);
			background:-o-linear-gradient(top, #5cbf2a 5%, #44c767 100%);
			background:-ms-linear-gradient(top, #5cbf2a 5%, #44c767 100%);
			background:linear-gradient(to bottom, #5cbf2a 5%, #44c767 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#5cbf2a', endColorstr='#44c767',GradientType=0);
			background-color:#5cbf2a;
		}
		.mySelectButton:active {
			position:absolute;
			top:2120px;
			left:2500px;
		}



		.myButton {
			-moz-box-shadow: 3px 4px 0px 0px #ff6052;
			-webkit-box-shadow: 3px 4px 0px 0px #ff6052;
			box-shadow: 3px 4px 0px 0px #ff6052;
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #94635f), color-stop(1, #f24437));
			background:-moz-linear-gradient(top, #94635f 5%, #f24437 100%);
			background:-webkit-linear-gradient(top, #94635f 5%, #f24437 100%);
			background:-o-linear-gradient(top, #94635f 5%, #f24437 100%);
			background:-ms-linear-gradient(top, #94635f 5%, #f24437 100%);
			background:linear-gradient(to bottom, #94635f 5%, #f24437 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#94635f', endColorstr='#f24437',GradientType=0);
			background-color:#94635f;
			-moz-border-radius:18px;
			-webkit-border-radius:18px;
			border-radius:18px;
			border:1px solid #d02718;
			display:inline-block;
			cursor:pointer;
			color:#f2d7e2;
			font-family:Georgia;
			font-size:99px;
			padding:7px 25px;
			text-decoration:none;
			text-shadow:0px 1px 0px #810e05;
			position:absolute;
			top:2310px;
			left:2550px;
		}

		.myButton:hover {
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #f24437), color-stop(1, #94635f));
			background:-moz-linear-gradient(top, #f24437 5%, #94635f 100%);
			background:-webkit-linear-gradient(top, #f24437 5%, #94635f 100%);
			background:-o-linear-gradient(top, #f24437 5%, #94635f 100%);
			background:-ms-linear-gradient(top, #f24437 5%, #94635f 100%);
			background:linear-gradient(to bottom, #f24437 5%, #94635f 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f24437', endColorstr='#94635f',GradientType=0);
			background-color:#246DC4;
		}

		.myButton:active {
			position:absolute;
		} 
		
		.myResetButton {
			-moz-box-shadow:inset 0px 1px 13px 2px #fce2c1;
			-webkit-box-shadow:inset 0px 1px 13px 2px #fce2c1;
			box-shadow:inset 0px 1px 13px 2px #fce2c1;
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ffc477), color-stop(1, #fb9e25));
			background:-moz-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
			background:-webkit-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
			background:-o-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
			background:-ms-linear-gradient(top, #ffc477 5%, #fb9e25 100%);
			background:linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffc477', endColorstr='#fb9e25',GradientType=0);
			background-color:#ffc477;
			-moz-border-radius:6px;
			-webkit-border-radius:6px;
			border-radius:6px;
			border:1px solid #eeb44f;
			display:inline-block;
			cursor:pointer;
			color:#ffffff;
			font-family:Arial;
			font-size:50px;
			font-weight:bold;
			padding:6px 24px;
			text-decoration:none;
			text-shadow:0px 36px 50px #cc9f52;
			position:absolute;
			top:2510px;
			left:2635px;
		}
		.myResetButton:hover {
			background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #fb9e25), color-stop(1, #ffc477));
			background:-moz-linear-gradient(top, #fb9e25 5%, #ffc477 100%);
			background:-webkit-linear-gradient(top, #fb9e25 5%, #ffc477 100%);
			background:-o-linear-gradient(top, #fb9e25 5%, #ffc477 100%);
			background:-ms-linear-gradient(top, #fb9e25 5%, #ffc477 100%);
			background:linear-gradient(to bottom, #fb9e25 5%, #ffc477 100%);
			filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fb9e25', endColorstr='#ffc477',GradientType=0);
			background-color:#fb9e25;
			position:absolute;
		}
		.myResetButton:active {
			position:absolute;
			
			top:2520px;
			left:2635px;
		}

	
		
		input[type=radio] {
			border: 3px;
			width: 200%;
			height: 2em;
		}			
			.forumDiv {
				position:absolute;
				font-size:60px;
				color:#E7E7C5;
				left:300px;
				top:1000px;
			}
			#fillgauge1 {
				position:absolute;
				top:1350px;
				left:0px;
			}
			#fillgauge2 {
				position:absolute;
				top:1350px;
				left:650px;
			}
			#fillgauge3 {
				position:absolute;
				top:1350px;
				left:1300px;
			}
			body{
				position:absolute;
			}
			#container {
			  margin: 20px;
			  width: 400px;
			  height: 8px;
			  position: relative;
			}		
		</style>
		
		
		
		
		<script src="d3andjquery/d3.js"> </script>
		<script src="d3andjquery/jquery.js"> </script>
		<script src="WrittenAndUsedScripts/EntranceListOfHeroes.js"> </script>
		<script src="WrittenAndUsedScripts/CircleMaker.js"> </script>
		<script src="WrittenAndUsedScripts/Algorithm.js"> </script>
		<script src="WrittenAndUsedScripts/warnBuilder.js"> </script>
		<script src="WrittenAndUsedScripts/ArrayHandler.js"> </script>
		<script src="WrittenAndUsedScripts/ListOfHeroHierarchy.js"> </script>
		<script src="WrittenAndUsedScripts/StringChanger.js"> </script>
		<script src="WrittenAndUsedScripts/EnemyAllyButtonMaker.js"> </script>
		<script src="WrittenAndUsedScripts/VisualizationPart.js"> </script>	
		<script src="WrittenAndUsedScripts/RectMaker.js"> </script>
		<script src="WrittenAndUsedScripts/CircleMouseEnter.js"> </script>
		<script src="WrittenAndUsedScripts/startButton.js"> </script>
		<script src="WrittenAndUsedScripts/SelectButton.js"> </script>
		<script src="WrittenAndUsedScripts/backButton.js"> </script>
		<script src="WrittenAndUsedScripts/TextMaker.js"> </script>	
		<script src="WrittenAndUsedScripts/WidthAndHeight.js"> </script>
		<script src="d3andjquery/liquidFillGauge.js"> </script>
		<script src="WrittenAndUsedScripts/stackedBar.js"> </script>
		<script src="WrittenAndUsedScripts/variable.js"> </script>
		<script src="WrittenAndUsedScripts/GaugeChanger.js"> </script>
		<script src="WrittenAndUsedScripts/IDmanager.js"> </script>
		<script src="WrittenAndUsedScripts/rateagainst.js"> </script>
		<script src="WrittenAndUsedScripts/ratewith.js"> </script>
		<script src="WrittenAndUsedScripts/progress.js"> </script>
		<script src="WrittenAndUsedScripts/heroIDS.js"> </script>
		
		<a href="#" class="myButton">START</a>
		<a href="#" class="mySelectButton">SELECT</a>
		<a href="#" class="myBackButton">BACK</a>
		<a href="#" class="myResetButton">RESET</a>
		
		<svg id="fillgauge1" width="600" height="400"></svg>
		<svg id="fillgauge2" width="600" height="400"></svg>
		<svg id="fillgauge3" width="600" height="400"></svg>
						
		<style type="text/css">
			#Agility {
				position : absolute;
			}
			
			.myProgress {
				position: absolute;
				width: 300px;
				height: 70px;
				background-color: grey;
				top:2000px;
				opacity:0.8;
				
			}
			
			.myBar {
				position: absolute;
				width: 0%;
				height: 70px;
				background-color: green;
			}
			
			.label {															
					text-align: center; 
					line-height: 60px; 
					color: white;
					font-size:70px;
					opacity:1;
			}
			
		</style>
		
		
	</head>	
	
	<body>
			
	<div class = "forumDiv">
	<form class = "myForum">
			<label><input type="radio" name="mode" value="grouped" checked> GROUPED</label>
			<label><input type="radio" name="mode" value="stacked" checked> STACKED</label>
	</form>
	</div>

		<div id="Heroes"> </div>
		
		<div id="myProgress1" class = "myProgress">
		  <div id="myBar1" class = "myBar">
			<div id="label1" class = "label">0</div>
		  </div>
		</div>
		
		<div id="myProgress2" class = "myProgress">
		  <div id="myBar2" class = "myBar">
			<div id="label2" class = "label">0</div>
		  </div>
		</div>
							
		<div id="myProgress3" class = "myProgress">
		  <div id="myBar3" class = "myBar">
			<div id="label3" class = "label">0</div>
		  </div>
		</div>
		
		<div id="myProgress4" class = "myProgress">
		  <div id="myBar4" class = "myBar">
			<div id="label4" class = "label">0</div>
		  </div>
		</div>
							
		<div id="myProgress5" class = "myProgress">
		  <div id="myBar5" class = "myBar">
			<div id="label5" class = "label">0</div>
		  </div>
		</div>
							
		<div id="myProgress6" class = "myProgress">
		  <div id="myBar6" class = "myBar">
			<div id="label6" class = "label">0</div>
		  </div>
		</div>
							
		<div id="myProgress7" class = "myProgress">
		  <div id="myBar7" class = "myBar">
			<div id="label7" class = "label">0</div>
		  </div>
		</div>
							
		<div id="myProgress8" class = "myProgress">
		  <div id="myBar8" class = "myBar">
			<div id="label8" class = "label">0</div>
		  </div>
		</div>
						
		<div id="myProgress9" class = "myProgress">
		  <div id="myBar9" class = "myBar">
			<div id="label9" class = "label">0</div>
		  </div>
		</div>
								
		<div id="myProgress10" class = "myProgress">
		  <div id="myBar10" class = "myBar">
			<div id="label10" class = "label">0</div>
		  </div>
		</div>
		
		
		
		
		

		<div id = "stackedbar"> 
		</div>
		
		<script>
			$(".myResetButton").on("click" , function () {
					
					window.localStorage.clear(); 
					location.reload();
					localStorage.clear();
					
			});
			
				
			window.onload = function () {
				
				var A = JSON.parse(localStorage.getItem("allies"));
				var E = JSON.parse(localStorage.getItem("enemies"));
				
				if (A !== null) {
					for (var i = 0 ; i < A.length ; ++i) {
						updateArrayAlly(A[i]);
					}
				}									
				if (E !== null) {		
					for (var i = 0 ; i < E.length ; ++i) {
						updateArrayEnemy(E[i]);
					}
				}				
				
			}
			
			
		//for (var i = 1 ; i <= 10 ; ++i)
		{	
		//	move1(i);
		}
		
		for (var i = 1 ; i <= 5 ; ++i){	
			$("#myProgress" + i).css ({
				left : (i - 1) * 330 + 50,
				top:2450	
			});
		}
		
		for (var i = 1 ; i <= 5 ; ++i){	
			$("#myProgress" + (i + 5)).css ({
				left : (4 - i + 1) * 330 + 3760,
				top:2450
				
			});				
			
		}
		for (var i = 1 ; i <= 10 ; ++i){	
				$("#myProgress" + i).hide();
			}
			
		function fromPercent (pr , max) {
			return pr * max / 100;
		}
		
		function changeIndicator(name , to , max) {
			
			
			var elem = document.getElementById("myBar" + name); 
			var width = changeAccord($("#myBar" + name).width() , 300);
						
			
			var less;
			
			//alert (width + " " + max + " " + width * max);
			if (fromPercent(width , max) < to)
					less = true;
			else
					less = false;
																							
			
				
			var id = setInterval(frame, 0.01);
			
			function frame() {
				var frPr = fromPercent(width , max);
				
				if (less === true && frPr >= to) {
					clearInterval(id);
				}
				else				
				if (less === false && frPr <= to) {
					clearInterval(id);
				}
				else {
					if (less === true) width += 0.3;
					else width -= 0.3;																
					
					elem.style.width = width + '%';
					
					document.getElementById("label" + name).innerHTML = parseInt(width) + '%';
				}	
			}			
		}					
		
		changeIndicator (1 , 300 , 3000);
		
		setTimeout (function(){changeIndicator(1 , 2000 , 3000);} ,  2000);
		
		calcMaxMin();			
		
		var config1 = liquidFillGaugeDefaultSettings();
		config1.circleColor = "#B2BABB";
		config1.textColor = "#85C825";
		config1.waveTextColor = "#000000";
		config1.waveColor = "#85C825";
		config1.circleThickness = 0.05;
		config1.textVertPosition = 0.5;
		config1.waveAnimateTime = 4000;
		config1.displayPercent = false;
		config1.maxValue = maxes['xp_per_games'];
		config1.minValue = mines['xp_per_games'];
	
								
		var gauge1 = loadLiquidFillGauge("fillgauge1", 50 , config1);
		setTimeout (function () {gauge1.update(100);} , 2000);
		
		var config2 = liquidFillGaugeDefaultSettings();
		config2.circleColor = "#B2BABB";
		config2.textColor = "#FFF700";
		config2.waveTextColor = "#000000";
		config2.waveColor = "#FFF700";
		config2.circleThickness = 0.05;
		config2.textVertPosition = 0.5;
		config2.waveAnimateTime = 4000;
		config2.displayPercent = false;
		config2.maxValue = maxes['gold_per_games'];
		config2.minValue = mines['gold_per_games'];
		var gauge2 = loadLiquidFillGauge("fillgauge2", 80 , config2);
		
		
		var config3 = liquidFillGaugeDefaultSettings();
		config3.circleColor = "#B2BABB";
		config3.textColor = "#C83E25";
		config3.waveTextColor = "#000000";
		config3.waveColor = "#C83E25";
		config3.circleThickness = 0.05;
		config3.textVertPosition = 0.5;
		config3.waveAnimateTime = 4000;
		config3.displayPercent = false;
		config3.maxValue = maxes['assists_per_games'];
		config3.minValue = mines['assists_per_games'];
		
		
		var gauge3 = loadLiquidFillGauge("fillgauge3", 30 , config3);
		
		
			$(".mySelectButton").hide();
			$(".myBackButton").hide();
		
																		
			var resizer = new Resizer ();
			
								
			d3.select("#Heroes")
				.append("svg")
				.attr("id" , "mysvg")
				.attr("width" , resizer.checkerW($(window).width() - 40))
				.attr("height" , resizer.checkerH(($(window).height() - 40)));
				
			
						
			var Strength = listHeroes.children[0].children;
			var Agility = listHeroes.children[1].children;
			var Intelligence = listHeroes.children[2].children;
			
			
			CircleMaker.counter = 0;
			RectMaker.counter = 0;
			
			var Sc = new CircleMaker("#mysvg" , Strength , "Strength"); 
			var Ic = new CircleMaker("#mysvg" , Intelligence , "Intelligence");
			var Ac = new CircleMaker("#mysvg" , Agility , "Agility");
			
				
				
			var Sr = new RectMaker("#mysvg" , Strength , "Strength"); 
			var Ir = new RectMaker("#mysvg" , Intelligence , "Intelligence");
			var Ar = new RectMaker("#mysvg" , Agility , "Agility");
			
			var buttonMaker = new ButtonMaker();
			var circleMouseEnter = new CircleMouseEnter ();
			var warn = new warnBuilder();					
			var arrayBuilder = new showArrayBuilder();
			var start = new startButton ();
			var back = new backButton ();
			var sel = new selectButton ();
			var ids = new IDmanager();
			
			var EnemyText = TextMaker ("Enemy" , resizer.checkerW($(window).width() - 700), resizer.checkerW(2200) , 200 , "#B70C0C");
			var AllyText = TextMaker ("Ally" , resizer.checkerW(100) , resizer.checkerH(2200) , 200 , "#B70C0C");			
			

			
		</script>	
		<script>

			
			$(".forumDiv").hide();
			$("#fillgauge1").hide();
			$("#fillgauge2").hide();
			$("#fillgauge3").hide();
						
		
		</script>

	</body>	
</html>		
