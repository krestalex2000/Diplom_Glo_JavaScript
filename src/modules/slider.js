const slider = ({sliderSelector, slidesSelector, arrowLeftSelector, arrowRightSelector, countSlideDesktop, countSlideMobile, timeInterval, auto}) => {
  
  const sliderBlock = document.querySelector(sliderSelector);
  const slides = sliderBlock.querySelectorAll(slidesSelector);
  let currentSlide = 0;
  let interval;
  
  const prevSlide = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${currentSlide * slide.clientWidth}px)`;
    })
  };

  const nextSlide = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${currentSlide * -slide.clientWidth}px)`;
    });
  };

  const autoSlide = () => {
    prevSlide();
    currentSlide++;

    if (
      (currentSlide >= slides.length - (countSlideDesktop - 1) && document.body.clientWidth >= 576) ||
      (document.body.clientWidth < 576 && currentSlide >= slides.length)
    ) {
      currentSlide = 0;
    }
    nextSlide();
  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  sliderBlock.addEventListener('click', e => {
    e.preventDefault();
    prevSlide();

    if (e.target.closest(arrowLeftSelector)) {
      currentSlide--;
    } else if (e.target.closest(arrowRightSelector)) {
      currentSlide++;
    }

    if ((currentSlide >= slides.length - (countSlideDesktop - 1) && document.body.clientWidth >= 576) || 
      (document.body.clientWidth < 576 && currentSlide >= slides.length)
     ) {
      currentSlide = 0;
    }

    if (currentSlide < 0 && document.body.clientWidth < 576) {
      currentSlide = slides.length - countSlideMobile;
    } else if (currentSlide < 0) {
      currentSlide = slides.length - countSlideDesktop;
    } nextSlide();
  }, true);

  if (auto) {
    startSlide(timeInterval);
  }
}

export default slider;
