const toggleButton = document.querySelector(".main-nav__toggle");
const mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", function(event) {
  mobileNav.classList.toggle("active");
});
