// object literals

// const blogs = [
//   {title: 'why mac & cheese rules', likes: 30},
//   {title: '10 things to make', likes: 50}
// ];
// console.log(blogs);
// let user = {
//   name: 'crystal',
//   age: 30,
//   email: 'crystal@thenetninja.co.uk',
//   location: 'berlin',
//   blogs: [{title: 'why mac & cheese rules', likes: 30},
//  {title: '10 things to make', likes: 50}],
//   login: function(){
//   console.log('the user logged in');},
//   logout: function(){
//     console.log('the user logged out');
//   },
//   logBlogs: () =>{
//     this.blogs
//   }
// };

// console.log(this);

// Math object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random numbers

// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));

// primitive values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);

