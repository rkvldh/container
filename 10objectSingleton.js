// time 04:10 minut

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLogedIn = false;

// // console.log(tinderUser);

// const regulerUser = {
//   email: "google@gmail.com",
//   fullName:{
//     userFullName :{
//       firstName: 'ramesh',
//       lastName: 'kumar'

//     }
//   }
// };

// console.log(regulerUser.fullName.userFullName.firstName);
// time 04:10 minut

// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'a', 4: 'b'} 
// const obj4 = {5: 'a', 6: 'b'} 
// console.log(...obj1, ...obj2);

// console.log(obj1,obg2); // refrance error
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2) //empty array is target array
// const obj3 = {...obj1,...obj2,...obj4}

// console.log(obj3);

// Array of object
// const users = [
//   {
//     id: 1,
//     email: 'r@gmail.com'
//   },
//   {
//     id: 2,
//     email: 'r@gmail.com'
//   },
//   {
//     id: 3,
//     email: 'r@gmail.com'
//   }
// ]

// users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnPorperty('id')); // error  

// 04:13 minut vedio start

// ************destructing***********

// const course = {
//   coursename: 'js in hindi',
//   price: '999',
//   courseteacher: 'hitesh'
// }

// course.courseteacher
// const {courseteacher} = course;
// const {courseteacher: teacher} = course;
// console.log(courseteacher);
// console.log(teacher);

// ***************API CONSEPT*****************

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});