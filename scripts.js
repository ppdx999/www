const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function seekSlide(index) {
	currentIndex = (currentIndex + index + slides.length) % slides.length;
	showSlide(currentIndex);
}

function nextSlide() {
	seekSlide(1);
}

function prevSlide() {
	seekSlide(1);
}

document.querySelector('.next-slide')
	.addEventListener('click', nextSlide);

document.querySelector('.prev-slide')
	.addEventListener('click', prevSlide);

document.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowLeft':
			prevSlide();
			break;
		case 'ArrowRight':
			nextSlide();
			break;
	}
});

// Initialize the first slide
showSlide(currentIndex);