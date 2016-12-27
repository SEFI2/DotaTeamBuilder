
function TextMaker (word , x , y , fs , col , bl) {
	this.svg = d3.select("#mysvg");
	if ( typeof TextMaker.counter == 'undefined' ) {
        // It has not... perform the initialization
        TextMaker.counter = 0;
    }									
	TextMaker.counter ++;	
		
	this.txt = this.svg.append("g")										
		.append ("text")
		.attr ("id" , "TextMakerText" + TextMaker.counter)
		.attr ("font-size" , fs)
		.attr ("fill" , (col === undefined ? "white" : col))
		.attr ("y" , y)				
		.attr ("x" , x)
		.html(word);		  
	if (bl === undefined);
	else	
		$("#TextMakerText" + TextMaker.counter).css("font-weight" , "Bold");
		
	this.change = function(str) {
		this.txt.html (str);
	}
	this.get = function() {
		return this.txt.text();
	}
	
	
	//$("#warnBox").hide();
}