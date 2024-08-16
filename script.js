// nav scroll event
window.addEventListener('scroll', function() {
  let navbar = document.getElementById('nav_bar');

    if (this.window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
    else {
      navbar.classList.remove('scrolled');
    }
});

let navExitBtn = document.getElementById('modal_exit-btn');
let navOpenBtn = document.getElementById('hamburger-btn');
let navModal = document.getElementById('nav_modal');
let modalNavLinks = document.querySelectorAll('.modal_link');


// opening mobile nav
navOpenBtn.addEventListener('click', function() {
  navModal.style.visibility = 'visible';
});

// removing mobile nav
navExitBtn.addEventListener('click', function() {
  navModal.style.visibility = 'hidden';
});


// allow mobile nav links to remove menu
for (let i = 0; i < modalNavLinks.length; i++) {
  modalNavLinks[i].addEventListener('click', function() {
    navModal.style.visibility = 'hidden';
    })
  }