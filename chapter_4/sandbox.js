// function declaration
function great(){
  console.log('hello there');
}

// function expression
const speak = function(){
  console.log('good day!');
};

// great();
// great();
// great();

// speak();
// speak();
// speak();

// // function declaration
// function greet(){
//   console.log('hello there');
// }

// // function expression
// const speak = function(){
//   console.log('good day!');
// };

// // arguments % parameters
// const speak = function(name){
//   console.log(`good day ${name}`);
// }

// speak('mario');

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area);

// arrow function
// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);
// console.log('area is:', area);

// methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callbacks & foreach

// const myFunc = (callbackFunc) => {
//   // do something
//   let value = 50;
//   callbackFunc(value);
// }

// myFunc(value =>{
//   // do something
//   console.log(value);
// })

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// get a reference to the 'ul'
const ul = document.querySelector('.people');
const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person =>{
  // create html template
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;

