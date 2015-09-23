//construct a number line that goes from (x1, y) to (x2, y).
//The intervalLength defines the distance between consecutive numbers on the line.
//numberAtCenter defines the number drawn in the middle of the line
function NumberLine(x1, y, x2, intervalLength, numberAtCenter, p5) {
    //draws number line
    this.draw = function() {
        //draw line:
        p5.stroke(100);
        p5.strokeWeight(1);
        p5.line(x1, y, x2, y);
        this.arrowHead(0, 300, 20, 0);
        this.arrowHead(600, 300, 20, p5.PI);
        
        //draw number labels:
        var cenx = p5.lerp(x1, x2, 0.5);
        var distFromCen = intervalLength;
        
        p5.textAlign(p5.CENTER, p5.TOP);
        
        drawLabel(numberAtCenter, cenx, y);
        var i = 1;
        while (cenx + distFromCen + intervalLength < p5.width) {
            drawLabel(numberAtCenter - i, cenx - distFromCen, y);
            drawLabel(numberAtCenter + i, cenx + distFromCen, y);

            distFromCen += intervalLength;
            i++;
        }
    }
    
    function drawLabel(num, label_x, label_y) {
        p5.line(label_x, label_y-10, label_x, label_y+10);
        p5.text(num, label_x, label_y+12);
    }
    
    //draws an arrow head at the specified (x,y) coordinate in the direction of the given angle
    this.arrowHead = function(x, y, size, angle) {
        p5.line(x, y, x + p5.cos(angle + -0.25 * p5.PI)*size, y + p5.sin(angle + -0.25 * p5.PI)*size);
        p5.line(x, y, x + p5.cos(angle + 0.25 * p5.PI)*size, y + p5.sin(angle + 0.25 * p5.PI)*size);
    }
}