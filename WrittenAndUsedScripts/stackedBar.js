
function createStackBar () {
			
			var n = 3, // number of layers
				m = 21, // number of samples per layer
				stack = d3.layout.stack(),
				layers = stack(d3.range(n).map(function(i) { return bumpLayer(m, i); })),
				yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y; }); }),
				yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d.y0 + d.y; }); });
				
			var margin = {top: 40, right: 40, bottom: 0, left: 40},
				width = 1900 - margin.left - margin.right,
				height = 800 - margin.top - margin.bottom;

			var x = d3.scale.ordinal()
				.domain(d3.range(m))
				.rangeRoundBands([0, width], .08);

			var y = d3.scale.linear()
				.domain([0, yStackMax])
				.range([height, 0]);

			var color = d3.scale.linear()
				.domain([0, n - 1])	
				.range(["#F9EBEA", "#C0392B"]);

			var xAxis = d3.svg.axis()
				.scale(x)
				.tickSize(0)
				.tickPadding(6)
				.orient("bottom");

			var svg = d3.select("#stackedbar").append("svg")
				.attr ("id" , "stacksvg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom)
			    .append("g")
				.attr("transform","translate(" + margin.left + "," + margin.top + ")");
																												
				

			var layer = svg.selectAll(".layer")
				.data(layers)
			  .enter().append("g")
				.attr("class", "layer")
				.style("fill", function(d, i) { return color(i); });

			var rect = layer.selectAll("rect")
				.data(function(d) { return d; })
			  .enter().append("rect")
				.attr ("class" , "stackedbarrect")
				.attr("x", function(d) { return x(d.x); })
				.attr("y", height)
				.attr("width", x.rangeBand())
				.attr("height", 0);

			rect.transition()
				.delay(function(d, i) { return i * 10; })
				.attr("y", function(d) { return y(d.y0 + d.y); })
				.attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); });
		
					
			svg.append("g")
				.attr("class", "x axis")
				.attr("transform", "translate(0," + height + ")")
				.call(xAxis);

			d3.selectAll("input").on("change", change);

			var timeout = setTimeout(function() {
			  d3.select("input[value=\"stacked\"]").property("stacked", true).each(change);
			  transitionStacked();
			}, 10);
			
			function change() {
			  clearTimeout(timeout);
			  if (this.value === "grouped") transitionGrouped();
			  else transitionStacked();
			}

			function transitionGrouped() {
			  y.domain([0, yGroupMax]);

			  rect.transition()
				  .duration(500)
				  .delay(function(d, i) { return i * 10; })
				  .attr("x", function(d, i, j) { return x(d.x) + x.rangeBand() / n * j; })
				  .attr("width", x.rangeBand() / n)
				.transition()
				  .attr("y", function(d) { return y(d.y); })
				  .attr("height", function(d) { return height - y(d.y); });
			}

			function transitionStacked() {
			  y.domain([0, yStackMax]);

			  rect.transition()
				  .duration(500)
				  .delay(function(d, i) { return i * 10; })
				  .attr("y", function(d) { return y(d.y0 + d.y); })
				  .attr("height", function(d) { return y(d.y0) - y(d.y0 + d.y); })
				.transition()
				  .attr("x", function(d) { return x(d.x); })
				  .attr("width", x.rangeBand());
			}

			// Inspired by Lee Byron's test data generator.
			function bumpLayer(n, o) {
				var a = [], i;
						
				if (o === 0)
			    {
					for (i = 0; i < n; ++i) 
					{		
						var id = nametoid[heroes[i]];
						a[i] = 
								changeAccord
								(
									hero_char[id]['games'] - mines['games'] , 
									maxes['games'] - mines['games']
								);
						
								
					}
				}
				if (o === 1)
			    {		
					for (i = 0; i < n; ++i) 
					{				
						var id = nametoid[heroes[i]];
						if (mines['won_games'] === 0)
						a[i] = 
								changeAccord
								(
									(maxes['games'] / maxes['won_games'])*(hero_char[id]['won_games'] / hero_char[id]['games']) -
									0, 
									(maxes['games'] / maxes['won_games'])*(maxes['win_per_games']) 
								);
						else	
						a[i] = 
								changeAccord
								(
									(maxes['games'] / maxes['won_games'])*(hero_char[id]['won_games'] / hero_char[id]['games']) -
									(mines['games'] / mines['won_games'])*(mines['win_per_games']), 
									(maxes['games'] / maxes['won_games'])*(maxes['win_per_games']) - 
									(mines['games'] / mines['won_games'])*(mines['win_per_games'])
								);
						
						
					}
				}
				if (o === 2)
			    {
					for (i = 0; i < n; ++i) 
					{		
						var id = nametoid[heroes[i]];
						if (mines['assists'] === 0)
						a[i] = 
								changeAccord
								(
									(maxes['games'] / maxes['assists'])*(hero_char[id]['assists'] / hero_char[id]['games']) -
									0, 
									(maxes['games'] / maxes['assists'])*(maxes['assists_per_games'])
								);
						
						else
						a[i] = 
								changeAccord
								(
									(maxes['games'] / maxes['assists'])*(hero_char[id]['assists'] / hero_char[id]['games']) -
									(mines['games'] / mines['assists'])*(mines['assists_per_games']), 
									(maxes['games'] / maxes['assists'])*(maxes['assists_per_games']) - 
									(mines['games'] / mines['assists'])*(mines['assists_per_games'])
								);
						
						
					}
				}
				
				
				
				return a.map(function(d, i) { return {x: i, y: Math.max(0, d)}; });
			}
	

}