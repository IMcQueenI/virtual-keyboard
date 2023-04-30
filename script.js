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

const keys2 = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
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
  const position = textarea.selectionStart;
  textarea.value = textarea.value.slice(0, position) + textarea.value.slice(position + 1);
  textarea.setSelectionRange(position, position);
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

// Arrows

function arrowKey(event) {
  switch (event.key) {
    case 'ArrowUp':
      textarea.value += '↑';
      break;
    case 'ArrowDown':
      textarea.value += '↓';
      break;
    case 'ArrowLeft':
      textarea.value += '←';
      break;
    case 'ArrowRight':
      textarea.value += '→';
      break;
    default:
      break;
  }
}

// добавляю срабатывание клавиш на клавиатуре
document.addEventListener('keydown', (event) => {
  // Предотвращение поведения по умолчанию для специальных клавиш
  if (
    event.key === 'Shift'
    || event.key === 'Control'
    || event.key === 'Alt'
    || event.key === 'Tab'
    || event.key === 'Enter'
    || event.key === 'Backspace'
  ) {
    event.preventDefault();
  }

  const index = keys.indexOf(event.key);
  if (index !== -1) {
    mqArr[index].click();
  }
  if (event.key.startsWith('Arrow')) {
    arrowKey(event); // Проверка по стрелкам
  }
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    setLowerCaseKeys();
  }
});

// Добавляю смену языка

let currentKeyboard = {
  type: 'latin',
  layout: keys,
};

// Проверяю, сохранен ли язык в localStorage, и обновляю объект currentKeyboard
const savedLanguage = localStorage.getItem('keyboardLanguage');
if (savedLanguage === 'cyrillic') {
  currentKeyboard.type = 'cyrillic';
  currentKeyboard.layout = keys2;
}

// Обновление клавиатуры
function updateKeyboard() {
  for (let i = 0; i < mqArr.length; i++) {
    if (currentKeyboard.layout[i]) {
      mqArr[i].innerHTML = currentKeyboard.layout[i];
    }
  }
}

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey) {
    if (currentKeyboard.type === 'latin') {
      currentKeyboard.type = 'cyrillic';
      currentKeyboard.layout = keys2;
    } else {
      currentKeyboard.type = 'latin';
      currentKeyboard.layout = keys;
    }
    updateKeyboard();
    localStorage.setItem('keyboardLanguage', currentKeyboard.type);
  }
});

updateKeyboard();

// Добавляю анимации нажатия

const animationkeys = document.querySelectorAll('.key');

document.addEventListener('keydown', (event) => {
  animationkeys.forEach((key) => {
    if (key.textContent === event.key) {
      // Добавляю анимацию, если клавиша нажата
      key.style.backgroundColor = 'rgb(245, 170, 66)';
      key.style.boxShadow = '0 1px 1px black';
    }
  });
});
document.addEventListener('keyup', (event) => {
  animationkeys.forEach((key) => {
    if (key.textContent === event.key) {
      // Удаляю анимацию, если клавиша отпущена
      key.style.backgroundColor = '';
      key.style.boxShadow = '0 3px 3px black';
    }
  });
});
