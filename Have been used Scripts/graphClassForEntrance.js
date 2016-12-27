function graphClassForEntrance (id) {
			d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};		

	this.id = id;
	
	var ww = $(window).width(),
	hh = $(window).height();
					
	this.svg = d3.select(id)
				.append("svg")
				.attr("id" , "for_background")
				.attr("width" , ww - 300)		
				.attr("height" , hh);

	this.force = d3.layout.force()
				.gravity(0.21)
				.linkDistance (100)
				.charge(-25000)		
				.size([ww - 200, hh]);
	
	this.nodes = this.force.nodes();
	this.links = this.force.links();

	this.findNodeByName = function(name) {
		for (var i = 0 ; i < this.nodes.length ; ++i) {
			if (this.nodes[i].name === name)
				return this.nodes[i];
		}
	}

	this.findIndexByName = function(name) {
		for (var i = 0 ; i < this.nodes.length ; ++i) {
			if (this.nodes[i].name == name)
				return i;
		}
	}
	
	this.addNode = function(name , depth , type) {
		this.nodes.push({"name":name , "depth":depth , "type":type});
		this.update();
	}
	
	
	this.delNode = function(name) {
		var delNode = this.findNodeByName (name);
		var i = 0;							
		while (i < this.links.length) {				
			if (this.links[i]['source'] == delNode || this.links[i]['target'] == delNode)this.links.splice(i , 1);
			else i++;
		}
		var indexNode = this.findIndexByName(name);
		if (indexNode !== undefined) {
			this.nodes.splice(indexNode , 1);
			this.update();
		}
	}
	
	
	this.addLink = function (sourceName , targetName) {
		var source = this.findNodeByName (sourceName);
		var target = this.findNodeByName (targetName);
		if (source !== undefined && target !== undefined) {
			this.links.push({"source" : source , "target" : target});
			this.update();
		}								
	}
	this.delLink = function (sourceName , targetName) {
		var source = this.findNodeByName (sourceName);
		var target = this.findNodeByName (targetName);
		for (var i = 0 ; i < this.links.length ; ++i) {
			if (this.links[i]['source'] === source && this.links[i]['target'] === target)
			{
				this.splice (i , 1);
				this.update();
				break;
			}
		}	
	}
	
	this.update = function () {
		var Link = this.svg		
					.selectAll("g.link")
					.data(this.links);
		
		var Node = this.svg		
					.selectAll("g.node")
					.data(this.nodes);
		
		
		Link.enter()			
				.insert ("line")							
				.attr("class" , "link");
		
		var NodeEnter = Node.enter()
							.append("g")
							.attr("class" , "node");
		
				
		NodeEnter.append("image")
			.attr ("id" , function (d){return d.name;})
			.attr("xlink:href",  function(d) { return "ImageOfHeroes/125px-" + d.name + "_Large.png";})
			.attr("x" , "-8px")
			.attr("y" , "-8px")
			.attr("width" , ww / 20)		
			.attr("height" , hh / 20);
					
		var setEvents = $("image")
			.on('mouseenter' , function () {
		d3.select (this).moveToFront ();
				
					d3.select (this)
						   .transition()
						   .attr("x" , function (d) {return -230;})
						   .attr("y" , function (d) {return -230;})
						   .attr("width" ,  ww/10 + 300)
						   .attr("height" , hh/10 + 300);
						   
					
			}).on('mouseleave' , function () {
	
					d3.select (this)
						   .transition()
						   .attr("x" , function (d) {return -8;})
						   .attr("y" , function (d) {return -8;})
						   .attr("width" ,  ww/10)
						   .attr("height" , hh/10);
					
						   
					
			});
				
			
			
			
		var upperLink = this.links;
		var	upperNode = this.nodes;
		
		this.force.on("tick", function(e) {
		var ky = 5 * e.alpha;					
				
		upperLink.forEach(function (d, i) {d.target.y += (d.target.depth * 300 - d.target.y) * ky;});
		upperNode.forEach(function (d, i) {d.x += d.type;});
		
		 Link.attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; });
		Node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
        });


		Node.exit().remove();
		Link.exit().remove();
			
		this.force.start();	
	}	
	this.update();
	
}





