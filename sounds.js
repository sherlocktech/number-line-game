


function loadSound(path, callback, whileLoading) {
    'use strict';
    // if loading locally without a server
    if (window.location.origin.indexOf('file://') > -1 && window.cordova === 'undefined') {
        alert('This sketch may require a server to load external files. Please see http://bit.ly/1qcInwS');
    }
    var s = new p5.SoundFile(path, callback, whileLoading);
    return s;
}


