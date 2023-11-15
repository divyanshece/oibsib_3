function convertTemperature() {
    var inputTemperature = document.getElementById('temperatureInput').value;
    var selectedUnit = document.getElementById('unitSelect').value;
    var resultArea = document.getElementById('resultArea');

    if (isNaN(inputTemperature)) {
        alert('Please enter a valid number for temperature.');
        return;
    }
    var convertedTemperature = (selectedUnit === 'celsius') ? convertToCelsius(inputTemperature) : convertToFahrenheit(inputTemperature);

    resultArea.textContent = `Converted Temperature: ${convertedTemperature} ${selectedUnit.toUpperCase()}`;
}

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
