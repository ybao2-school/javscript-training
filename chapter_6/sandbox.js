// const para = document.querySelector('div.error');

// console.log(para);

// const paras = document.querySelectorAll('p');
// const errors = document.querySelectorAll('.error');
// console.log(errors);

// // get an element by ID
// const title = document.getElementById('page-title');
// console.log(title);
// // get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);
// errors.forEach(error => {
//   console.log(error);
// })
// get elements by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);

// const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'ninjas are awesome!';

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//   console.log(para.innerText);
//   para.innerText += ' new text';
// })

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);
// // content.innerHTML += '<h2>new H2</h2>';

// const people = ['mario', 'luigi', 'yoshi'];
// people.forEach(person => {
//   content.innerHTML +=  `<p>${person}</p>`
// })

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// link.innerText = 'TheNet ninja website';

// const mssg = document.querySelector('p');

// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('style', 'color: green; font-size: 20px;');
// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin: 50px;');
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';

// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

paras.forEach(p => {
  if(p.textContent.includes('error')){
    p.classList.add('error');
  }
  if(p.innerText.includes('success')){
    p.classList.add('success');
  }
})

const title = document.querySelector('.title');

title.classList.toggle('test');

title.classList.toggle('test');
