import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';

modal({
  modalOpen: '#callback',
  modalSelector: '.header-modal',
  modalClose: 'header-modal__close',
  list: false
});
modal({
  modalOpen: '.service-modal-btn',
  modalSelector: '.services-modal',
  modalClose: 'services-modal__close',
  list: true,
});
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
timer({
  deadline: new Date().getTime() + 1.728e8,
  selector: '#order_1'
});
timer({
  deadline: new Date().getTime() + 1.728e8,
  selector: '#order_2'
});
