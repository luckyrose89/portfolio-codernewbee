const scrollTop = document.querySelector(".scroll-top");
const toggleButton = document.querySelector(".main-nav__toggle");
const mobileNav = document.querySelector(".mobile-nav");

// display mobile nav
toggleButton.addEventListener("click", function(event) {
  mobileNav.classList.toggle("active");
});

// take user to top of page on scroll-top click
scrollTop.addEventListener("click", function(event) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
