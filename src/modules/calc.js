const calc = () => {
  const calcBlock = document.getElementById('calc');
  const calcType = document.getElementById('calc-type');
  const calcTypeMaterial = document.getElementById('calc-type-material');
  const calcSquare = document.getElementById('calc-input');
  const total = document.getElementById('calc-total');

  const validateInput = (e) => {
    if (e.target.matches('#calc-input')) {
      e.target.value = e.target.value.replace(/\D/, '');
    }
  };

  const countCalc = () => {
    const calcTypeValue = calcType.options[calcType.selectedIndex].value;
    const calcMaterialValue = calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let totalValue = 0;

    if (calcType.value && calcTypeMaterial.value) {
      totalValue = calcSquareValue * calcTypeValue * calcMaterialValue;
    } else {
      totalValue = 0;
    }

    total.value = totalValue;
  };

  if (calcBlock) {
    calcBlock.addEventListener('input', (e) => {
      validateInput(e);
  
      if (
        e.target === calcType ||
        e.target === calcTypeMaterial ||
        e.target === calcSquare
      ) {
        countCalc();
      }
    });
  }
}

export default calc;
