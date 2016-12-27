function graphClass (id) {
	
	this.id = id;
	
	this.width = $(window).width();	
	this.height = $(window).height();
	
	this.svg = d3.select(id)
				.append("svg")
				.attr("width" , this.width)
				.attr("height" , this.height);
	
	this.force = d3.layout.force()
				.gravity(1)
				.charge(-100)		
				.size([this.width , this.height]);
	
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
	
	this.addNode = function(name) {
		this.nodes.push({"name":name});
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
				.attr("class" , "link")
				.attr("stroke" , "red")
				.attr("stroke-width" , "3");
		
		
		Node.enter()
			.append("g")
			.attr("class" , "node")
			.call (this.force.drag)
			.append("image")
			.attr("xlink:href",  function(d) { return "ImageOfHeroes/125px-" + d.name + "_Large.png";})
			.attr("x" , "-8px")
			.attr("y" , "-8px")
			.attr("width" , this.width / 5)
			.attr("height" , this.height / 5);
		
		this.force.on("tick", function() {
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





