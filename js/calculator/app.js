const inputs = document.querySelectorAll('input');
const result = document.querySelector('#result');
const calculateBtn = document.querySelector('#calculate');
const resetBtn = document.querySelector('#reset');

inputs.forEach(input => {
    calculateBtn.addEventListener('click', () => {
        console.log('clicked');
        const value1 = parseFloat(inputs[0].value);
        const value2 = parseFloat(inputs[1].value);
        const operator =document.querySelector('select').value;
        console.log(value1, value2, operator);
        let resultValue = 0;
    
        if (operator === 'add') {
        resultValue = value1 + value2;
        } else if (operator === 'subtract') {
        resultValue = value1 - value2;
        } else if (operator === 'multiply') {
        resultValue = value1 * value2;
        } else if (operator === 'divide') {
        resultValue = value1 / value2;
        }else{
            resultValue = "Invalid Operator";
        }
        
        result.textContent = "Result: " + resultValue;

    });
});


resetBtn.addEventListener('click', () => {
    inputs.forEach(input => {
        input.value = '';
    });
    result.textContent = 'Result:';
});