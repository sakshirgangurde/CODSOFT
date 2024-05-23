function appendToDisplay(value) {
    var display = document.getElementById('res');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('res').value = '';
}

function backspace() {
    var display = document.getElementById('res');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        var display = document.getElementById('res');
        display.value = eval(display.value);
    } catch (error) {
        document.getElementById('res').value = 'Error';
    }
}
