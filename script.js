//  Stats index.html
const counters = document.querySelectorAll('.counter');
// speed represents the number with which the data target will be divided
// the smaller the number the faster the counter
const speed = 200;

counters.forEach((counter) => {
	const updateCount = () => {
		// get all data-target attribut and convert from string to number using unary operator (+)
		const target = +counter.getAttribute('data-target');
		// get text content (0) of a node and convert from string to number using unary operator (+)
		const count = +counter.innerText;

		const inc = target / speed;

		if (count < target) {
			// if has not reached the target
			counter.innerText = Math.ceil(count + inc);
			// The setTimeout() method calls a function after a number of milliseconds.
			setTimeout(updateCount, 45);
		} else {
			// if reaches the target
			count.innerText = target;
		}
	};
	updateCount();
});
//End Stats -index.html

// Acordions - domain.html
document.querySelectorAll('.btn-inline').forEach((button) => {
	button.addEventListener('click', () => {

		// toggle(between two modes) active state on the button
		// if it does not exist add active state
		// if it exist remove active state
		button.classList.toggle('active');

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
// call nextSlide() function when the click event occurs
next.addEventListener('click', (e) => {
	nextSlide();
});
// call prevSlide() function when the click event occurs
prev.addEventListener('click', (e) => {
	prevSlide();
});
//End Slider - hosting.html
