export function MainLoop() {
    const mainLoop = new Audio('assets/sounds/main-loop.mp3');
    function handleAudioEnded() {
        mainLoop.currentTime = 0; 
        mainLoop.play(); 
    }
    mainLoop.addEventListener('ended', handleAudioEnded);
    mainLoop.play();
}

