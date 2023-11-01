const scroll = () => {
  const scrollToTopBtn = document.querySelector('.smooth-scroll');
  const firstSection = document.getElementById('offer');

  scrollToTopBtn.style.display = 'none';

  window.addEventListener('scroll', () => {
    if (window.scrollY < firstSection.clientHeight + firstSection.offsetTop) {
      scrollToTopBtn.style.display = 'none';
    } else {
      scrollToTopBtn.style.display = 'inline';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}

export default scroll;