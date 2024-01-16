'use strict'

let videos = document.querySelectorAll('.video-box video');

videos.forEach((video) => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });

    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});
