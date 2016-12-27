<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Team Builder</title>
    
	<script src = "ImportantFiles/EntranceListOfHeroes.js"> </script>
	<script src = "ImportantFiles/d3.js"> </script>
	<script src = "ImportantFiles/jquery.js"> </script>
	
	<style>
      @import url(http://fonts.googleapis.com/css?family=Source+Code+Pro:400,600);
      body {font-family: "Source Code Pro", Consolas, monaco, monospace; line-height: 160%; font-size: 16px;  margin: 0; }
      path.link {
        fill: none;
        stroke-width: 2px;
      }
      .node:not(:hover) .nodetext {
        display: none;
      }
      h1 { font-size: 36px; margin: 10px 0; text-transform: uppercase; font-weight: normal;}
      h2, h3 { font-size: 18px; margin: 5px 0 ; font-weight: normal;}
      header {padding: 20px; position: absolute; top: 0; left: 0;}
      a:link { color: #EE3124; text-decoration: none;}
      a:visited { color: #EE3124; }
      a:hover { color: #A4CD39; text-decoration: underline;}
      a:active { color: #EE3124; }
    </style>
</head>
    

<body>
    <header>
	  <h1></h1>
    </header>
    <!-- container for force layout visualisation  -->
    <section id="vis"></section> 
<script>

// some colour variables
  var tcBlack = "#130C0E";

// rest of vars				
var w = $(window).width(),
    h = $(window).height() + 100,
    maxNodeSize = 1000,
    x_browser = 20,
    y_browser = 25,
    root;
 
var vis;
var force = d3.layout.force(); 

vis = d3.select("#vis").append("svg").attr("width", w).attr("height", h);
 

  root = Graph;
  root.fixed = true;
  root.x = w / 2;
  root.y = h / 4;
 
 
        // Build the path
  var defs = vis.insert("svg:defs")
      .data(["end"]);
 
 
  defs.enter().append("svg:path")
      .attr("d", "M0,-5L10,0L0,5");
 
     update();
 
 
/**
 *   
 */
function update() {
  var nodes = flatten(root);
	
  for (var i = 0 ; i < nodes.length ; ++i) {									
		if (nodes[i].name == "Dota2"){
			nodes.splice(i , 1);
			break;
		}		
  }
  
  var links = d3.layout.tree().links(nodes); 
  
  
  // Restart the force layout.
  force.nodes(nodes)
		.links(links)
		.gravity(12)
    .charge(-1000)
    .linkDistance(10)
    .friction(0.2)
    //.linkStrength(function(l, i) {return 40; })
	
    .size([w, h])
    .on("tick", tick)
        .start();
	
 
   var path = vis.selectAll("path.link")
      .data(links, function(d) { return d.target.id; });
 
    path.enter().insert("svg:path")
      .attr("class", "link")
      // .attr("marker-end", "url(#end)")
      .style("stroke", "#eee");
 
 
  // Exit any old paths.
  path.exit().remove();
 
 
 
  // Update the nodes…
  var node = vis.selectAll("g.node")
      .data(nodes, function(d) { return d.id; });
 
 
  // Enter any new nodes.
  var nodeEnter = node.enter().append("svg:g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .on("click", click)
	  ;
	  //.call(force.drag);
 
  // Append a circle
  nodeEnter.append("svg:circle")
      .attr("r", function(d) { return Math.sqrt(d.size) / 10 || 4.5; })
      .style("fill", "#eee");
 
   
$(".link").hide();
	
  // Append images
  var images = nodeEnter.append("svg:image")
        .attr("xlink:href",  function(d) { return "ImageOfHeroes/125px-" + d.name + "_Large.png";})
        .attr("x", function(d) { return -25;})
        .attr("y", function(d) { return -25;})
        .attr("height", 
				function (d) {
					if (d.name=="Strength")return 400;
					if (d.name=="Agility")return 400;
					if (d.name=="Intelligence")return 400;
					return 300;
				}
			  )
               .attr("width", 
				function (d) {
					if (d.name=="Strength")return 400;
					if (d.name=="Agility")return 400;
					if (d.name=="Intelligence")return 400;
					return 300;
				}
			  );
			  
  
  // make the image grow a little on mouse over and add the text details on click
  var setEvents = images
          // Append hero text
          .on( 'click', function (d) {
              d3.select("h1").html(d.name); 
           })

          .on( 'mouseenter', function() {
            // select element in current context
            d3.select( this )
              .transition()
              .attr("x", function(d) { 
				if (d.name != "Strength" && d.name != "Agility" && d.name != "Intelligence" && d.name != "Dota2")
				return -60;
				return -25;
			  }
			  )												
			  .attr("y", function(d) { 
				if (d.name != "Strength" && d.name != "Agility" && d.name != "Intelligence" && d.name != "Dota2")
				return -60;
				return -25;
			  }
			  )
			  .attr("height", function (d) {return 100;})
               .attr("width", );
			  
          })
          // set back
          .on( 'mouseleave', function() {
            d3.select( this )
              .transition()
              .attr("x", function(d) { return -25;})
              .attr("y", function(d) { return -25;})
              .attr("height", 
				function (d) {
					if (d.name=="Strength")return 400;
					if (d.name=="Agility")return 400;
					if (d.name=="Intelligence")return 400;
					return 300;
				}
			  )
               .attr("width", 
				function (d) {
					if (d.name=="Strength")return 400;
					if (d.name=="Agility")return 400;
					if (d.name=="Intelligence")return 400;
					return 300;
				}
			  );
			  
					
		  });

  // Append hero name on roll over next to the node as well
  nodeEnter.append("text")
      .attr("class", "nodetext")
      .attr("x", x_browser)
      .attr("y", y_browser +15)
      .attr("fill", tcBlack)
      .text(function(d) { return d.hero; });
 
 
  // Exit any old nodes.
  node.exit().remove();
 
 
  // Re-select for update.
  path = vis.selectAll("path.link");
  node = vis.selectAll("g.node");
 
function tick() {
 
 
    path.attr("d", function(d) {
     var dx = d.target.x - d.source.x,
           dy = d.target.y - d.source.y,
           dr = Math.sqrt(dx * dx + dy * dy);
           return   "M" + d.source.x + "," 
            + d.source.y 
            + "A" + dr + "," 
            + dr + " 0 0,1 " 
            + d.target.x + "," 
            + d.target.y;
  });
    node.attr("transform", nodeTransform);    
  }
}

 
/**
 * Gives the coordinates of the border for keeping the nodes inside a frame
 * http://bl.ocks.org/mbostock/1129492
 */ 
function nodeTransform(d) {
    
	d.x =  Math.max(maxNodeSize, Math.min(w - (d.imgwidth/2 || 16), d.x));
    d.y =  Math.max(maxNodeSize, Math.min(h - (d.imgheight/2 || 16), d.y));
    return "translate(" + d.x + "," + d.y + ")";
}
 
/**
 * Toggle children on click.
 */ 
function click(d) {
  /*
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
 
  update();
*/
  }

 
 
/**
 * Returns a list of all nodes under the root.
 */ 
function flatten(root) {
  var nodes = []; 
  var i = 0;
 
  function recurse(node) {
    if (node.children) 
      node.children.forEach(recurse);
    if (!node.id) 
      node.id = ++i;
    nodes.push(node);
  }
 
  recurse(root);
  return nodes;
} 
  
  
</script>

</body>
</html>