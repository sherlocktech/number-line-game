//constructs a Rect (rectangle) with 4 positioning parameters (a, b, c, & d) which have different meanings depending on the rectMode variable given.
//The way this rectMode variable is used mirrors the p5 function named rectMode().
//see http://p5js.org/reference/#/p5/rectMode for more information about the rectMode() function.
function Rect(a, b, c, d, rectMode, p5) {
    var cenx, ceny, width, height;
    
    (function constructor(a, b, c, d, rectMode) {
        if (rectMode == p5.CORNER) {
            width = c;
            height = d;
            cenx = a + width/2.0;
            ceny = b + height/2.0;
        }
        else if (rectMode == p5.CORNERS) {
            width = c - a;
            height = d - b;
            cenx = a + width/2.0;
            ceny = b + height/2.0;
        }
        else if (rectMode == p5.CENTER) {
            cenx = a;
            ceny = b;
            width = c;
            height = d;
        }
        
        else if (rectMode == p5.RADIUS) {
            cenx = a;
            ceny = b;
            width = c/2.0;
            height = d/2.0;
        }
    }(a, b, c, d, rectMode));
    
    
    
    //draws rect
    this.draw = function() {
        p5.rectMode(p5.CENTER);
        p5.rect(cenx, ceny, width, height);
    }
    
    //move the rect dx pixels in the x direction and dy pixels in the y direction
    this.translate = function(dx, dy) {
        cenx += dx;
        ceny += dy;
    }
    
    /*getters and setters*/
    
    this.getCenx = function() {
        return cenx;
    }
    this.setCenx = function(_cenx) {
        cenx = _cenx;
    }
    this.getCeny = function() {
        return ceny;
    }
    this.setCeny = function(_ceny) {
        ceny = _ceny;
    }
    this.getWidth = function() {
        return width;
    }
    this.setWidth = function(_width) {
        width = _width;
    }
    this.getHeight = function() {
        return height;
    }
    this.setHeight = function(_height) {
        height = _height;
    }
}