document.getElementById('convertButton').addEventListener('click', () => {
    const lengthInput = parseFloat(document.getElementById('lengthInput').value);
    const unitSelect = document.getElementById('unitSelect');
    const selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;

    let convertedLength;
    switch (selectedUnit) {
        case 'cm':
            convertedLength = lengthInput * 100;
            break;
        case 'km':
            convertedLength = lengthInput / 1000;
            break;
        case 'mm':
            convertedLength = lengthInput * 1000;
            break;
        default:
            convertedLength = 'Invalid Unit';
    }

    const resultElement = document.getElementById('result');
    if (!isNaN(convertedLength)) {
        resultElement.textContent = `${lengthInput} meters is equal to ${convertedLength} ${selectedUnit}`;
    } else {
        resultElement.textContent = 'Invalid input or unit.';
    }
});
