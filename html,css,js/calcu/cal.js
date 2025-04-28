
function appendValue(value) {
  const display = document.getElementById('result');
  display.value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculate() {
  const input = document.getElementById('result').value;
  const valid = /^[0-9+\-*/.() ]+$/.test(input);

  if (valid && input) {
    const result = eval(input);
    document.getElementById('result').value = result;
  } else {
    document.getElementById('result').value = 'Error';
  }
}
