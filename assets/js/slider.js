// 1. Your list of slides (You can change the image paths or add a 3rd slide anytime!)
const slides = [
  {
    image: '/assets/images/heroes/uno.jpg',
    heading: 'Photography for the Soul',
    subtitle: 'Special Occasion &amp; Creative<br>Photographer - Grand Rapids,<br>MI.',
    link: '/behind-alchemy.html'
  },
  {
    image: '/assets/images/heroes/dos.jpg',
    heading: 'Photography for the Soul',
    subtitle: 'Special Occasion &amp; Creative<br>Photographer - Grand Rapids,<br>MI.',
    link: '/portfolio.html'
  }
];

// 2. Keep track of which slide is currently showing (In coding, counting starts at 0)
let currentSlideIndex = 0;

// 3. Connect JavaScript to the HTML elements on your page using their IDs
const heroElement = document.getElementById('hero-slider');
const headingElement = document.getElementById('slide-heading');
const subtitleElement = document.getElementById('slide-subtitle');
const linkElement = document.getElementById('slide-link');
const counterElement = document.getElementById('slide-counter');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');

// 4. The function that updates the photo and text on the screen
function updateSlide() {
  const slide = slides[currentSlideIndex];

  // Change the background photo
  heroElement.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('${slide.image}')`;

  // Update the text and link (in case you want Slide 2 to say something different than Slide 1!)
  headingElement.textContent = slide.heading;
  subtitleElement.innerHTML = slide.subtitle;
  linkElement.href = slide.link;

  // Format numbers with a leading zero (e.g., "01  /  02")
  const currentNumber = String(currentSlideIndex + 1).padStart(2, '0');
  const totalNumber = String(slides.length).padStart(2, '0');
  counterElement.innerHTML = `${currentNumber} &nbsp; / &nbsp; ${totalNumber}`;
}

// 5. Listen for a click on the Right Arrow (→)
nextButton.addEventListener('click', function() {
  currentSlideIndex = currentSlideIndex + 1;
  // If we go past the last slide, loop back to the first slide (0)
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  updateSlide();
});

// 6. Listen for a click on the Left Arrow (←)
prevButton.addEventListener('click', function() {
  currentSlideIndex = currentSlideIndex - 1;
  // If we go before the first slide, loop around to the last slide
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  updateSlide();
});
