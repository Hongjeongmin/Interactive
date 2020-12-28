var a = 100;
const a = document.querySelector('.className');
const Group = document.querySelectorAll('.className');
Group[2];

a.setAttribute('data-id',123);
a.getAttribute('data-id');

const pElem = document.createElement('p');

pElem.innerHTML = '<a href="#">¾È³ç </a>';

a.appendChild(pElem);