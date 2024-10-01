let navBar = document.querySelector('nav');

window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		navBar.classList.add('solid');
		navBar.classList.add('sticky-nav');
	} else {
		navBar.classList.remove('solid');
		navBar.classList.remove('sticky-nav');
	}
});
