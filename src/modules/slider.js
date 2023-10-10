const slider = () => {
  const sliderBlock = document.getElementById('benefits');
  const slides = document.querySelectorAll('.benefits__item');
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  const prevSlide = () => {
    slides.forEach(slide => {
      slide.style.transform = `translateX(${currentSlide * 190}px)`;
    })
  };

  const nextSlide = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${currentSlide * -190}px)`;
    });
  };

  const autoSlide = () => {
    prevSlide();
    currentSlide++;

    if (
      (currentSlide >= slides.length - 2 && document.body.clientWidth >= 576) ||
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

    if (e.target.closest('.benefits__arrow--left')) {
      currentSlide--;
    } else if (e.target.closest('.benefits__arrow--right')) {
      currentSlide++;
    }

    if ((currentSlide >= slides.length - 2 && document.body.clientWidth >= 576) || 
      (document.body.clientWidth < 576 && currentSlide >= slides.length)
     ) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 3;
    }

    nextSlide();
  }, true);

  startSlide(timeInterval)


}

export default slider;
