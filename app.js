var init = function (p5) {
	//write code here
	p5.setup  = function () {
		//this code is run initially
		p5.createCanvas(600, 600);

	};

	p5.draw = function () {
		//this code is run every frame by default
		p5.background(0);
	};
};

var myp5 = new p5 (init);
