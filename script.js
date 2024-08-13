window.addEventListener('scroll', function() {
  let navbar = document.getElementById('nav_bar');

    if (this.window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
    else {
      navbar.classList.remove('scrolled');
    }
});