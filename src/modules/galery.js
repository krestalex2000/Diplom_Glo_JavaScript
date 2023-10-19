const galery = () => {
  const imageLinks = document.querySelectorAll('.sertificate-document');
  const overlay = document.querySelectorAll('.document-overlay');

  console.log(overlay);
  imageLinks.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
      overlay[index].classList.add('visible')
    });
    item.addEventListener('mouseout', () => {
      overlay[index].classList.remove('visible')
    });
  });
}

export default galery;
