const modal = ({modalSelector, modalOpen, modalClose, list}) => {
  const modal = document.querySelector(modalSelector);
  const overlay = document.querySelector('.overlay');
  
  let btn;

  if (list) {
    btn = document.querySelectorAll(modalOpen);
  } else {
    btn = document.querySelector(modalOpen);
  }
 
  document.body.addEventListener('click', e => {
    if (btn.length > 1) {
      btn.forEach(element => {
        if (e.target === element) {
          e.preventDefault();

          modal.style.display = 'block';
          overlay.style.display = 'block';
        }
      });
    } else {
      if (e.target === btn) {
        e.preventDefault();
  
        modal.style.display = 'block';
        overlay.style.display = 'block';
      }
    }

    if (e.target.classList.contains(modalClose) || e.target === overlay) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
};

export default modal;
