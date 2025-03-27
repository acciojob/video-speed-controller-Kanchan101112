const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const video = document.querySelector('video'); // video tag
const toggle = document.querySelector('.toggle'); // play/pause button
const volume = document.querySelector('input[name="volume"]'); // volume slider
const speed = document.querySelector('input[name="playbackRate"]'); // speed slider
const skipButtons = document.querySelectorAll('[data-skip]'); // skip buttons
const progress = document.querySelector('.progress'); // progress bar background
const progressFilled = document.querySelector('.progress__filled'); // red bar

function togglePlay(){
if(video.paused){
	video.play();
    toggle.textContent = '❚❚'; // Change icon to pause
  } else {
    video.pause();
    toggle.textContent = '►'; // Change icon to play
  }
}

volume.addEventListener('input', ()=>{
	video.volume = volume.value;
});
speed.addEventListener('input', ()=>{
	video.plackbackRate = speed.value;
});
skipButtons.forEach(button => {
  button.addEventListener('click', () => {
    video.currentTime += parseFloat(button.dataset.skip);
  });
});

video.addEventListener('timeupdate', () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
});

video.addEventListener('ended', () => {
  toggle.textContent = '►'; // Change back to play icon
});
progress.addEventListener('click', (e) => {
  const clickTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = clickTime;
});

toggle.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);