const display = document.getElementById('display');
function append(val) {
  if (display.innerText === '0') display.innerText = '';
  display.innerText += val;
}
function calculate() {
  try {
    let result = eval(display.innerText.replace('%', '/100'));
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}
function clearAll() {
  display.innerText = '0';
}

function removeLast() {
  let text = display.innerText;
  if (text.length > 1) {
    display.innerText = text.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}