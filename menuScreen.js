function menuScreen(p){
    var canvas;
    var mouseX, mouseY;
    
    p.setup = function () {
        canvas = p.createCanvas(400, 400);
    }
    
    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(32);
        p.text("PLAY BUTTON", p.width/2, p.height/4);
        p.text("HELP BUTTON", p.width/2, p.height/2);
    }/*
    p.draw = function() {
        p.background(0);
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(32);
        p.text("SCREEN A", p.width/2, p.height/2);
    }
    */
    p.mouseClicked = function (mouseY) {
            canvas.remove();
            p.remove();
            new p5(app);
    }
    
}

var p = new p(a);
