//  Stats index.html
const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach((counter) => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;

		if (count < target) {
			counter.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 45);
		} else {
			count.innerText = target;
		}
	};
	updateCount();
});
//End Stats -index.html

// Acordions - domain.html
document.querySelectorAll('.btn-inline').forEach((button) => {
	button.addEventListener('click', () => {
		const accordionContent = button.nextElementSibling;

		button.classList.toggle('active');

		if (button.classList.contains('active')) {
			accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
		} else {
			accordionContent.style.maxHeight = 0;
		}
	});
});
// End Accordions - domain.html

// Slider - hosting.html
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for next slide
	if (current.nextElementSibling) {
		// Add current to next sibling
		current.nextElementSibling.classList.add('current');
	} else {
		// Add currnet to start
		slides[0].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
	// Get current class
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// Check for prev slide
	if (current.previousElementSibling) {
		// Add current to prev sibling
		current.previousElementSibling.classList.add('current');
	} else {
		// Add currnet to last
		slides[slides.length - 1].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', (e) => {
	nextSlide();
});
prev.addEventListener('click', (e) => {
	prevSlide();
});
//End Slider - hosting.html
