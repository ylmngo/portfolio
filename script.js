$(".option").click(function(){
   $(".option").removeClass("active");
   $(this).addClass("active");
   
});
var socialMediaImages = document.querySelectorAll('.social-media img');

socialMediaImages.forEach(function(img) {
  img.addEventListener('touchstart', function() {
    img.classList.add('active');
  });

  img.addEventListener('touchend', function() {
    img.classList.remove('active');
  });
});
const sliderContainer = document.querySelector('.slidercontainer');
const galleryControlsContainer = document.querySelector('.controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.g');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach((el) => {
      el.classList.remove('g1');
      el.classList.remove('g2');
      el.classList.remove('g3');
      el.classList.remove('g4');
      el.classList.remove('g5');
    });
    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`g${i + 1}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className === 'controls-previous') {
      this.carouselArray.push(this.carouselArray.shift());
    } else {
      this.carouselArray.unshift(this.carouselArray.pop());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach((control) => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `controls-${control}`;
      document.querySelector(`.controls-${control}`).innerText = control;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener('click', (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(sliderContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
