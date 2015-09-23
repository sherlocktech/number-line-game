//This function was also suppose to create an animation for the background.
//I drew two seperate pictures of a flame burning.
//I do not believe that my code is correct for this one either.
//I created an Animation folder that has the two pictures that will be used for the background animation
function Animation( ) {

var fireAvatar;

function preload() {

fireAvatar = loadAnimation("animation/flame1.png", "animation/flame2.png");

}

function draw() {

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(fireAvatar, 300, 150);
}
}
