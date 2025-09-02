const slide = document.getElementById('carouselSlide');
const totalImages = slide.children.length;

let index = 0;

function autoMoveCarousel() {
  index = (index + 1) % totalImages;
  slide.style.transform = `translateX(-${index * 100}%)`;
}

// Change slide every 3 seconds
setInterval(autoMoveCarousel, 3000);