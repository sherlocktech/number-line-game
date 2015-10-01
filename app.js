var init = function (p5) {
    var numberLine;
    var rope; //our rope is a line
    var spark; //our spark is a point
    var spark_dx; //change in spark location per frame
    
    var screen; //keeps track of which screen to display
    
	//p5.setup runs once before p5.draw is run
	p5.setup  = function () {
		p5.createCanvas(600, 600);
        p5.stroke(0);
        p5.strokeWeight(1);
        p5.fill(155);
        screen = 0; //sets screen to startScreen
        numberLine = new NumberLine(0, p5.height/2, p5.width, 40, 0, p5);
        rope = new Line(0, 300, numberLine.length(), 300, p5);
        spark = new Point(0, 300, p5);
        spark_dx = 1;
        
	};

    //p5.draw runs every frame by default
	p5.draw = function () {
		if (screen === 0) {
            startScreen();
        }
        if (screen === 1) {
            gameScreen();
        } else {
            
        }
	};
    
    //displays startScreen, could pass variables to gameScreen() for levels, help page, ect.
    function startScreen() {
        p5.background(255);
        var playButton = p5.rect(175, 150, 125, 80);
        var helpButton = p5.rect(175, 250, 125, 80);
        
        p5.fill(0);
        p5.textSize(32);
        p5.text(" Start Game", 190, 140, 125,80);
        p5.text("Help", 200, 260, 125, 80);
        
        
        p5.mouseReleased = function () {
            if (175 < p5.mouseX && 300 > p5.mouseX  && 150 < p5.mouseY && 280 > p5.mouseY){
                p5.background(0);
                screen = 1;//screen to gameScreen();
            } if (175 < p5.mouseX && 300 > p5.mouseX  && 250 < p5.mouseY && 380 > p5.mouseY){
                p5.background(0);
                screen = 2;//screen to gameScreen();
            }else{
            }
        }
    };
    
    function gameScreen() {
        p5.background(255);
        //draw number line:
        numberLine.draw();
        
        //draw rope and spark:
        if (rope.length() > 0) {
            p5.strokeWeight(2);
            p5.stroke(255, 160, 0);
            rope.draw();
            p5.println(rope.length());

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
        
        //in gameScreen() so no interference with startScreen().
        p5.keyPressed = function () {
            if (p5.keyCode === p5.UP_ARROW) {
    		  screen = 0;
              
            }
        };
    }

};

var myp5 = new p5 (init);
