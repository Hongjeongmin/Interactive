var a = 100;
const a = document.querySelector('.className');
const Group = document.querySelectorAll('.className');
Group[2];

a.setAttribute('data-id',123);
a.getAttribute('data-id');

const pElem = document.createElement('p');

pElem.innerHTML = '<a href="#">안녕 </a>';

a.appendChild(pElem);

//추가
a.classList.add('special');
//대체
a.className = 'special';

a.classList.remove();
a.classList.toggle();