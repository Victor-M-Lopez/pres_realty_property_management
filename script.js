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
let modalLinks = document.querySelectorAll('.nav_modal--link');

navBtn.addEventListener('click', function () {
	navModal.classList.add('nav_modal--visible');
	navBar.style.height = '500px';
	navBtn.style.visibility = 'hidden';
	exitBtn.style.visibility = 'visible';
});

exitBtn.addEventListener('click', function () {
	navModal.classList.remove('nav_modal--visible');
	navBar.style.height = '62px';
	navBtn.style.visibility = 'visible';
	exitBtn.style.visibility = 'hidden';
});

for (let i = 0; i < modalLinks.length; i++) {
	modalLinks[i].addEventListener('click', function () {
		navModal.classList.remove('nav_modal--visible');
		navBar.style.height = '62px';
		navBtn.style.visibility = 'visible';
		exitBtn.style.visibility = 'hidden';
	});
}
