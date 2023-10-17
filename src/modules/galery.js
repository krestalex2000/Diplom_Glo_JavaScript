const galery = () => {
  const imageLinks = document.querySelectorAll('.sertificate-document');

  console.log(imageLinks);
  imageLinks.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('visible')
    });
    item.addEventListener('mouseout', () => {
      item.classList.remove('visible')
    });
  });
}

export default galery;
