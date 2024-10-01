let navBar = document.querySelector('nav');

window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		navBar.classList.add('high-nav');
	} else {
		navBar.classList.remove('high-nav');
	}
});

let navBtn = document.getElementById('hamburger_btn');
const navModal = document.querySelector('.nav_modal');
let exitBtn = document.querySelector('.exit_btn');

navBtn.addEventListener('click', function () {
	navModal.classList.toggle('nav_modal--visible');
	navBar.style.height = '500px';
	navBtn.style.visibility = 'hidden';
	exitBtn.style.visibility = 'visible';
});

exitBtn.addEventListener('click', function () {
	navModal.classList.toggle('nav_modal--visible');
	navBar.style.height = '';
	navBtn.style.visibility = 'visible';
	exitBtn.style.visibility = 'hidden';
});
