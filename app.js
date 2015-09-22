var init = function (p5) {
	//write code here
	p5.setup  = function () {
		//this code is run initially
		p5.createCanvas(600, 600);

	};

	p5.draw = function () {
		//this code is run every frame by default
		p5.background(255);
        
        //draw line
        p5.stroke(0);
        p5.strokeWeight(1);
        p5.line(200, 300, 400, 300);
        //draw arrow heads
        arrowHead(200, 300, 20, 0);
        arrowHead(400, 300, 20, p5.PI);
	};
    
    //draws an arrow head at the specified (x,y) coordinate
    function arrowHead(x, y, size, angle) {
        p5.line(x, y, x + p5.cos(angle + -0.25 * p5.PI)*size, y + p5.sin(angle + -0.25 * p5.PI)*size);
        p5.line(x, y, x + p5.cos(angle + 0.25 * p5.PI)*size, y + p5.sin(angle + 0.25 * p5.PI)*size);
    }
};

var myp5 = new p5 (init);
