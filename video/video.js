'use strict'
/**
 * file: video.js
 * purpose: display and control video via Js
 **/
let MyVideo = function () {
    this.vid.src = 'video/no1-tired.mp4';
    this.vid.style.width = '100%'; // ye olde mobile first trick
    this.vid.style.maxWidth = '1800px'; // limit the trick above
    this.vid.style.height = 'auto';
    // vid.play(); // ... or better: don't do this!
    this.vid.controls = true;
}

// af DOM load run the myVideo function
window.addEventListener('load', MyVideo);


AOS.init({
    duration: 1200,
})
