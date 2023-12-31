import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import sendForm from './modules/sendForm';
import calc from './modules/calc';
import galery from './modules/galery';
import scroll from './modules/scroll';

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
modal({
  modalOpen: '.document-overlay',
  modalSelector: '.galery-modal',
  modalClose: 'galery-close',
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
sendForm({
  formId: 'form-1',
  someElement: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ]
});
sendForm({
  formId: 'form-2',
  someElement: [
    {
      type: 'input',
      id: 'calc-total'
    }
  ]
});
sendForm({
  formId: 'form-3',
  someElement: [
    {
      type: 'input',
      id: 'calc-total',
    },
  ],
  modal: '.header-modal'
});
calc();
galery();
scroll();
