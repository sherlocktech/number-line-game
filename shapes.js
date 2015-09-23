//constructs a Line from (x1, y1) to (x2, y2)
function Line(x1, y1, x2, y2, p5) {
    this.draw = function() {
        p5.line(x1, y1, x2, y2);
    }
    
    this.translate = function(dx, dy) {
        x1 += dx;
        x2 += dx;
        y1 += dy;
        y2 += dy;
    }
    
    this.length = function() {
        return p5.dist(x1, y1, x2, y2);
    }
    
    this.getX1 = function() {
        return x1;
    }
    this.setX1 = function(_x1) {
        x1 = _x1;
    }
    this.getY1 = function() {
        return y1;
    }
    this.setY1 = function(_y1) {
        y1 = _y1;
    }
    this.getX2 = function() {
        return x2;
    }
    this.setX2 = function(_x2) {
        x2 = _x2;
    }
    this.getY2 = function() {
        return y2;
    }
    this.setY2 = function(_y2) {
        y2 = _y2;
    }
}

function Point(x, y, p5) {
    this.x = x;
    this.y = y;
    
    this.draw = function() {
        p5.point(this.x, this.y);
    }
    
    this.translate = function(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
}

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