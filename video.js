    const videoSets = {
        set1:[
            "src/StackThree/video_0.mp4",
            "src/StackThree/video_1.mp4",
            "src/StackThree/video_2.mp4",
            "src/StackThree/video_3.mp4",
            "src/StackThree/video_4.mp4",
            "src/StackThree/video_5.mp4",
            "src/StackThree/video_6.mp4",
            "src/StackThree/video_7.mp4",
            "src/StackThree/video_8.mp4",
            "src/StackThree/video_9.mp4",
        ],
        set2:[
            "src/Coffee/video_0.mp4",
            "src/Coffee/video_1.mp4",
            "src/Coffee/video_2.mp4",
            "src/Coffee/video_3.mp4",
            "src/Coffee/video_4.mp4",
            "src/Coffee/video_5.mp4",
            "src/Coffee/video_6.mp4",
            "src/Coffee/video_7.mp4",
            "src/Coffee/video_8.mp4",
            "src/Coffee/video_9.mp4",
        ],
        set3:[
            "src/Assembly/video_0.mp4",
            "src/Assembly/video_1.mp4",
            "src/Assembly/video_2.mp4",
            "src/Assembly/video_3.mp4",
            "src/Assembly/video_4.mp4",
            "src/Assembly/video_5.mp4",
            "src/Assembly/video_6.mp4",
            "src/Assembly/video_7.mp4",
            "src/Assembly/video_8.mp4",
            "src/Assembly/video_9.mp4",
        ]
    };

    let currentVideoIndex = 0;
    let currentVideoSet = videoSets.set1;  // Default to set1
    
    function initVideoSet(setName) {
        if (videoSets[setName]) {
            currentVideoSet = videoSets[setName];
            currentVideoIndex = 0; // Reset to the first video in the set
            updateVideo();
        } else {
            console.error("Video set not found");
        }
    }
    
    // Function to change video by direction (-1 for previous, 1 for next)
    function changeVideo(direction) {
        currentVideoIndex += direction;
        if (currentVideoIndex < 0) currentVideoIndex = currentVideoSet.length - 1;
        if (currentVideoIndex >= currentVideoSet.length) currentVideoIndex = 0;
        updateVideo();
    }
    
    // Function to directly select a video by index
    function selectVideo(index) {
        currentVideoIndex = index;
        updateVideo();
    }
    
    // Function to update the iframe with the current video
    function updateVideo() {
        const videoFrame = document.getElementById("video-frame");
        videoFrame.src = currentVideoSet[currentVideoIndex];
        updateCircles();
    }
    
    // Function to update the active circle indicator
    function updateCircles() {
        const circles = document.querySelectorAll(".circle");
        circles.forEach((circle, index) => {
            circle.classList.remove("active");
            if (index === currentVideoIndex) {
                circle.classList.add("active");
            }
        });
    }
    document.addEventListener("DOMContentLoaded", function() {
        initVideoSet('set1');  // Default set
    });