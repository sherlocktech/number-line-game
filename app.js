var init = function (p5) {
    var numberLine;
    var rope; //our rope is a line
    var spark; //our spark is a point
    var spark_dx; //change in spark location per frame
    
	//p5.setup runs once before p5.draw is run
	p5.setup  = function () {
		p5.createCanvas(600, 600);
        numberLine = new NumberLine(0, p5.height/2, p5.width, 40, 0, p5);
        rope = new Line(0, 300, numberLine.length(), 300, p5);
        spark = new Point(0, 300, p5);
        spark_dx = 1;
	};

    //p5.draw runs every frame by default
	p5.draw = function () {
		p5.background(255);
        //draw number line:
        numberLine.draw();
        
        //draw rope and spark:
        if (rope.length() > 0) {
            p5.strokeWeight(2);
            p5.stroke(255, 160, 0);
            rope.draw();

            p5.strokeWeight(4);
            p5.stroke(100, 0, 0);
            spark.draw();
        }
        
        //animate rope and spark:
        if (rope.length() > 0) {
            rope.setX2(rope.getY2() - spark_dx);
            rope.translate(spark_dx, 0);
            spark.translate(spark_dx, 0);
        }
	};
};

var myp5 = new p5 (init);