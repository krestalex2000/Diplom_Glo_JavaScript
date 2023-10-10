const callRequest = () => {
  const callBtn = document.getElementById('callback');
  const modal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');

  document.body.addEventListener('click', e => {
    if (e.target === callBtn) {
      e.preventDefault();

      modal.style.display = 'block';
      overlay.style.display = 'block';
    }

    if (e.target.classList.contains('header-modal__close')) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
    console.log(callBtn);
  });
};

export default callRequest;
