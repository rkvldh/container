// functions

// console.log("R");
// console.log("A");
// console.log("M");
// console.log("E");
// console.log("S");
// console.log("H");

// function sayName() {
//   console.log("R");
//   console.log("A");
//   console.log("M");
//   console.log("E");
//   console.log("S");
//   console.log("H");
// }

// sayName();
// sayName();

// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }

// function addTwoNumber(number1, number2) {
//   let result = number1 + number2;
//   return result;
// }

// function addTwoNumber(number1, number2) {
//   return number1 + number2;
// }

// addTwoNumber(2, 7);
// const result = addTwoNumber(2, 7);
// const total = addTwoNumber(2, "7");

// console.log("result", result);

// function loginUser(username = "sam") {
//   if (!username) {
//     // not equal to sign just ulta
//     console.log("plz enter user name");
//     return;
//   }
//   return `${username} just logged in `;
// }

// console.log(loginUser());

// const loggedin = loginUser("ramesh");
// console.log(loggedin);

// ************function width para meeter****************
// rest operetor ...num1
// function calculateCartPrice(...num1) {
//   return num1;
// }
// // return array
// console.log(calculateCartPrice(200, 400, 500));

// function calculateCartPrice(val1, val2, ...num1) {
//   return num1;
// }
// // return array               val1, val2, assion num1
// console.log(calculateCartPrice(200, 400, 500));

// function with object
// const user = {
//   username: "ramesh",
//   price: 199,
// };
// function handleObject(anyobject) {
//   console.log(`username is ${anyobject.username} price is ${anyobject.price}`);
// }

// // handleObject(user);
// handleObject({
//   username: "kumar",
//   price: 399,
// });

const myNewArray = [100, 200, 300, 400, 500];

function returnSecondValue(getArray) {
  return getArray[2];
}
console.log(returnSecondValue(myNewArray));
