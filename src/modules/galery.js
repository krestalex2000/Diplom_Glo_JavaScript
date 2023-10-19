const galery = () => {
  const imageLinks = document.querySelectorAll('.sertificate-document');
  const overlayDocument = document.querySelectorAll('.document-overlay');
  const image = document.querySelector('.galery-image');

  imageLinks.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      overlayDocument[index].classList.add('visible')
    });
    item.addEventListener('mouseout', () => {
      overlayDocument[index].classList.remove('visible')
    });
    item.addEventListener('click', (e) => {
      e.preventDefault();

      image.innerHTML = `<img src="${item.href}" alt="" style="width: 100%">`;
    });
  });

}

export default galery;
