const headerTagline = document.querySelector(".showcase-header__feature");
const features = ["developer", "blogger", "code geek"];
const waitTime = headerTagline.getAttribute("data-wait");
const containerElem = document.querySelector(".showcase-gallery");
const list = Array.prototype.slice.call(
  document.querySelectorAll(".showcase-filter__item")
);

// Initialize mixitup and pass showcase gallery container to it
mixitup(containerElem, {
  animation: {
    animateResizeTargets: true
  }
});

// Create class for typewriter effect in header tagline
const TypeWriter = function(textElem, words, wait = 3000) {
  this.textElem = textElem;
  this.words = words;
  this.wait = parseInt(wait, 10);
  this.txt = "";
  this.wordIndex = 0;
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
  // Get current index of words array
  const current = this.wordIndex % this.words.length;

  // Get the first word in array
  const fullText = this.words[current];

  // Check if deleting char
  if (this.isDeleting) {
    this.txt = fullText.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullText.substring(0, this.txt.length + 1);
  }

  // Insert txt output into html
  this.textElem.innerHTML = `<span class="txt">${this.txt}</span>`;

  // Set Type output speed
  let typespeed = 300;

  if (this.isDeleting) {
    typespeed /= 2;
  }

  // check if current word is comletely typed
  if (!this.isDeleting && this.txt === fullText) {
    typespeed = this.wait;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.wordIndex++;

    // Pause before resuming typing
    typespeed = 300;
  }

  setTimeout(() => this.type(), typespeed);
};

// Initialize Typewriter instance
new TypeWriter(headerTagline, features, waitTime);
