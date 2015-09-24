//This function was also suppose to create an animation for the background.
//I drew two seperate pictures of a flame burning.
//I do not believe that my code is correct for this one either.
//I created an Animation folder that has the two pictures that will be used for the background animation


var fireAvatar;

function construct(constructor, args) {
    'use strict';
    function F() {
        return constructor.apply(this, args);
    }
    F.prototype = constructor.prototype;
    return new F();
}

p5.prototype.loadAnimation = function () {
    'use strict';
    return construct(Animation, arguments);
};

function preload() {
    'use strict';
//create an animation from a sequence of numbered images
//pass the first and the last file name and it will try to find the ones in between
    fireAvatar = loadAnimation("animation/flame1.png", "animation/flame2.png");
}

function setup() {
    'use strict';
    createCanvas(800, 300);
}

function draw() {
    'use strict';
    background(255, 255, 255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
    animation(fireAvatar, 300, 150);
}

