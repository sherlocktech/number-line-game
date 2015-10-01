function screenA(p) {
    var canvas;
    
    p.setup = function() {
        canvas = p.createCanvas(400, 400);
    }

    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(32);
        p.text("SCREEN A", p.width/2, p.height/2);
    }
    
    p.mouseClicked = function() {
        canvas.remove();
        p.remove();
        new p5(screenB);
    }
}

var p5A = new p5(a);