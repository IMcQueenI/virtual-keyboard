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
  ]

  keys.forEach((e) => {
	const key = document.createElement('button');
	key.className = 'key';
	key.innerHTML = e;
	keyboard.appendChild(key);
  });