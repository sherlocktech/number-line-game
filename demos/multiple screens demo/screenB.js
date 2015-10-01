function screenB(p) {
    p.setup = function() {
        p.createCanvas(400, 400);
    }

    p.draw = function() {
        p.background(100);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(32);
        p.text("SCREEN B", p.width/2, p.height/2);
    }
}
