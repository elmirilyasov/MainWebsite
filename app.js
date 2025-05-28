function toggleMenu(button) {
    button.classList.toggle("active");
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}

window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

const navLinks = document.querySelectorAll('.slider-nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(btn => btn.classList.remove('active'));
      link.classList.add('active');
    });
  });
