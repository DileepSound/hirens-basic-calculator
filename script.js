const expressionEl = document.getElementById('expression');
const resultEl = document.getElementById('result');
const keypad = document.querySelector('.keypad');

let expression = '';

function updateDisplay(resultText = 'Result') {
  expressionEl.textContent = expression || '0';
  resultEl.textContent = resultText;
}

function appendValue(value) {
  expression += value;
  updateDisplay(resultEl.textContent);
}

function backspace() {
  expression = expression.slice(0, -1);
  updateDisplay(resultEl.textContent);
}

function clearAll() {
  expression = '';
  updateDisplay('Result');
}

function calculate() {
  if (!expression) {
    updateDisplay('Result');
    return;
  }

  const sanitized = expression.replace(/\s+/g, '');
  const allowedPattern = /^[-+*/%.()0-9]+$/;

  if (!allowedPattern.test(sanitized)) {
    updateDisplay('Invalid input');
    return;
  }

  try {
    // Using Function instead of eval to safely evaluate the sanitized expression
    const computation = Function(`"use strict"; return (${sanitized});`)();
    const result = Number.isFinite(computation) ? computation : 'Error';
    updateDisplay(result);
  } catch (error) {
    updateDisplay('Error');
  }
}

keypad.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.classList.contains('keypad__button')) return;

  const value = target.dataset.value;
  const action = target.dataset.action;

  if (action === 'clear') {
    clearAll();
    return;
  }

  if (action === 'backspace') {
    backspace();
    return;
  }

  if (action === 'calculate') {
    calculate();
    return;
  }

  if (value) {
    appendValue(value);
  }
});

updateDisplay();
