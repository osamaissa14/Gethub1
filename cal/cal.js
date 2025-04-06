function appendValue(value) {
  document.getElementById("res").value += value;
}

function calculate() {
  document.getElementById("res").value = eval(
    document.getElementById("res").value
  );
}
function clearResult() {
  document.getElementById("res").value = "";
}
