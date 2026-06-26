// Save Our Wildlife - video toggle logic

document.addEventListener('DOMContentLoaded', function () {
  var video = document.getElementById('wildlifeVideo');
  var toggleBtn = document.getElementById('toggleBtn');

  toggleBtn.addEventListener('click', function () {
    // If the video is currently playing, pause it and hide it.
    // If it is not playing (paused or hidden), show it and play it.
    if (!video.paused) {
      video.pause();
      video.style.display = 'none';
      toggleBtn.textContent = 'Play Video';
      toggleBtn.setAttribute('aria-pressed', 'true');
    } else {
      video.style.display = 'block';
      video.play();
      toggleBtn.textContent = 'Pause & Hide Video';
      toggleBtn.setAttribute('aria-pressed', 'false');
    }
  });
});
