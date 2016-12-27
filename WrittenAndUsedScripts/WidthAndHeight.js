
function Resizer (){
	Width = $(window).width();
	Height = $(window).height();

	myWidth = 5464;
	myHeight = 2648;
	
	this.checkerW = function (w) {
		return w * Width / myWidth;
	}					
	this.checkerH = function (h) {
		return h * Height / myHeight;
	}			
	
	
}
