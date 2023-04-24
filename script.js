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

let KEYBOARD = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];

function open() {
	let out = '';
	for (let i = 0; i < KEYBOARD.length; i++) {
		out += '<div class="key" >' + String.fromCharCode(KEYBOARD[i]) + '</div>';
	}
	document.querySelector('#keyboard').innerHTML = open;
}

open();















//wrapper.innerText = 'Namrrre';