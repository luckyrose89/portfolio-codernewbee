const toggleButton = document.querySelector(".main-nav__toggle");
const mobileNav = document.querySelector(".mobile-nav");
const headerTagline = document.querySelector(".showcase-header__tagline");
const features = ["fullstack developer", "blogger", "coding enthusiast"];

// convert showcase filter buttons and columns to iterable array
const showcaseMenuBtn = Array.prototype.slice.call(
  document.querySelectorAll(".showcase-filter__item")
);

const showcaseColumn = Array.prototype.slice.call(
  document.querySelectorAll(".showcase-column")
);

// change feature in header tagline
var index = 0;

function showFeature() {
  headerTagline.innerHTML = features[index];
  if (index < features.length - 1) {
    index++;
  } else {
    index = 0;
  }
}
// display mobile nav
toggleButton.addEventListener("click", function(event) {
  mobileNav.classList.toggle("active");
});

function filterSelection(name) {
  if (name === "all") {
    showcaseColumn.forEach(function(column) {
      column.classList.add("showcase-show");
    });
  } else {
    for (var i = 0; i < showcaseColumn.length; i++) {
      if (showcaseColumn[i].classList.contains(name)) {
        showcaseColumn[i].classList.add("showcase-show");
      } else {
        showcaseColumn[i].classList.remove("showcase-show");
      }
    }
  }
}

// Highlight menu buttons on click
for (var i = 0; i < showcaseMenuBtn.length; i++) {
  showcaseMenuBtn[i].addEventListener("click", function(event) {
    showcaseMenuBtn.forEach(function(button) {
      button.classList.remove("active-link");
    });
    event.target.classList.add("active-link");
    filterSelection(event.target.getAttribute("data-project-type"));
  });
}

// show all items by default
filterSelection("all");

// display header tagline
showFeature();
setInterval(showFeature, 3000);
