// Getting elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip");
const ranges = player.querySelectorAll(".player__slider");

console.log(video);

// Building Functions

// Play - Pause video
let play = true;
function togglePlay() {
    if (play) {
        video.play();
        play = false;
    } else {
        video.pause();
        play = true;
    }
}

// Update play/pause btn
function updateBtn() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
} 

// Skip further or get back btns
function skip() {
    video.currentTime += Number(this.dataset.skip);
}

// Handle volume and playback speed
function handleRangeUpdate() {
    video[this.name] = this.value;
}

// Make progress bar dispaly current time in video
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}


// Event Listeners
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtn);
video.addEventListener("pause", updateBtn);
video.addEventListener("timeupdate", handleProgress);
skipButtons.forEach(btn => {
    btn.addEventListener("click", skip);
})
ranges.forEach(range => {
    range.addEventListener("change", handleRangeUpdate);
})
ranges.forEach(range => {
    range.addEventListener("input", handleRangeUpdate);
})
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
let mousedown = false;
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);