//This function was suppose to be for the sound effect as the rope burned, but I could not seemt to get it right
//I created a folder that has the sound file, I will look into this some more so I can get it working, hopefully

function Sound() {

function preload() {
    "use strict";
    mySound = loadSound('Sound/Fire.mp3');
}

function setup() {
    "use strict";
    mySound.setVolume(0.1);
    mySound.play();
}
}
