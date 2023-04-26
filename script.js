const wrapper = document.createElement('div');
wrapper.setAttribute('class', 'wrapper');
const title = document.createElement('div');
title.setAttribute('class', 'title');
title.innerText = 'McQueen Virtual Keyboard';
const textarea = document.createElement('textarea');
textarea.setAttribute('class', 'keyboard__input');
textarea.setAttribute('placeholder', 'Type something!');
const keyboard = document.createElement('div');
keyboard.setAttribute('class', 'keyboard');
keyboard.setAttribute('id', 'keyboard');
const description = document.createElement('div');
description.setAttribute('class', 'description');
description.innerText = 'The keyboard was created in the Windows operating system.\nTo switch the language press: left Shift + alt.';
const body = document.querySelector('body');
body.appendChild(wrapper);
wrapper.appendChild(title);
wrapper.appendChild(textarea);
wrapper.appendChild(keyboard);
wrapper.appendChild(description);

const keys = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '/', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '◄', '▼', '►', 'Ctrl',
];

keys.forEach((e) => {
  const key = document.createElement('button');
  key.className = 'key';
  key.innerHTML = e;
  keyboard.appendChild(key);
});

const mqArr = document.getElementsByClassName('key');

// textarea

for (const key of mqArr) {
  if (key.innerHTML.length === 1) {
    key.addEventListener('click', () => (textarea.value += key.textContent));
  }
}

// Capslock

let isCapsOn = false;
const setLowerCaseKeys = () => {
  for (const key of mqArr) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toLowerCase();
    }
  }
};

const setUpperCaseKeys = () => {
  for (const key of mqArr) {
    if (key.innerHTML.length === 1) {
      key.innerHTML = key.innerHTML.toUpperCase();
    }
  }
};

mqArr[29].addEventListener('click', () => {
  isCapsOn = !isCapsOn;
  if (isCapsOn === true) {
    mqArr[29].style.backgroundColor = 'rgb(252, 3, 3)';
    setUpperCaseKeys();
  } else {
    mqArr[29].style.backgroundColor = '#1C232E';
    setLowerCaseKeys();
  }
});

// Backspace

mqArr[13].addEventListener('click', () => {
  if (textarea.value !== undefined) {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1);
  }
});

// Del

mqArr[28].addEventListener('click', () => {
  const pos = textarea.selectionStart;
  textarea.value = textarea.value.slice(0, pos) + textarea.value.slice(pos + 1);
  textarea.setSelectionRange(pos, pos);
});

// Tab

mqArr[14].addEventListener('click', () => {
  textarea.value += '   ';
});

// Enter

mqArr[41].addEventListener('click', () => {
  textarea.value += '\n';
});

// Space

mqArr[58].addEventListener('click', () => {
  textarea.value += ' ';
});

// Left Shift
mqArr[42].addEventListener('mousedown', () => {
  setUpperCaseKeys();
});
mqArr[42].addEventListener('mouseup', () => {
  setLowerCaseKeys();
});

// Right Shift
mqArr[54].addEventListener('mousedown', () => {
  setUpperCaseKeys();
});
mqArr[54].addEventListener('mouseup', () => {
  setLowerCaseKeys();
});
