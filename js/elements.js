'use strict';

const box = document.getElementById('box');
console.log(box);


const buttons = document.getElementsByTagName('button');
console.log(buttons[0]);


const circles = document.getElementsByClassName('circle');
console.log(circles);


const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

const wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = 'green';

buttons[1].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px;';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Hello World');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// wrapper.prepend(div);
// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]);
// document.body.insertBefore(div, circles[1]);
// hearts[2].before(div);
// hearts[0].after(div);

// wrapper.replaceChild(circles[0], hearts[0]);
// circles[1].remove();

// circles[1].replaceWith(div);

div.innerHTML = '<h1>Hello World!</h1>';

// div.textContent = 'Hello !!!';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');