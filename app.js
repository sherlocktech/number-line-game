function app(p5) {
    var numberLine;
    var rope; //our rope is a line
    var spark; //our spark is a point
		var backgroundImg; //background image
		p5.preload = function(){
			backgroundImg = p5.loadImage("animation/GamePlayAndMenuBackground.png");
		}
    var spark_dx; //change in spark location per frame
    var cenNum = 0; // Number at center of number line
    
    //problem variables
    var problemText, answer;
    
	//p5.setup runs once before p5.draw is run
	p5.setup  = function () {
		p5.createCanvas(600, 600);
		numberLine = new NumberLine(0, p5.height/2, p5.width, 40, cenNum, p5);
		//problemGenerator(cenNum, numberLine.getIntervalBound, p5);
		rope = new Line(0, 300, numberLine.length(), 300, p5);
		spark = new Point(0, 300, p5);
		spark_dx = 1;
        
        var testProblem = getRandomProblem();
        problemText = testProblem.getProblem();
        answer = testProblem.getAnswer();
        
	};

    //p5.draw runs every frame by default
	p5.draw = function () {
		p5.image(backgroundImg, 0, 0);
        
        p5.fill(0);
        p5.textSize(32);
        p5.textAlign(p5.CENTER, p5.TOP);
        p5.text(problemText, p5.width/2, p5.height/3);
        p5.textSize(12);
        
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
            rope.setX2(rope.getX2() - spark_dx);
            rope.translate(spark_dx, 0);
            spark.translate(spark_dx, 0);
        }
	};
	p5.keyPressed = function () {
        	if (p5.keyCode === p5.UP_ARROW) {
                p5.setup();
    
        	}
    };
}
