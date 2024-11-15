const slides = document.querySelectorAll(".slide");
const progressBar = document.querySelector(".progress-bar");

function getSlideFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('slide'), 10) || 0; // デフォルトは0番目のスライド
}

function updateSlideInURL(slideIndex) {
    const params = new URLSearchParams(window.location.search);
    params.set('slide', slideIndex);
    // URLを更新 (ページのリロードなし)
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
}

let currentIndex = getSlideFromURL();

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  updateProgressBar();

	updateSlideInURL(index);
}

function seekSlide(index) {
  currentIndex = (currentIndex + index + slides.length) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  seekSlide(1);
}

function prevSlide() {
  seekSlide(-1);
}

function updateProgressBar() {
  const progressWidth = ((currentIndex + 1) / slides.length) * 100;
  progressBar.style.width = `${progressWidth}%`;
}

document.querySelector(".next-slide").addEventListener("click", nextSlide);

document.querySelector(".prev-slide").addEventListener("click", prevSlide);

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
		case "ArrowUp":
		case "Backspace":
      prevSlide();
      break;
    case "ArrowRight":
		case "ArrowDown":
		case "Enter":
      nextSlide();
      break;
  }
});

// Initialize the first slide
showSlide(currentIndex);
