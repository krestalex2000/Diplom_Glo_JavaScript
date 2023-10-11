import callRequest from './modules/callRequest';
import slider from './modules/slider';

callRequest();
slider({
  sliderSelector: '#benefits',
  slidesSelector: '.benefits__item',
  arrowRightSelector: '.benefits__arrow--right',
  arrowLeftSelector: '.benefits__arrow--left',
  countSlideDesktop: 3,
  countSlideMobile: 1,
  auto: true,
  timeInterval: 2000,
});
slider({
  sliderSelector: '#services .row',
  slidesSelector: '.service__item',
  arrowRightSelector: '.services__arrow--right',
  arrowLeftSelector: '.services__arrow--left',
  countSlideDesktop: 2,
  countSlideMobile: 1,
  auto: false,
  timeInterval: 2000,
});

// sliderBlock, slides, step, countSlideDesktop, countSlideMobile, timeInterval;
