$(document).ready(function () {
  const inputs = document.querySelector('form').querySelectorAll('.input_list input');

  function handleInput(e) {
    const input = e.target;
    if (input.value) {
      if (input.nextElementSibling) {
        input.nextElementSibling.focus();
      }
    }
  }

  function handleFocus(e) {
    if (e.target.value) {
      e.target.select();
    }
  }

  function handlePaste(e) {
    const paste = e.clipboardData.getData('text');
    inputs.forEach((input, i) => {
      input.value = paste[i] || '';
    })
  }

  function handleKeyDown({ key, target }) {
    if (key !== 'Backspace') {
      return;
    } else if (target.previousElementSibling) {
      target.value = '';
      target.previousElementSibling.focus();
    }
  }

  inputs[0].addEventListener('paste', handlePaste)

  document.querySelector('form').addEventListener('input', handleInput);
  document.querySelector('form').addEventListener('focusin', handleFocus);
  document.querySelector('form').addEventListener('keydown', handleKeyDown);
});