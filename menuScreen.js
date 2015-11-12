function menueScreen(p){
    var canvas, img;
    var mouseX, mouseY;
    
    p.preload = function() {
        img = p.loadImage("animation/mainmenumockup.jpg");
        canvas = p.createCanvas(600, 600);
    }
    
    p.setup = function () {
        
        
        //new p5.Image(600,600, img)
    }
    
    p.draw = function() {
        p.image(img, 0, 0, 600, 600);
        p.fill(255);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(32);
    }
    p.mouseClicked = function () {
        if(p.mouseX>0 && p.mouseX < p.width/3){
            canvas.remove();
            p.remove();
            new p5(app);
        }else if(p.mouseX>p.width/3 && p.mouseX <(2* (p.width/3))){
            canvas.remove();
            p.remove();
            //new p5(help); help sceen in progress
        }
    }
    
}

var p = new p(a);

