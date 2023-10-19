const sendForm = ({formId, someElement = [], modal}) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется';

  console.log(form);
  const sendData = (data) =>
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

  const validate = list => {
    let success = true;
    const PATTERN_PHONE = /^\+\d{11,16}/;
    const PATTERN_NAME = /[а-яА-ЯЁёa-zA-Z]/;

    list.forEach((input) => {
      if (
        (input.name === 'phone' && !PATTERN_PHONE.test(input.value)) ||
        (input.name === 'fio' && !PATTERN_NAME.test(input.value)) ||
        (input.value === '')
      ) {
        success = false;
        input.classList.add('error');
      } else {
        success = true;
        input.classList.remove('error');
      }
    });

    return success;
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input[type="text"]');
    const formData = new FormData(form);
    const formBody = {};

    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElement.forEach((elem) => {
      const element = document.getElementById(elem.id);
      
      if (elem.type === 'block' && element) {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === 'input' && element) {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then(() => {
          statusBlock.textContent = successText;

          setInterval(() => {
            statusBlock.remove();
            if (modal) {
              document.querySelector(modal).style.display = 'none';
              document.querySelector('.overlay').style.display = 'none';
            }
          }, 3000);

          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch(() => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert('Данные не валидны');
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму на место');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
}

export default sendForm;
