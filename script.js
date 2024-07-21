function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.querySelectorAll('.project-box').forEach(container => {
  const video = container.querySelector('.project-video');
  if (video) {
    container.addEventListener('mouseenter', () => {
      video.play();
    });
    container.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; // Reset video to start
    });
  }
});