function help(p) {
    var canvas, img;
    p.preload = function() {
        img = p.loadImage("animation/helpMenu.png");
        canvas = p.createCanvas(600, 600);
    };
    
    p.setup = function() {
        p.background(0);
        p.image(img, 0, 0, 600, 600);
    };
    
    p.draw = function() {
        p.image(img, 0, 0, 600, 600);
    };
    
    p.mouseClicked = function() {
        canvas.remove();
        p.remove();
        new p5(menuScreen);
    };
}