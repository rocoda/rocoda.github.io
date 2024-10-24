    const videoSets2 = {
        set4:[
            "src/Transport/video_0.mp4",
            "src/Transport/video_1.mp4",
            "src/Transport/video_2.mp4",
            "src/Transport/video_3.mp4",
            "src/Transport/video_4.mp4",
            "src/Transport/video_5.mp4",
            "src/Transport/video_6.mp4",
            "src/Transport/video_7.mp4",
            "src/Transport/video_8.mp4",
            "src/Transport/video_9.mp4",
        ]

    };

    let currentVideoIndex2 = 0;
    let currentVideoSet2 = videoSets2.set4;  // Default to set1
    
    function initVideoSet2(setName) {
        if (videoSets2[setName]) {
            currentVideoSet2 = videoSets2[setName];
            currentVideoIndex2 = 0; // Reset to the first video in the set
            updateVideo2();
        } else {
            console.error("Video set not found");
        }
    }
    
    // Function to change video by direction (-1 for previous, 1 for next)
    function changeVideo2(direction) {
        currentVideoIndex2 += direction;
        if (currentVideoIndex2 < 0) currentVideoIndex2 = currentVideoSet2.length - 1;
        if (currentVideoIndex2 >= currentVideoSet2.length) currentVideoIndex2 = 0;
        updateVideo2();
    }
    
    // Function to directly select a video by index
    function selectVideo2(index) {
        currentVideoIndex2 = index;
        updateVideo2();
    }
    
    // Function to update the iframe with the current video
    function updateVideo2() {
        const videoFrame = document.getElementById("video-frame-2");
        videoFrame.src = currentVideoSet2[currentVideoIndex2];
        updateCircles2();
    }
    
    // Function to update the active circle indicator
    function updateCircles2() {
        const circles = document.querySelectorAll("#circle-container-2 .circle");
        circles.forEach((circle, index) => {
            circle.classList.remove("active");
            if (index === currentVideoIndex2) {
                circle.classList.add("active");
            }
        });
        
    }
    document.addEventListener("DOMContentLoaded", function() {
        initVideoSet2('set4');  // Initialize default video set
    });