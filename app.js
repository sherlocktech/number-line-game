var init = function (p5) {
    var numberLine;
    var rope; //our rope is the humble rectangle for now
    var spark; //our spark is another rectangle
    var spark_dx; //change in spark location per frame
    
	//p5.setup runs once before p5.draw is run
	p5.setup  = function () {
		p5.createCanvas(600, 600);
        numberLine = new NumberLine(0, p5.height/2, p5.width, 40, 0, p5);
        rope = new Rect(0, 275, 400, 50, p5.CORNER, p5);
        spark = new Rect(0, 275, 20, 50, p5.CORNER, p5);
        spark_dx = 1;
	};

    //p5.draw runs every frame by default
	p5.draw = function () {
		p5.background(255);
        //draw number line:
        numberLine.draw();
        
        //draw rope and spark:
        if (rope.getWidth() > 0) {
            p5.stroke(0);
            p5.fill(255, 160, 0);
            rope.draw();

            p5.fill(100, 0, 0);
            spark.draw();
        }
        
        //animate rope and spark:
        if (rope.getWidth() > 0) {
            rope.setWidth(rope.getWidth() - spark_dx);
            rope.translate(spark_dx/2, 0);
            spark.translate(spark_dx, 0);
        }
	};
};

var myp5 = new p5 (init);