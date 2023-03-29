let result = document.getElementById('result');

function append(value) {
	result.value += value;
}

function clearResult() {
	result.value = '';
}

function backspace() {
	result.value = result.value.slice(0, -1);
}

function evaluate() {
	result.value = eval(result.value);
}